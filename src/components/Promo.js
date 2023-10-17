import { ReactComponent as ArrowRightSvg } from "../assets/icons/solar_arrow-right-outline.svg";
import { Avatar, Tooltip } from "antd";
import Icon, { UserOutlined, AntDesignOutlined } from "@ant-design/icons";
import { ReactComponent as ArrowDownSvg } from "../assets/icons/iconamoon_arrow-down-2.svg";

const Promo = () => {
  return (
    <div className="flex self-stretch flex-col items-start gap-10">
      <div className="flex flex-col items-start gap-4 self-stretch">
        <p className="text-[#6E62E5] text-lg not-italic font-light leading-[normal] ">
          Premium Access
        </p>
        <div className="flex flex-col justify-end items-start gap-0.5">
          <p className="text-neutral-950 text-[2.5rem] not-italic font-medium leading-[normal] ">
            Take Back
          </p>
          <p className="text-neutral-950 text-[2.5rem] not-italic font-medium leading-[normal] ">
            Your Creative
          </p>
          <div className="flex items-start gap-6">
            <p className="text-neutral-950 text-[2.5rem] not-italic font-medium leading-[normal] ">
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
          <p className="text-neutral-400 text-lg not-italic font-light leading-[normal]">
            The Profesional Platform
          </p>
          <Icon
            component={() => (
              <ArrowDownSvg className="stroke-[#989FA8] w-6 h-6" />
            )}
          />
        </div>
      </div>

      <div className="flex justify-between items-center self-stretch border-2 px-4 py-3.5 rounded-2xl border-solid border-[#EEE]">
        <p className="text-[#6E62E5] text-xl not-italic font-light leading-[normal] ">
          Upgrade Now
        </p>
        <Icon
          component={() => <ArrowRightSvg className="fill-[#6E62E5] w-8 h-8" />}
        />
      </div>
    </div>
  );
};

export default Promo;
