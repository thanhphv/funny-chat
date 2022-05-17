import React, { useContext, useState } from "react";
import { Avatar, Typography, Button, Tooltip } from "antd";
import styled from "styled-components";
import { AuthContext } from "../../Context/AuthProvider";
import { EnterOutlined, CloseOutlined } from "@ant-design/icons";
import useFirestore from "../../hooks/useFirestore";
import { AppContext } from "../../Context/AppProvider";

const WrapperStyled = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: flex-end;
  color: #000;
  &:hover .anticon-enter {
    display: inline-block;
  }
  .anticon-enter {
    display: none;
  }
  .inlineContainer {
    display: block;
  }
  .mes-container {
    display: flex;
    align-items: center;
  }

  .otherBubble {
    min-width: 60px;
    max-width: 700px;
    padding: 10px 14px;
    /* margin: 6px 8px; */
    background-color: #cabcdc;
    border-radius: 16px 16px 16px 0;
    border: 1px solid #54788e;
    word-break: break-all;
    color: #000;
  }
  .other {
    align-self: flex-start;
  }

  .mes-content {
    display: flex;
    align-items: center;
  }

  .author {
    color: #b3b3b3;
  }

  .deleted {
    opacity: 0.8;
  }
  .mes-container.deleted {
    opacity: 0.8;
    .anticon-enter {
      display: none;
    }
    .ant-btn {
      cursor: default;
    }
  }
`;

const WrapperUserStyled = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: flex-end;
  &:hover .anticon-close {
    display: inline-block;
  }
  .anticon-close {
    display: none;
  }

  .inlineContainer {
    display: inline-flex;
    align-items: center;
    flex-flow: wrap-reverse;
  }
  .inlineContainer.own {
    flex-direction: row-reverse;
    flex-flow: wrap-reverse;
  }

  .ownBubble {
    min-width: 60px;
    max-width: 700px;
    padding: 10px 14px;
    background-color: #3b2a50;
    border-radius: 16px 16px 0 16px;
    border: 1px solid #443f56;
    word-break: break-all;
    color: #fff;
  }

  .own {
    align-self: flex-end;
  }

  .inlineContainer.own.deleted {
    opacity: 0.8;
    .anticon-close {
      display: none;
    }
    .ant-btn {
      cursor: default;
    }
  }
`;

export default function Message({
  text,
  displayName,
  createdAt,
  photoURL,
  mesUid,
  mesId,
  handleDelete,
  message,
  handleReplyMessage,
}) {
  const {
    user: { uid },
  } = useContext(AuthContext);
  return (
    <>
      {uid === mesUid ? (
        <WrapperUserStyled>
          <div
            className={`${
              text === "Tin nhắn đã xoá"
                ? "inlineContainer own deleted"
                : "inlineContainer own"
            }`}
          >
            {/* <Tooltip title="xoá" placement="bottom"> */}
            <Button
              icon={<CloseOutlined />}
              type="text"
              onClick={() =>
                handleDelete(createdAt, mesId, message, uid, mesUid)
              }
              title="xoá"
            ></Button>
            {/* </Tooltip> */}

            <div className="ownBubble own">{text}</div>
          </div>
        </WrapperUserStyled>
      ) : (
        <WrapperStyled>
          <div
            className={`${
              text === "Tin nhắn đã xoá"
                ? "mes-container deleted"
                : "mes-container"
            }`}
          >
            <div className="user-avatar">
              <Avatar size="small" src={photoURL}>
                {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
              </Avatar>
            </div>
            <div className="inlineContainer">
              <Typography.Text className="author">
                {displayName}
              </Typography.Text>
              <div className="mes-content">
                <div className="otherBubble other">{text}</div>
                <Button
                  icon={<EnterOutlined />}
                  type="text"
                  onClick={() => handleReplyMessage(message)}
                  title="Reply"
                ></Button>
              </div>
            </div>
          </div>
        </WrapperStyled>
      )}
    </>
  );
}
