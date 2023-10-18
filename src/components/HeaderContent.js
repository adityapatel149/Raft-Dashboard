import { Badge, Avatar } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as SearchSvg } from "../assets/icons/iconamoon_search.svg";

const HeaderContent = () => {
  return (
    <div className="flex  flex-col items-start gap-12">
      <div className="header flex self-stretch justify-between items-center">
        <div className="heading flex items-center gap-8 flex-[1_0_0]">
          <div className="flex w-[6.5rem] h-[6.5rem] justify-center items-center p-1 rounded-[6.5rem] border-4 border-solid border-t-[#6E62E5] border-[#EEE] rotate-45">
            <Badge
              count={5}
              color="#6E62E5"
              offset={[-8, 8]}
              className="-rotate-45"
            >
              <Avatar src="/images/profilepic.jpeg" shape="circle" size={90} />
              <div className="bg-white absolute w-6 h-6 rounded-3xl right-0 top-0 translate-x-1 -translate-y-1" />
            </Badge>
          </div>

          <div className="flex flex-col items-start gap-3">
            <h1 className="m-0 mx-0 text-neutral-950 text-[2.5rem] not-italic font-medium leading-[normal] ">
              Good Evening Team!
            </h1>
            <p className="m-0 text-[#717780] text-[1rem] not-italic font-light leading-[normal] ">
              Have an in-depth look at all the metrics within your dashboard.
            </p>
          </div>
        </div>
        <div className="search-button flex w-12 h-12 flex-col justify-center items-center shrink-0 bg-[#EEF1F6] p-2 rounded-[3rem]">
          <Icon
            component={() => (
              <SearchSvg className="stroke-[#989FA8] stroke-[2.75px]" />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
