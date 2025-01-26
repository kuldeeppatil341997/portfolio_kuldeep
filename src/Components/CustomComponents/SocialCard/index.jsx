import { Card, Typography } from "antd";
import React from "react";
const { Text } = Typography;

const SocialCard = ({ value, icon, text }) => {
  return (
    <Card className="align-center transparentBackground">
      <div style={{ fontSize: 25 }}>{icon}</div>
      <Text ellipsis={{ tooltip: text }} style={{ width: 200 }}>
        {text}
      </Text>
      <Text ellipsis={{ tooltip: value }} style={{ width: 200 }}>
        {value}
      </Text>
    </Card>
  );
};

export default SocialCard;
