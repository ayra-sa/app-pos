import IExportEcxel from 'components/icons/IExportExcel'
import IJurnal from 'components/icons/IJurnal'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import TitlePage from 'components/TitlePage/TitlePage'
import TitlePageBack from 'components/TitlePage/TitlePageBack'
import TitlePageReload from 'components/TitlePage/TitlePageReload'
import Admin from 'layouts/Admin'
import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link'
import ModalBayarPinjaman from 'components/finance/pinjaman/modalBayar'

import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'
import { round } from 'lodash'
import ButtonCancel from 'components/Button/buttonCancel'
import ButtonSave from 'components/Button/buttonSave'
import { useRouter } from 'next/router'

const DetailBukuPinjaman = () => {

    const [valueStart, setValueStart] = useState(new Date());
    const [valueEnd, setValueEnd] = useState(new Date());

    const router = useRouter()

    const columns = [
        {
            name: 'Angsuran ke',
            width: '120px',
            selector: row => row.Angsuran_ke,
        },
        {
            name: 'Nominal',
            width: '150px',
            selector: row => row.Nominal,
        },
        {
            name: 'Tanggal Pembayaran',
            selector: row => row.TanggalPembayaran,
        },
        {
            name: 'Metode Pembayaran',
            selector: row => row.Metode_Pembayaran,
        },
        {
            name: 'Status',
            width: '120px',
            selector: row => row.Status,
        },
    ]

    const data = [
        {
            Angsuran_ke: 'Angsuran_ke',
            Nominal: 'Nominal',
            TanggalPembayaran: 'TanggalPembayaran',
            Metode_Pembayaran: 'Metode_Pembayaran',
            Status: 'Status',
            id: 1,
            nomor: '1',
            Sisa: 2,
            Angsuran: 3,
            "Sisa Tenor (Bln)": 3,
            tanggal: '20 Juli 2023',
            idTrx: 1234,
            namaAnggota: 'nama anggota 1',
            type: 'sukarela',
            nilai: 'Rp. 20.000',
            total: 'Rp. 100.000',
            status: 'selesai'
        },
        {
            Angsuran_ke: 'Angsuran_ke',
            Nominal: 'Nominal',
            TanggalPembayaran: 'TanggalPembayaran',
            Metode_Pembayaran: 'Metode_Pembayaran',
            Status: 'Status',
            id: 2,
            nomor: '2',
            Sisa: 2,
            Angsuran: 3,
            "Sisa Tenor (Bln)": 3,
            tanggal: '20 Juli 2023',
            idTrx: 1234,
            namaAnggota: 'nama anggota 2',
            type: 'sukarela',
            nilai: 'Rp. 20.000',
            total: 'Rp. 100.000',
            status: 'gagal'
        },
        {
            Angsuran_ke: 'Angsuran_ke',
            Nominal: 'Nominal',
            TanggalPembayaran: 'TanggalPembayaran',
            Metode_Pembayaran: 'Metode_Pembayaran',
            Status: 'Status',
            id: 3,
            nomor: '3',
            Sisa: 2,
            Angsuran: 3,
            "Sisa Tenor (Bln)": 3,
            tanggal: '20 Juli 2023',
            idTrx: 3234,
            namaAnggota: 'nama anggota 3',
            type: 'sukarela',
            nilai: 'Rp. 20.000',
            total: 'Rp. 100.000',
            status: 'pending'
        },
    ]

    const [isModal, setisModal] = useState(false)

    const [page, setPage] = useState(1);
    const handlePagination = (page) => {
        setPage(page.selected + 1);
    };
    const CustomPagination = () => {
        const count = round(10);
        const currentPage = 1;

        return (
            <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                breakLabel="..."
                pageCount={Math.ceil(count) || 1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                activeClassName="active-page"
                forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                onPageChange={(page) => handlePagination(page)}
                pageClassName="page-item"
                breakClassName="page-item"
                nextLinkClassName="page-link te-card-shadow b1-bold"
                pageLinkClassName="page-link te-card-shadow b1-bold"
                breakLinkClassName="page-link te-card-shadow b1-bold"
                previousLinkClassName="page-link te-card-shadow b1-bold"
                nextClassName="page-item next"
                previousClassName="page-item prev"
                containerClassName={
                    "custom-pagination react-paginate justify-content-end m-0"
                }
            />
        );
    };

    return (
        <Admin>
            <div className='bg-white'>
                <TitlePageBack  action={() => router?.push('/finance/pinjaman')} title={'Detail'} />
                <hr />
                <div style={{ padding: '8px 0px 8px 0px' }} className='finance-simpanan-mutasi-table-wrapp'>
                    <div className='finance-simpanan-mutasi-table-wrapp-sub'>

                        <div className='finance-penerimaan-filter-tgl'>
                            <div className='finance-penerimaan-filter-tgl-style mr-8px'>Filter tgl</div>
                            <div>
                                <DatePicker onChange={setValueStart} value={valueStart} />
                            </div>
                        </div>


                        <div className='dropdown-status-data-table-wrapp'>
                            <div style={{ width: '150px ' }} className='dropdown-status-data-table-title'>Filter Akun</div>
                            <select className='dropdown-status-data-table-select' name="cars" id="cars">
                                <option value="">Samsudin</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>

                    </div>
                    <div className='flex '>
                        <div className='Export-button-excel-wrapp'>
                            <IExportEcxel />
                            <div className='Export-button-excel'>Export Excel</div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='d-flex flex-column gap-16px p-16px'>
                    <div className='d-flex justify-between'>
                        <div className='detail-buku-pinjaman'>IDTRX 876367392</div>
                        <div className='detail-buku-pinjaman-status'>Berjalan</div>
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex flex-column gap-4px flex-1'>
                            <div className='detail-buku-pinjaman-deskripsi'>Nama Anggota</div>
                            <div className='detail-buku-pinjaman-deskripsi-sub'>Nama Anggota</div>
                        </div>
                        <div className='d-flex flex-column gap-4px flex-1'>
                            <div className='detail-buku-pinjaman-deskripsi'>Total</div>
                            <div className='detail-buku-pinjaman-deskripsi-sub'>Total</div>
                        </div>
                        <div className='d-flex flex-column gap-4px flex-1'>
                            <div className='detail-buku-pinjaman-deskripsi'>Tenor (Bln)</div>
                            <div className='detail-buku-pinjaman-deskripsi-sub'>Tenor (Bln)</div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex flex-column gap-4px flex-1'>
                            <div className='detail-buku-pinjaman-deskripsi'>Tanggal Jatuh Tempo (Tiap Bulan)</div>
                            <div className='detail-buku-pinjaman-deskripsi-sub'>Tanggal Jatuh Tempo (Tiap Bulan)</div>
                        </div>
                        <div className='d-flex flex-column gap-4px flex-1'>
                            <div className='detail-buku-pinjaman-deskripsi'>Sisa</div>
                            <div className='detail-buku-pinjaman-deskripsi-sub'>Sisa</div>
                        </div>
                        <div className='d-flex flex-column gap-4px flex-1'>
                            <div className='detail-buku-pinjaman-deskripsi'>Sisa</div>
                            <div className='detail-buku-pinjaman-deskripsi-sub'>Sisa</div>
                        </div>
                    </div>
                </div>

                <div className='padding-wrapp'>
                    <DataTable
                        columns={columns}
                        data={data}
                    />
                    <CustomPagination />
                </div>

                <div className='d-flex justify-end p-16px'>
                    <div className='d-flex gap-16px'>
                        <ButtonCancel action={() => router?.push('/finance/pinjaman')} paddingTop={'6px'} title={'Tutup Pinjaman'}/>
                        <ButtonSave action={() => setisModal(true)} title={'Bayar Pinjaman'}/>
                    </div>
                </div>

            </div>

            <ModalBayarPinjaman 
                isModalUp={isModal}
                setisModalUp={setisModal}
            />
        </Admin>
    )
}

export default DetailBukuPinjaman