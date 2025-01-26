import "./App.css";
import { Col, Flex, Layout, Row, Space } from "antd";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Utils/Navbar";
import RouterComponent from "./Components/Utils/RouterComponent";
import { useEffect, useState } from "react";
import "./Components/Styles/globalCSS.css";
import CustomIcon from "./Components/CustomComponents/CustomIcon";
import { PROFILES_INFO } from "./Components/Constant";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const { Header, Footer, Content } = Layout;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onNavClick = () => {
    setSelectedKeys([]);
  };

  return (
    <div className="App">
      <Router>
        <Layout className="main-layout">
          <Header className="main-header">
            <Row>
              <Col flex={10}>
                <Link to="/" className="nav-logo" onClick={() => onNavClick()}>
                  Portfolio
                </Link>
              </Col>
              <Col flex={0.1}>
                <Navbar
                  isMobile={isMobile}
                  selectedKeys={selectedKeys}
                  setSelectedKeys={setSelectedKeys}
                />
              </Col>
            </Row>
          </Header>
          <Content
            className={
              isMobile
                ? "background main-contentPadding-mobile"
                : "background main-contentPadding-web"
            }
          >
            <RouterComponent isMobile={isMobile} />
          </Content>
          <Footer className="main-footer">
            <Flex
              gap="middle"
              justify="space-between"
              className="align-center"
              vertical={isMobile}
            >
              <div className={!isMobile && "width33"}>
                Designed and Developed by Kuldeep Patil
              </div>
              <div className={!isMobile && "width33"}>Copyright @2025 KP</div>
              <div className={!isMobile && "width33"}>
                <Space size={"large"}>
                  {PROFILES_INFO.map((data) => {
                    return (
                      <CustomIcon
                        variant="text"
                        color="default"
                        uniquekey={data.key}
                        size="large"
                        icon={data.icon}
                        url={data.url}
                      />
                    );
                  })}
                </Space>
              </div>
            </Flex>
          </Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
