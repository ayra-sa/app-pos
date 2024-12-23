import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import InputText from "components/Input/InputText";
import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React from "react";

function ModalEditSuplier({
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
      maxHeight={630}
      setisModalUp={setisModal}
      isModalUp={isModalUp}
    >
      <div className="h-100d-flex flex-column justify-between">
        <div>
          <div className="p-16px">
            <TitleModal title={`Edit Suplier`} setisModalClose={setisModal} />
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
                placeholder={"Masukkan nama lengkap"}
                title={"Nama Lengkap*"}
                value={input?.nameInputSupplier}
                handleChange={(e) =>
                  input?.setNameInputSupplier(e.target.value)
                }
              />
              <hr className="my-3" />

              <div className="flex space-x-4">
                <InputText
                  classTitle={"dropdown-status-data-table-title font-medium"}
                  flexParent={1}
                  placeholder={"Masukan nama depan"}
                  title={"Email*"}
                  value={input?.emailInputSupplier}
                  handleChange={(e) =>
                    input?.setEmailInputSupplier(e.target.value)
                  }
                />
                <InputText
                  classTitle={"dropdown-status-data-table-title font-medium"}
                  flexParent={1}
                  placeholder={"+62"}
                  title={"No Handphone*"}
                  value={input?.phoneInputSupplier}
                  handleChange={(e) =>
                    input?.setPhoneInputSupplier(e.target.value)
                  }
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <InputText
                    classTitle={"dropdown-status-data-table-title font-medium"}
                    flexParent={1}
                    placeholder={"Masukan kota"}
                    title={"City"}
                    value={input?.cityInputSupplier}
                    handleChange={(e) =>
                      input?.setCityInputSupplier(e.target.value)
                    }
                  />
                </div>
                <div className="flex-1">
                  <InputText
                    classTitle={"dropdown-status-data-table-title font-medium"}
                    flexParent={1}
                    placeholder={"Masukan negara"}
                    title={"Country"}
                    value={input?.countryInputSupplier}
                    handleChange={(e) =>
                      input?.setCountryInputSupplier(e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="my-3">
                <div className="font-medium">Alamat Pengiriman/Penagihan</div>
                <textarea
                  rows={5}
                  placeholder="Isi Alamat Lengkap Disini"
                  className="finance-penerimaan-create-title-penerima-textarea"
                  value={input?.addressInputSupplier}
                  onChange={(e) =>
                    input?.setAddressInputSupplier(e.target.value)
                  }
                ></textarea>
              </div>
            </div>

            <div className="d-flex align-center jusitfy-end mb-16px pr-16px">
              <div className="d-flex gap-10px">
                <ButtonCancel
                  title={"Batal"}
                  action={() => handleActCancel()}
                />
                <ButtonSave title={"Simpan"} action={() => handleActSubmit()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalEditSuplier;
