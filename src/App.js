import React from "react";
import Banner from "./Banner";
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

import { ReactComponent as HouseSvg } from "./assets/icons/ci_house-02.svg";
import { ReactComponent as BuildingSvg } from "./assets/icons/ci_building-02.svg";
import { ReactComponent as CompassSvg } from "./assets/icons/ci_compass.svg";
import { ReactComponent as BasketSvg } from "./assets/icons/ci_shopping-bag-02.svg";
import { ReactComponent as ChatSvg } from "./assets/icons/heroicons-outline_chat.svg";
import { ReactComponent as SettingsSvg } from "./assets/icons/ci_settings-future.svg";
import { ReactComponent as HelpSvg } from "./assets/icons/ci_circle-help.svg";
import { ReactComponent as FolderSvg } from "./assets/icons/ci_folder.svg";
import { ReactComponent as SearchSvg } from "./assets/icons/iconamoon_search.svg";
import { ReactComponent as ClockSvg } from "./assets/icons/ci_clock.svg";

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
const items = [
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
          <div
            className="Logo"
            className="flex flex-start gap-2 items-center w-full h-10 m-4"
          >
            <img src="/images/Logo.svg" alt="Omoi" className="h-full" />
            <p className="text-[#1E1E1E] text-[1.75rem] not-italic font-semibold leading-[normal]">
              Omoi
            </p>
          </div>

          <Menu
            defaultSelectedKeys={["home"]}
            items={items}
            className="h-auto bg-white text-lg"
          />
        </Sider>
        <Layout
          className="site-layout bg-white flex flex-col items-start gap-12 px-12 py-0;"
          theme="light"
        >
          <Header className="bg-white w-full h-auto px-0 pt-8">
            <div className="flex w-full flex-col items-start gap-12">
              <div className="header flex w-full justify-between items-center">
                <div className="heading flex items-center gap-8 flex-[1_0_0]">
                  <div className="flex w-[6.5rem] h-[6.5rem] justify-center items-center p-1 rounded-[6.5rem] border-4 border-solid border-t-[#6E62E5] border-[#EEE] rotate-45">
                    <Badge
                      count={5}
                      color="#6E62E5"
                      offset={[-8, 8]}
                      className="w-full h-full -rotate-45"
                    >
                      <Avatar
                        src="/images/profilepic.jpeg"
                        shape="circle"
                        size="xxl"
                        className="w-full h-full"
                      />
                      <div className="bg-white absolute w-6 h-6 rounded-3xl right-0 top-0 translate-x-1 -translate-y-1" />
                    </Badge>
                  </div>

                  <div className="flex flex-col items-start gap-3">
                    <h1 className="m-0 mx-0 text-neutral-950 text-[2.5rem] not-italic font-medium leading-[normal]">
                      Good Evening Team!
                    </h1>
                    <p className="m-0 text-neutral-400 text-[1rem] not-italic font-normal leading-[normal] ;">
                      Have an in-depth look at all the metrics within your
                      dashboard
                    </p>
                  </div>
                </div>
                <div className="search-button flex w-12 h-12 flex-col justify-center items-center shrink-0 bg-[#EEE] p-2 rounded-[3rem]">
                  <Icon
                    component={() => <SearchSvg className="stroke-[#989FA8]" />}
                  />
                </div>
              </div>
            </div>
          </Header>
          <Content className="w-full">
            <Banner />
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
