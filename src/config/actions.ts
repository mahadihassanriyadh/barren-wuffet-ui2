import { getContract } from "./addresses";
export enum ActionTypes {
  Trading,
  Yield,
  Close,
}

export type Action = {
  name: string;
  address: string;
  actionType: ActionTypes;
  imageUrl: string;
};
const ACTIONS: Record<number, Action[]> = {
  42161: [],
  421613: [
    {
      name: "Uniswap LP",
      address: getContract(421613, "Uniswap"),
      actionType: ActionTypes.Yield,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    },
    {
      name: "Uniswap Swap",
      address: getContract(421613, "Uniswap"),
      actionType: ActionTypes.Trading,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    },
    {
      name: "GMX LP",
      address: getContract(421613, "GMX"),
      actionType: ActionTypes.Yield,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    },
    {
      name: "GMX Increase",
      address: getContract(421613, "GMX"),
      actionType: ActionTypes.Trading,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    },
    {
      name: "GMX Decrease",
      address: getContract(421613, "GMX"),
      actionType: ActionTypes.Trading,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    },
    {
      name: "GMX Close",
      address: getContract(421613, "GMX"),
      actionType: ActionTypes.Close,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    },
    {
      name: "Dopex Buy Option",
      address: getContract(421613, "Dopex"),
      actionType: ActionTypes.Trading,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    },
    {
      name: "Curve LP",
      address: getContract(421613, "Curve"),
      actionType: ActionTypes.Trading,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    },
    {
      name: "Curve Swap",
      address: getContract(421613, "Curve"),
      actionType: ActionTypes.Trading,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    },
  ],
};

export function getWhitelistedActions(
  chainId: number,
  actionType?: ActionTypes
) {
  return ACTIONS[chainId]?.filter(
    (action) => actionType === undefined || action.actionType === actionType
  );
}
