const CONTRACTS: Record<number, Record<string, string>> = {
  421613: {
    // arbitrum testnet
    Dopex: "0x0000000000000000000000000000000000000000",
    Uniswap: "0x0000000000000000000000000000000000000000",
    Curve: "0x0000000000000000000000000000000000000000",
    GMX: "0x0000000000000000000000000000000000000000",
  },
  42161: {
    // arbitrum mainnet
  },
};

export function getContract(chainId: number, name: string) {
  if (!CONTRACTS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }
  if (!CONTRACTS[chainId][name]) {
    throw new Error(`Unknown contract "${name}" for chainId ${chainId}`);
  }
  return CONTRACTS[chainId][name];
}
