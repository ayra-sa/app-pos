import React, { useState } from 'react'

const UploadImage = ({ flex, onImageUpload }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 25 * 1024 * 1024) {
        alert("Ukuran file terlalu besar. Maksimal 25 MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);

      // Kirim file ke komponen utama
      onImageUpload(selectedFile);
    }
  };

  return (
    <div
      style={{ flex: flex || "" }}
      className="upload-image-wrapp"
      onClick={() => document.getElementById("image-upload-input").click()}
    >
      <div className="wrapperIcon">
        {previewImage ? (
          <img src={previewImage} alt="Preview" className="preview-image" />
        ) : (
          <div className='wrapperIcon cursor-pointer'>
            <IMage/>
          </div>
        )}
      </div>
      <input
        type="file"
        id="image-upload-input"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <div className="mt-16px upload-image-click">Click To Upload Foto</div>
      <div className="upload-image-click-max">(Max. File size: 25 MB)</div>
    </div>
  );
};

const IMage = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.208 9.82L9.29 11.753C9.10405 11.9403 8.9997 12.1936 8.9997 12.4575C8.9997 12.7214 9.10405 12.9747 9.29 13.162C9.38133 13.2544 9.4901 13.3278 9.61001 13.3779C9.72991 13.428 9.85856 13.4538 9.9885 13.4538C10.1184 13.4538 10.2471 13.428 10.367 13.3779C10.4869 13.3278 10.5957 13.2544 10.687 13.162L11.977 11.861L13.313 13.208C13.4043 13.3005 13.513 13.374 13.6329 13.4241C13.7527 13.4743 13.8813 13.5002 14.0113 13.5003C14.1412 13.5004 14.2699 13.4747 14.3898 13.4247C14.5098 13.3747 14.6186 13.3014 14.71 13.209C14.8953 13.0216 14.9993 12.7687 14.9995 12.5052C14.9997 12.2417 14.896 11.9887 14.711 11.801L12.746 9.821C12.6456 9.71904 12.5259 9.63806 12.3939 9.58275C12.262 9.52744 12.1203 9.49891 11.9772 9.49881C11.8341 9.49872 11.6924 9.52707 11.5604 9.5822C11.4283 9.63734 11.3085 9.71817 11.208 9.82Z" fill="url(#paint0_linear_15115_120322)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 10.507L11.001 20.493C11.001 21.05 11.449 21.501 12.001 21.5C12.554 21.5 13.001 21.05 13.001 20.493L13 10.506C13 9.951 12.552 9.5 12 9.5C11.448 9.5 10.999 9.951 11 10.507Z" fill="url(#paint1_linear_15115_120322)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.938 5.981C7.68114 5.93897 7.42128 5.9179 7.161 5.918C4.356 5.919 2 8.12 2 10.999C2 13.908 4.385 16.5 7.1 16.5H9.981V14.507H7.1C5.443 14.507 3.985 12.844 3.985 10.999C3.985 9.221 5.454 7.912 7.089 7.912H7.101C7.49 7.912 7.787 7.963 8.071 8.062L8.241 8.125C8.846 8.373 9.116 7.879 9.116 7.879L9.266 7.612C9.996 6.265 11.467 5.516 12.982 5.493C13.987 5.503 14.954 5.87825 15.7027 6.54875C16.4514 7.21924 16.9306 8.13919 17.051 9.137L17.097 9.477C17.097 9.477 17.168 10.002 17.762 10.002C17.775 10.002 17.774 10.007 17.785 10.007H18.039C19.175 10.007 20.015 10.966 20.015 12.165C20.015 13.372 19.028 14.507 17.945 14.507H13.981V16.5H17.945C20.105 16.5 22 14.455 22 12.165C22 10.166 20.688 8.502 18.862 8.091C18.155 5.384 15.809 3.539 12.976 3.5C11.001 3.521 9.075 4.401 7.938 5.981Z" fill="url(#paint2_linear_15115_120322)" />
        <defs>
          <linearGradient id="paint0_linear_15115_120322" x1="21.9617" y1="6.33453" x2="15.0988" y2="23.1152" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0052CC" />
            <stop offset="0.9228" stop-color="#2684FF" />
          </linearGradient>
          <linearGradient id="paint1_linear_15115_120322" x1="21.9617" y1="6.33453" x2="15.0988" y2="23.1152" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0052CC" />
            <stop offset="0.9228" stop-color="#2684FF" />
          </linearGradient>
          <linearGradient id="paint2_linear_15115_120322" x1="21.9617" y1="6.33453" x2="15.0988" y2="23.1152" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0052CC" />
            <stop offset="0.9228" stop-color="#2684FF" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default UploadImage