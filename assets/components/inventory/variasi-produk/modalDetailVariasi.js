import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React from "react";

function ModalDetailVariasi({ setisModal, isModalUp, namaVariant, dataTag, item }) {
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
            <TitleModal
              title={`Details Variant`}
              setisModalClose={setisModal}
            />
          </div>

          <hr />

          <div className="p-16px">
            <div>
              <div className="detail-kategori-barang-title mb-2">
                Nama Variant
              </div>
              <div className="detail-kategori-barang-title-sub">
                {item?.attributes?.name}
              </div>
              <div className="detail-kategori-barang-title mb-2 mt-5">
                Type Variasi
              </div>
              <div className="pt-2 flex space-x-3">
                {item?.attributes?.variation_types?.map((item) => (
                  <div
                    className="text-grey rounded-full p-2 w-auto font-medium"
                    style={{ background: "#EBEDF0" }}
                    key={item.id}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalDetailVariasi;
