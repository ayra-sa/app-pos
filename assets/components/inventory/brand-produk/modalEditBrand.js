import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import InputText from "components/Input/InputText";
import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React from "react";

function ModalEditBrand({
  setisModal,
  isModalUp,
  handleActCancel,
  handleActSubmit,
  brand,
  setBrandToEdit
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
            <TitleModal title={`Tambah Brand`} setisModalClose={setisModal} />
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
                classTitle={"dropdown-status-data-table-title"}
                flexParent={1}
                placeholder={"Edit Brand"}
                title={"Edit Brand*"}
                value={brand?.name}
                handleChange={(e) => 
                  setBrandToEdit && setBrandToEdit(prev => ({
                    ...prev,
                    name: e.target.value
                  }))
                }
              />
              <div>
                <div className="font-medium">Deskripsi</div>
                <textarea
                  rows={5}
                  placeholder="Beri deskripsi disini"
                  className="finance-penerimaan-create-title-penerima-textarea"
                  name=""
                  id=""
                  value={brand?.description}
                  onChange={(e) => 
                    setBrandToEdit && setBrandToEdit(prev => ({
                      ...prev,
                      description: e.target.value
                    }))
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
                <ButtonSave
                  title={"Edit Brand"}
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

export default ModalEditBrand;
