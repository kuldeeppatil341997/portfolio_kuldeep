import React from "react";
import ExperienceSection from "./ExperienceSection";
import ButtonSection from "./ButtonSection";
import "./experience.css";

const Experience = ({ sharedData }) => {
  const isMobile = sharedData?.isMobile;

  return (
    <>
      <ExperienceSection isMobile={isMobile} />
      <ButtonSection />
    </>
  );
};

export default Experience;
