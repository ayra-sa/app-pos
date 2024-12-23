import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React from "react";
import { useSelector } from "react-redux";

function ModalDetailBrand({ setisModal, isModalUp, namaBrand, deskripsi }) {
  const {dataDetail} = useSelector(state => state.brand)
  return (
    <ModalWrapper
      bottom={"10%"}
      left={"15%"}
      right={"15%"}
      top={"10%"}
      maxHeight={250}
      setisModalUp={setisModal}
      isModalUp={isModalUp}
    >
      <div className="d-flex flex-column justify-between">
        <div>
          <div className="p-16px">
            <TitleModal title={`Detail Brand`} setisModalClose={setisModal} />
          </div>

          <hr />

          <div className="p-16px">
            <div>
              <div className="detail-kategori-barang-title mb-2">
                Nama Brand
              </div>
              <div className="detail-kategori-barang-title-sub">
                {dataDetail?.attributes?.name}
              </div>
              <div className="detail-kategori-barang-title mb-2 mt-5">
                Deksripsi
              </div>
              <div className="detail-kategori-barang-title-sub">
                {dataDetail?.attributes?.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalDetailBrand;
