import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import InputText from "components/Input/InputText";
import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React from "react";

function ModalEditBaseUnit({
  setisModal,
  isModalUp,
  handleActCancel,
  handleActSubmit,
  baseUnitToEdit, 
  setBaseUnitToEdit
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
            <TitleModal title={`Edit Base Unit`} setisModalClose={setisModal} />
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
                placeholder={"Nama Base Unit"}
                title={"Nama base unit"}
                value={baseUnitToEdit?.attributes.name}
                handleChange={(e) => 
                  setBaseUnitToEdit && setBaseUnitToEdit(prev => ({
                    ...prev,
                    name: e.target.value
                  }))
                }
              />
            </div>

            <div className="d-flex align-center jusitfy-end mb-16px pr-16px">
              <div className="d-flex gap-10px">
                <ButtonCancel
                  title={"Batal"}
                  action={() => handleActCancel()}
                />
                <ButtonSave
                  title={"Edit Base Unit"}
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

export default ModalEditBaseUnit;
