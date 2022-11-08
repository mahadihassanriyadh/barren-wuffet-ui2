import React, { useEffect } from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import FundTrading from "./pages/FundTrading/FundTrading";
import FundPortfolio from "./pages/FundPortfolio/FundPortfolio";
import FundYield from "./pages/FundYield/FundYield";
import CreateFund from "./pages/CreateFund/CreateFund";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { getWalletConfig } from "./config/wallet";
import { defaultLocale, dynamicActivate } from "./lib/i18n";
import "./App.css";
import FundManage from "./pages/FundManage/FundManage";
import Invest from "./pages/Invest/Invest";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const { chains, wagmiClient } = getWalletConfig();
const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(defaultLocale);
  }, []);

  useEffect(() => {
    document.title = "Barren Wuffet";
  }, []);

  return (
    <I18nProvider i18n={i18n}>
      <ErrorBoundary>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <div className="bg-black text-white">
              <Router>
                <div className="bg-gray-800">
                  <Header />
                </div>
                <div>
                  <ErrorBoundary>
                    <QueryClientProvider client={queryClient}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/create-fund" element={<CreateFund />} />
                        <Route path="/invest" element={<Invest />}>
                          <Route path=":fundId" element={<Invest />} />
                        </Route>
                        <Route path="fund/:fundId" element={<FundManage />}>
                          <Route path="portfolio" element={<FundPortfolio />} />
                          <Route path="trading" element={<FundTrading />} />
                          <Route path="yield" element={<FundYield />} />
                        </Route>
                      </Routes>
                    </QueryClientProvider>
                  </ErrorBoundary>
                </div>
              </Router>
              <div className="bg-gray-800">
                <Footer />
              </div>
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </ErrorBoundary>
    </I18nProvider>
  );
}

export default App;
