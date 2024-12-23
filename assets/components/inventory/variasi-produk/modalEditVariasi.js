import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import IClose from "components/icons/Close";
import InputText from "components/Input/InputText";
import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

function ModalEditVariasi({
  setisModal,
  isModalUp,
  handleActCancel,
  handleActSubmit,
  variantToEdit,
  setVariantToEdit
}) {

  const handleRemoveVariation = (index) => {
    setVariantToEdit && setVariantToEdit((prev) => ({
      ...prev,
      variationTypes: prev.variationTypes.filter((_, i) => i !== index),
    }));
  };

  const handleAddVariation = () => {
    setVariantToEdit && setVariantToEdit((prev) => ({
      ...prev,
      variationTypes: [...prev.variationTypes, { name: "" }],
    }));
  };

  const handleEditVariation = (e, id) => {
    setVariantToEdit && setVariantToEdit((prev) => {
      const updatedVariations = [...prev.variationTypes]
      console.log(updatedVariations)
      updatedVariations[id] = {name: e.target.value}
      return { ...prev, variationTypes: updatedVariations }
    })
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
            <TitleModal title={`Edit Variant`} setisModalClose={setisModal} />
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
                value={variantToEdit?.name}
                handleChange={(e) => setVariantToEdit && setVariantToEdit((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))}
              />
              <div>
                <div className="font-medium">Type Variasi</div>
                <div className="space-y-4 mt-3">
                {variantToEdit?.variationTypes?.map((variation, id) => (
                    <div key={id} className="w-full flex space-x-2 items-center">
                      <InputText
                        classTitle={
                          "dropdown-status-data-table-title font-medium"
                        }
                        flexParent={1}
                        placeholder={"Type"}
                        value={variation.name}
                        handleChange={(e) => handleEditVariation(e, id)}
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
                  </div>
                  <div className="w-full flex space-x-2 items-center">
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
                    <PlusIcon className="w-5" />
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
                  title={"Edit Variant"}
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

export default ModalEditVariasi;
