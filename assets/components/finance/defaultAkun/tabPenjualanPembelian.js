import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import InputDropdownvalue from "components/Input/InputDropdownValue";

import IReload from "components/icons/IReload";
import { useState } from "react";

const TabPenjualanPembelian = () => {
  const data = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
  ];

  const [valueAkunDiskon, setValueAkunDiskon] = useState("");
  const [valueAkunPembulatan, setValueAkunPembulatan] = useState("");

  const handleReset = () => {
    setValueAkunDiskon("");
    setValueAkunPembulatan("");
  };

  const handleSave = () => {
    const selectedValues = {
      valueAkunDiskon,
      valueAkunPembulatan,
    };
    console.log("Selected Values:", selectedValues);
  };
  return (
    <div>
      <div className="finance-penerimaan-wrapp-top">
        <div className="finance-penerimaan-title">Penerimaan/Pembelian</div>
        <IReload />
      </div>

      <div className="mt-5 mb-5">
        <InputDropdownvalue
          title={"Akun Diskon"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueAkunDiskon}
          value={valueAkunDiskon}
        />
      </div>

      <div className="finance-penerimaan-wrapp-top">
        <div className="finance-penerimaan-title">Faktur Pembelian</div>
        <IReload />
      </div>

      <div className="mt-5">
        <InputDropdownvalue
          title={"Akun Pembulatan"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueAkunPembulatan}
          value={valueAkunPembulatan}
        />
      </div>

      <div style={{width: "75%"}} className="ml-auto mt-5">
        <p className="text-yellow-300 text-sm">
          Digunakan untuk menampung nilai pembulatan pajak (Inclusive Tax) dan pembulatan nilai biaya barang akibat diskon/alokasi nilai biaya pembelian!
        </p>
      </div>
    </div>
  );
};

export default TabPenjualanPembelian;
