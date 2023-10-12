import React from "react";
import Banner from "./Banner";
import Logo from "./Logo";
import HeaderContent from "./HeaderContent";
import SalesCard from "./SalesCard";

import Icon, {
  HomeOutlined,
  ShopOutlined,
  LineChartOutlined,
  CompassOutlined,
  MessageOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  FolderOutlined,
} from "@ant-design/icons";

import { ReactComponent as HouseSvg } from "../assets/icons/ci_house-02.svg";
import { ReactComponent as BuildingSvg } from "../assets/icons/ci_building-02.svg";
import { ReactComponent as CompassSvg } from "../assets/icons/ci_compass.svg";
import { ReactComponent as BasketSvg } from "../assets/icons/ci_shopping-bag-02.svg";
import { ReactComponent as ChatSvg } from "../assets/icons/heroicons-outline_chat.svg";
import { ReactComponent as SettingsSvg } from "../assets/icons/ci_settings-future.svg";
import { ReactComponent as HelpSvg } from "../assets/icons/ci_circle-help.svg";
import { ReactComponent as FolderSvg } from "../assets/icons/ci_folder.svg";
import { ReactComponent as ClockSvg } from "../assets/icons/ci_clock.svg";

import {
  ConfigProvider,
  Layout,
  Menu,
  theme,
  Button,
  Image,
  Badge,
  Avatar,
} from "antd";
const { Header, Content, Footer, Sider } = Layout;

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
      getItem("Home", "home", <Icon component={() => <HouseSvg />} />),
      getItem(
        "Analytic",
        "analytic",
        <Icon component={() => <BuildingSvg />} />,
      ),
      getItem("Explore", "explore", <Icon component={() => <CompassSvg />} />),
      getItem("Shop", "shop", <Icon component={() => <BasketSvg />} />),
      getItem("Inbox", "inbox", <Icon component={() => <ChatSvg />} />),
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
        <Icon component={() => <SettingsSvg />} />,
      ),
      getItem("Help", "help", <Icon component={() => <HelpSvg />} />),
    ],
    "group",
  ),
  getItem(
    "Projects",
    "projects",
    null,
    [
      getItem("Amazon", "amazon", <Icon component={() => <FolderSvg />} />),
      getItem(
        "InvinityHQ",
        "invinityhq",
        <Icon component={() => <FolderSvg />} />,
      ),
    ],
    "group",
  ),
];

const App = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemActiveBg: "rgba(0, 0, 0, 0.06)",
            itemSelectedBg: "#6E62E5",
            activeBarBorderWidth: 0,
            itemSelectedColor: "#fff",
            itemHeight: 56,
            iconSize: 24,
            iconMarginInlineEnd: "1rem",
          },
        },
      }}
    >
      <Layout hasSider theme="light">
        <Sider
          className="sidebar overflow-auto h-screen fixed left-0 inset-y-0 p-5 border-l-0 border-t-0 border-b-0 border-r-[#eee] border-r border-solid"
          /*breakpoint={"lg"}*/
          /*collapsedWidth={0}*/
          /*trigger={null}*/
          theme="light"
          width="20%"
        >
          <Logo />

          <Menu
            defaultSelectedKeys={["home"]}
            items={menuItems}
            className="h-auto bg-white text-lg"
          />
        </Sider>
        <Layout
          className="site-layout bg-white flex flex-col items-start gap-12 px-12 py-0;"
          theme="light"
        >
          <Header className="bg-white w-full h-auto px-0 pt-8">
            <HeaderContent />
          </Header>
          <Content className="w-full flex flex-col items-start gap-12">
            <Banner />
            <SalesCard />
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UEDs
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
