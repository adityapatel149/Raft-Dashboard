import React from "react";
import { useMedia } from "react-use";
import Banner from "./Banner";
import Logo from "./Logo";
import HeaderContent from "./HeaderContent";
import SalesCard from "./SalesCard";
import Transactions from "./Transactions";
import RightSidebar from "./RightSidebar";
import Promo from "./Promo";
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
  const isWide = useMedia("(min-width: 1200px)");

  const content = !isWide ? (
    <div className="flex self-stretch flex-col items-start gap-10">
      <Promo />
      <div className="h-px self-stretch bg-[#EEF1F6]" />
      <Meetings />
    </div>
  ) : (
    <div></div>
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          //fontFamily: "Inter, sans-serif",
          screenXS: 480,
          screenSM: 640,
          screenMD: 768,
          screenLG: 1024,
          screenXL: 1280,
          screenXSMax: 480,
          screenSMMax: 640,
          screenMDMax: 768,
          screenLGMax: 1024,
          screenXLMax: 1280,
        },
        components: {
          Menu: {
            colorText: "#3f444a",
            fontSize: 16,
            itemActiveBg: "rgba(0, 0, 0, 0.06)",
            itemSelectedBg: "#6E62E5",
            activeBarBorderWidth: 0,
            itemSelectedColor: "#fff",
            itemHeight: 56,
            iconSize: 24,
            iconMarginInlineEnd: "1rem",
            itemMarginBlock: "0rem 0.75rem",
            padding: 8,
          },
          Layout: {
            Sider: {
              xs: "480px",
              sm: "640px",
              md: "768px",
              lg: "1024px",
              xl: "1280px",
              xxl: "1536px",
            },
          },
        },
      }}
    >
      <Layout hasSider theme="light">
        <Sider
          className="sidebar overflow-auto fixed left-0 inset-y-0 lg:p-5 border-l-0 border-t-0 border-b-0 border-r-2 border-r-[#eee] border-solid"
          breakpoint={"lg"}
          collapsible
          trigger={null}
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
          className="site-layout bg-white flex flex-col items-start gap-12 pl-6 pr-1 sm:px-12 sm:py-0;"
          theme="light"
        >
          <Header className="bg-white w-full h-auto px-0 pt-8">
            <HeaderContent />
          </Header>
          <Content className="w-full flex flex-col items-start gap-12">
            <Banner />
            <SalesCard />
            <Transactions />
            {content}
          </Content>
        </Layout>
        <Sider
          breakpoint={"xl"}
          collapsedWidth={0}
          trigger={null}
          theme="light"
          width="24%"
        >
          <RightSidebar />
        </Sider>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
