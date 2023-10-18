import { useMedia } from "react-use";

const StatusTag = ({ status }) => {
  const isSmall = useMedia("(min-width: 768px)");

  const content = isSmall ? (
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
      <p className="text-lg not-italic font-medium leading-[normal] capitalize">
        {status}
      </p>
    </div>
  ) : (
    <div className="p-4">
      <div
        className={`rounded-[1rem] w-4 h-4 ${
          status === "success"
            ? "bg-[#3DC764]"
            : status === "pending"
            ? "bg-[#F4AE44]"
            : ""
        }`}
      />
    </div>
  );

  return <div>{content}</div>;
};

export default StatusTag;
