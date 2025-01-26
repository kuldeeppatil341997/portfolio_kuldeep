import React, { useEffect } from "react";

import Introduction from "./Introduction";
import PersonalInformationSection from "./PersonalInformationSection";
import ContactSection from "./ContactSection";

const Intro = ({ sharedData }) => {
  const isMobile = sharedData?.isMobile;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Introduction isMobile={isMobile} />
      <PersonalInformationSection isMobile={isMobile} />
      <ContactSection />
    </>
  );
};

export default Intro;
