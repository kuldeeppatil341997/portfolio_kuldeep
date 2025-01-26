import { Drawer, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  UserOutlined,
  CloseOutlined,
  MenuOutlined,
  LaptopOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

const menuItems = [
  { key: "/about", icon: <UserOutlined />, label: "About" },
  {
    key: "/experience",
    icon: <LaptopOutlined />,
    label: "Experience",
  },
  {
    key: "/contact",
    icon: <MessageOutlined />,
    label: "Contact",
  },
];

const Navbar = ({ isMobile, selectedKeys, setSelectedKeys }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const onNavigationClick = (key) => {
    navigate(key);
    setSelectedKeys([key]);
    setOpen(!open);
  };

  const showDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (location?.pathname) {
      setSelectedKeys([location?.pathname]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.pathname]);

  return (
    <>
      {isMobile ? (
        <>
          {open ? (
            <CloseOutlined
              style={{ color: "blueviolet", fontSize: 20 }}
              onClick={showDrawer}
            />
          ) : (
            <MenuOutlined
              style={{ color: "blueviolet", fontSize: 20 }}
              onClick={showDrawer}
            />
          )}
          <Drawer
            placement={"top"}
            closable={false}
            open={open}
            key={"top"}
            onClose={showDrawer}
            style={{ marginTop: "64px" }}
          >
            <Menu
              selectedKeys={selectedKeys}
              mode="vertical"
              theme="dark"
              onClick={(item) => onNavigationClick(item.key)}
              items={menuItems}
            />
          </Drawer>
        </>
      ) : (
        <Menu
          selectedKeys={selectedKeys}
          className="transparentBackground"
          mode="horizontal"
          onClick={(item) => onNavigationClick(item.key)}
          items={menuItems}
        />
      )}
    </>
  );
};

export default Navbar;
