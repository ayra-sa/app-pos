import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import IClose from "components/icons/Close";
import InputText from "components/Input/InputText";
import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
// import axiosInstance from "global-states/api";

function ModalAddVariasi({
  setisModal,
  isModalUp,
  handleActCancel,
  handleActSubmit,
  onSubmit
}) {
  const [variantName, setVariantName] = useState("")
  const [variationTypes, setVariationTypes] = useState([{name: ''}]);

  const handleRemoveVariation = (index) => {
    setVariationTypes(prevVariations => prevVariations.filter((_, i) => i !== index));
  };

  const handleVariationChange = (e, index) => {
    const updatedVariations = [...variationTypes];
    updatedVariations[index].name = e.target.value;
    setVariationTypes(updatedVariations);
  };

  const handleNameChange = (e) => {
    setVariantName(e.target.value);
  };

  const handleAddVariation = () => {
    setVariationTypes(prev => [...prev, { name: '' }]);
  };

  const handleSubmit = async () => {
    const data = {
      name: variantName,
      variation_types: variationTypes.filter(v => v.name !== '')
    }

    onSubmit(data)
  }

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
            <TitleModal title={`Tambah Variant`} setisModalClose={setisModal} />
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
                placeholder={"Nama Variant"}
                title={"Nama Variant"}
                value={variantName}
                handleChange={handleNameChange}
              />
              <div>
                <div className=" font-medium">Type Variasi</div>
                <div className="space-y-4 mt-3">
                  {variationTypes.map((variation, id) => (
                    <div key={id} className="w-full flex space-x-2 items-center">
                      <InputText
                        classTitle={
                          "dropdown-status-data-table-title font-medium"
                        }
                        flexParent={1}
                        placeholder={"Type"}
                        value={variation.name}
                        handleChange={(e) => handleVariationChange(e, id)}
                      />
                      <div onClick={() => handleRemoveVariation(id)}>
                        <IClose className="size-4 cursor-pointer" />
                      </div>
                    </div>
                  ))}
                  {/* <div className="w-full flex space-x-2 items-center">
                    <InputText
                      classTitle={
                        "dropdown-status-data-table-title font-medium"
                      }
                      flexParent={1}
                      placeholder={"Nama Variant"}
                    />
                    <IClose className="size-4 cursor-pointer" />
                  </div> */}
                </div>

                <div className="upload-image-wrapp mt-6 flex justify-center items-center">
                  <div className="border-2 border-blue-600 p-2 rounded-sm cursor-pointer flex items-center space-x-2" onClick={handleAddVariation}>
                    <PlusIcon className="w-3" />
                    <p className="font-normal">Tambah Tipe Variasi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-center jusitfy-end mb-16px pr-16px">
              <div className="d-flex gap-10px">
                <ButtonCancel
                  title={"Batal"}
                  action={() => handleActCancel()}
                />
                <ButtonSave
                  title={"Tambah Variasi"}
                  action={() => {
                    handleSubmit()
                    setVariantName("")
                    setVariationTypes([{name: ""}])
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalAddVariasi;
