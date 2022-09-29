import React from "react";
import { t } from "@lingui/macro";
import "./Footer.css";
import logoImg from "../../img/logo_bw_sq.svg";
import twitterIcon from "../../img/ic_twitter.svg";
import discordIcon from "../../img/ic_discord.svg";
// import telegramIcon from "../../img/ic_telegram.svg";
import githubIcon from "../../img/ic_github.svg";
// import mediumIcon from "../../img/ic_medium.svg";
import { NavLink } from "react-router-dom";

const appLinks = [
  // { text: t`Terms & conditions`, link: "/terms-and-conditions" },
  // { text: t`About`, link: "/about" },
  // { text: t`Referral Terms`, link: "/referral-terms" },
  { text: t`Blog`, link: "https://www.jezer0x.com/", external: true },
];

const socialLinks = [
  { link: "https://twitter.com/jezer0x", name: "Twitter", icon: twitterIcon },
  { link: "https://github.com/jezer0x", name: "Github", icon: githubIcon },
  // { link: "https://t.me/GMX_IO", name: "Telegram", icon: telegramIcon },
  { link: "https://discord.gg/jkBF9mpQ6w", name: "Discord", icon: discordIcon },
];

export default function Footer() {
  return (
    <div className="Footer">
      <div className={"Footer-wrapper"}>
        <div className="Footer-logo">
          <img src={logoImg} alt="BarrenWuffet" />
        </div>
        <div className="Footer-social-link-block">
          {socialLinks.map((platform) => {
            return (
              <a
                key={platform.name}
                className="App-social-link"
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={platform.icon} alt={platform.name} />
              </a>
            );
          })}
        </div>
        <div className="Footer-links">
          {/* @ts-ignore */}
          {appLinks.map(({ external, text, link, isAppLink }): JSX.Element => {
            if (external) {
              return (
                <a
                  key={text}
                  target="_blank"
                  href={link}
                  className="Footer-link"
                  rel="noopener noreferrer"
                >
                  {text}
                </a>
              );
            }
            return (
              <NavLink key={link} to={link} className="Footer-link">
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
