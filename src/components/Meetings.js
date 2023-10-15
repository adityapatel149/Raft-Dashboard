import { ConfigProvider, Badge, Button, Avatar, Tooltip, Calendar } from "antd";
import Icon, { UserOutlined, AntDesignOutlined } from "@ant-design/icons";
import { ReactComponent as ArrowDownSvg } from "../assets/icons/iconamoon_arrow-down-2.svg";
import { ReactComponent as BellSvg } from "../assets/icons/ci_bell.svg";
import { ReactComponent as ArrowRightSvg } from "../assets/icons/solar_arrow-right-outline.svg";

const Meetings = () => {
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
              component={() => <BellSvg className="stroke-[#989FA8] w-8 h-8" />}
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
              <p className="text-neutral-950 text-xl not-italic font-medium leading-[normal] tracking-[-0.1rem]">
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

        <div className="flex flex-col items-start gap-4 self-stretch">
          <p className="text-[#6E62E5] text-lg not-italic font-normal leading-[normal] tracking-[-0.0675rem]">
            Premium Access
          </p>
          <div className="flex flex-col justify-end items-start gap-0.5">
            <p className="text-neutral-950 text-[2.5rem] not-italic font-semibold leading-[normal] tracking-[-0.1125rem]">
              Take Back
            </p>
            <p className="text-neutral-950 text-[2.5rem] not-italic font-semibold leading-[normal] tracking-[-0.1125rem]">
              Your Creative
            </p>
            <div className="flex items-start gap-6">
              <p className="text-neutral-950 text-[2.5rem] not-italic font-semibold leading-[normal] tracking-[-0.1125rem]">
                Control
              </p>
              <div className="flex items-end gap-[-1.3125rem] px-0 py-2">
                <Avatar.Group
                  maxCount={3}
                  size={48}
                  maxStyle={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#1e1e1e",
                  }}
                >
                  <Avatar src="/images/profilepic.jpeg" />
                  <Avatar
                    src="/images/profilepic.jpeg"
                    style={{ backgroundColor: "#f56a00" }}
                  />
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{ backgroundColor: "#87d068" }}
                      icon={<UserOutlined />}
                    />
                  </Tooltip>
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                </Avatar.Group>
              </div>
            </div>
          </div>
          <div className=" flex items-start gap-6">
            <p className="text-neutral-400 text-lg not-italic font-normal leading-[normal] tracking-[-0.0675rem]">
              The Profesional Platform
            </p>
            <Icon
              component={() => (
                <ArrowDownSvg className="stroke-[#989FA8] w-6 h-6" />
              )}
            />
          </div>
        </div>

        <div className="flex justify-between items-center self-stretch border px-4 py-3.5 rounded-2xl border-solid border-[#EEE]">
          <p className="text-[#6E62E5] text-xl not-italic font-normal leading-[normal] tracking-[-0.05625rem]">
            Upgrade Now
          </p>
          <Icon
            component={() => (
              <ArrowRightSvg className="fill-[#6E62E5] w-8 h-8" />
            )}
          />
        </div>
        <Calendar mode="week" />
      </div>
    </ConfigProvider>
  );
};

export default Meetings;
