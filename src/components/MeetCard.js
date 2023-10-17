import Icon from "@ant-design/icons";
import { ReactComponent as VideoSvg } from "../assets/icons/la_video.svg";
import { ReactComponent as ClockSvg } from "../assets/icons/ci_clock.svg";

const MeetCard = ({ title, time, icon }) => {
  const imgSrc = `/images/${icon}.png`;
  return (
    <div className="flex items-center gap-6 self-stretch">
      <img src={imgSrc} alt="" className="w-[4.75rem] h-[4.75rem]" />

      <div className="flex flex-col justify-center items-start gap-[0.6875rem] flex-[1_0_0]">
        <p className="text-neutral-950 text-xl not-italic font-medium leading-[normal] ">
          {title}
        </p>
        <div className="flex justify-between items-start self-stretch">
          <div className="flex items-center gap-3">
            <Icon
              component={() => <VideoSvg className="fill-[#989FA8] w-7 h-7" />}
            />
            <p className="text-neutral-400 text-xl not-italic font-light leading-[normal] ">
              Google Meet
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon
              component={() => (
                <ClockSvg className="stroke-[#989FA8] w-7 h-7" />
              )}
            />
            <p className="text-neutral-400 text-lg not-italic font-light leading-[normal]">
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetCard;
