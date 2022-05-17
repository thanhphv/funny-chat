import React from "react";
import { Row, Col } from "antd";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
import styled from "styled-components";

const SidebarStyle = styled.div`
  background: #3f0e40;
  color: white;
  height: 100vh;
`;

const Sidebar = () => {
  return (
    <SidebarStyle>
      <div>
        <Row>
          <Col span={24}>
            <UserInfo />
          </Col>
          <Col span={24}>
            <RoomList />
          </Col>
        </Row>
      </div>
    </SidebarStyle>
  );
};

export default Sidebar;
