import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "../Pages/Intro";
import Experience from "../Pages/Experience";
import About from "../Pages/About";
import sharedDataHOC from "../HOC/SharedDataHOC";
import Contact from "../Pages/Contact";

const RouterComponent = ({ isMobile }) => {
  const sharedData = {
    isMobile,
  };
  const IntoWithData = sharedDataHOC(Intro, sharedData);
  const AboutWithData = sharedDataHOC(About, sharedData);
  const ExperienceWithData = sharedDataHOC(Experience, sharedData);
  const ContactData = sharedDataHOC(Contact, sharedData);

  return (
    <Routes>
      <Route path="/" element={<IntoWithData />} />
      <Route path="/about" element={<AboutWithData />} />
      <Route path="/experience" element={<ExperienceWithData />} />
      <Route path="/contact" element={<ContactData />} />
    </Routes>
  );
};

export default RouterComponent;
