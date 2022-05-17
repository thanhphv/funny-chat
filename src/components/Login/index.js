import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";
import styled from "styled-components";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";

const { Title } = Typography;

const LoginWrapperStyled = styled.div`
  h3 {
    font-size: 1.8rem;
    padding: 30px 0 20px 0;
    color: #c216d6;
  }

  .anticon-facebook {
    color: #395693;
  }
`;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <LoginWrapperStyled>
      <Row justify="center" style={{ height: 100 }}>
        <Col lg={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Funny Chat
          </Title>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={() => handleLogin(googleProvider)}
          >
            <GoogleCircleFilled />
            Đăng nhập bằng Google
          </Button>
          <Button
            style={{ width: "100%" }}
            onClick={() => handleLogin(fbProvider)}
          >
            <FacebookFilled />
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </LoginWrapperStyled>
  );
}
