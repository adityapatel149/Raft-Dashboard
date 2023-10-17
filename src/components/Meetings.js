import MeetCard from "./MeetCard";

const meetingList = [
  {
    title: "Meeting with Client",
    time: "12 pm",
    icon: "laptop",
  },
  {
    title: "Weekly Report",
    time: "03 pm",
    icon: "books",
  },
  {
    title: "Daily Scrum Meeting",
    time: "05 pm",
    icon: "notebook",
  },
];

const meetingsRender = meetingList.map((item) => (
  <div className="flex flex-col items-start gap-9 self-stretch">
    <MeetCard title={item.title} time={item.time} icon={item.icon} />
    <div className="h-px self-stretch bg-[#EEF1F6]" />
  </div>
));

const Meetings = () => {
  return (
    <div className="flex flex-col items-start gap-9 self-stretch">
      {meetingsRender}
    </div>
  );
};

export default Meetings;
