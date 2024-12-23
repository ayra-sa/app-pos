import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import InputDropdownvalue from "components/Input/InputDropdownValue";

import IReload from "components/icons/IReload";
import { useState } from "react";

const TabPersediaan = () => {
    const data = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
        { value: "option6", label: "Option 6" },
      ];
    
      const [valueAkunPenyesuaian, setValueAkunPenyesuaian] = useState("");
      const [valueBebanSelisihStok, setValueBebanSelisihStok] = useState("");
      const [valueAkunPekerjaan, setValueAkunPekerjaan] = useState("");
      const [valueSelisihBiaya, setValueSelisihBiaya] = useState("");
    
      const handleReset = () => {
        setValueAkunPenyesuaian("");
        setValueBebanSelisihStok("");
        setValueAkunPekerjaan("");
        setValueSelisihBiaya("");
      };
    
      const handleSave = () => {
        const selectedValues = {
          valueAkunPenyesuaian,
          valueBebanSelisihStok,
          valueAkunPekerjaan,
          valueSelisihBiaya,
        };
        console.log("Selected Values:", selectedValues);
      };
  return (
    <div>
      <div className="finance-penerimaan-wrapp-top">
        <div className="finance-penerimaan-title">Penyesuaian Persediaan</div>
        <IReload />
      </div>

      <div className="mt-5 mb-5">
        <InputDropdownvalue
          title={"Akun Penyesuaian"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueAkunPenyesuaian}
          value={valueAkunPenyesuaian}
        />
      </div>
      
      <div className="finance-penerimaan-wrapp-top">
        <div className="finance-penerimaan-title">Perintah Stok Opname</div>
        <IReload />
      </div>

      <div className="mt-5 mb-5">
        <InputDropdownvalue
          title={"Beban Selisih Stok"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueBebanSelisihStok}
          value={valueBebanSelisihStok}
        />
      </div>
      
      <div className="finance-penerimaan-wrapp-top">
        <div className="finance-penerimaan-title">Pekerjaan Pesanan</div>
        <IReload />
      </div>

      <div className="mt-5 space-y-5">
        <InputDropdownvalue
          title={"Akun Pekerjaan"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueAkunPekerjaan}
          value={valueAkunPekerjaan}
        />
        <InputDropdownvalue
          title={"Selisih Biaya"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueSelisihBiaya}
          value={valueSelisihBiaya}
        />
      </div>
    </div>
  );
};

export default TabPersediaan