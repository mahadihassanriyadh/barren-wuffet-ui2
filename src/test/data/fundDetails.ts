import openSeaLogo from "../../img/fundLogos/openSeaLogo.png";
import netFineLogo from "../../img/fundLogos/netFineLogo.png";
import funConLogo from "../../img/fundLogos/funConLogo.png";
import btcImg from "../../img/icons/BTCIcon.svg";
import ethImg from "../../img/icons/ETHIcon.svg";
import curveImg from "../../img/icons/curveIcon.svg";
import dopexImg from "../../img/icons/dopexIcon.svg";
import { FundDetails } from "../../api/models";

export const fundDetails: FundDetails[] = [
  {
    id: "0x641162c1ee009e544031aF1157E6fc608edB4e01",
    name: "Raising Fund",
    logo: openSeaLogo,
    investor_count: 107,
    expiresIn: 751,
    portfolioValue: 234567,
    startingValue: 400,
    dataUpdated: "1 min",
    newlyAddedMoney: 2560.78,
    upPercentage: 14.67,
    wallet: 8323,
    walletAddress: "8BMMk4gdD263q7QJt3VLWnG2x1mt9HV56b4vX774n4Sc",
    assetBalances: [
      {
        name: "Bitcoin",
        shortName: "wBTC",
        balance: 30,
        dollarValue: 584991,
        down: 2600,
        percentage: 24.67,
        img: btcImg,
      },
      {
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
        name: "Curve",
        dollarValue: 564,
        percentage: 23.6,
        img: curveImg,
      },
      {
        name: "Dopex",
        dollarValue: 2348,
        percentage: 5.8,
        img: dopexImg,
      },
    ],
  },
  {
    id: "2",
    name: "Closed Fund",
    logo: funConLogo,
    investor_count: 87,
    expiresIn: 677,
    portfolioValue: 459032,
    startingValue: 700,
    dataUpdated: "7 min",
    newlyAddedMoney: 3511.78,
    upPercentage: 23.67,
    wallet: 5643,
    walletAddress: "3423ff4r4gdD263q7QJtjudf739t9HV56b4vX324ffsdfs",
    assetBalances: [
      {
        name: "Bitcoin",
        shortName: "wBTC",
        balance: 53,
        dollarValue: 584993431,
        down: 600,
        percentage: 15.67,
        img: btcImg,
      },
      {
        name: "Ethereum",
        shortName: "ETH",
        balance: 49,
        dollarValue: 293429,
        down: 50,
        percentage: 33.97,
        img: ethImg,
      },
    ],
    protocolBalances: [
      {
        name: "Curve",
        dollarValue: 5634,
        percentage: 23.6,
        img: curveImg,
      },
      {
        name: "Dopex",
        dollarValue: 2348,
        percentage: 14.8,
        img: dopexImg,
      },
    ],
  },
  {
    id: "3",
    name: "Deployed Fund",
    logo: netFineLogo,
    investor_count: 145,
    expiresIn: 952,
    portfolioValue: 314589,
    startingValue: 340,
    dataUpdated: "10 min",
    newlyAddedMoney: 856.98,
    upPercentage: 18.45,
    wallet: 6732,
    walletAddress: "sdifnu43824339024kdfn20498ksdn2349ndfwf2",
    assetBalances: [
      {
        name: "Bitcoin",
        shortName: "wBTC",
        balance: 49,
        dollarValue: 352353455,
        down: 2300,
        percentage: 32.67,
        img: btcImg,
      },
      {
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
        name: "Curve",
        dollarValue: 343242,
        percentage: 29.6,
        img: curveImg,
      },
      {
        name: "Dopex",
        dollarValue: 754352,
        percentage: 12.8,
        img: dopexImg,
      },
    ],
  },
];
