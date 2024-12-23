import React, { useState } from 'react'
import Admin from 'layouts/Admin'
import TitlePageBack from 'components/TitlePage/TitlePageBack'
import { useRouter } from 'next/router';
import ModalConfirmationAdd from 'components/modalConfirmationAdd';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import InputDropdown from 'components/Input/InputDropdown';
import InputText from 'components/Input/InputText';
import TotalAll from 'components/TotalAll';
import ButtonCancel from 'components/Button/buttonCancel';
import ButtonSave from 'components/Button/buttonSave';

const CreatePinjaman = () => {

    const [Tgl, setTgl] = useState(new Date());
    const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
    const router = useRouter()

    const SimpanAct = () => {
        setisModalConfirmationAdd(false)
        router.push('/finance/pinjaman/')
    }

    const ActionBatal = () => {
        router.push('/finance/laporan/jurnal-umum/')
    }

    return (
        <Admin>
            <div className='bg-white'>
                <TitlePageBack title={'Buat Pinjaman'} />

                <div className='garis-tipis'></div>
                <div className='pl-16px pr-16px'>
                    <div>Detail Jurnal</div>
                </div>
                <div className='garis-tipis'></div>

                <div className='grid grid-cols-2 gap-4 mt-2 pl-16px pr-16px'>

                    <InputText
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        title={'Nama Anggota*'}
                        placeholder={'Masukan Nama Anggota'}
                    />

                    <div>
                        <div className='finance-penerimaan-create-title-penerima-input'>Tanggal*</div>
                        <DatePicker className={'finance-penerimaan-create-title-penerima-tgl'} onChange={setTgl} value={Tgl} />
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-4 mt-4 pl-16px pr-16px'>
                    <div>
                        <div className='finance-penerimaan-create-title-penerima-input'>Keterangan*</div>
                        <textarea placeholder='Beri keterangan disini' className='finance-penerimaan-create-title-penerima-textarea' name="" id=""></textarea>
                    </div>
                </div>

                <div className='garis-tipis'></div>
                <div className='pl-16px pr-16px'>
                    <div>Detail Transaksi</div>
                </div>
                <div className='garis-tipis'></div>

                <div className='grid grid-cols-4 gap-4 mt-2 pl-16px pr-16px'>
                    <InputDropdown
                        marginLeftChild={'16px'}
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        title={'Model Pinjaman*'}
                        placeholder={'Cari'}
                    />

                    <InputText
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        title={'Tenor*'}
                        placeholder={'Masukan Tenor'}
                    />

                    <InputText
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        title={'Nominal Pinjaman*'}
                        placeholder={'Masukan Nominal Pinjaman'}
                    />

                    <InputText
                        flexParent={1}
                        classTitle={'dropdown-status-data-table-title'}
                        title={'Administrasi*'}
                        placeholder={'Masukan Administrasi'}
                    />

                </div>

                <TotalComp />
                <ActionPesananPenjualan setisModalConfirmationAdd={setisModalConfirmationAdd} />

            </div>

            <ModalConfirmationAdd
                actionCallback={() => SimpanAct()}
                isModalUp={isModalConfirmationAdd}
                setisModalUp={setisModalConfirmationAdd}
            />

        </Admin>
    )
}

const TotalComp = () => {
    return (
        <div className='d-flex p-16px align-center justify-end gap-16px'>
            <TotalAll
                title={'Total'}
                value={'0'}
            />
        </div>
    )
}

const ActionPesananPenjualan = ({
    setisModalProces,
    setisModalConfirmationAdd,
    tabsAddPembelianReducer,
}) => {
    return (
        <div className='p-16px d-flex justify-end align-center'>
            <div className='mr-16px'>
                <ButtonCancel
                    paddingBottom={'6px'}
                    paddingTop={'6px'}
                    borderBtn3={true}
                    title={'Simpan'}
                />
            </div>
            <div className='mr-16px'>
                <ButtonCancel
                    action={() => { }}
                    paddingBottom={'6px'}
                    paddingTop={'6px'}
                    title={'Print'}
                />
            </div>
            <ButtonSave
                action={() => {
                    setisModalConfirmationAdd(true)
                }}
                title={'Process Pinjaman'}
            />
        </div>
    )
}

export default CreatePinjaman