import { Space } from "antd";
import React from "react";
import CustomIcon from "../CustomComponents/CustomIcon";
import CustomTitle from "../CustomComponents/CustomTitle";

const AlertComponent = ({ value, icon }) => (
  <Space size={"middle"}>
    <CustomIcon icon={icon} size="middle" />
    <CustomTitle level={5}>{value}</CustomTitle>
  </Space>
);

export default AlertComponent;
