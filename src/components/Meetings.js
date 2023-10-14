import { Button } from "antd";

const Meetings = () => {
  return (
    <div className="flex self-stretch flex-col items-start gap-10 pl-1 pr-10 py-0">
      <div className="flex justify-between items-center self-stretch pt-6 pb-8 px-0">
        <img src="" alt="" className="w-8 h-8" />
        <div className="flex h-14 items-center gap-4 bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.05)] p-2 rounded-[3.5rem]">
          <div className="flex items-center gap-2">
            <img src="" alt="" className="w-9 h-9" />
            <p className="text-neutral-950 text-xl not-italic font-medium leading-[normal] tracking-[-0.1rem]">
              Jhontosan
            </p>
          </div>
          <img src="" alt="" className="w-6 h-6" />
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
            <div className="flex items-end gap-[-1.3125rem] px-0 py-2"></div>
          </div>
        </div>
        <div className=" flex items-start gap-2">
          <p className="text-neutral-400 text-lg not-italic font-normal leading-[normal] tracking-[-0.0675rem]">
            The Profesional Platform
          </p>
          <img src="" alt="" className="w-6 h-6" />
        </div>
      </div>

      <div className="flex justify-between items-center self-stretch border px-4 py-3.5 rounded-2xl border-solid border-[#EEE]">
        <p className="text-[#6E62E5] text-xl not-italic font-normal leading-[normal] tracking-[-0.05625rem]">
          Upgrade Now
        </p>
        <img src="" alt="" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Meetings;
