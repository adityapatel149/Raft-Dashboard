import React from "react";
import Banner from "./Banner";
import Logo from "./Logo";
import HeaderContent from "./HeaderContent";
import SalesCard from "./SalesCard";
import Transactions from "./Transactions";
import Meetings from "./Meetings";

import { ReactComponent as ClockSvg } from "../assets/icons/ci_clock.svg";
import menuItems from "../menuItems";

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

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          //fontFamily: "Inter, sans-serif",
        },
        components: {
          Menu: {
            itemActiveBg: "rgba(0, 0, 0, 0.06)",
            itemSelectedBg: "#6E62E5",
            activeBarBorderWidth: 0,
            itemSelectedColor: "#fff",
            itemHeight: 56,
            iconSize: 24,
            iconMarginInlineEnd: "1rem",
            groupTitleLineHeight: 56,
          },
        },
      }}
    >
      <Layout hasSider theme="light">
        <Sider
          className="sidebar overflow-auto fixed left-0 inset-y-0 p-5 border-l-0 border-t-0 border-b-0 border-r-[#eee] border-r border-solid"
          /*breakpoint={"lg"}*/
          /*collapsedWidth={0}*/
          /*trigger={null}*/
          theme="light"
          width="18%"
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
            <Transactions />
          </Content>
          {/*<Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UEDs
          </Footer>*/}
        </Layout>
        <Sider
          /*breakpoint={"lg"}*/
          /*collapsedWidth={0}*/
          /*trigger={null}*/
          theme="light"
          width="24%"
        >
          <Meetings />
        </Sider>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
