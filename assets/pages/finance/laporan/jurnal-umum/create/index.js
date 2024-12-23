import IBack from "components/icons/IBack";
import IReload from "components/icons/IReload";
import ModalConfirmationAdd from "components/modalConfirmationAdd";
import Admin from "layouts/Admin";
import Link from "next/link";
// import { useRouter } from "next/router";
// import {redirect} from "next/navigation"
import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import WithAuth from "components/config/protect";
import ISearchInput from "components/icons/IsearchInput";
import InputKDK from "components/Input/InputKDK";
import IClose from "components/icons/Close";
import { PlusIcon } from "@heroicons/react/24/outline";
import TotalAll from "components/TotalAll";
// import axiosInstance from "global-states/api";
import { useDispatch, useSelector } from "react-redux";
import { createJournal, resetSuccess } from "global-states/actions/journalActions";
import { useRouter } from "next/navigation";

const CreateJurnalUmum = () => {
  const [Tgl, setTgl] = useState(new Date());
  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const router = useRouter();
  const [newJournal, setNewJournal] = useState({});
  const [description, setDescription] = useState("");
  const [detailJournal, setDetailJournal] = useState([{
    account: "",
    balance: "",
    type: "",
  }]);
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.journal);

  const SimpanAct = () => {
    setisModalConfirmationAdd(false);
    router.push("/finance/laporan/jurnal-umum/detail");
  };

  const ActionBatal = () => {
    router.push("/finance/laporan/jurnal-umum/");
  };

  const handleCreateJournal = () => {
    const data = {
      description,
      detail_journal: detailJournal.map((item) => ({
        ...item,
        account: Number(item.account),
        balance: Number(item.balance),
      })),
    };

    dispatch(createJournal(data))
    setDescription("")
    setDetailJournal([{
      account: "",
      balance: "",
      type: "",
    }])
    
    // router.push("/finance/laporan/jurnal-umum/");
  };

  const removeJournalEntry = (index) => {
    const updatedJournal = detailJournal.filter((_, i) => i !== index);
    setDetailJournal(updatedJournal);
  };

  const addJournalEntry = () => {
    setDetailJournal([
      ...detailJournal,
      { account: "", balance: "", type: "" },
    ]);
  };

  const handleJournalChange = (index, e) => {
    const { name, value } = e.target;
    const updatedJournal = [...detailJournal];
    updatedJournal[index][name] = value;
    setDetailJournal(updatedJournal);
  };

  // useEffect(() => {
  //   if (success === true) {
  //     router.push("/finance/laporan/jurnal-umum/");
  //   }
  // }, [success, router, dispatch])

  return (
    <Admin>
      <div className="finance-laporan-jurnal-umum-jurnal-create-kontainer">
        <div className="display-flex-align-center justify-between">
          <div className="display-flex-align-center">
            <Link href={"/finance/laporan/"}>
              <div className="cursor-pointer">
                <IBack />
              </div>
            </Link>
            <div className="ml-3 finance-laporan-neraca-title">Buat Jurnal</div>
          </div>
          <IReload />
        </div>

        <div className="garis-tipis"></div>
        <div>Detail Jurnal</div>
        <div className="garis-tebal"></div>

        <div className="grid grid-cols-3 gap-4 mt-2">
          <div>
            <div className="finance-penerimaan-create-title-penerima-input">
              Tanggal*
            </div>
            <DatePicker
              className={"finance-penerimaan-create-title-penerima-tgl"}
              onChange={setTgl}
              value={Tgl}
            />
          </div>

          <div>
            <div className="finance-penerimaan-create-title-penerima-input">
              Nomor*
            </div>
            <select
              className="finance-penerimaan-create-dropdown"
              name="cars"
              id="cars"
            >
              <option
                className="finance-penerimaan-create-dropdown-option"
                value="1"
              >
                Jurnal Umum
              </option>
              <option
                className="finance-penerimaan-create-dropdown-option"
                value="2"
              >
                Saab
              </option>
              <option
                className="finance-penerimaan-create-dropdown-option"
                value="3"
              >
                Opel
              </option>
              <option
                className="finance-penerimaan-create-dropdown-option"
                value="4"
              >
                Audi
              </option>
            </select>
          </div>

          <div>
            <div className="finance-penerimaan-create-top">
              <div className="finance-penerimaan-create-title-penerima-input">
                Type Transaksi
              </div>
              <input
                className="finance-penerimaan-create-input-number"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <div className="finance-penerimaan-create-title-penerima-input">
              Keterangan*
            </div>
            <textarea
              placeholder="Beri keterangan disini"
              className="finance-penerimaan-create-title-penerima-textarea"
              name=""
              id=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="garis-tipis"></div>
        <div>Detail Transaksi</div>
        <div className="garis-tebal"></div>

        {detailJournal.map((item, id) => (
          <div key={id} className="w-full flex space-x-2 items-center">
            <div className="flex-1">
              <h3 className="input-text-label">
                Akun Perkiraan
                <span className="flag-red">*</span>
              </h3>
              <div className="finance-penerimaan-wrapp-search">
                <ISearchInput />
                <input
                  placeholder="cari"
                  className="finance-penerimaan-wrapp-search-input"
                  type="text"
                  name="account"
                  value={item.account}
                  onChange={(e) => handleJournalChange(id, e)}
                />
              </div>
            </div>
            <InputKDK
              data={[
                {id: 'credit', label: "Credit"},
                {id: 'debit', label: "Debit"}
              ]}
              label={"Pilih"}
              title={"Nilai*"}
              name="type"
              value={item.type}
              onChangeSelect={(e) => handleJournalChange(id, e)}
            />
            <InputKDK
              title={"Nominal*"}
              placeholder="Rp 0"
              isSwitch={false}
              values={item.balance}
              name={"balance"}
              handleChange={(e) => handleJournalChange(id, e)}
            />
            <div className="cursor-pointer" onClick={() => removeJournalEntry(id)}>
              <IClose />
            </div>
          </div>
        ))}

        {/* <InputData /> */}

        <div
          className="upload-image-wrapp mt-6 flex justify-center items-center"
          style={{ minHeight: "50px" }}
          onClick={addJournalEntry}
        >
          <div className="border-2 border-blue-600 p-2 rounded-sm cursor-pointer flex items-center space-x-2">
            <PlusIcon className="w-3" />
            <p className="font-normal">Tambah Data</p>
          </div>
        </div>

        <div className="mt-14 flex justify-end w-full">
          <div className="grid grid-cols-2 gap-10">
            <div style={{ marginRight: "200px", width: "90%" }}>
              <TotalAll
                title={"Credit"}
                value={"2400000"}
                className="mr-10"
              />
            </div>
            <div>
              <TotalAll title={"Biaya Lainnya"} value={"0"} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-10 gap-4">
          <div className="flex justify-end">
            <div
              onClick={() => router.push("/finance/laporan/")}
              className="cursor-pointer finance-penerimaan-create-btn-print mr-2"
            >
              Batal
            </div>
            <div
              onClick={() => setisModalConfirmationAdd(true)}
              className="cursor-pointer finance-penerimaan-create-btn-simpan"
            >
              Buat Jurnal
            </div>
          </div>
        </div>

        <ModalConfirmationAdd
          actionCallback={() => {
            handleCreateJournal()
            setisModalConfirmationAdd(false)
          }}
          isModalUp={isModalConfirmationAdd}
          setisModalUp={setisModalConfirmationAdd}
        />
      </div>
    </Admin>
  );
};

const InputData = ({
  nameInput,
  valueInput,
  onChangeInput,
  nameNilai,
  valueNilai,
  onChangeNilai,
  nameNominal,
  valueNominal,
  onChangeNominal,
}) => {
  return (
    <div className="w-full flex space-x-2 items-center">
      <div className="flex-1">
        <h3 className="input-text-label">
          Akun Perkiraan
          <span className="flag-red">*</span>
        </h3>
        <div className="finance-penerimaan-wrapp-search">
          <ISearchInput />
          <input
            placeholder="cari"
            className="finance-penerimaan-wrapp-search-input"
            type="text"
            name={nameInput}
            value={valueInput}
            onChange={onChangeInput}
          />
        </div>
      </div>
      <InputKDK
        data={["oke", "oke"]}
        label={"Credit"}
        title={"Nilai*"}
        values={valueNilai}
        name={nameNilai}
        handleChange={onChangeNilai}
      />
      <InputKDK
        title={"Nominal*"}
        placeholder="Rp 0"
        isSwitch={false}
        values={valueNominal}
        name={nameNominal}
        handleChange={onChangeNominal}
      />
      <div className="cursor-pointer">
        <IClose />
      </div>
    </div>
  );
};

export default WithAuth(CreateJurnalUmum);
