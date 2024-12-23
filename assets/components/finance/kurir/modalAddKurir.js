import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import InputText from "components/Input/InputText";
import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React from "react";

function ModalAddKurir({
  setisModal,
  isModalUp,
  handleActCancel,
  handleActSubmit,
  input,
}) {
  return (
    <ModalWrapper
      bottom={"10%"}
      left={"15%"}
      right={"15%"}
      top={"10%"}
      maxHeight={350}
      setisModalUp={setisModal}
      isModalUp={isModalUp}
    >
      <div className="h-100d-flex flex-column justify-between">
        <div>
          <div className="p-16px">
            <TitleModal title={`Tambah Kurir`} setisModalClose={setisModal} />
          </div>

          <hr />

          <div
            style={{
              overflow: "auto",
              maxHeight: "calc(100vh - 220px)",
            }}
          >
            <div className="p-16px grid grid-cols-1 gap-4">
              <InputText
                classTitle={"dropdown-status-data-table-title font-medium"}
                flexParent={1}
                placeholder={"Masukan nama lengkap"}
                title={"Nama Lengkap*"}
                value={input?.nameInputCourier}
                handleChange={(e) => input?.setNameInputCourier(e.target.value)}
              />
              <hr className="my-3" />

              <div className="flex space-x-4">
                <InputText
                  classTitle={"dropdown-status-data-table-title font-medium"}
                  flexParent={1}
                  placeholder={"Masukan nama depan"}
                  title={"Email*"}
                  value={input?.emailInputCourier}
                  handleChange={(e) =>
                    input?.setEmailInputCourier(e.target.value)
                  }
                />
                <InputText
                  classTitle={"dropdown-status-data-table-title font-medium"}
                  flexParent={1}
                  placeholder={"+62"}
                  title={"No Handphone*"}
                  value={input?.phoneInputCourier}
                  handleChange={(e) =>
                    input?.setPhoneInputCourier(e.target.value)
                  }
                />
              </div>
            </div>

            <div className="d-flex align-center jusitfy-end mb-16px pr-16px">
              <div className="d-flex gap-10px">
                <ButtonCancel
                  title={"Batal"}
                  action={() => handleActCancel()}
                />
                <ButtonSave
                  title={"Tambah Kurir"}
                  action={() => handleActSubmit()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalAddKurir;
