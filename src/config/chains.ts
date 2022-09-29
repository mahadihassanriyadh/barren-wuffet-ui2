export const ARBITRUM_TESTNET: number = 421613;
export const ARBITRUM: number = 42161;

// TODO take it from web3
export const DEFAULT_CHAIN_ID = ARBITRUM_TESTNET;

export const CHAIN_NAMES = {
  [ARBITRUM_TESTNET]: "ArbGurley",
  [ARBITRUM]: "Arbitrum",
};

const ARBITRUM_RPC_PROVIDERS = ["https://arb1.arbitrum.io/rpc"];

const NETWORK_METADATA = {
  [ARBITRUM_TESTNET]: {
    chainId: "0x" + ARBITRUM_TESTNET.toString(16),
    chainName: "Arbitrum Testnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/"],
  },
  [ARBITRUM]: {
    chainId: "0x" + ARBITRUM.toString(16),
    chainName: "Arbitrum",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ARBITRUM_RPC_PROVIDERS,
    blockExplorerUrls: [getExplorerUrl(ARBITRUM)],
  },
};

export function getChainName(chainId: number) {
  return CHAIN_NAMES[chainId];
}

export function getDefaultArbitrumRpcUrl() {
  return ARBITRUM_RPC_PROVIDERS[0];
}

export function getExplorerUrl(chainId: number) {
  if (chainId === ARBITRUM_TESTNET) {
    return "https://testnet.arbiscan.io/";
  } else if (chainId === ARBITRUM) {
    return "https://arbiscan.io/";
  }
  return "https://etherscan.io/";
}

export function getAccountUrl(chainId: number, account: string) {
  if (!account) {
    return getExplorerUrl(chainId);
  }
  return getExplorerUrl(chainId) + "address/" + account;
}
