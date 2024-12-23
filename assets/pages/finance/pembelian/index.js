import WithAuth from 'components/config/protect'
import DataTablePembelian from 'components/finance/pembelian/dataTablePembelian'
import ModalDetailPembelian from 'components/finance/pembelian/modalDetailPenjualan'
import IAlarm from 'components/icons/IAlarm'
import ICeklisPembelian from 'components/icons/ICeklisPembelian'
import IDate from 'components/icons/IDate'
import IReload from 'components/icons/IReload'
import Admin from 'layouts/Admin'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Pembelian = () => {

  const [isModalPembelianDetail, setisModalPembelianDetail] = useState(false)

  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const router = useRouter()
  const [isObjectPembelianDetail, setisObjectPembelianDetail] = useState({});

  const SimpanAct = () => {
    setisModalConfirmationAdd(false)
    setisModalPembelianDetail(false)
  }

  return (
    <Admin>
      <div className='finance-penerimaan-kontainer'>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Pembelian</div>
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
          <div className='finance-penerimaan-title'>Riwayat Pembelian</div>
          <IReload />
        </div>
        <div style={{
          marginTop: '0px',
          marginBottom: '0px',
        }} className='garis-tebal'></div>

        <DataTablePembelian
          setisObjectPembelianDetail={setisObjectPembelianDetail}
          setisModalPembelianDetail={setisModalPembelianDetail}
        />
        <ModalDetailPembelian
          isObjectPembelianDetail={isObjectPembelianDetail}
          isModalUp={isModalPembelianDetail}
          setisModalUp={setisModalPembelianDetail}
          setisModalConfirmationAdd={setisModalConfirmationAdd}
        />
      </div>
    </Admin>
  )
}

export default WithAuth(Pembelian)