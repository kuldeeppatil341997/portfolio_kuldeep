import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const CustomTitle = (props) => {
  const { children, style, level, className } = props || {};

  return (
    <Title
      key={`${className}` || `${children}`}
      className={className}
      {...props}
      level={level}
      style={{ margin: 0, ...style }}
    >
      {children}
    </Title>
  );
};

export default CustomTitle;
