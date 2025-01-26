import React from "react";
import { Alert, Col, Row } from "antd";
import {
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import SocialCard from "../../CustomComponents/SocialCard";
import AlertComponent from "../../Utils/AlertComponent";
import Animate from "../../HOC/Animate";

const information = [
  {
    value: "8605830510",
    icon: <PhoneOutlined />,
    text: "Mobile",
  },
  {
    value: "kuldeeppatil341997@gmail.com",
    icon: <MailOutlined />,
    text: "Email",
  },
  {
    value: "Kuldeep Patil",
    icon: <LinkedinOutlined />,
    text: "Linkedin",
  },
];

const NoteSection = ({ isMobile }) => {
  return (
    <div>
      {isMobile ? (
        <Row gutter={16}>
          {information.map((data) => {
            return (
              <Col span={8}>
                <Animate>
                  <SocialCard
                    value={data.value}
                    icon={data.icon}
                    text={data.text}
                  />
                </Animate>
              </Col>
            );
          })}
        </Row>
      ) : (
        information.map((data) => {
          return (
            <Animate>
              {" "}
              <Alert
                className="marginTop20 transparentBackground"
                message={AlertComponent(data)}
                type="info"
              />
            </Animate>
          );
        })
      )}
    </div>
  );
};

export default NoteSection;
