import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorTextHeading: "white",
          colorTextPlaceholder: "white",
          colorText: "white",
        },
        components: {
          Menu: {
            colorText: "white",
          },
          Modal: {
            contentBg: "#3d2a44",
            headerBg: "#3d2a44",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
