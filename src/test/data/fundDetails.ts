import openSeaLogo from "../../img/fundLogos/openSeaLogo.png";
import netFineLogo from "../../img/fundLogos/netFineLogo.png";
import funConLogo from "../../img/fundLogos/funConLogo.png";
import btcImg from "../../img/icons/BTCIcon.svg";
import ethImg from "../../img/icons/ETHIcon.svg";
import curveImg from "../../img/icons/curveIcon.svg";
import dopexImg from "../../img/icons/dopexIcon.svg";
import { Fund, FundDetails } from "../../api/models";
import { funds } from "./funds";

export const fundDetails: FundDetails[] = [
  {
    ...(funds.find(
      (f: Fund) => f.id === "0x641162c1ee009e544031aF1157E6fc608edB4e01"
    ) as Fund),
    portfolioValue: 234567,
    newlyAddedMoney: 2560.78,
    upPercentage: 14.67,
    wallet: 8323,
    assetBalances: [
      {
        address: "0x123",
        name: "Bitcoin",
        shortName: "wBTC",
        balance: 30,
        dollarValue: 584991,
        down: 2600,
        percentage: 24.67,
        img: btcImg,
      },
      {
        address: "0x234",
        name: "Ethereum",
        shortName: "ETH",
        balance: 40,
        dollarValue: 811,
        down: 500,
        percentage: 13.97,
        img: ethImg,
      },
    ],
    protocolBalances: [
      {
        address: "0x455",
        name: "Curve",
        dollarValue: 564,
        percentage: 23.6,
        img: curveImg,
      },
      {
        address: "0x645",
        name: "Dopex",
        dollarValue: 2348,
        percentage: 5.8,
        img: dopexImg,
      },
    ],
  },
  {
    ...(funds.find(
      (f) => f.id === "0x741162c1ee009e544031aF1157E6fc608edB4e01"
    ) as Fund),
    logo: funConLogo,
    portfolioValue: 459032,
    newlyAddedMoney: 3511.78,
    upPercentage: 23.67,
    wallet: 5643,
    assetBalances: [
      {
        address: "0x123",
        name: "Bitcoin",
        balance: 53,
        dollarValue: 584993431,
        down: 600,
        percentage: 15.67,
        img: btcImg,
      },
      {
        address: "0x234",
        name: "Ethereum",
        balance: 49,
        dollarValue: 293429,
        down: 50,
        percentage: 33.97,
        img: ethImg,
      },
    ],
    protocolBalances: [
      {
        address: "0x455",
        name: "Curve",
        dollarValue: 5634,
        percentage: 23.6,
        img: curveImg,
      },
      {
        address: "0x645",
        name: "Dopex",
        dollarValue: 2348,
        percentage: 14.8,
        img: dopexImg,
      },
    ],
  },
  {
    ...(funds.find(
      (f) => f.id === "0x841162c1ee009e544031aF1157E6fc608edB4e01"
    ) as Fund),
    logo: netFineLogo,
    portfolioValue: 314589,
    newlyAddedMoney: 856.98,
    upPercentage: 18.45,
    wallet: 6732,
    assetBalances: [
      {
        address: "0x123",
        name: "Bitcoin",
        shortName: "wBTC",
        balance: 49,
        dollarValue: 352353455,
        down: 2300,
        percentage: 32.67,
        img: btcImg,
      },
      {
        address: "0x234",
        name: "Ethereum",
        shortName: "ETH",
        balance: 38,
        dollarValue: 35234232,
        down: 700,
        percentage: 19.97,
        img: ethImg,
      },
    ],
    protocolBalances: [
      {
        address: "0x455",
        name: "Curve",
        dollarValue: 343242,
        percentage: 29.6,
        img: curveImg,
      },
      {
        address: "0x645",
        name: "Dopex",
        dollarValue: 754352,
        percentage: 12.8,
        img: dopexImg,
      },
    ],
  },
];
