import React, { useContext, useState } from "react";
import { Modal } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { db } from "../../firebase/config";

export default function ConfirmModal() {
  const { selectedRoom, confirmModal, setConfirmModal, members } =
    useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);

  const logoutRoom = () => {
    const member = members.find((member) => member === uid);
    db.collection("rooms")
      .doc(selectedRoom.id)
      .update({
        members: members.filter((item) => item !== member),
      });
  };

  const handleOk = () => {
    logoutRoom();
    setConfirmModal(false);
  };

  const handleCancel = () => {
    setConfirmModal(false);
  };

  return (
    <div>
      <Modal
        title="Xác nhận thoát phòng"
        visible={confirmModal}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      ></Modal>
    </div>
  );
}
