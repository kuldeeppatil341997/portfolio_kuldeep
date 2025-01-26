import { Flex, Image, Space } from "antd";
import React from "react";
import CustomTitle from "../../CustomComponents/CustomTitle";
import { IMAGES_PATH } from "../../Constant";
import Animate from "../../HOC/Animate";

const Introduction = ({ isMobile }) => {
  return (
    <Flex
      gap="small"
      className="containerHeight"
      justify="center"
      align="center"
      vertical={isMobile ? true : false}
    >
      <div className={!isMobile && "main-textContainer"}>
        <Space direction="vertical">
          <Animate>
            <CustomTitle level={2}>Hi, There!</CustomTitle>
          </Animate>
          <Space>
            <Animate>
              <CustomTitle level={1}>I'M</CustomTitle>
            </Animate>
            <Animate>
              <CustomTitle
                level={1}
                style={{ color: "#c770f0", fontWeight: 600 }}
              >
                KULDEEP PATIL
              </CustomTitle>
            </Animate>
          </Space>

          <Animate>
            <CustomTitle level={1} style={{ marginTop: 50 }}>
              React Developer
            </CustomTitle>
          </Animate>
        </Space>
      </div>
      <div className={isMobile ? "marginTop100" : "main-imageContainer"}>
        <Animate>
          <Image
            width={350}
            height={300}
            src={IMAGES_PATH.intro_introduction}
            preview={false}
          />
        </Animate>
      </div>
    </Flex>
  );
};

export default Introduction;
