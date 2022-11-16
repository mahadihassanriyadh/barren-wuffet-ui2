import React from "react";
import { t, Trans } from "@lingui/macro";
import { NavLink } from "react-router-dom";
import FundsList from "../../components/Fund/FundsList";
import Button from "../../components/Button/Button";
import FAQ from "../../components/FAQ/FAQ";
import faqs from "../../config/faqs";
import InfoPanel from "../../components/Fund/Yield/InfoPanel";
import Payments from "../../components/Fund/Yield/Action";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
          <Trans>Decentralized Fund Management Platform</Trans>
        </h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
          <Trans>
            Anybody who thinks they are a good trader can set up a defi fund
            that does not require KYC
          </Trans>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:mt-32 lg:items-center">
        <h2 className="font-sans text-4xl font-bold">Top funds 🔥</h2>
        <FundsList />
        <NavLink className="block my-5" to="/create-fund">
          <Button label={t`Create Fund`} />
        </NavLink>
        <hr className="py-5" />
        <h2 className="font-sans text-4xl font-bold">FAQs 🤔</h2>
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
}
