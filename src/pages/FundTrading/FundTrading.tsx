// @ts-nocheck
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Trans, t } from "@lingui/macro";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

export function useInfoTokens(
  library,
  chainId,
  active,
  tokenBalances,
  fundingRateInfo,
  vaultPropsLength
) {
  const tokens = getTokens(chainId);
  const vaultReaderAddress = getContract(chainId, "VaultReader");
  const vaultAddress = getContract(chainId, "Vault");
  const positionRouterAddress = getContract(chainId, "PositionRouter");
  const nativeTokenAddress = getContract(chainId, "NATIVE_TOKEN");

  const whitelistedTokens = getWhitelistedTokens(chainId);
  const whitelistedTokenAddresses = whitelistedTokens.map(
    (token) => token.address
  );

  const { data: vaultTokenInfo } = useSWR(
    [
      `useInfoTokens:${active}`,
      chainId,
      vaultReaderAddress,
      "getVaultTokenInfoV4",
    ],
    {
      fetcher: fetcher(library, VaultReader, [
        vaultAddress,
        positionRouterAddress,
        nativeTokenAddress,
        expandDecimals(1, 18),
        whitelistedTokenAddresses,
      ]),
    }
  );

  const indexPricesUrl = getServerUrl(chainId, "/prices");
  const { data: indexPrices } = useSWR([indexPricesUrl], {
    fetcher: (...args) => fetch(...args).then((res) => res.json()),
    refreshInterval: 500,
    refreshWhenHidden: true,
  });

  return {
    infoTokens: getInfoTokens(
      tokens,
      tokenBalances,
      whitelistedTokens,
      vaultTokenInfo,
      fundingRateInfo,
      vaultPropsLength,
      indexPrices,
      nativeTokenAddress
    ),
  };
}

import {
  SWAP,
  LONG,
  SHORT,
  USD_DECIMALS,
  formatAmount,
  getTokenInfo,
  useLocalStorageByChainId,
  useChainId,
  getPageTitle,
} from "../../lib/legacy";
import { getConstant } from "../../config/chains";

import { getContract } from "../../config/addresses";
import { getTokens, getToken, getTokenBySymbol } from "../../config/Tokens";

import { getPositions, getPositionQuery } from "../../lib/data/positions";
import Checkbox from "../../components/Form/Checkbox";
import SwapBox from "../../components/Fund/SwapBox";
import FundBanner from "../../components/Fund/FundBanner";
import PriceChart from "../../components/Charts/PriceChart";
import TradingOrders from "../../components/Fund/TradingOrders";
import { Tab } from "@headlessui/react";

const { AddressZero } = ethers.constants;

const FundTrading = (props) => {
  const [pendingPositions, setPendingPositions] = useState({});
  const [updatedPositions, setUpdatedPositions] = useState({});

  const { active, account, library } = useWeb3React();
  const { chainId } = useChainId();

  const nativeTokenAddress = getContract(chainId, "NATIVE_TOKEN");

  const positionQuery = getPositionQuery(whitelistedTokens, nativeTokenAddress);

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

  const tokens = getTokens(chainId);
  const { infoTokens } = useInfoTokens(
    library,
    chainId,
    active,
    tokenBalances,
    fundingRateInfo
  );

  useEffect(() => {
    const fromToken = getTokenInfo(infoTokens, fromTokenAddress);
    const toToken = getTokenInfo(infoTokens, toTokenAddress);
    let selectedToken = getChartToken(swapOption, fromToken, toToken, chainId);
    let currentTokenPriceStr = formatAmount(
      selectedToken.maxPrice,
      USD_DECIMALS,
      2,
      true
    );
    let title = getPageTitle(
      currentTokenPriceStr +
        ` | ${selectedToken.symbol}${selectedToken.isStable ? "" : "USD"}`
    );
    document.title = title;
  }, [
    tokenSelection,
    swapOption,
    infoTokens,
    chainId,
    fromTokenAddress,
    toTokenAddress,
  ]);

  const { positions, positionsMap } = getPositions(
    chainId,
    positionQuery,
    infoTokens,
    account,
    pendingPositions,
    updatedPositions
  );

  const onMultipleCancelClick = useCallback(
    async function () {
      setIsCancelMultipleOrderProcessing(true);
      try {
        // TODO actually cancel the orders
        const receipt = { status: 1 };
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

  const LIST_SECTIONS = ["Positions", "Orders", "Trades"].filter(Boolean);
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
          <Tab
            options={LIST_SECTIONS}
            optionLabels={LIST_SECTIONS_LABELS}
            option={listSection}
            onChange={(section) => setListSection(section)}
          />
          <div className="align-right Exchange-should-show-position-lines">
            {renderCancelOrderButton()}

            <Checkbox
              isChecked={savedShouldShowPositionLines}
              setIsChecked={setSavedShouldShowPositionLines}
            >
              <span>
                <Trans>Chart positions</Trans>
              </span>
            </Checkbox>
          </div>
        </div>
        <TradingOrders
          account={account}
          forSingleAccount={true}
          infoTokens={infoTokens}
          getTokenInfo={getTokenInfo}
          chainId={chainId}
          nativeTokenAddress={nativeTokenAddress}
          shouldShowPaginationButtons={true}
        />
      </div>
    );
  };

  const renderChart = () => {
    return (
      <PriceChart
        title={"USD/ETH"}
        priceFeed={() => []}
        tokenPair={"USD/ETH"}
      />
    );
  };

  return (
    <div className="Exchange page-layout">
      <FundBanner />
      <div className="Exchange-content">
        <div className="Exchange-left">
          {renderChart()}
          <div className="Exchange-lists large">{getListSection()}</div>
        </div>
        <div className="Exchange-right">
          <SwapBox tokens={tokens} />
        </div>
        <div className="Exchange-lists small">{getListSection()}</div>
      </div>
    </div>
  );
};

export default FundTrading;
