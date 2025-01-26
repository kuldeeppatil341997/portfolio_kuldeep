import { Button } from "antd";
import React from "react";

const CustomIcon = (props) => {
  const { icon, size, uniquekey, url, variant, color } = props || {};

  const onClickIcon = () => {
    if (!url) return;
    window.open(url, "_blank");
  };

  return (
    <Button
      color={color}
      variant={variant}
      key={uniquekey}
      size={size}
      shape="circle"
      icon={icon}
      style={{ backgroundColor: "transparent" }}
      onClick={onClickIcon}
    />
  );
};

export default CustomIcon;
