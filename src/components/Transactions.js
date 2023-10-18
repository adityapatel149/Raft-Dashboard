import {
  ConfigProvider,
  Button,
  Dropdown,
  Space,
  Table,
  Avatar,
  Tooltip,
} from "antd";
import Icon, {
  DownOutlined,
  UserOutlined,
  AntDesignOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { ReactComponent as ArrowDownSvg } from "../assets/icons/iconamoon_arrow-down-2.svg";
import { ReactComponent as CalendarSvg } from "../assets/icons/ant-design_calendar-outlined.svg";
import CustomerName from "./CustomerName";
import StatusTag from "./StatusTag";
import People from "./People";

const data = [
  {
    key: "1",
    name: "Flyod Johntosan",
    email: "johntosan@gmail.com",
    status: "success",
    date: "Nov 02, 2021",
    invoice: 10000,
    people: ["a", "b", "c", "d", "e", "e", "e", "e"],
  },
  {
    key: "2",
    name: "Flyod Johntosan",
    email: "johntosan@gmail.com",
    status: "pending",
    date: "Nov 02, 2021",
    invoice: 10000,
    people: ["a", "b", "c"],
  },
  {
    key: "3",
    name: "Flyod Johntosan",
    email: "johntosan@gmail.com",
    status: "success",
    date: "Nov 02, 2021",
    invoice: 10000,
    people: ["a", "b", "c", "d"],
  },
  {
    key: "4",
    name: "Flyod Johntosan",
    email: "johntosan@gmail.com",
    status: "success",
    date: "Nov 02, 2021",
    invoice: 10000,
    people: ["a", "b", "c", "d", "e"],
  },
];

const menuProps = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
  {
    label: "4rd menu item",
    key: "4",
  },
];

const columns = [
  {
    title: "Customer",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <CustomerName name={record.name} email={record.email} />
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text, record) => <StatusTag status={record.status} />,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => (
      <p className="text-neutral-950 text-lg not-italic font-normal leading-[normal] tracking-[-0.05625rem]">
        {text}
      </p>
    ),
  },
  {
    title: "Invoice",
    key: "invoice",
    dataIndex: "invoice",
    render: (text) => (
      <p className="text-neutral-950 text-lg not-italic font-normal leading-[normal] tracking-[-0.05625rem]">
        ${text}
      </p>
    ),
  },
  {
    title: "People",
    key: "people",
    dataIndex: "people",

    render: (text, record) => <People people={record.people} />,

    responsive: ["sm"],
  },
];

const Transactions = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            contentFontSize: 20,
          },
          Table: {
            fontFamily: "Inter, sans-serif",
            headerBg: "#fff",
            headerColor: "#717780",
            headerSplitColor: false,
            fontSize: 16,
            fontWeightStrong: 300,
            padding: 8,
          },
        },
      }}
    >
      <div className="flex flex-start flex-col self-stretch gap-8">
        <div className="flex self-stretch justify-between items-center">
          <p className="text-neutral-950 text-[1.5rem] sm:text-[2.5rem] not-italic font-medium leading-[normal] ">
            Transaction History
          </p>
          <Dropdown
            menu={{ items: menuProps }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <Button className="border-0">
              <div className="flex rounded-[0.75rem] border border-[#EEE] border-solid inline-flex items-center gap-2 sm:gap-3 p-2 sm:px-[1.25rem] sm:py-3 ">
                <CalendarSvg className="fill-[#989FA8] w-6 h-6 sm:w-8 sm:h-8" />
                <p className="text-neutral-800 text-xl not-italic font-normal leading-[normal] tracking-[-0.05rem]">
                  Month
                </p>
                <ArrowDownSvg className="stroke-[#989FA8] w-6 h-6" />
              </div>
            </Button>
          </Dropdown>
        </div>

        <div className="flex flex-start gap-3">
          <Dropdown
            menu={{ items: menuProps }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <Button className="border-0">
              <div className="inline-flex items-center gap-2 bg-[#F3F4F8] p-2 sm:px-8 sm:py-3 rounded-[0.6rem]">
                <p className="text-neutral-700 text-lg sm:text-xl not-italic font-light leading-[normal] ">
                  Recepient
                </p>
                <ArrowDownSvg className="stroke-[#989FA8] w-6 h-6" />
              </div>
            </Button>
          </Dropdown>

          <Dropdown
            menu={{ items: menuProps }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <Button className="border-0">
              <div className="inline-flex items-center gap-2 bg-[#F3F4F8] p-2 sm:px-8 sm:py-3  rounded-[0.6rem]">
                <p className="text-neutral-700 text-lg sm:text-xl not-italic font-light leading-[normal] ">
                  Amount
                </p>
                <ArrowDownSvg className="stroke-[#989FA8] w-6 h-6" />
              </div>
            </Button>
          </Dropdown>

          <Dropdown
            menu={{ items: menuProps }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <Button className="border-0">
              <div className="inline-flex items-center gap-2 bg-[#F3F4F8] p-2 sm:px-8 sm:py-3 rounded-[0.6rem]">
                <p className="text-neutral-700 text-lg sm:text-xl not-italic font-light leading-[normal] ">
                  Status
                </p>
                <ArrowDownSvg className="stroke-[#989FA8] w-6 h-6" />
              </div>
            </Button>
          </Dropdown>
        </div>

        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </ConfigProvider>
  );
};

export default Transactions;
