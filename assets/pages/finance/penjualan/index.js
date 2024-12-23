import Admin from 'layouts/Admin'
import React, { useState } from 'react'
import IAlarm from 'components/icons/IAlarm'
import ICeklisPembelian from 'components/icons/ICeklisPembelian'
import IDate from 'components/icons/IDate'
import IReload from 'components/icons/IReload'
import DataTablePenjualan from 'components/finance/penjualan/dataTablePenjualan'
import ModalDetailPenjualan from 'components/finance/penjualan/modalDetailPenjualan'
import { useRouter } from 'next/router'
import ModalConfirmationAdd from 'components/modalConfirmationAdd'
import WithAuth from 'components/config/protect'

const Penjualan = () => {

  const [isModalPenjualanDetail, setisModalPenjualanDetail] = useState(false)

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const router = useRouter()

  const SimpanAct = () => {
    setisModalConfirmationAdd(false)
    setisModalPenjualanDetail(false)
  }

  return (
    <Admin>
      <div className='finance-penerimaan-kontainer'>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Penjualan</div>
          <IReload />
        </div>

        <div className='grid grid-cols-3 gap-4 p-2'>

          <div className='finance-pembelian-satuan-title-wrapp p-5'>
            <IAlarm />
            <div className='ml-3'>
              <div className='finance-pembelian-satuan-count-wrapp'>
                <div className='finance-pembelian-satuan-title'>Pembelian Belum Dibayar</div>
                <div className='finance-pembelian-satuan-count'>
                  <div className='finance-pembelian-satuan-count-value'>4</div>
                </div>
              </div>
              <div className='finance-pembelian-satuan-harga'><span style={{
                fontSize: '12px',
                fontWeight: 400,
              }}>Rp.</span> 500.000</div>
            </div>
          </div>

          <div className='finance-pembelian-satuan-title-wrapp p-5'>
            <IDate />
            <div className='ml-3'>
              <div className='finance-pembelian-satuan-count-wrapp'>
                <div className='finance-pembelian-satuan-title'>Pembelian Jatuh Tempo</div>
                <div className='finance-pembelian-satuan-count'>
                  <div className='finance-pembelian-satuan-count-value'>4</div>
                </div>
              </div>
              <div className='finance-pembelian-satuan-harga'><span style={{
                fontSize: '12px',
                fontWeight: 400,
              }}>Rp.</span> 500.000</div>
            </div>
          </div>

          <div className='finance-pembelian-satuan-title-wrapp p-5'>
            <ICeklisPembelian />
            <div className='ml-3'>
              <div className='finance-pembelian-satuan-count-wrapp'>
                <div className='finance-pembelian-satuan-title'>Pelunasan Di Bayar 30 Hari Terakhir </div>
                <div className='finance-pembelian-satuan-count'>
                  <div className='finance-pembelian-satuan-count-value'>4</div>
                </div>
              </div>
              <div className='finance-pembelian-satuan-harga'><span style={{
                fontSize: '12px',
                fontWeight: 400,
              }}>Rp.</span> 500.000</div>
            </div>
          </div>

        </div>
      </div>

      <div className='finance-penerimaan-kontainer mt-3'>

        <div className='finance-penerimaan-wrapp-top-nobg'>
          <div className='finance-penerimaan-title'>Riwayat Penjualan</div>
          <IReload />
        </div>
        <div style={{
          marginTop: '0px',
          marginBottom: '0px',
        }} className='garis-tebal'></div>

        <DataTablePenjualan setisModalPenjualanDetail={setisModalPenjualanDetail} />
      </div>

      <ModalDetailPenjualan
        isModalUp={isModalPenjualanDetail}
        setisModalUp={setisModalPenjualanDetail}
        setisModalConfirmationAdd={setisModalConfirmationAdd}
      />

      <ModalConfirmationAdd
        actionCallback={() => SimpanAct()}
        isModalUp={isModalConfirmationAdd}
        setisModalUp={setisModalConfirmationAdd}
      />
    </Admin>
  )
}

export default WithAuth(Penjualan)