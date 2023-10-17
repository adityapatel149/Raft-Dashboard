import Icon from "@ant-design/icons";

import { ReactComponent as HouseSvg } from "./assets/icons/ci_house-02.svg";
import { ReactComponent as BuildingSvg } from "./assets/icons/ci_building-02.svg";
import { ReactComponent as CompassSvg } from "./assets/icons/ci_compass.svg";
import { ReactComponent as BasketSvg } from "./assets/icons/ci_shopping-bag-02.svg";
import { ReactComponent as ChatSvg } from "./assets/icons/heroicons-outline_chat.svg";
import { ReactComponent as SettingsSvg } from "./assets/icons/ci_settings-future.svg";
import { ReactComponent as HelpSvg } from "./assets/icons/ci_circle-help.svg";
import { ReactComponent as FolderSvg } from "./assets/icons/ci_folder.svg";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const menuItems = [
  getItem(
    "",
    "",
    null,
    [
      getItem(
        "Home",
        "home",
        <Icon component={() => <HouseSvg className="stroke-[2.75px]" />} />,
      ),
      getItem(
        "Analytic",
        "analytic",
        <Icon component={() => <BuildingSvg className="stroke-[2.75px]" />} />,
      ),
      getItem(
        "Explore",
        "explore",
        <Icon component={() => <CompassSvg className="stroke-[2.75px]" />} />,
      ),
      getItem(
        "Shop",
        "shop",
        <Icon component={() => <BasketSvg className="stroke-[2.75px]" />} />,
      ),
      getItem(
        "Inbox",
        "inbox",
        <Icon component={() => <ChatSvg className="stroke-[2.75px]" />} />,
      ),
    ],
    "group",
  ),
  getItem(
    "Tools",
    "tools",
    null,
    [
      getItem(
        "Settings",
        "settings",
        <Icon component={() => <SettingsSvg className="stroke-[2.75px]" />} />,
      ),
      getItem(
        "Help",
        "help",
        <Icon component={() => <HelpSvg className="stroke-[2.75px]" />} />,
      ),
    ],
    "group",
  ),
  getItem(
    "Projects",
    "projects",
    null,
    [
      getItem(
        "Amazon",
        "amazon",
        <Icon component={() => <FolderSvg className="stroke-[2.75px]" />} />,
      ),
      getItem(
        "InvinityHQ",
        "invinityhq",
        <Icon component={() => <FolderSvg className="stroke-[2.75px]" />} />,
      ),
    ],
    "group",
  ),
];

export default menuItems;
