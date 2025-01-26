import React, { useEffect } from "react";
import ExperienceSection from "./ExperienceSection";
import ButtonSection from "./ButtonSection";
import "./experience.css";

const Experience = ({ sharedData }) => {
  const isMobile = sharedData?.isMobile;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExperienceSection isMobile={isMobile} />
      <ButtonSection />
    </>
  );
};

export default Experience;
