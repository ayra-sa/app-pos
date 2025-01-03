import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import InputImage from "components/Input/InputImage";
import InputText from "components/Input/InputText";
import ModalWrapper from "components/Modal/ModalWrapper";
import TitleModal from "components/TitlePage/TitleModal";
import UploadImage from "components/UploadImage";
import React from "react";

function ModalAddKategoriBarang({
  setisModal,
  isModalUp,
  handleActCancel,
  handleActSubmit,
  setNewCategory,
  newCategory,
  handleImageUpload
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
              title={`Tambah Kategori`}
              setisModalClose={setisModal}
            />
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
                placeholder={"Nama Kategori"}
                title={"Nama Kategori*"}
                value={newCategory?.name}
                handleChange={(e) => setNewCategory({
                  ...newCategory,
                  name: e.target.value
                })}
              />
              <div className="w-full border-2 border-amber-900 rounded-sm flex items-center p-2">
                <IWarning />
                <p className="ml-2 font-bold text-sm">
                  Perhatian{" "}
                  <span className="font-normal text-slate-500">
                    Cantumkan nama kategori sesuai dengan daftar produk yang
                    akan Anda buat.
                  </span>
                </p>
              </div>
              <UploadImage flex={1} onImageUpload={handleImageUpload} />
              {/* {imageFile && <div className="text-sm">File yang dipilih: {imageFile.name}</div>} */}
              {/* <InputImage title={"Gambar Icon"} flex={1} /> */}
            </div>

            <div className="d-flex align-center jusitfy-end mb-16px pr-16px">
              <div className="d-flex gap-10px">
                <ButtonCancel
                  title={"Batal"}
                  action={() => handleActCancel()}
                />
                <ButtonSave
                  title={"Tambah Kategori"}
                  action={handleActSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

const IWarning = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7662 3.98257C13.0092 4.08325 13.2299 4.23081 13.4159 4.41682L19.5839 10.5838C19.77 10.7698 19.9177 10.9906 20.0185 11.2336C20.1192 11.4767 20.1711 11.7372 20.1711 12.0003C20.1711 12.2634 20.1192 12.524 20.0185 12.767C19.9177 13.0101 19.77 13.2309 19.5839 13.4168L13.4159 19.5838C13.2299 19.7698 13.0092 19.9174 12.7662 20.0181C12.5233 20.1187 12.2629 20.1706 11.9999 20.1706C11.7369 20.1706 11.4764 20.1187 11.2335 20.0181C10.9905 19.9174 10.7698 19.7698 10.5839 19.5838L4.41586 13.4168C4.22969 13.2309 4.08201 13.0101 3.98124 12.767C3.88048 12.524 3.82861 12.2634 3.82861 12.0003C3.82861 11.7372 3.88048 11.4767 3.98124 11.2336C4.08201 10.9906 4.22969 10.7698 4.41586 10.5838L10.5839 4.41682C10.7698 4.23081 10.9905 4.08325 11.2335 3.98257C11.4764 3.8819 11.7369 3.83008 11.9999 3.83008C12.2629 3.83008 12.5233 3.8819 12.7662 3.98257ZM11.2927 13.7069C11.4803 13.8945 11.7346 13.9998 11.9999 13.9998C12.2651 13.9998 12.5194 13.8945 12.707 13.7069C12.8945 13.5194 12.9999 13.265 12.9999 12.9998V7.99982C12.9999 7.7346 12.8945 7.48025 12.707 7.29271C12.5194 7.10517 12.2651 6.99982 11.9999 6.99982C11.7346 6.99982 11.4803 7.10517 11.2927 7.29271C11.1052 7.48025 10.9999 7.7346 10.9999 7.99982V12.9998C10.9999 13.265 11.1052 13.5194 11.2927 13.7069ZM11.2927 16.7069C11.4803 16.8945 11.7346 16.9998 11.9999 16.9998C12.2651 16.9998 12.5194 16.8945 12.707 16.7069C12.8945 16.5194 12.9999 16.265 12.9999 15.9998C12.9999 15.7346 12.8945 15.4802 12.707 15.2927C12.5194 15.1052 12.2651 14.9998 11.9999 14.9998C11.7346 14.9998 11.4803 15.1052 11.2927 15.2927C11.1052 15.4802 10.9999 15.7346 10.9999 15.9998C10.9999 16.265 11.1052 16.5194 11.2927 16.7069Z"
        fill="#C9372C"
      />
    </svg>
  );
};

export default ModalAddKategoriBarang;
