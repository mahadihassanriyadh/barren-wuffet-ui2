import React, { useEffect } from "react";
import { FunctionComponent } from "react";

import { Link, NavLink } from "react-router-dom";

import { t, Trans } from "@lingui/macro";
import Button from "../../components/Button/Button";

const About: FunctionComponent = () => {
  useEffect(() => {
    document.title = "Barren Wuffet | About";
  }, []);

  return (
    <div className="container mx-auto">
      <div className="max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
          About
        </h1>
        <div className="max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h2 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            For investors and DAOs 🌟
          </h2>
          <div className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
            If you are a Raise capital easily and scale up your investment and
            trading strategies. Decide on the fund size, the duration of
            management and the profit share amounts. Market it to your community
            and help them increase their returns.
          </div>
        </div>
        <div className="max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h2 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            For traders, money managers 🧑‍💼
          </h2>
          <ul className="list-disc	mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
            <li className="text-left">
              get access to some of the best fund managers to help you grow your
              investments. Browse through their history, which is recorded
              onchain and cannot be manipulated, to filter the best from the
              rest.
            </li>

            <li className="text-left">
              Have a peace of mind with the guardrails we have implemented that
              prevents the siphoning of funds by the fund managers. Fund mangers
              cannot access the funds directly, are only able to interact with
              whitelisted protocols and tokens.
            </li>

            <li className="text-left">
              Setup trade and investment strategies across the following
              applications
            </li>
            <li className="text-left">
              Our automation tools will bring you pro trading tools to give you
              the edge in trading across decentralised protocols, just like a
              centralised exchange, but without the fear of losing access toy
              our funds.
            </li>
          </ul>
        </div>
        <NavLink className="block my-5" to="/create-fund">
          <Button label={t`Create Fund`} />
        </NavLink>

        <div className="max-w-5xl mx-auto pt-20 pb-20 sm:pt-24 lg:pt-32">
          <h2 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            Living up to the decentralised philosophy:
          </h2>
          <ul className="list-disc	mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
            <li className="text-left">
              Funds are in custody of smart contracts while being managed and
              returned to investors at the ned of the term
            </li>

            <li className="text-left">
              Completely decentralised. we are thinking through decentralisation
              from the front end (IPFS), backend (AKash), protocol (token
              holders/dao)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
