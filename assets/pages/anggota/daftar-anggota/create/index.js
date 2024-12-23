import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import WithAuth from 'components/config/protect'
import InputDate from 'components/Input/InputDate'
import InputDropdown from 'components/Input/InputDropdown'
import InputText from 'components/Input/InputText'
import ModalConfirmationAdd from 'components/modalConfirmationAdd'
import StepTitle from 'components/Step/StepTitle'
import Tab from 'components/Tab/inddex'
import TitlePage from 'components/TitlePage/TitlePage'
import TitlePageBack from 'components/TitlePage/TitlePageBack'
import UploadImage from 'components/UploadImage'
import Admin from 'layouts/Admin'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function AddDaftarAnggota() {

    const [TabAdd, setTabAdd] = useState({
        data: [
            'Tambah Satuan',
            'Tambah Sekaligus',
        ],
        isActivetab: 0,
    })

    const router = useRouter()

    const Back = () => {
        router.push('/anggota/daftar-anggota/')
    }

    const [step, setstep] = useState(1)
    const [modalConfirmation, setmodalConfirmation] = useState(false)

    const handleActCancel = () => { Back() }
    const handleActSubmit = () => { setmodalConfirmation(true) }

    return (
        <Admin>
            <div style={{
                backgroundColor: 'white',
                minHeight: 'calc(100vh - 191px)'
            }}>
                <TitlePageBack title={'Tambah Anggota'} action={() => Back()} />
                <hr />
                <Tab
                    onClick={(payload) => {
                        setTabAdd((prevstate) => {
                            return {
                                ...prevstate,
                                isActivetab: payload,
                            }
                        })
                    }}
                    Tabs={TabAdd?.data}
                    IsActiveTab={TabAdd?.isActivetab}
                />

                {
                    TabAdd?.isActivetab == 0 ? <>

                        {/* step */}
                        <div style={{
                            marginTop: '16px',
                            display: 'flex',
                            padding: '16px 10%',
                            justifyContent: 'space-between',
                        }}>
                            <div className='d-flex align-center gap-10px'>
                                <div>
                                    <div onClick={() => setstep(1)} className='cursor-pointer step-active'>
                                        {
                                            step == 2 || step == 3 || step == 4 ? <ICeklis /> : '1'
                                        }
                                    </div>
                                </div>
                                <div className='step-active-title'>
                                    Data Anggota</div>
                            </div>
                            <div className='d-flex align-center gap-10px'>
                                <div
                                    onClick={() => setstep(2)}
                                    className={`cursor-pointer ${step == 2 || step == 3 || step == 4 ? 'step-active' : 'step-active-non'}`}>
                                    {
                                        step == 3 || step == 4 ? <ICeklis /> : '2'
                                    }
                                </div>
                                <div className={`${step == 2 || step == 3 || step == 4 ? 'step-active-title' : 'step-active-title-non'}`}>
                                    Data Pekerjaan
                                </div>
                            </div>
                            <div className='d-flex align-center gap-10px'>
                                <div
                                    onClick={() => setstep(3)}
                                    className={`cursor-pointer ${step == 3 || step == 4 ? 'step-active' : 'step-active-non'}`}>
                                    {
                                        step == 4 ? <ICeklis /> : '3'
                                    }
                                </div>
                                <div className={`${step == 3 || step == 4 ? 'step-active-title' : 'step-active-title-non'}`}>
                                    Kontak Darurat
                                </div>
                            </div>
                            <div className='d-flex align-center gap-10px'>
                                <div
                                    onClick={() => setstep(4)}
                                    className={`cursor-pointer ${step == 4 ? 'step-active' : 'step-active-non'}`}>
                                    4
                                </div>
                                <div className={`${step == 4 ? 'step-active-title' : 'step-active-title-non'}`}>
                                    Akun Bank
                                </div>
                            </div>
                        </div>

                        {
                            step == 1 ? <>

                                <hr />
                                <TitlePageBack icon={''} title={'Informasi Data Diri Calon Anggota Yang Ditambahkan'} />
                                <hr />
                                <div className='p-16px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Nama*'}
                                            placeholder={'Masukan Nama'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputText
                                            title={'Email*'}
                                            placeholder={'Masukan Email'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputDropdown
                                            title={'Kartu Identitas*'}
                                            placeholder={'Masukan Kartu Identitas'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                        <InputText
                                            title={'Nomor Identitas*'}
                                            placeholder={'Masukan Nomor Identitas'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Tempat lahir*'}
                                            placeholder={'Masukan Tempat lahir'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDate
                                            title={'Tanggal Lahir*'}
                                            placeholder={'Masukan Tanggal Lahir'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputDropdown
                                            title={'Jenis Kelamin*'}
                                            placeholder={'Masukan Jenis Kelamin'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                        <InputDropdown
                                            title={'Status Pekawinan*'}
                                            placeholder={'Masukan Status Pekawinan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Nama Gadis Ibu Kandung*'}
                                            placeholder={'Masukan Nama Gadis Ibu Kandung'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputText
                                            title={'No Telpon*'}
                                            placeholder={'Masukan No Telpon'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputDropdown
                                            title={'Tag Anggota*'}
                                            placeholder={'Masukan Tag Anggota'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                        <InputDate
                                            title={'Tanggal Regsitrasi*'}
                                            placeholder={'Masukan Tanggal Regsitrasi'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>

                                <hr />
                                <TitlePageBack icon={''} title={'Alamat Sesuai KTP'} />
                                <hr />
                                <div className='p-16px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Detail Alamat*'}
                                            placeholder={'Masukan Detail Alamat'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDropdown
                                            title={'Provinsi*'}
                                            placeholder={'Masukan Provinsi'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Kota/Kabupaten*'}
                                            placeholder={'Masukan Kota/Kabupaten'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDropdown
                                            title={'Kecamatan*'}
                                            placeholder={'Masukan Kecamatan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Kelurahan*'}
                                            placeholder={'Masukan Kelurahan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputText
                                            title={'Kode POS*'}
                                            placeholder={'Masukan Kode POS'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>

                                <hr />
                                <TitlePageBack icon={''} title={'Alamat Domisili'} />
                                <hr />
                                <div className='p-16px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Detail Alamat*'}
                                            placeholder={'Masukan Detail Alamat'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDropdown
                                            title={'Provinsi*'}
                                            placeholder={'Masukan Provinsi'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputDropdown
                                            title={'Kota/Kabupaten*'}
                                            placeholder={'Masukan Kota/Kabupaten'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                        <InputDropdown
                                            title={'Kecamatan*'}
                                            placeholder={'Masukan Kecamatan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputDropdown
                                            title={'Kelurahan*'}
                                            placeholder={'Masukan Kelurahan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                        <InputDropdown
                                            title={'Kode POS*'}
                                            placeholder={'Masukan Kode POS'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>

                                <hr />
                                <TitlePageBack icon={''} title={'Alamat Domisili'} />
                                <hr />
                                <div className='p-16px'>
                                    <div className='grid grid-cols-3 gap-4'>
                                        <UploadImage flex={1} />
                                        <UploadImage flex={1} />
                                        <UploadImage flex={1} />
                                    </div>
                                </div>


                            </> : null
                        }
                        {
                            step == 2 ? <>
                                <hr />
                                <TitlePageBack icon={''} title={'Data Pekerjaan Calon Anggota'} />
                                <hr />
                                <div className='p-16px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Nama Tempat Bekerja*'}
                                            placeholder={'Masukan Nama Tempat Bekerja'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputText
                                            title={'Departmen*'}
                                            placeholder={'Masukan Departmen'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Jabatan*'}
                                            placeholder={'Masukan Jabatan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDropdown
                                            title={'Golongan/ Status Kepegawaian*'}
                                            placeholder={'Masukan Golongan/ Status Kepegawaian'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputDate
                                            title={'Tanggal Mulai*'}
                                            placeholder={'Masukan Tanggal Mulai'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputText
                                            title={'Nomor Telepon Perusahaan*'}
                                            placeholder={'Masukan Nomor Telepon Perusahaan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputDropdown
                                            title={'Jenis Kelamin*'}
                                            placeholder={'Masukan Jenis Kelamin'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                        <InputDropdown
                                            title={'Status Pekawinan*'}
                                            placeholder={'Masukan Status Pekawinan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-1 gap-4'>
                                        <InputText
                                            title={'Penghasilan Per BUlan*'}
                                            placeholder={'Masukan Penghasilan Per BUlan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>

                                <hr />
                                <TitlePageBack icon={''} title={'Alamat Perusahaan'} />
                                <hr />
                                <div className='p-16px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Detail Alamat*'}
                                            placeholder={'Masukan Detail Alamat'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDropdown
                                            title={'Provinsi*'}
                                            placeholder={'Masukan Provinsi'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputDropdown
                                            title={'Kota/Kabupaten*'}
                                            placeholder={'Masukan Kota/Kabupaten'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                        <InputDropdown
                                            title={'Kecamatan*'}
                                            placeholder={'Masukan Kecamatan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Kelurahan*'}
                                            placeholder={'Masukan Kelurahan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputText
                                            title={'Kode POS*'}
                                            placeholder={'Masukan Kode POS'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>
                            </> : null
                        }
                        {
                            step == 3 ? <>
                                <hr />
                                <TitlePageBack icon={''} title={'Informasi Kontak Darurat'} />
                                <hr />
                                <div className='p-16px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Nama*'}
                                            placeholder={'Masukan Nama'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDropdown
                                            title={'Status Hubungan*'}
                                            placeholder={'Masukan Status Hubungan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-1 gap-4'>
                                        <InputText
                                            title={'No Telpon*'}
                                            placeholder={'Masukan No Telpon'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>

                                <hr />
                                <TitlePageBack icon={''} title={'Alamat Sesuai KTP'} />
                                <hr />
                                <div className='p-16px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Detail Alamat*'}
                                            placeholder={'Masukan Detail Alamat'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDropdown
                                            title={'Provinsi*'}
                                            placeholder={'Masukan Provinsi'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Kota/Kabupaten*'}
                                            placeholder={'Masukan Kota/Kabupaten'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDropdown
                                            title={'Kecamatan*'}
                                            placeholder={'Masukan Kecamatan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Kelurahan*'}
                                            placeholder={'Masukan Kelurahan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputText
                                            title={'Kode POS*'}
                                            placeholder={'Masukan Kode POS'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>

                                <hr />
                                <TitlePageBack icon={''} title={'Alamat Domisili'} />
                                <hr />
                                <div className='p-16px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Detail Alamat*'}
                                            placeholder={'Masukan Detail Alamat'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDropdown
                                            title={'Provinsi*'}
                                            placeholder={'Masukan Provinsi'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputDropdown
                                            title={'Kota/Kabupaten*'}
                                            placeholder={'Masukan Kota/Kabupaten'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                        <InputDropdown
                                            title={'Kecamatan*'}
                                            placeholder={'Masukan Kecamatan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px pt-0px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputDropdown
                                            title={'Kelurahan*'}
                                            placeholder={'Masukan Kelurahan'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                        <InputDropdown
                                            title={'Kode POS*'}
                                            placeholder={'Masukan Kode POS'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                            </> : null
                        }
                        {
                            step == 4 ? <>
                                <hr />
                                <TitlePageBack icon={''} title={'Informasi Akun Bank'} />
                                <hr />
                                <div className='p-16px'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <InputText
                                            title={'Nama Pemilik Rekening*'}
                                            placeholder={'Masukan Nama Pemilik Rekening'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                        <InputDropdown
                                            title={'Nama Bank*'}
                                            placeholder={'Masukan Nama Bank'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                            marginLeftChild={'16px'}
                                        />
                                    </div>
                                </div>
                                <div className='p-16px'>
                                    <div className='grid grid-cols-1 gap-4'>
                                        <InputText
                                            title={'No Rekening*'}
                                            placeholder={'Masukan No Rekening'}
                                            flexParent={1}
                                            classTitle={'dropdown-status-data-table-title'}
                                        />
                                    </div>
                                </div>
                            </> : null
                        }

                        <div className='d-flex align-center jusitfy-end pb-16px pr-16px'>
                            <div className='d-flex gap-10px'>
                                <ButtonCancel
                                    title={'Batal'}
                                    action={() => handleActCancel()}
                                />
                                <ButtonSave
                                    title={`${step == 1 || step == 2 || step == 3
                                        ? 'Next' : 'Simpan Data'
                                        }`}
                                    action={() => {
                                        if (step == 1) {
                                            setstep(2)
                                        }
                                        if (step == 2) {
                                            setstep(3)
                                        }
                                        if (step == 3) {
                                            setstep(4)
                                        }
                                        if (step == 4) {
                                            handleActSubmit()
                                        }
                                    }}
                                />
                            </div>
                        </div>

                    </> : null
                }

                {
                    TabAdd?.isActivetab == 1 ? <>
                        <div className='mt-16px'>

                            <hr />
                            <div className='p-16px'>
                                <StepTitle
                                    title={'Download & Isi File Excel'}
                                    number={'1'}
                                />
                            </div>
                            <hr />

                            <div style={{ paddingLeft: '64px' }} className='p-16px'>
                                <div className='step-title-langkah'>
                                    Cara Tambah Sekaligus Pengadaan barang</div>
                                <ul className='mt-8px'>
                                    <li className='step-title-langkah-sub'>
                                        Klik tombol "Download Template" dibawah.</li>
                                    <li className='step-title-langkah-sub'>
                                        Setelah template di download, buka dokumen excel tersebut.</li>
                                    <li className='step-title-langkah-sub'>
                                        Isi informasi sesuai dengan data detail yang telah di persiapkan sebelumnya.</li>
                                    <li className='step-title-langkah-sub'>
                                        Cek kembali informasi Barang lalu simpan dengan tekan 'ctrl + S' pada keyboard</li>
                                </ul>

                                <div style={{ width: '250px' }} className='step-title-download mt-16px'>
                                    <IDownload />
                                    <div>Download Template Excel</div>
                                </div>
                            </div>

                            <hr />
                            <div className='p-16px'>
                                <StepTitle
                                    title={'Upload File Excel'}
                                    number={'2'}
                                />
                            </div>
                            <hr />

                            <div style={{ paddingLeft: '64px' }} className='p-16px'>
                                <UploadImage
                                    flex={1}
                                />

                                <div className='step-title-langkah mt-16px'>
                                    Cara Tambah Sekaligus Pengadaan barang</div>
                                <ul className='mt-8px'>
                                    <li className='step-title-langkah-sub'>
                                        Klik tombol "Download Template" dibawah.</li>
                                    <li className='step-title-langkah-sub'>
                                        Setelah template di download, buka dokumen excel tersebut.</li>
                                    <li className='step-title-langkah-sub'>
                                        Isi informasi sesuai dengan data detail yang telah di persiapkan sebelumnya.</li>
                                    <li className='step-title-langkah-sub'>
                                        Cek kembali informasi Barang lalu simpan dengan tekan 'ctrl + S' pada keyboard</li>
                                </ul>
                            </div>

                        </div>
                    </> : null
                }
            </div>

            <ModalConfirmationAdd
                isModalUp={modalConfirmation}
                setisModalUp={setmodalConfirmation}
                actionCallback={() => {
                    setmodalConfirmation(false)
                    router.push('/anggota/daftar-anggota')
                }}
            />
        </Admin>
    )
}

const ICeklis = () => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 16.5C6.37827 16.5 4.34344 15.6571 2.84315 14.1569C1.34285 12.6566 0.5 10.6217 0.5 8.5C0.5 6.37827 1.34285 4.34344 2.84315 2.84315C4.34344 1.34285 6.37827 0.5 8.5 0.5C10.6217 0.5 12.6566 1.34285 14.1569 2.84315C15.6571 4.34344 16.5 6.37827 16.5 8.5C16.5 10.6217 15.6571 12.6566 14.1569 14.1569C12.6566 15.6571 10.6217 16.5 8.5 16.5ZM9.864 5.536L7.712 9.646L6.169 8.256C6.07136 8.16815 5.95738 8.10038 5.83355 8.05658C5.70972 8.01278 5.57848 7.99379 5.44732 8.00071C5.31616 8.00763 5.18764 8.04031 5.06911 8.0969C4.95058 8.15348 4.84435 8.23286 4.7565 8.3305C4.66865 8.42814 4.60088 8.54212 4.55708 8.66595C4.51328 8.78978 4.49429 8.92102 4.50121 9.05218C4.50813 9.18334 4.54081 9.31186 4.5974 9.43039C4.65399 9.54892 4.73336 9.65515 4.831 9.743L7.331 11.993C7.44427 12.095 7.57937 12.1698 7.72596 12.2116C7.87255 12.2534 8.02676 12.2611 8.17681 12.2342C8.32685 12.2073 8.46875 12.1464 8.59167 12.0563C8.71458 11.9661 8.81526 11.849 8.886 11.714L11.636 6.464C11.7591 6.22902 11.7837 5.95478 11.7046 5.7016C11.6255 5.44843 11.449 5.23706 11.214 5.114C10.979 4.99094 10.7048 4.96627 10.4516 5.04541C10.1984 5.12455 9.98706 5.30102 9.864 5.536Z" fill="white" />
        </svg>

    )
}

const IDownload = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.687 17.292C10.5956 17.1997 10.4868 17.1264 10.3669 17.0764C10.247 17.0264 10.1184 17.0007 9.9885 17.0007C9.8586 17.0007 9.72998 17.0264 9.61009 17.0764C9.49019 17.1264 9.3814 17.1997 9.29 17.292C9.10466 17.4792 9.0007 17.732 9.0007 17.9955C9.0007 18.259 9.10466 18.5118 9.29 18.699L11.254 20.679C11.3546 20.7807 11.4744 20.8613 11.6064 20.9164C11.7384 20.9715 11.88 20.9998 12.023 20.9998C12.166 20.9998 12.3076 20.9715 12.4396 20.9164C12.5716 20.8613 12.6914 20.7807 12.792 20.679L14.711 18.746C14.8966 18.5587 15.0008 18.3057 15.0008 18.042C15.0008 17.7783 14.8966 17.5253 14.711 17.338C14.6196 17.2455 14.5107 17.1721 14.3907 17.122C14.2708 17.0719 14.142 17.0462 14.012 17.0462C13.882 17.0462 13.7532 17.0719 13.6333 17.122C13.5133 17.1721 13.4044 17.2455 13.313 17.338L12.023 18.638L10.687 17.292Z" fill="white" />
            <path d="M13.001 19.993L13 10.006C13 9.451 12.552 9 12 9C11.448 9 11 9.45 11 10.007L11.001 19.994C11.001 20.549 11.449 21 12.001 21C12.553 21 13.001 20.55 13.001 19.993Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.938 5.48C7.68111 5.4383 7.42125 5.41757 7.161 5.418C4.356 5.418 2 7.62 2 10.498C2 13.409 4.385 16 7.1 16H9.981V14.007H7.1C5.443 14.007 3.985 12.344 3.985 10.499C3.985 8.721 5.454 7.412 7.089 7.412H7.101C7.49 7.412 7.787 7.462 8.071 7.562L8.241 7.625C8.846 7.873 9.116 7.379 9.116 7.379L9.266 7.112C9.996 5.765 11.467 5.016 12.982 4.992C13.9871 5.00203 14.9543 5.37742 15.703 6.04812C16.4517 6.71882 16.9309 7.63901 17.051 8.637L17.097 8.977C17.097 8.977 17.168 9.502 17.762 9.502C17.775 9.502 17.774 9.507 17.785 9.507H18.039C19.175 9.507 20.015 10.466 20.015 11.665C20.015 12.872 19.028 14.007 17.945 14.007H13.981V16H17.945C20.105 16 22 13.955 22 11.665C22 9.665 20.688 8.002 18.862 7.591C18.155 4.884 15.809 3.039 12.976 3C11.001 3.02 9.075 3.9 7.938 5.48Z" fill="white" />
        </svg>

    )
}
export default WithAuth(AddDaftarAnggota)