import { Flex, Image, Space } from "antd";
import React from "react";
import CustomTitle from "../../CustomComponents/CustomTitle";
import { IMAGES_PATH } from "../../Constant";
import Animate from "../../HOC/Animate";

const KnowMeSection = ({ isMobile }) => {
  return (
    <Flex
      className="containerHeight"
      justify="center"
      align="center"
      vertical={isMobile ? true : false}
    >
      <div className={!isMobile && "main-textContainer"}>
        <Animate>
          <CustomTitle className="align-center">KNOW WHO I'M</CustomTitle>
        </Animate>
        <Animate>
          <CustomTitle level={4} style={{ marginTop: 40 }}>
            Hi Everyone, I am{" "}
            <span className="heighlightText">Kuldeep Patil</span> from{" "}
            <span className="heighlightText">Pune, India.</span> I am currently
            employed as a Senior Software Developer at ITC Infotech. I have
            completed B.E. from Shivaji University, Kolhapur
          </CustomTitle>
        </Animate>
        <Animate>
          <Space direction="vertical" className="marginTop20">
            <CustomTitle level={4}>Full Name: Kuldeep Patil </CustomTitle>
            <CustomTitle level={4}>Age: 27 Years</CustomTitle>
            <CustomTitle level={4}>Nationality: Indian</CustomTitle>
            <CustomTitle level={4}>
              Languages: English, Hindi, Marathi
            </CustomTitle>
            <CustomTitle level={4}>Address : Pune</CustomTitle>
          </Space>
        </Animate>
      </div>
      <div className={isMobile ? "marginTop100" : "main-imageContainer"}>
        <Animate>
          <Image
            width={500}
            height={350}
            src={IMAGES_PATH.about_knowMe}
            preview={false}
          />
        </Animate>
      </div>
    </Flex>
  );
};

export default KnowMeSection;
