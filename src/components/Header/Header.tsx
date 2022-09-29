import React from "react";

import { Trans } from "@lingui/macro";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { AppHeaderLinks } from "./AppHeaderLinks";

import logoImg from "../../img/logo_bw.svg";
import logoSmallImg from "../../img/logo_bw_sq.svg";

import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const AppHeaderUser = () => (
  <div className="App-header-container-right">
    <div className="App-header-user">
      <div className={"App-header-trade-link"}>
        <NavLink className="default-btn" to="/fund/portfolio">
          <Trans>Invest</Trans>
        </NavLink>
      </div>
      <div className={"App-header-trade-link"}>
        <NavLink className="default-btn" to="/create-fund">
          <Trans>Create Fund</Trans>
        </NavLink>
      </div>
      <ConnectButton />
    </div>
  </div>
);

export default function Header() {
  return (
    <>
      <header>
        <div className="App-header large">
          <div className="App-header-container-left">
            <Link className="App-header-link-main" to="/">
              <img src={logoImg} className="big" alt="Barren Wuffet Logo" />
              <img
                src={logoSmallImg}
                className="small"
                alt="Barren Wuffet Logo"
              />
            </Link>
            <AppHeaderLinks />
          </div>
          <AppHeaderUser />
        </div>
        <div className={`App-header small active`}>
          <div className={`App-header-link-container App-header-top active`}>
            <div className="App-header-container-left">
              <div className="App-header-link-main clickable">
                <img src={logoImg} className="big" alt="Barren Wuffet Logo" />
                <img
                  src={logoSmallImg}
                  className="small"
                  alt="Barren Wuffet Logo"
                />
              </div>
            </div>
            <AppHeaderUser />
          </div>
        </div>
      </header>
    </>
  );
}
