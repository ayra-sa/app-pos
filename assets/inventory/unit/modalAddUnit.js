import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import InputText from "components/Input/InputText";
import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React from "react";

function ModalAddUnit({
  setisModal,
  isModalUp,
  handleActCancel,
  handleActSubmit,
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
            <TitleModal title={`Tambah Unit`} setisModalClose={setisModal} />
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
                placeholder={"Nama Unit"}
                title={"Nama Unit"}
              />
              <InputText
                classTitle={"dropdown-status-data-table-title"}
                flexParent={1}
                placeholder={"Inisial Unit"}
                title={"Inisial"}
              />
              <div>
                <h3 className="input-text-label">Base Unit</h3>
                <select
                  className="dropdown-status-data-table-select"
                  name="cars"
                  id="cars"
                >
                  <option
                    className="finance-penerimaan-create-dropdown-option"
                    value=""
                  >
                    Pilih Base Unit
                  </option>
                  <option
                    className="finance-penerimaan-create-dropdown-option"
                    value="saab"
                  >
                    Saab
                  </option>
                  <option
                    className="finance-penerimaan-create-dropdown-option"
                    value="opel"
                  >
                    Opel
                  </option>
                  <option
                    className="finance-penerimaan-create-dropdown-option"
                    value="audi"
                  >
                    Audi
                  </option>
                </select>
              </div>
            </div>

            <div className="d-flex align-center jusitfy-end mb-16px pr-16px">
              <div className="d-flex gap-10px">
                <ButtonCancel
                  title={"Batal"}
                  action={() => handleActCancel()}
                />
                <ButtonSave
                  title={"Tambah Unit"}
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

export default ModalAddUnit;
