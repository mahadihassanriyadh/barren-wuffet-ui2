// @ts-nocheck
import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Trans, t } from "@lingui/macro";
import { Menu } from "@headlessui/react";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import { ethers } from "ethers";
import cx from "classnames";

import {
  FUNDING_RATE_PRECISION,
  BASIS_POINTS_DIVISOR,
  MARGIN_FEE_BASIS_POINTS,
  SWAP,
  LONG,
  SHORT,
  USD_DECIMALS,
  getExplorerUrl,
  helperToast,
  formatAmount,
  bigNumberify,
  getTokenInfo,
  getPositionKey,
  getPositionContractKey,
  getLeverage,
  useLocalStorageSerializeKey,
  useLocalStorageByChainId,
  getDeltaStr,
  useChainId,
  useAccountOrders,
  getPageTitle,
} from "../../lib/legacy";
import { getConstant } from "../../config/chains";
import {
  approvePlugin,
  useInfoTokens,
  useMinExecutionFee,
  cancelMultipleOrders,
} from "../../domain/legacy";

import { getContract } from "../../config/configAddresses";
import {
  getTokens,
  getToken,
  getWhitelistedTokens,
  getTokenBySymbol,
} from "../../config/Tokens";

import Reader from "../../abis/ReaderV2.json";
import VaultV2 from "../../abis/VaultV2.json";
import Router from "../../abis/Router.json";
import Token from "../../abis/Token.json";

import Checkbox from "../../components/Checkbox/Checkbox";
import SwapBox from "../../components/Exchange/SwapBox";
import FundBanner from "../../components/Fund/FundBanner";
import ActionSelector from "../../components/Fund/ActionSelector";
import PoolsList from "../../components/Fund/PoolsList";
import PositionsList from "../../components/Exchange/PositionsList";
import OrdersList from "../../components/Exchange/OrdersList";
import TradeHistory from "../../components/Exchange/TradeHistory";
import ExchangeWalletTokens from "../../components/Exchange/ExchangeWalletTokens";
import ExchangeBanner from "../../components/Exchange/ExchangeBanner";
import Tab from "../../components/Tab/Tab";
import Footer from "../../components/Footer/Footer";

import { getPositions, getPositionQuery } from "../../lib/data/positions";
import { getPools, getPoolQuery } from "../../lib/data/pools";
import { fetcher } from "../../lib/contracts/fetcher";
import { ActionTypes } from "../../config/actions";
const { AddressZero } = ethers.constants;

const notifications = {};

function pushSuccessNotification(chainId, message, e) {
  const { transactionHash } = e;
  const id = ethers.utils.id(message + transactionHash);
  if (notifications[id]) {
    return;
  }

  notifications[id] = true;

  const txUrl = getExplorerUrl(chainId) + "tx/" + transactionHash;
  helperToast.success(
    <div>
      {message}{" "}
      <a href={txUrl} target="_blank" rel="noopener noreferrer">
        View
      </a>
    </div>
  );
}

function pushErrorNotification(chainId, message, e) {
  const { transactionHash } = e;
  const id = ethers.utils.id(message + transactionHash);
  if (notifications[id]) {
    return;
  }

  notifications[id] = true;

  const txUrl = getExplorerUrl(chainId) + "tx/" + transactionHash;
  helperToast.error(
    <div>
      {message}{" "}
      <a href={txUrl} target="_blank" rel="noopener noreferrer">
        View
      </a>
    </div>
  );
}

const FundYield = forwardRef((props, ref) => {
  const {
    savedIsPnlInLeverage,
    setSavedIsPnlInLeverage,
    savedShowPnlAfterFees,
    savedSlippageAmount,
    pendingTxns,
    setPendingTxns,
    connectWallet,
    savedShouldDisableOrderValidation,
  } = props;
  const [showBanner, setShowBanner] = useLocalStorageSerializeKey(
    "showBanner",
    true
  );
  const [bannerHidden, setBannerHidden] = useLocalStorageSerializeKey(
    "bannerHidden",
    null
  );

  const [pendingPositions, setPendingPositions] = useState({});
  const [updatedPositions, setUpdatedPositions] = useState({});
  const [actionToPerform, setActionToPerform] = useState();

  const hideBanner = () => {
    const hiddenLimit = new Date(
      new Date().getTime() + 2 * 24 * 60 * 60 * 1000
    );
    setBannerHidden(hiddenLimit);
    setShowBanner(false);
  };

  useEffect(() => {
    if (new Date() > new Date("2021-11-30")) {
      setShowBanner(false);
    } else {
      if (bannerHidden && new Date(bannerHidden) > new Date()) {
        setShowBanner(false);
      } else {
        setBannerHidden(null);
        setShowBanner(true);
      }
    }
  }, [showBanner, bannerHidden, setBannerHidden, setShowBanner]);

  const { active, account, library } = useWeb3React();
  const { chainId } = useChainId();
  const currentAccount = account;

  const nativeTokenAddress = getContract(chainId, "NATIVE_TOKEN");

  const vaultAddress = getContract(chainId, "Vault");
  const positionRouterAddress = getContract(chainId, "PositionRouter");
  const readerAddress = getContract(chainId, "Reader");
  const usdgAddress = getContract(chainId, "USDG");

  const whitelistedTokens = getWhitelistedTokens(chainId);
  const whitelistedTokenAddresses = whitelistedTokens.map(
    (token) => token.address
  );

  const positionQuery = getPositionQuery(whitelistedTokens, nativeTokenAddress);
  const poolQuery = getPoolQuery(whitelistedTokens, nativeTokenAddress);

  const defaultCollateralSymbol = getConstant(
    chainId,
    "defaultCollateralSymbol"
  );
  const defaultTokenSelection = useMemo(
    () => ({
      [SWAP]: {
        from: AddressZero,
        to: getTokenBySymbol(chainId, defaultCollateralSymbol).address,
      },
      [LONG]: {
        from: AddressZero,
        to: AddressZero,
      },
      [SHORT]: {
        from: getTokenBySymbol(chainId, defaultCollateralSymbol).address,
        to: AddressZero,
      },
    }),
    [chainId, defaultCollateralSymbol]
  );

  const [tokenSelection, setTokenSelection] = useLocalStorageByChainId(
    chainId,
    "Exchange-token-selection-v2",
    defaultTokenSelection
  );
  const [swapOption, setSwapOption] = useLocalStorageByChainId(
    chainId,
    "Swap-option-v2",
    LONG
  );

  const fromTokenAddress = tokenSelection[swapOption].from;
  const toTokenAddress = tokenSelection[swapOption].to;

  const setFromTokenAddress = useCallback(
    (selectedSwapOption, address) => {
      const newTokenSelection = JSON.parse(JSON.stringify(tokenSelection));
      newTokenSelection[selectedSwapOption].from = address;
      setTokenSelection(newTokenSelection);
    },
    [tokenSelection, setTokenSelection]
  );

  const setToTokenAddress = useCallback(
    (selectedSwapOption, address) => {
      const newTokenSelection = JSON.parse(JSON.stringify(tokenSelection));
      newTokenSelection[selectedSwapOption].to = address;
      if (selectedSwapOption === LONG || selectedSwapOption === SHORT) {
        newTokenSelection[LONG].to = address;
        newTokenSelection[SHORT].to = address;
      }
      setTokenSelection(newTokenSelection);
    },
    [tokenSelection, setTokenSelection]
  );

  const setMarket = (selectedSwapOption, toTokenAddress) => {
    setSwapOption(selectedSwapOption);
    const newTokenSelection = JSON.parse(JSON.stringify(tokenSelection));
    newTokenSelection[selectedSwapOption].to = toTokenAddress;
    if (selectedSwapOption === LONG || selectedSwapOption === SHORT) {
      newTokenSelection[LONG].to = toTokenAddress;
      newTokenSelection[SHORT].to = toTokenAddress;
    }
    setTokenSelection(newTokenSelection);
  };

  const [isConfirming, setIsConfirming] = useState(false);
  const [isPendingConfirmation, setIsPendingConfirmation] = useState(false);

  const tokens = getTokens(chainId);

  const tokenAddresses = tokens.map((token) => token.address);
  const { data: tokenBalances } = useSWR(
    active && [active, chainId, readerAddress, "getTokenBalances", account],
    {
      fetcher: fetcher(library, Reader, [tokenAddresses]),
    }
  );

  const { data: positionData, error: positionDataError } = useSWR(
    active && [
      active,
      chainId,
      readerAddress,
      "getPositions",
      vaultAddress,
      account,
    ],
    {
      fetcher: fetcher(library, Reader, [
        positionQuery.collateralTokens,
        positionQuery.indexTokens,
        positionQuery.isLong,
      ]),
    }
  );

  const positionsDataIsLoading = active && !positionData && !positionDataError;

  const { data: fundingRateInfo } = useSWR(
    [active, chainId, readerAddress, "getFundingRates"],
    {
      fetcher: fetcher(library, Reader, [
        vaultAddress,
        nativeTokenAddress,
        whitelistedTokenAddresses,
      ]),
    }
  );

  const { data: totalTokenWeights } = useSWR(
    [
      `Exchange:totalTokenWeights:${active}`,
      chainId,
      vaultAddress,
      "totalTokenWeights",
    ],
    {
      fetcher: fetcher(library, VaultV2, []),
    }
  );

  const { data: usdgSupply } = useSWR(
    [`Exchange:usdgSupply:${active}`, chainId, usdgAddress, "totalSupply"],
    {
      // @ts-ignore
      fetcher: fetcher(library, Token),
    }
  );

  const orderBookAddress = getContract(chainId, "OrderBook");
  const routerAddress = getContract(chainId, "Router");
  const { data: orderBookApproved } = useSWR(
    // @ts-ignore
    active && [
      active,
      chainId,
      routerAddress,
      "approvedPlugins",
      account,
      orderBookAddress,
    ],
    {
      fetcher: fetcher(library, VaultV2, []),
    }
  );

  const { data: positionRouterApproved } = useSWR(
    // @ts-ignore
    active && [
      active,
      chainId,
      routerAddress,
      "approvedPlugins",
      account,
      positionRouterAddress,
    ],
    {
      fetcher: fetcher(library, VaultV2, []),
    }
  );

  const { infoTokens } = useInfoTokens(
    library,
    chainId,
    active,
    tokenBalances,
    fundingRateInfo
  );
  const { minExecutionFee, minExecutionFeeUSD, minExecutionFeeErrorMessage } =
    useMinExecutionFee(library, active, chainId, infoTokens);

  const { pools, poolsMap } = getPools(chainId, poolQuery);
  const { positions, positionsMap } = getPositions(
    chainId,
    positionQuery,
    positionData,
    infoTokens,
    savedIsPnlInLeverage,
    savedShowPnlAfterFees,
    account,
    pendingPositions,
    updatedPositions
  );

  useImperativeHandle(ref, () => ({
    onUpdatePosition(
      key,
      size,
      collateral,
      averagePrice,
      entryFundingRate,
      reserveAmount,
      realisedPnl
    ) {
      for (let i = 0; i < positions.length; i++) {
        const position = positions[i];
        if (position.contractKey === key) {
          updatedPositions[position.key] = {
            size,
            collateral,
            averagePrice,
            entryFundingRate,
            reserveAmount,
            realisedPnl,
            updatedAt: Date.now(),
          };
          setUpdatedPositions({ ...updatedPositions });
          break;
        }
      }
    },
    onClosePosition(
      key,
      size,
      collateral,
      averagePrice,
      entryFundingRate,
      reserveAmount,
      realisedPnl,
      e
    ) {
      for (let i = 0; i < positions.length; i++) {
        const position = positions[i];
        if (position.contractKey === key) {
          updatedPositions[position.key] = {
            size: bigNumberify(0),
            collateral: bigNumberify(0),
            averagePrice,
            entryFundingRate,
            reserveAmount,
            realisedPnl,
            updatedAt: Date.now(),
          };
          setUpdatedPositions({ ...updatedPositions });
          break;
        }
      }
    },

    onIncreasePosition(
      key,
      account,
      collateralToken,
      indexToken,
      collateralDelta,
      sizeDelta,
      isLong,
      price,
      fee,
      e
    ) {
      if (account !== currentAccount) {
        return;
      }

      const indexTokenItem = getToken(chainId, indexToken);
      const tokenSymbol = indexTokenItem.isWrapped
        ? getConstant(chainId, "nativeTokenSymbol")
        : indexTokenItem.symbol;

      let message;
      if (sizeDelta.eq(0)) {
        message = `Deposited ${formatAmount(
          collateralDelta,
          USD_DECIMALS,
          2,
          true
        )} USD into ${tokenSymbol} ${isLong ? "Long" : "Short."}`;
      } else {
        message = `Increased ${tokenSymbol} ${
          isLong ? "Long" : "Short"
        }, +${formatAmount(sizeDelta, USD_DECIMALS, 2, true)} USD.`;
      }

      pushSuccessNotification(chainId, message, e);
    },

    onDecreasePosition(
      key,
      account,
      collateralToken,
      indexToken,
      collateralDelta,
      sizeDelta,
      isLong,
      price,
      fee,
      e
    ) {
      if (account !== currentAccount) {
        return;
      }

      const indexTokenItem = getToken(chainId, indexToken);
      const tokenSymbol = indexTokenItem.isWrapped
        ? getConstant(chainId, "nativeTokenSymbol")
        : indexTokenItem.symbol;

      let message;
      if (sizeDelta.eq(0)) {
        message = `Withdrew ${formatAmount(
          collateralDelta,
          USD_DECIMALS,
          2,
          true
        )} USD from ${tokenSymbol} ${isLong ? "Long" : "Short"}.`;
      } else {
        message = `Decreased ${tokenSymbol} ${
          isLong ? "Long" : "Short"
        }, -${formatAmount(sizeDelta, USD_DECIMALS, 2, true)} USD.`;
      }

      pushSuccessNotification(chainId, message, e);
    },

    onCancelIncreasePosition(
      account,
      path,
      indexToken,
      amountIn,
      minOut,
      sizeDelta,
      isLong,
      acceptablePrice,
      executionFee,
      blockGap,
      timeGap,
      e
    ) {
      if (account !== currentAccount) {
        return;
      }
      const indexTokenItem = getToken(chainId, indexToken);
      const tokenSymbol = indexTokenItem.isWrapped
        ? getConstant(chainId, "nativeTokenSymbol")
        : indexTokenItem.symbol;

      const message = `Could not increase ${tokenSymbol} ${
        isLong ? "Long" : "Short"
      } within the allowed slippage, you can adjust the allowed slippage in the settings on the top right of the page.`;

      pushErrorNotification(chainId, message, e);

      const key = getPositionKey(
        account,
        path[path.length - 1],
        indexToken,
        isLong
      );
      pendingPositions[key] = {};
      setPendingPositions({ ...pendingPositions });
    },

    onCancelDecreasePosition(
      account,
      path,
      indexToken,
      collateralDelta,
      sizeDelta,
      isLong,
      receiver,
      acceptablePrice,
      minOut,
      executionFee,
      blockGap,
      timeGap,
      e
    ) {
      if (account !== currentAccount) {
        return;
      }
      const indexTokenItem = getToken(chainId, indexToken);
      const tokenSymbol = indexTokenItem.isWrapped
        ? getConstant(chainId, "nativeTokenSymbol")
        : indexTokenItem.symbol;

      const message = `Could not decrease ${tokenSymbol} ${
        isLong ? "Long" : "Short"
      } within the allowed slippage, you can adjust the allowed slippage in the settings on the top right of the page.`;

      pushErrorNotification(chainId, message, e);

      const key = getPositionKey(
        account,
        path[path.length - 1],
        indexToken,
        isLong
      );
      pendingPositions[key] = {};
      setPendingPositions({ ...pendingPositions });
    },
  }));

  const flagOrdersEnabled = true;
  const [orders] = useAccountOrders(flagOrdersEnabled);

  const [isWaitingForPluginApproval, setIsWaitingForPluginApproval] =
    useState(false);
  const [
    isWaitingForPositionRouterApproval,
    setIsWaitingForPositionRouterApproval,
  ] = useState(false);
  const [isPluginApproving, setIsPluginApproving] = useState(false);
  const [isPositionRouterApproving, setIsPositionRouterApproving] =
    useState(false);
  const [isCancelMultipleOrderProcessing, setIsCancelMultipleOrderProcessing] =
    useState(false);
  const [cancelOrderIdList, setCancelOrderIdList] = useState([]);

  const onMultipleCancelClick = useCallback(
    async function () {
      setIsCancelMultipleOrderProcessing(true);
      try {
        const tx = await cancelMultipleOrders(
          chainId,
          library,
          cancelOrderIdList,
          {
            successMsg: t`Orders cancelled.`,
            failMsg: t`Cancel failed.`,
            sentMsg: t`Cancel submitted.`,
            pendingTxns,
            setPendingTxns,
          }
        );
        const receipt = await tx.wait();
        if (receipt.status === 1) {
          setCancelOrderIdList([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsCancelMultipleOrderProcessing(false);
      }
    },
    [
      chainId,
      library,
      pendingTxns,
      setPendingTxns,
      setCancelOrderIdList,
      cancelOrderIdList,
      setIsCancelMultipleOrderProcessing,
    ]
  );

  const approveOrderBook = () => {
    setIsPluginApproving(true);
    return approvePlugin(chainId, orderBookAddress, {
      library,
      pendingTxns,
      setPendingTxns,
      sentMsg: t`Enable orders sent.`,
      failMsg: t`Enable orders failed.`,
    })
      .then(() => {
        setIsWaitingForPluginApproval(true);
      })
      .finally(() => {
        setIsPluginApproving(false);
      });
  };

  const approvePositionRouter = ({ sentMsg, failMsg }) => {
    setIsPositionRouterApproving(true);
    return approvePlugin(chainId, positionRouterAddress, {
      library,
      pendingTxns,
      setPendingTxns,
      sentMsg,
      failMsg,
    })
      .then(() => {
        setIsWaitingForPositionRouterApproval(true);
      })
      .finally(() => {
        setIsPositionRouterApproving(false);
      });
  };

  const LIST_SECTIONS = [
    "Positions",
    flagOrdersEnabled ? "Orders" : undefined,
    "Trades",
  ].filter(Boolean);
  let [listSection, setListSection] = useLocalStorageByChainId(
    chainId,
    "List-section-v2",
    LIST_SECTIONS[0]
  );
  const LIST_SECTIONS_LABELS = {
    Orders: orders.length ? `Orders (${orders.length})` : undefined,
    Positions: positions.length ? `Positions (${positions.length})` : undefined,
  };
  if (!LIST_SECTIONS.includes(listSection)) {
    listSection = LIST_SECTIONS[0];
  }

  if (!getToken(chainId, toTokenAddress)) {
    return null;
  }

  const renderCancelOrderButton = () => {
    const orderText = cancelOrderIdList.length > 1 ? t`orders` : t`order`;
    if (cancelOrderIdList.length === 0) return;
    return (
      <button
        className="muted font-base cancel-order-btn"
        disabled={isCancelMultipleOrderProcessing}
        type="button"
        onClick={onMultipleCancelClick}
      >
        <Trans>
          Cancel {cancelOrderIdList.length} {orderText}
        </Trans>
      </button>
    );
  };

  const getListSection = () => {
    return (
      <div>
        <div className="Exchange-list-tab-container">
          <PoolsList pools={pools} poolDataIsLoading={false} />
        </div>
        <div className="Exchange-list-tab-container">
          <Tab
            options={LIST_SECTIONS}
            optionLabels={LIST_SECTIONS_LABELS}
            option={listSection}
            onChange={(section) => setListSection(section)}
            type="inline"
            className="Exchange-list-tabs"
          />
          <div className="align-right Exchange-should-show-position-lines">
            {renderCancelOrderButton()}
          </div>
        </div>
        {listSection === "Positions" && (
          <PositionsList
            positionsDataIsLoading={positionsDataIsLoading}
            pendingPositions={pendingPositions}
            setPendingPositions={setPendingPositions}
            setListSection={setListSection}
            setIsWaitingForPluginApproval={setIsWaitingForPluginApproval}
            setIsWaitingForPositionRouterApproval={
              setIsWaitingForPositionRouterApproval
            }
            approveOrderBook={approveOrderBook}
            approvePositionRouter={approvePositionRouter}
            isPluginApproving={isPluginApproving}
            isPositionRouterApproving={isPositionRouterApproving}
            isWaitingForPluginApproval={isWaitingForPluginApproval}
            isWaitingForPositionRouterApproval={
              isWaitingForPositionRouterApproval
            }
            orderBookApproved={orderBookApproved}
            positionRouterApproved={positionRouterApproved}
            positions={positions}
            positionsMap={positionsMap}
            infoTokens={infoTokens}
            active={active}
            account={account}
            library={library}
            pendingTxns={pendingTxns}
            setPendingTxns={setPendingTxns}
            flagOrdersEnabled={flagOrdersEnabled}
            savedIsPnlInLeverage={savedIsPnlInLeverage}
            chainId={chainId}
            nativeTokenAddress={nativeTokenAddress}
            setMarket={setMarket}
            orders={orders}
            showPnlAfterFees={savedShowPnlAfterFees}
            minExecutionFee={minExecutionFee}
            minExecutionFeeUSD={minExecutionFeeUSD}
            minExecutionFeeErrorMessage={minExecutionFeeErrorMessage}
            usdgSupply={usdgSupply}
            totalTokenWeights={totalTokenWeights}
          />
        )}
        {listSection === "Orders" && (
          <OrdersList
            account={account}
            active={active}
            library={library}
            pendingTxns={pendingTxns}
            setPendingTxns={setPendingTxns}
            infoTokens={infoTokens}
            positionsMap={positionsMap}
            chainId={chainId}
            orders={orders}
            totalTokenWeights={totalTokenWeights}
            usdgSupply={usdgSupply}
            savedShouldDisableOrderValidation={
              savedShouldDisableOrderValidation
            }
            cancelOrderIdList={cancelOrderIdList}
            setCancelOrderIdList={setCancelOrderIdList}
          />
        )}
        {listSection === "Trades" && (
          <TradeHistory
            account={account}
            forSingleAccount={true}
            infoTokens={infoTokens}
            getTokenInfo={getTokenInfo}
            chainId={chainId}
            nativeTokenAddress={nativeTokenAddress}
            shouldShowPaginationButtons={true}
          />
        )}
      </div>
    );
  };

  const onSelectWalletToken = (token) => {
    setFromTokenAddress(swapOption, token.address);
  };

  return (
    <div className="Exchange page-layout">
      <FundBanner />
      {showBanner && <ExchangeBanner hideBanner={hideBanner} />}
      <div className="Exchange-content">
        <div className="Exchange-left">
          <div className="ExchangeChart-top App-box App-box-border">
            <div className="ExchangeChart-top-inner">
              <div>
                <div className="ExchangeChart-title">
                  <ActionSelector
                    chainId={chainId}
                    selectedAction={actionToPerform}
                    onSelectAction={setActionToPerform}
                    className="chart-action-selector"
                    actionType={ActionTypes.Yield}
                  />
                </div>
              </div>
              <div>
                <div className="ExchangeChart-title">
                  Amount Deposited: 1000
                </div>
              </div>
            </div>
          </div>
          <div className="Exchange-lists large">{getListSection()}</div>
        </div>
        <div className="Exchange-right">
          <SwapBox
            pendingPositions={pendingPositions}
            setPendingPositions={setPendingPositions}
            setIsWaitingForPluginApproval={setIsWaitingForPluginApproval}
            setIsWaitingForPositionRouterApproval={
              setIsWaitingForPositionRouterApproval
            }
            approveOrderBook={approveOrderBook}
            approvePositionRouter={approvePositionRouter}
            isPluginApproving={isPluginApproving}
            isPositionRouterApproving={isPositionRouterApproving}
            isWaitingForPluginApproval={isWaitingForPluginApproval}
            isWaitingForPositionRouterApproval={
              isWaitingForPositionRouterApproval
            }
            orderBookApproved={orderBookApproved}
            positionRouterApproved={positionRouterApproved}
            orders={orders}
            flagOrdersEnabled={flagOrdersEnabled}
            chainId={chainId}
            infoTokens={infoTokens}
            active={active}
            connectWallet={connectWallet}
            library={library}
            account={account}
            positionsMap={positionsMap}
            fromTokenAddress={fromTokenAddress}
            setFromTokenAddress={setFromTokenAddress}
            toTokenAddress={toTokenAddress}
            setToTokenAddress={setToTokenAddress}
            swapOption={swapOption}
            setSwapOption={setSwapOption}
            pendingTxns={pendingTxns}
            setPendingTxns={setPendingTxns}
            tokenSelection={tokenSelection}
            setTokenSelection={setTokenSelection}
            isConfirming={isConfirming}
            setIsConfirming={setIsConfirming}
            isPendingConfirmation={isPendingConfirmation}
            setIsPendingConfirmation={setIsPendingConfirmation}
            savedIsPnlInLeverage={savedIsPnlInLeverage}
            setSavedIsPnlInLeverage={setSavedIsPnlInLeverage}
            nativeTokenAddress={nativeTokenAddress}
            savedSlippageAmount={savedSlippageAmount}
            totalTokenWeights={totalTokenWeights}
            usdgSupply={usdgSupply}
            savedShouldDisableOrderValidation={
              savedShouldDisableOrderValidation
            }
            minExecutionFee={minExecutionFee}
            minExecutionFeeUSD={minExecutionFeeUSD}
            minExecutionFeeErrorMessage={minExecutionFeeErrorMessage}
          />
          <div className="Exchange-wallet-tokens">
            <div className="Exchange-wallet-tokens-content">
              <ExchangeWalletTokens
                tokens={tokens}
                infoTokens={infoTokens}
                onSelectToken={onSelectWalletToken}
              />
            </div>
          </div>
        </div>
        <div className="Exchange-lists small">{getListSection()}</div>
      </div>
      <Footer />
    </div>
  );
});

export default FundYield;
