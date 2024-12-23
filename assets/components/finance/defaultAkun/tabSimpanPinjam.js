import ButtonCancel from "components/Button/buttonCancel";
import ButtonSave from "components/Button/buttonSave";
import InputDropdownvalue from "components/Input/InputDropdownValue";

import IReload from "components/icons/IReload";
import { useState } from "react";

const TabSimpanPinjam = () => {
  const data = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
  ];

  const [valueSimpananPerkiraanKredit, setValueSimpananPerkiraanKredit] =
    useState("");
  const [valueSimpananPerkiraanDebit, setValueSimpananPerkiraanDebit] =
    useState("");
  const [
    valueSimpananPerkiraanKreditJasa,
    setValueSimpananPerkiraanKreditJasa,
  ] = useState("");
  const [valueSimpananPerkiraanDebitJasa, setValueSimpananPerkiraanDebitJasa] =
    useState("");
  const [
    valueSimpananPerkiraanKreditAdministrasi,
    setValueSimpananPerkiraanKreditAdministrasi,
  ] = useState("");
  const [
    valueSimpananPerkiraanDebitAdministrasi,
    setValueSimpananPerkiraanDebitAdministrasi,
  ] = useState("");
  const [valuePinjamanPerkiraanKredit, setValuePinjamanPerkiraanKredit] =
    useState("");
  const [valuePinjamanPerkiraanDebit, setValuePinjamanPerkiraanDebit] =
    useState("");
  const [
    valuePinjamanPerkiraanKreditPendapatan,
    setValuePinjamanPerkiraanKreditPendapatan,
  ] = useState("");
  const [
    valuePinjamanPerkiraanDebitPendapatan,
    setValuePinjamanPerkiraanDebitPendapatan,
  ] = useState("");
  const [
    valuePinjamanPerkiraanKreditJasa,
    setValuePinjamanPerkiraanKreditJasa,
  ] = useState("");
  const [valuePinjamanPerkiraanDebitJasa, setValuePinjamanPerkiraanDebitJasa] =
    useState("");
  const [
    valuePinjamanPerkiraanKreditDenda,
    setValuePinjamanPerkiraanKreditDenda,
  ] = useState("");
  const [
    valuePinjamanPerkiraanDebitDenda,
    setValuePinjamanPerkiraanDebitDenda,
  ] = useState("");

  const handleReset = () => {
    setValueSimpananPerkiraanKredit("");
    setValueSimpananPerkiraanDebit("");
    setValueSimpananPerkiraanKreditJasa("");
    setValueSimpananPerkiraanDebitJasa("");
    setValueSimpananPerkiraanKreditAdministrasi("");
    setValueSimpananPerkiraanDebitAdministrasi("");
    setValuePinjamanPerkiraanKredit("");
    setValuePinjamanPerkiraanDebit("");
    setValuePinjamanPerkiraanKreditPendapatan("");
    setValuePinjamanPerkiraanDebitPendapatan("");
    setValuePinjamanPerkiraanKreditJasa("");
    setValuePinjamanPerkiraanDebitJasa("");
    setValuePinjamanPerkiraanKreditDenda("");
    setValuePinjamanPerkiraanDebitDenda("");
  };

  const handleSave = () => {
    const selectedValues = {
      valueSimpananPerkiraanKredit,
      valueSimpananPerkiraanDebit,
      valueSimpananPerkiraanKreditJasa,
      valueSimpananPerkiraanDebitJasa,
      valueSimpananPerkiraanKreditAdministrasi,
      valueSimpananPerkiraanDebitAdministrasi,
      valuePinjamanPerkiraanKredit,
      valuePinjamanPerkiraanDebit,
      valuePinjamanPerkiraanKreditPendapatan,
      valuePinjamanPerkiraanDebitPendapatan,
      valuePinjamanPerkiraanKreditJasa,
      valuePinjamanPerkiraanDebitJasa,
      valuePinjamanPerkiraanKreditDenda,
      valuePinjamanPerkiraanDebitDenda,
    };
    console.log("Selected Values:", selectedValues);
  };
  return (
    <div>
      <div className="finance-penerimaan-wrapp-top">
        <div className="finance-penerimaan-title">Simpanan</div>
        <IReload />
      </div>

      <div className="mt-5 space-y-5">
        <InputDropdownvalue
          title={"Perkiraan Kredit"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueSimpananPerkiraanKredit}
          value={valueSimpananPerkiraanKredit}
        />
        <InputDropdownvalue
          title={"Perkiraan Debit"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueSimpananPerkiraanDebit}
          value={valueSimpananPerkiraanDebit}
        />
        <InputDropdownvalue
          title={"Perkiraan Kredit Jasa"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueSimpananPerkiraanKreditJasa}
          value={valueSimpananPerkiraanKreditJasa}
        />
        <InputDropdownvalue
          title={"Perkiraan Debit Jasa"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueSimpananPerkiraanDebitJasa}
          value={valueSimpananPerkiraanDebitJasa}
        />
        <InputDropdownvalue
          title={"Perkiraan Kredit Administrasi"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueSimpananPerkiraanKreditAdministrasi}
          value={valueSimpananPerkiraanKreditAdministrasi}
        />
        <InputDropdownvalue
          title={"Perkiraan Debit Administrasi"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValueSimpananPerkiraanDebitAdministrasi}
          value={valueSimpananPerkiraanDebitAdministrasi}
        />
      </div>

      <div className="finance-penerimaan-wrapp-top">
        <div className="finance-penerimaan-title">Pinjaman</div>
        <IReload />
      </div>

      <div className="mt-5 space-y-5">
        <InputDropdownvalue
          title={"Perkiraan Kredit"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePinjamanPerkiraanKredit}
          value={valuePinjamanPerkiraanKredit}
        />
        <InputDropdownvalue
          title={"Perkiraan Debit"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePinjamanPerkiraanDebit}
          value={valuePinjamanPerkiraanDebit}
        />
        <InputDropdownvalue
          title={"Perkiraan Kredit Pendapatan"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePinjamanPerkiraanKreditPendapatan}
          value={valuePinjamanPerkiraanKreditPendapatan}
        />
        <InputDropdownvalue
          title={"Perkiraan Debit Pendapatan"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePinjamanPerkiraanDebitPendapatan}
          value={valuePinjamanPerkiraanDebitPendapatan}
        />
        <InputDropdownvalue
          title={"Perkiraan Kredit Jasa"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePinjamanPerkiraanKreditJasa}
          value={valuePinjamanPerkiraanKreditJasa}
        />
        <InputDropdownvalue
          title={"Perkiraan Debit Jasa"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePinjamanPerkiraanDebitJasa}
          value={valuePinjamanPerkiraanDebitJasa}
        />
        <InputDropdownvalue
          title={"Perkiraan Kredit Denda"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePinjamanPerkiraanKreditDenda}
          value={valuePinjamanPerkiraanKreditDenda}
        />
        <InputDropdownvalue
          title={"Perkiraan Debit Denda"}
          flexDirection="row"
          flexParent={1}
          styleParent={{}}
          widthTitle="30%"
          data={data}
          setValue={setValuePinjamanPerkiraanDebitDenda}
          value={valuePinjamanPerkiraanDebitDenda}
        />
      </div>
    </div>
  );
};

export default TabSimpanPinjam;
