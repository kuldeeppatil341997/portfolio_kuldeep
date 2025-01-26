import { Button, Flex, message } from "antd";
import React, { useState } from "react";
import CustomTitle from "../../CustomComponents/CustomTitle";
import NoteSection from "./NoteSection";
import CustomInput from "../../CustomComponents/CustomInput";
import CustomTextArea from "../../CustomComponents/CustomTextArea";
import emailjs from "@emailjs/browser";
import Animate from "../../HOC/Animate";

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const Contact = ({ sharedData }) => {
  const isMobile = sharedData?.isMobile;
  const [formInput, setFormInput] = useState(initialValues);
  const emailRegex = /@/;

  const onChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const onSendMessageClick = () => {
    if (!formInput?.name)
      return message.warning(
        "How we're supposed to know what to call you! Please enter the name."
      );

    if (!formInput?.email)
      return message.warning(
        "It will be very hard to find you from 7 billion people without email!"
      );

    if (!emailRegex.test(formInput?.email))
      return message.warning(
        "You had one job. Enter a valid email. Try again, genius."
      );

    if (!formInput?.message)
      return message.warning(
        "Oh, trying to be mysterious? Nice try—drop a message"
      );

    emailjs
      .send(
        "service_btxxgk2",
        "template_q4o3i4e",
        formInput,
        "5Aykt2BLnJ7cXRECF"
      )
      .then(() => {
        message.success(
          "We got your email. Our carrier pigeon will respond soon."
        );
        setFormInput(initialValues);
      })
      .catch(() =>
        message.error(
          "Looks like something is wrong. Please wait. Our team is looking into it."
        )
      );
  };

  return (
    <Flex className="containerHeight" justify="center" align="center" vertical>
      <div className="align-center marginTop20">
        <Animate>
          <CustomTitle level={2}>GET IN TOUCH</CustomTitle>
        </Animate>
      </div>
      <Flex
        vertical={isMobile ? true : false}
        style={{ marginTop: 50, width: "100%" }}
      >
        <div style={isMobile ? null : { width: "65%", padding: 20 }}>
          <Animate>
            <CustomTitle level={3}>SEND US A NOTE</CustomTitle>
          </Animate>

          <div className="align-center marginTop20">
            <Flex gap="large">
              <Animate>
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={onChange}
                  value={formInput?.name}
                />
              </Animate>
              <Animate>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={onChange}
                  value={formInput?.email}
                />
              </Animate>
            </Flex>
          </div>
          <div className="align-center marginTop20">
            <Animate>
              <CustomTextArea
                placeholder="Tell us more about your needs"
                name="message"
                onChange={onChange}
                value={formInput?.message}
              />
            </Animate>
          </div>
          <div className="align-center marginTop20">
            <Animate>
              <Button
                shape="round"
                size={"large"}
                ghost
                onClick={onSendMessageClick}
              >
                Send Message
              </Button>
            </Animate>
          </div>
        </div>
        <div
          style={
            isMobile
              ? { marginTop: 50 }
              : {
                  width: "35%",
                  padding: 20,
                }
          }
        >
          <NoteSection isMobile={isMobile} />
        </div>
      </Flex>
    </Flex>
  );
};

export default Contact;
