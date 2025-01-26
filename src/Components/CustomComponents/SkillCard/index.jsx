import Card from "antd/es/card/Card";
import React from "react";
import CustomTitle from "../CustomTitle";
import { Image } from "antd";
import HoverAnimation from "../../HOC/HoverAnimation";

const SkillCard = ({ data }) => {
  return (
    <HoverAnimation>
      <Card
        hoverable
        style={{
          width: 150,
          height: 190,
          background: "transparent",
          border: "2px solid blueViolet",
          borderRadius: "5px",
          boxShadow: "10px 10px 38px -15px rgba(153,40,153,0.58)",
        }}
      >
        <div className="align-center">
          <Image src={data?.icon} preview={false} />
          <CustomTitle level={5} style={{ marginTop: 20 }}>
            {data?.name}
          </CustomTitle>
        </div>
      </Card>
    </HoverAnimation>
  );
};

export default SkillCard;
