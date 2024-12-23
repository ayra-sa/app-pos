import IKontakUser from "components/icons/IKontakUser";
import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React from "react";

function ModalDetailKurir({ setisModal, isModalUp, data }) {
  return (
    <ModalWrapper
      bottom={"10%"}
      left={"15%"}
      right={"15%"}
      top={"10%"}
      maxHeight={300}
      setisModalUp={setisModal}
      isModalUp={isModalUp}
    >
      <div className="d-flex flex-column justify-between">
        <div>
          <div className="p-16px">
            <TitleModal title={`Details Kurir`} setisModalClose={setisModal} />
          </div>

          <hr />

          <div>
            <div className="tab-page-akun-kas-bank-sub">
              <div className="tab-page-akun-kas-bank-sub-top gradient-bottom-blue">
                <div className="flex space-x-3 items-center">
                  <h1 className="text-white font-bold">{data?.name}</h1>
                  <div className="rounded-full bg-white px-2">
                    <p className="text-sm" style={{ color: "#0C66E4" }}>
                      Supplier
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="flex space-x-3 px-4 py-3">
              <IKontakUser />
              <h2 className="text-md" style={{ color: "#172B4D" }}>
                Details Kontak
              </h2>
            </div>
            <hr />

            <div className="my-4 px-5">
              <div className="flex mb-5">
                <DataKontak title={"Email"} desc={data?.email} />
                <DataKontak title={"Handphone"} desc={data?.phone} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

const DataKontak = ({ title, desc }) => {
  return (
    <div className="flex-1">
      <h2 className="text-sm font-bold" style={{ color: "#44546F" }}>
        {title}
      </h2>
      <p className="text-xs mt-1" style={{ color: "#44546F" }}>
        {desc}
      </p>
    </div>
  );
};

export default ModalDetailKurir;
