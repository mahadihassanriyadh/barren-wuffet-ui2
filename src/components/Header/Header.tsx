import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import logo from "../../img/logo.svg";

import { NavLink, useLocation } from "react-router-dom";
import { t, Trans } from "@lingui/macro";
import Button from "../Button/Button";
import { LaunchButtons } from "../../api/models";

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  const [shouldDisplayConnect, setShouldDisplayConnect] = useState(false);
  const { pathname } = useLocation();
  const LaunchButtons: LaunchButtons[] = [
    {
      id: 0,
      name: t`Manage Fund`,
      url: "/fund/portfolio",
    },
    {
      id: 1,
      name: t`Invest`,
      url: "/invest",
    },
    { 
      id: 2,
      name: t`Create Fund`,
      url: "/create-fund",
    }
  ]
  useEffect(() => {
    if (pathname.startsWith("/fund") || pathname.startsWith("/invest") || pathname.startsWith("/create-fund")) { 
      setShouldDisplayConnect(true);
    }
    else {
      setShouldDisplayConnect(false);
    }
    console.log(shouldDisplayConnect)
  }, [pathname, shouldDisplayConnect])
  return (
    <>
      <header className="container mx-auto">
        <nav
          className="
              flex flex-wrap
              items-center
              justify-between
              w-full
              py-4
              md:py-0
              px-4
              text-lg text-gray-700
            "
        >
          <div>
            <NavLink to="/">
              <img className="w-80" src={logo} alt="" />
            </NavLink>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleMobileMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className={`${
              !openMobileMenu && "hidden"
            } w-full md:flex md:items-center md:w-auto`}
            id="menu"
          >
            <ul
              className="
                  pt-4
                  text-base text-white
                  md:flex
                  md:justify-between 
                  md: items-center
                  md:space-x-4
                  md:pt-0
                  space-y-4
                  md:space-y-0"
            >
              <li>
                <a className="block text-xl hover:text-orange-400" rel="noopener noreferrer" href="https://barren-wuffet.gitbook.io/barren-wuffet/" target="_blank">Docs</a>
              </li>
              <li>
                <NavLink className="block text-xl hover:text-orange-400" to="/blog">
                  <Trans>Blog</Trans>
                </NavLink>
              </li>
              {
                LaunchButtons.map(btn => {
                  return (
                    <li key={btn.id}>
                      <NavLink className="block" to={btn.url}>
                        <Button label={btn.name} />
                      </NavLink>
                    </li>
                  )
                })
              }
              <li>
                {
                  shouldDisplayConnect && <ConnectButton />
                }
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
