import HomeHash from "@images/Dashboard/home-dash.svg";
import HomeGrid from "@images/Dashboard/home-grid.svg";
import MoneySend from "@images/Dashboard/money-send.svg";
import Swap from "@images/Dashboard/swap.svg";
import Bridge from "@images/Dashboard/bridge.svg";
import Trade from "@images/Dashboard/trade.svg";
import Wallet from "@images/Dashboard/wallet.svg";
import Settings from "@images/Dashboard/settings.svg";
import Support from "@images/Dashboard/support.svg";
import Logout from "@images/Dashboard/logout.svg";
import Lock from "@images/Dashboard/lock.svg";

const navs = [
  {
    id: 0,
    title: "Dashboard",
    icon: HomeHash,
    href: "/dashboard"
  },
  {
    id: 1,
    title: "Safevault",
    icon: HomeGrid,
    href: "/dashboard/vault"
  },
  {
    id: 2,
    title: "Multi Sig",
    icon: Lock,
    href: "/dashboard/multi-sig"
  },
  {
    id: 3,
    title: "Inheritors",
    icon: Lock,
    href: "/dashboard/inheritors"
  }
];

export const newFeature = [
  {
    id: 0,
    title: "Send",
    icon: MoneySend,
    soon: true,
    href: "/dashboard/send"
  },
  {
    id: 1,
    title: "Bridge",
    icon: Bridge,
    soon: true,
    href: "/dashboard/bridge"
  },
  {
    id: 2,
    title: "Swap",
    icon: Swap,
    href: "/dashboard/swap"
  },
  {
    id: 3,
    title: "Trade",
    icon: Trade,
    href: "/dashboard/trade"
  },
  {
    id: 4,
    title: "Buy Assets",
    icon: Wallet,
    href: "/dashboard/wallet"
  }
];

export const Dashfooter = [
  {
    id: 0,
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings"
  },
  {
    id: 1,
    title: "Support",
    icon: Support,
    href: "/dashboard/support"
  },
  {
    id: 2,
    title: "Logout",
    icon: Logout
  }
];

export default navs;
