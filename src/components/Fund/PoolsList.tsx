import React from "react";

import { Trans, t } from "@lingui/macro";

import { ImSpinner2 } from "react-icons/im";
import { formatAmount, USD_DECIMALS } from "../../data/formatting";

export default function PositionsList(props: {
  pools: any;
  poolDataIsLoading: boolean;
}) {
  const { pools, poolDataIsLoading } = props;

  const closePool = (pool: any) => {};

  return (
    <div className="PositionsList">
      <table className="Exchange-list large App-box">
        <tbody>
          <tr className="Exchange-list-header">
            <th>
              <Trans>Pool</Trans>
            </th>
            <th>
              <Trans>Base vAPY / Rewards tAPY</Trans>
            </th>
            <th>
              <Trans>Volume</Trans>
            </th>
            <th>
              <Trans>TVL</Trans>
            </th>
            <th></th>
            <th></th>
          </tr>
          {pools.length === 0 && poolDataIsLoading && (
            <tr>
              <td colSpan={15}>
                <div className="Exchange-empty-positions-list-note">
                  Loading...
                </div>
              </td>
            </tr>
          )}
          {pools.length === 0 && !poolDataIsLoading && (
            <tr>
              <td colSpan={15}>
                <div className="Exchange-empty-positions-list-note">
                  No open pools
                </div>
              </td>
            </tr>
          )}
          {pools.map((pool: any) => {
            return (
              <tr key={pool.key}>
                <td className="clickable">
                  <div className="Exchange-list-title">
                    {pool.indexToken.symbol}
                    {pool.hasPendingChanges && (
                      <ImSpinner2 className="spin position-loading-icon" />
                    )}
                  </div>
                </td>
                <td>
                  <div>{pool.vAPY}</div>
                  <div>{pool.tAPY}</div>
                </td>
                <td>
                  <div>{pool.volume}</div>
                </td>
                <td>
                  <div>
                    ${formatAmount(pool.tvl, USD_DECIMALS, 2, true, "0.0")}
                  </div>
                </td>
                <td>
                  <button
                    className="Exchange-list-action"
                    onClick={() => closePool(pool)}
                    disabled={false}
                  >
                    Close
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
