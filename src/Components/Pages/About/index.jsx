import React, { useEffect } from "react";
import KnowMeSection from "./KnowMeSection";
import SkillsSection from "./SkillsSection";

const About = ({ sharedData }) => {
  const isMobile = sharedData?.isMobile;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <KnowMeSection isMobile={isMobile} />
      <SkillsSection isMobile={isMobile} />
    </>
  );
};

export default About;
