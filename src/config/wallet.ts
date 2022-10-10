import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { isDevelopment } from "./env";

export function getWalletConfig() {
  const devChains = [chain.arbitrumGoerli];

  const { chains, provider } = configureChains(
    [chain.arbitrum, chain.mainnet].concat(isDevelopment() ? devChains : []),
    [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
  );
  const { connectors } = getDefaultWallets({
    appName: "Barren Wuffet",
    chains,
  });
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return {
    chains,
    wagmiClient,
  };
}
