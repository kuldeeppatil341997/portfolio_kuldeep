import React from "react";

const sharedDataHOC = (Component, data) => (props) => {
  return <Component {...props} sharedData={data} />;
};

export default sharedDataHOC;
