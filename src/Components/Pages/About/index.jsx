import React from "react";
import KnowMeSection from "./KnowMeSection";
import SkillsSection from "./SkillsSection";

const About = ({ sharedData }) => {
  const isMobile = sharedData?.isMobile;

  return (
    <>
      <KnowMeSection isMobile={isMobile} />
      <SkillsSection isMobile={isMobile} />
    </>
  );
};

export default About;
