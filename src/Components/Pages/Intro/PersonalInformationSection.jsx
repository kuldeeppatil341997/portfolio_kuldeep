import { Flex, Image, Space } from "antd";
import React from "react";
import CustomTitle from "../../CustomComponents/CustomTitle";
import { IMAGES_PATH } from "../../Constant";
import Animate from "../../HOC/Animate";

const PersonalInformationSection = ({ isMobile }) => {
  return (
    <Flex
      gap="small"
      justify="center"
      align="center"
      vertical={isMobile ? true : false}
    >
      <div className={!isMobile && "main-textContainer"}>
        <Animate>
          <CustomTitle level={isMobile ? 2 : 1} className="align-center">
            LET ME INTRODUCE MYSELF
          </CustomTitle>
        </Animate>
        <Space direction="vertical">
          <Animate>
            <CustomTitle level={4} style={{ marginTop: 50 }}>
              I’m a Front-End developer who turns design dreams into
              pixel-perfect reality
            </CustomTitle>
            <CustomTitle level={4} className="marginTop20">
              Armed with{" "}
              <span className="heighlightText">JavaScript, TypeScript</span> and{" "}
              <span className="heighlightText">
                modern day javascript frameworks
              </span>{" "}
              like <span className="heighlightText">React,</span> I create
              robust applications that are built to handle anything users throw
              at them.
            </CustomTitle>
          </Animate>
          <Animate>
            <CustomTitle level={4} className="marginTop20">
              I specialize in creating responsive, high-performance and elegant
              applications using modern tools like{" "}
              <span className="heighlightText">SCSS</span> and{" "}
              <span className="heighlightText">Bootstrap</span>
            </CustomTitle>
          </Animate>
          <Animate>
            <CustomTitle level={4} className="marginTop20">
              Need your app to survive the internet stampede? Enter{" "}
              <span className="heighlightText">AWS Amplify, </span>
              my trusty sidekick for scaling your app to infinity and beyond!
            </CustomTitle>
          </Animate>
        </Space>
      </div>
      <div className={isMobile ? "marginTop100" : "main-imageContainer"}>
        <Animate>
          <Image
            width={230}
            height={200}
            src={IMAGES_PATH.intro_personalInfo}
            preview={false}
          />
        </Animate>
      </div>
    </Flex>
  );
};

export default PersonalInformationSection;
