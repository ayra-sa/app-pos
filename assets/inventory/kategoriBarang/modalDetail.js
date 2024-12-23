import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React from "react";

function ModalDetailKategoriBarang({
  setisModal,
  isModalUp,
  img,
  namaKategori,
  item
}) {
  return (
    <ModalWrapper
      bottom={"10%"}
      left={"15%"}
      right={"15%"}
      top={"10%"}
      setisModalUp={setisModal}
      isModalUp={isModalUp}
    >
      <div className="h-100d-flex flex-column justify-between">
        <div>
          <div className="p-16px">
            <TitleModal
              title={`Detail Kategori`}
              setisModalClose={setisModal}
            />
          </div>

          <hr />

          <div className="p-16px">
            <div>
              <div className="detail-kategori-barang-title mb-2">
                Kategori Barang
              </div>
              <div className="detail-kategori-barang-title-sub">
                {item?.attributes?.name}
              </div>
            </div>
            <div className="w-full flex justify-center mt-20">
              <img
                style={{ width: "275px", height: "198px" }}
                src={item?.attributes?.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalDetailKategoriBarang;
