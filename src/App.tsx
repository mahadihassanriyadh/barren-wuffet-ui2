import React from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";

import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import FundTrading from "./pages/FundTrading/FundTrading";
import FundPortfolio from "./pages/FundPortfolio/FundPortfolio";
import FundYield from "./pages/FundYield/FundYield";
import CreateFund from "./pages/CreateFund/CreateFund";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { getWalletConfig } from "./config/wallet";
import "./App.css";

const { chains, wagmiClient } = getWalletConfig();

function App() {
  return (
    <I18nProvider i18n={i18n}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <div className="z-0 flex flex-col items-center w-full h-screen">
            <Header />
            <Router>
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />

                  <Route path="/create-fund" element={<CreateFund />} />

                  {/* <Route
                path="/fund/trading"
                element={
                  <FundTrading
                    ref={exchangeRef}
                    savedShowPnlAfterFees={savedShowPnlAfterFees}
                    savedIsPnlInLeverage={savedIsPnlInLeverage}
                    setSavedIsPnlInLeverage={setSavedIsPnlInLeverage}
                    savedSlippageAmount={savedSlippageAmount}
                    setPendingTxns={setPendingTxns}
                    pendingTxns={pendingTxns}
                    savedShouldShowPositionLines={savedShouldShowPositionLines}
                    setSavedShouldShowPositionLines={
                      setSavedShouldShowPositionLines
                    }
                    connectWallet={connectWallet}
                    savedShouldDisableOrderValidation={
                      savedShouldDisableOrderValidation
                    }
                  />
                }
              />

              <Route
                path="/fund/portfolio"
                element={
                  <FundPortfolio
                    ref={exchangeRef}
                    savedShowPnlAfterFees={savedShowPnlAfterFees}
                    savedIsPnlInLeverage={savedIsPnlInLeverage}
                    setSavedIsPnlInLeverage={setSavedIsPnlInLeverage}
                    savedSlippageAmount={savedSlippageAmount}
                    setPendingTxns={setPendingTxns}
                    pendingTxns={pendingTxns}
                    savedShouldShowPositionLines={savedShouldShowPositionLines}
                    setSavedShouldShowPositionLines={
                      setSavedShouldShowPositionLines
                    }
                    connectWallet={connectWallet}
                    savedShouldDisableOrderValidation={
                      savedShouldDisableOrderValidation
                    }
                  />
                }
              />
              <Route
                path="/fund/yield"
                element={
                  <FundYield
                    ref={exchangeRef}
                    savedShowPnlAfterFees={savedShowPnlAfterFees}
                    savedIsPnlInLeverage={savedIsPnlInLeverage}
                    setSavedIsPnlInLeverage={setSavedIsPnlInLeverage}
                    savedSlippageAmount={savedSlippageAmount}
                    setPendingTxns={setPendingTxns}
                    pendingTxns={pendingTxns}
                    savedShouldShowPositionLines={savedShouldShowPositionLines}
                    setSavedShouldShowPositionLines={
                      setSavedShouldShowPositionLines
                    }
                    connectWallet={connectWallet}
                    savedShouldDisableOrderValidation={
                      savedShouldDisableOrderValidation
                    }
                  />
                }
              /> */}
                </Routes>
              </div>
            </Router>
            <Footer />
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </I18nProvider>
  );
}

export default App;
