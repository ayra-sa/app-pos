import React from "react";
import Modal from "react-modal";

const ModalWrapper = ({
  isModalUp,
  setisModalUp,
  children,
  top,
  left,
  right,
  bottom,
  padding,
  maxHeight,
  overflow,
}) => {
  return (
    <Modal
      isOpen={isModalUp}
      onRequestClose={() => setisModalUp(false)}
      style={{
        content: {
          top,
          left,
          right,
          bottom,
          padding: padding ? padding : "0px",
          maxHeight,
          overflow,
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
