import { Col, Row } from "antd";
import React from "react";
import CustomTitle from "../../CustomComponents/CustomTitle";
import SkillCard from "../../CustomComponents/SkillCard";
import Animate from "../../HOC/Animate";

const skills = [
  {
    name: "React",
    icon: "Assets/Icons/react.svg",
  },
  {
    name: "Javascript",
    icon: "Assets/Icons/js.svg",
  },
  {
    name: "Typescript",
    icon: "Assets/Icons/typescript.svg",
  },
  {
    name: "Redux",
    icon: "Assets/Icons/redux.svg",
  },
  {
    name: "HTML",
    icon: "Assets/Icons/html.svg",
  },
  {
    name: "CSS",
    icon: "Assets/Icons/css.svg",
  },
  {
    name: "SCSS",
    icon: "Assets/Icons/scss.svg",
  },
  {
    name: "REST",
    icon: "Assets/Icons/rest-api.svg",
  },
  {
    name: "GraphQL",
    icon: "Assets/Icons/graphql.svg",
  },
  {
    name: "Ant Design",
    icon: "Assets/Icons/antd.svg",
  },
  {
    name: "Accessibility",
    icon: "Assets/Icons/accessibility.svg",
  },
  {
    name: "Figma",
    icon: "Assets/Icons/figma.svg",
  },
  {
    name: "Git",
    icon: "Assets/Icons/git.svg",
  },
  {
    name: "Jira",
    icon: "Assets/Icons/jira.svg",
  },
  {
    name: "Storybook",
    icon: "Assets/Icons/storybook.svg",
  },
];

const SkillsSection = () => {
  return (
    <>
      <Animate>
        <CustomTitle level={1} className="align-center">
          PROFESSIONAL SKILLS
        </CustomTitle>
      </Animate>

      <Row
        gutter={[16, 16]}
        wrap
        justify={"center"}
        style={{ margin: "40px 0" }}
      >
        {skills.map((skill) => {
          return (
            <Col>
              <Animate>
                <SkillCard data={skill} />
              </Animate>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default SkillsSection;
