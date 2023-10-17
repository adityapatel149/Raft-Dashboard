const StatusTag = ({ status }) => {
  return (
    <div className="inline-flex h-10 items-center gap-2.5 shrink-0 px-3 py-2 border-2 rounded-[2.5rem] border-solid border-[#EEE]">
      <div
        className={`rounded-[1rem] w-2.5 h-2.5 ${
          status === "success"
            ? "bg-[#3DC764]"
            : status === "pending"
            ? "bg-[#F4AE44]"
            : ""
        }`}
      ></div>
      <p className="text-lg not-italic font-normal leading-[normal] tracking-[-0.05625rem] capitalize">
        {status}
      </p>
    </div>
  );
};

export default StatusTag;
