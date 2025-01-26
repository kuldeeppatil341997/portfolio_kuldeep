import { Card, Tag } from "antd";
import React, { useState } from "react";
import CustomTitle from "../CustomTitle";
import CustomModal from "../CustomModal";
import HoverAnimation from "../../HOC/HoverAnimation";

const CustomCard = ({ year, title, organization, info, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HoverAnimation>
      <Card
        style={{ marginTop: 20, backgroundColor: "transparent" }}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        {year && <Tag color="#c770f0">{year}</Tag>}
        {title && (
          <CustomTitle level={3} style={{ marginTop: 10 }}>
            {title}
          </CustomTitle>
        )}
        {organization && (
          <CustomTitle level={5} style={{ color: "#c770f0" }}>
            {organization}
          </CustomTitle>
        )}
        <CustomTitle level={5} style={{ marginTop: 10 }}>
          {info}
        </CustomTitle>
        <CustomModal
          isModalOpen={isModalOpen}
          title={title}
          organization={organization}
          description={description}
        />
      </Card>
    </HoverAnimation>
  );
};

export default CustomCard;
