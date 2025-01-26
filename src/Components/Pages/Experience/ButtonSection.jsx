import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import Animate from "../../HOC/Animate";

const ButtonSection = () => {
  const onClickDownload = () => {
    const link = document.createElement("a");
    link.href = "KuldeepPatilResume.pdf";
    link.download = "KuldeepPatilResume.pdf";
    link.click();
  };

  return (
    <div className="align-center" style={{ margin: "40px 0" }}>
      <Animate>
        <Button
          color="red"
          style={{ width: 300 }}
          icon={<DownloadOutlined />}
          size={"large"}
          ghost
          onClick={onClickDownload}
        >
          Download CV
        </Button>
      </Animate>
    </div>
  );
};

export default ButtonSection;
