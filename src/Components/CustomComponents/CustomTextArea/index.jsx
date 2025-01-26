import { Input } from "antd";
import React from "react";
const { TextArea } = Input;

const CustomTextArea = (props) => {
  const { placeholder, style, name, onChange, value } = props || {};

  return (
    <TextArea
      rows={4}
      placeholder={placeholder}
      style={{
        backgroundColor: "transparent",
        ...style,
      }}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default CustomTextArea;
