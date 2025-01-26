import { Input } from "antd";
import React from "react";

const CustomInput = (props) => {
  const { placeholder, style, onChange, type, name, value } = props || {};

  return (
    <Input
      placeholder={placeholder}
      size="large"
      style={{
        backgroundColor: "transparent",
        ...style,
      }}
      onChange={onChange}
      type={type}
      name={name}
      value={value}
      {...props}
    />
  );
};

export default CustomInput;
