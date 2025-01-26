import { Modal } from "antd";
import React from "react";

const CustomModal = ({ isModalOpen, title, organization, description }) => {
  return (
    <Modal
      title={`${title} | ${organization}`}
      open={isModalOpen}
      footer={null}
    >
      {description}
    </Modal>
  );
};

export default CustomModal;
