import { Button, Dropdown, Space, Table, Avatar, Tooltip } from "antd";
import Icon, {
  DownOutlined,
  UserOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
import CustomerName from "./CustomerName";

const data = [
  {
    key: "1",
    name: "Flyod Johntosan",
    email: "johntosan@gmail.com",
    status: "success",
    date: "Nov 02, 2021",
    invoice: 10000,
    people: ["a", "b", "c", "d", "e"],
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
    people: ["a", "b", "c", "d", "e"],
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
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Invoice",
    key: "invoice",
    dataIndex: "invoice",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "People",
    key: "people",
    dataIndex: "people",

    render: (text) => <p>{text}</p>,
  },
];

const Transactions = () => {
  return (
    <div className="flex flex-start flex-col self-stretch gap-8">
      <div className="flex self-stretch justify-between items-center">
        <p className="text-neutral-950 text-[2.5rem] not-italic font-semibold leading-[normal] tracking-[-0.1125rem]">
          Transaction History
        </p>
        <Dropdown
          menu={{ items: menuProps }}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <Button>
            Month
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      <div className="flex flex-start gap-3">
        <Dropdown
          menu={{ items: menuProps }}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <Button>
            Recepient
            <DownOutlined />
          </Button>
        </Dropdown>

        <Dropdown
          menu={{ items: menuProps }}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <Button>
            Amount
            <DownOutlined />
          </Button>
        </Dropdown>

        <Dropdown
          menu={{ items: menuProps }}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <Button>
            Status
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Transactions;
