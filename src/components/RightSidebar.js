import { ConfigProvider, Badge, Button, Avatar, Tooltip } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as ArrowDownSvg } from "../assets/icons/iconamoon_arrow-down-2.svg";
import { ReactComponent as BellSvg } from "../assets/icons/ci_bell.svg";

import Meetings from "./Meetings";
import Promo from "./Promo";

const RightSidebar = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Badge: {
            dotSize: 12,
          },
          Avatar: { groupOverlapping: -16, lineWidth: 3 },
        },
      }}
    >
      <div className="flex self-stretch flex-col items-start gap-10 pl-1 pr-10 pt-8 py-0">
        <div className="flex justify-between items-center self-stretch pt-6 pb-8 px-0">
          <Badge dot color="#6E62E5" className="w-8 h-8" offset={[-8, 4]}>
            <Icon
              component={() => (
                <BellSvg className="stroke-[#989FA8]  stroke-[2.75px] w-8 h-8" />
              )}
            />
          </Badge>
          <div className="flex h-14 items-center gap-4 bg-white shadow-[0px_4px_16px_1px_rgba(0,0,0,0.1)] p-2 rounded-[3.5rem]">
            <div className="flex items-center gap-2">
              <Avatar
                src="/images/profilepic.jpeg"
                shape="circle"
                size="xxl"
                className="w-10 h-10"
              />
              <p className="text-neutral-950 text-xl not-italic font-normal leading-[normal] ">
                Jhontosan
              </p>
            </div>
            <Icon
              component={() => (
                <ArrowDownSvg className="stroke-[#989FA8] w-6 h-6" />
              )}
            />
          </div>
        </div>

        <Promo />
        <div className="h-px self-stretch bg-[#EEF1F6]" />
        <Meetings />
      </div>
    </ConfigProvider>
  );
};

export default RightSidebar;
