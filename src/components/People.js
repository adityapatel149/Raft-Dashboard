import { ConfigProvider, Avatar, Tooltip } from "antd";
import Icon, { UserOutlined, AntDesignOutlined } from "@ant-design/icons";

const People = ({ people }) => {
  const avatarStack = people.map((person) => (
    <Avatar src="/images/profilepic.jpeg" style={{ backgroundColor: "#fff" }} />
  ));
  return (
    <ConfigProvider
      theme={{
        components: {
          Avatar: { groupOverlapping: -16, lineWidth: 3 },
        },
      }}
    >
      <Avatar.Group
        maxCount={2}
        size={40}
        maxStyle={{
          fontSize: "1rem",
          fontWeight: 400,
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#1e1e1e",
        }}
      >
        {avatarStack}
      </Avatar.Group>
    </ConfigProvider>
  );
};

export default People;
