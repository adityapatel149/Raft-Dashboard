import React from "react";
import BannerItem from "./BannerItem";
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

import { Layout, Menu, theme, Button, Image, Badge, Avatar } from "antd";
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
      getItem("Home", "home", <HomeOutlined />),
      getItem("Analytic", "analytic", <LineChartOutlined />),
      getItem("Explore", "explore", <CompassOutlined />),
      getItem("Shop", "shop", <ShopOutlined />),
      getItem("Inbox", "inbox", <MessageOutlined />),
    ],
    "group",
  ),
  getItem(
    "Tools",
    "tools",
    null,
    [
      getItem("Settings", "settings", <SettingOutlined />),
      getItem("Help", "help", <QuestionCircleOutlined />),
    ],
    "group",
  ),
  getItem(
    "Projects",
    "projects",
    null,
    [
      getItem("Amazon", "amazon", <FolderOutlined />),
      getItem("InvinityHQ", "invinityhq", <FolderOutlined />),
    ],
    "group",
  ),
];
const App = () => {
  return (
    <Layout hasSider theme="light">
      <Sider
        className="sidebar"
        /*breakpoint={"lg"}*/
        /*collapsedWidth={0}*/
        /*trigger={null}*/
        theme="light"
      >
        <Menu
          defaultSelectedKeys={["home"]}
          items={items}
          className="h-screen bg-white"
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
                <div className="flex w-[6.5rem] h-[6.5rem] justify-center items-center p-1 rounded-[6.5rem] border-4 border-solid border-[#EEE] ">
                  <Badge
                    count={5}
                    color="#6E62E5"
                    offset={[-8, 8]}
                    className="w-full h-full"
                  >
                    <Avatar
                      src="/images/profilepic.jpeg"
                      shape="circle"
                      size="xxl"
                      className="w-full h-full"
                    />
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
            </div>
          </div>
        </Header>
        <Content className="w-full">
          <div className="banner bg-[#6E62E5] w-full flex justify-between items-start self-stretch pl-10 pr-6 py-[2.125rem] rounded-[1.25rem]">
            <BannerItem
              title="Monthly Revenue"
              price="3.500"
              pill="+2.4%"
              prev="1.7k"
            />
            <BannerItem
              title="Monthly Sales"
              price="6.750"
              pill="+1.4%"
              prev="3.1k"
            />
            <BannerItem
              title="Total Profit"
              price="10.900"
              pill="+4.3%"
              prev="8.9k"
            />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
