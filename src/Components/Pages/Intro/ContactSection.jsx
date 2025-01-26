import { Flex, Space } from "antd";
import React from "react";
import CustomTitle from "../../CustomComponents/CustomTitle";
import CustomIcon from "../../CustomComponents/CustomIcon";
import { PROFILES_INFO } from "../../Constant";
import Animate from "../../HOC/Animate";

const ContactSection = () => {
  return (
    <Flex gap="small" style={{ marginTop: 80 }} justify="center" align="center">
      <Space direction="vertical" className="align-center">
        <Animate>
          <CustomTitle level={1}>FIND ME ON</CustomTitle>
        </Animate>
        <Animate>
          <CustomTitle level={5}>Feel free to connect with me</CustomTitle>
        </Animate>
        <Space size={"large"} style={{ margin: "30px 0" }}>
          {PROFILES_INFO.map((data) => (
            <Animate>
              <CustomIcon
                uniquekey={data.key}
                size="large"
                icon={data.icon}
                url={data.url}
              />
            </Animate>
          ))}
        </Space>
      </Space>
    </Flex>
  );
};

export default ContactSection;
