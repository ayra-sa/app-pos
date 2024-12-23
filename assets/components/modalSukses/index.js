import IClose from "components/icons/Close";
import IConfirmation from "components/icons/IConfirmation";
import Link from "next/link";
import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalSukses = ({ isModalUp, setisModalUp, actionCallback, title }) => {
  useEffect(() => {
    setTimeout(() => {
      setisModalUp(false);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalUp]);

  return (
    <Modal
      isOpen={isModalUp}
      onRequestClose={() => setisModalUp(false)}
      style={customStyles}
    >
      <div
        style={{
          paddingBottom: "32px",
        }}
        className="modal-confirmation-add-kontainer"
      >
        <ISUkses />
        <div
          style={{
            marginTop: "16px",
            color: "#172B4D",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          {title}
        </div>
      </div>
    </Modal>
  );
};

const ISUkses = () => {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M146.667 80.0026C146.667 116.822 116.819 146.669 80.0002 146.669C43.1812 146.669 13.3335 116.822 13.3335 80.0026C13.3335 43.1836 43.1812 13.3359 80.0002 13.3359C116.819 13.3359 146.667 43.1836 146.667 80.0026ZM62.5495 73.7954C63.3629 74.1448 64.0985 74.6527 64.7135 75.2894L73.3335 83.9094L95.2868 61.9561C95.9018 61.3193 96.6374 60.8115 97.4508 60.4621C98.2641 60.1127 99.1389 59.9288 100.024 59.9211C100.909 59.9134 101.787 60.0821 102.607 60.4173C103.426 60.7525 104.17 61.2475 104.796 61.8734C105.422 62.4994 105.917 63.2437 106.252 64.063C106.587 64.8824 106.756 65.7602 106.748 66.6454C106.741 67.5306 106.557 68.4054 106.207 69.2188C105.858 70.0321 105.35 70.7678 104.713 71.3827L78.0468 98.0494C76.7966 99.2992 75.1012 100.001 73.3335 100.001C71.5657 100.001 69.8703 99.2992 68.6201 98.0494L55.2868 84.7161C54.6501 84.1011 54.1422 83.3655 53.7928 82.5521C53.4434 81.7387 53.2595 80.8639 53.2518 79.9788C53.2441 79.0936 53.4128 78.2157 53.748 77.3964C54.0832 76.5771 54.5782 75.8327 55.2042 75.2068C55.8301 74.5808 56.5745 74.0858 57.3938 73.7506C58.2131 73.4154 59.091 73.2467 59.9762 73.2544C60.8613 73.2621 61.7361 73.446 62.5495 73.7954Z"
        fill="#22A06B"
      />
    </svg>
  );
};

export default ModalSukses;
