import { Avatar } from "antd";
import { useMedia } from "react-use";
import { ReactComponent as StarSvg } from "../assets/icons/star.svg";

const CustomerName = ({ name, email }) => {
  const isSmall = useMedia("(min-width: 768px)");

  const avatar = isSmall ? (
    <div className="flex items-center gap-6 relative">
      <Avatar
        src="/images/profilepic.jpeg"
        shape="circle"
        className="w-16 h-16"
      />
      <StarSvg className="w-8 h-8 absolute right-[-0.1875rem] bottom-[-0.25rem]" />
    </div>
  ) : (
    <div></div>
  );

  return (
    <div className="flex items-center gap-6 py-8">
      {avatar}
      <div className="flex flex-col items-start gap-2">
        <p className="text-neutral-950 text-xl not-italic font-medium leading-[normal] ">
          {name}
        </p>
        <p className="text-neutral-400 text-base not-italic font-normal leading-[normal] ">
          {email}
        </p>
      </div>
    </div>
  );
};
export default CustomerName;
