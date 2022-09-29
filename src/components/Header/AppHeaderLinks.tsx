import { FiX } from "react-icons/fi";
import logoImg from "../../img/logo_bw.svg";

import "./Header.css";
import { Trans } from "@lingui/macro";
import React from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {
  small?: boolean;
  clickCloseIcon?: () => void;
};

export function AppHeaderLinks({ small, clickCloseIcon }: Props) {
  return (
    <div className="App-header-links">
      {small && (
        <div className="App-header-links-header">
          <Link className="App-header-link-main" to="/">
            <img src={logoImg} alt="Barren Wuffet Logo" />
          </Link>
          <div
            className="App-header-menu-icon-block mobile-cross-menu"
            onClick={() => clickCloseIcon && clickCloseIcon()}
          >
            <FiX className="App-header-menu-icon" />
          </div>
        </div>
      )}
      <div className="App-header-link-container">
        <NavLink className={`default-button`} end to="/dashboard">
          <Trans>Dashboard</Trans>
        </NavLink>
      </div>
      <div className="App-header-link-container">
        <NavLink className={`default-button`} end to="/about">
          <Trans>About</Trans>
        </NavLink>
      </div>
    </div>
  );
}
