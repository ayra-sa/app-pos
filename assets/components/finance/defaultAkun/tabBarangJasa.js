import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import InputDropdownvalue from "components/Input/InputDropdownValue";

import IReload from "components/icons/IReload";
import { useState } from "react";

const TabBarangJasa = () => {
  const data = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
  ];

  const [valuePersediaan, setValuePersediaan] = useState("");
  const [valuePenjualan, setValuePenjualan] = useState("");
  const [valueReturPenjualan, setValueReturPenjualan] = useState("");
  const [valueDiskonPenjualan, setValueDiskonPenjualan] = useState("");
  const [valueBarangTerkirim, setValueBarangTerkirim] = useState("");
  const [valueReturPembelian, setValueReturPembelian] = useState("");
  const [valueBeban, setValueBeban] = useState("");
  const [valueBebanPokokPenjualan, setValueBebanPokokPenjualan] = useState("");
  const [valuePembelianBelumTertagih, setValuePembelianBelumTertagih] =
    useState("");

  const handleReset = () => {
    setValuePersediaan("");
    setValuePenjualan("");
    setValueReturPenjualan("");
    setValueDiskonPenjualan("");
    setValueBarangTerkirim("");
    setValueReturPembelian("");
    setValueBeban("");
    setValueBebanPokokPenjualan("");
    setValuePembelianBelumTertagih("");
  };

  const handleSave = () => {
    const selectedValues = {
      valuePersediaan,
      valuePenjualan,
      valueReturPenjualan,
      valueDiskonPenjualan,
      valueBarangTerkirim,
      valueReturPembelian,
      valueBeban,
      valueBebanPokokPenjualan,
      valuePembelianBelumTertagih,
    };
    console.log("Selected Values:", selectedValues);
  };
  return (
    <div>
      <div className="finance-penerimaan-wrapp-top">
        <div className="finance-penerimaan-title">Barang & Jasa</div>
        <IReload />
      </div>

      <div className="mt-5 space-y-5">
        <InputDropdownvalue
          title={"Persediaan"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePersediaan}
          value={valuePersediaan}
        />
        <InputDropdownvalue
          title={"Penjualan"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePenjualan}
          value={valuePenjualan}
        />
        <InputDropdownvalue
          title={"Retur Penjualan"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueReturPenjualan}
          value={valueReturPenjualan}
        />
        <InputDropdownvalue
          title={"Diskon Penjualan"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueDiskonPenjualan}
          value={valueDiskonPenjualan}
        />
        <InputDropdownvalue
          title={"Barang Terkirim"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueBarangTerkirim}
          value={valueBarangTerkirim}
        />
        <InputDropdownvalue
          title={"Beban Pokok Penjualan"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueBebanPokokPenjualan}
          value={valueBebanPokokPenjualan}
        />
        <InputDropdownvalue
          title={"Retur Pembelian"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueReturPembelian}
          value={valueReturPembelian}
        />
        <InputDropdownvalue
          title={"Beban"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueBeban}
          value={valueBeban}
        />
        <InputDropdownvalue
          title={"Pembelian Belum Tertagih"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePembelianBelumTertagih}
          value={valuePembelianBelumTertagih}
        />
      </div>
    </div>
  );
};

export default TabBarangJasa;
