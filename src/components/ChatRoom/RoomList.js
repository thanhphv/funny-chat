import React, { useContext } from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
import { AppContext } from "../../Context/AppProvider";
const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .antd-collapse-content-box {
      padding: 0;
    }

    .add-room {
      color: white;
      padding-left: 16px;
    }
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }

  .link-style {
    display: block;
    color: white;
    padding: 16px;
    font-weight: bold;
  }

  .link-style.active {
    color: #3b2a50;
    background-color: white;
  }
`;

const RoomList = () => {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId, selectedRoomId } =
    useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Danh sách các phòng" key="1">
        {rooms.map((room, i) => (
          <a
            key={room.id}
            onClick={() => setSelectedRoomId(room.id)}
            className={`${
              room.id === selectedRoomId ? "link-style active" : "link-style"
            }`}
          >
            {room.name}
          </a>
        ))}
        <Button
          type="text"
          icon={<PlusSquareOutlined />}
          className="add-room"
          onClick={handleAddRoom}
        >
          Thêm phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;
