import { Flex } from "antd";
import React from "react";
import CustomTitle from "../../CustomComponents/CustomTitle";
import CustomCard from "../../CustomComponents/CustomCard";
import { education, experience } from "../../Constant";
import Animate from "../../HOC/Animate";

const ExperienceSection = ({ isMobile }) => {
  const boxStyle = {
    marginTop: 80,
  };
  return (
    <Flex style={boxStyle} vertical={isMobile ? true : false}>
      <div className={!isMobile && "experience-sectionLayout"}>
        <Animate>
          <CustomTitle level={2}>My Education</CustomTitle>
        </Animate>

        {education.map((data) => {
          return (
            <Animate>
              <CustomCard {...data} />
            </Animate>
          );
        })}
      </div>
      <div
        className={
          isMobile ? "experience-marginTop50" : "experience-sectionLayout"
        }
      >
        <Animate>
          <CustomTitle level={2}>My Experience</CustomTitle>
        </Animate>

        {experience.map((data) => {
          return (
            <Animate>
              <CustomCard {...data} />
            </Animate>
          );
        })}
      </div>
    </Flex>
  );
};

export default ExperienceSection;
