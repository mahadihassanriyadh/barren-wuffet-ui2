import { Position, PositionType } from "../../api/models";

export const openPositions: Position[] = [
  {
    platform: "Sushi",
    asset: "ETH/USDC",
    value: 10000,
    size: 100,
    asset_prices: [
      {
        asset: "ETH",
        price: 15000,
      },
    ],
    position_type: PositionType.SPOT,
    creation_timestamp: new Date(2022, 10, 1),
  },
  {
    platform: "GMX",
    asset: "BTC/USDC",
    collateral: 20000,
    value: 40000,
    size: 2,
    asset_prices: [
      {
        asset: "BTC",
        price: 20000,
      },
    ],
    position_type: PositionType.SPOT,
    liquidation_price: 18000,
    creation_timestamp: new Date(2022, 10, 1),
  },
  {
    platform: "Uniswap",
    asset: "ETH/BTC",
    value: 10010,
    size: 20,
    yield: 5,
    asset_prices: [
      {
        asset: "ETH",
        price: 1000,
      },
      {
        asset: "BTC",
        price: 20000,
      },
    ],
    position_type: PositionType.LP,
    creation_timestamp: new Date(2022, 10, 1),
  },
  {
    platform: "GMX",
    asset: "GMX",
    collateral: 3,
    value: 20000,
    size: 50,
    asset_prices: [
      {
        asset: "GMX",
        price: 40,
      },
    ],
    position_type: PositionType.LP,
    creation_timestamp: new Date(2022, 10, 1),
  },
];
