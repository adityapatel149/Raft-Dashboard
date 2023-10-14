import { Button, Dropdown, Space, Table } from "antd";
import Icon, { DownOutlined } from "@ant-design/icons";

const data = [
  {
    key: "1",
    name: "Floyd Johntosan",
    email: "johntosan@gmail.com",
    status: "success",
    date: "Nov 02, 2021",
    invoice: 10000,
    people: ["a", "b", "c", "d", "e"],
  },
  {
    key: "2",
    name: "Floyd Johntosan",
    email: "johntosan@gmail.com",
    status: "pending",
    date: "Nov 02, 2021",
    invoice: 10000,
    people: ["a", "b", "c"],
  },
  {
    key: "3",
    name: "Floyd Johntosan",
    email: "johntosan@gmail.com",
    status: "success",
    date: "Nov 02, 2021",
    invoice: 10000,
    people: ["a", "b", "c", "d", "e"],
  },
  {
    key: "4",
    name: "Floyd Johntosan",
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

const Transactions = () => {
  return (
    <div className="">
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
  );
};

export default Transactions;
