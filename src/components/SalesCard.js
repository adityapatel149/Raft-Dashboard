import { ReactComponent as ArrowUpSvg } from "../assets/icons/dashicons_arrow-up.svg";
import Icon from "@ant-design/icons";
import Chart from "./Chart";

const SalesCard = () => {
  return (
    <div className="w-full flex justify-between items-start self-stretch rounded-[1.25rem] border-2 border-[#eee] border-solid">
      <div className="inline-flex flex-col items-start gap-14  px-10 py-8">
        <div className="flex flex-col items-start gap-[0.5625rem]">
          <p className="text-neutral-950 text-[1.625rem] font-medium leading-[normal] tracking-[-0.0325rem]">
            Total Sales & Cost
          </p>
          <p className="text-neutral-400 text-lg not-italic font-light leading-[normal]">
            Last 60 days
          </p>
        </div>

        <div className="flex flex-col items-start gap-2.5">
          <div className="flex w-[20.6875rem] justify-between items-center">
            <p className="text-[#6E62E5] text-5xl not-italic font-bold leading-[normal] ">
              $956.82k
            </p>
            <div className="flex items-start gap-0.5 bg-[#C3F9D9] px-2 py-1.5 rounded-[2rem]">
              <Icon
                component={() => <ArrowUpSvg className="fill-[#3DC764]" />}
              />
              <p className="text-[#3DC764] text-base not-italic font-normal leading-4">
                +5.4%
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[0.25rem]">
            <p className="text-[#3DC764] text-lg font-normal not-italic leading-[normal">
              +8.20k
            </p>
            <p className="text-neutral-400 text-lg not-italic font-light leading-[normal]">
              vs prev. 60 days
            </p>
          </div>
        </div>
      </div>

      <Chart className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch" />
    </div>
  );
};

export default SalesCard;
