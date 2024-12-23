import IAir from 'components/icons/IAir'
import IBPJSKesehatan from 'components/icons/IBPJSKesehatan'
import ICeklis from 'components/icons/ICeklis'
import IGames from 'components/icons/IGames'
import IInternetKabek from 'components/icons/IInternetKabek'
import IListrikPLN from 'components/icons/IListrikPLN'
import IPaketData from 'components/icons/IPaketData'
import IPaketTelpon from 'components/icons/IPaketTelpon'
import IReload from 'components/icons/IReload'
import ITokenListrik from 'components/icons/ITokenListrik'
import IUangElektronik from 'components/icons/IUangElektronik'
import IpulsaReguler from 'components/icons/IpulsaReguler'
import Admin from 'layouts/Admin'
import React from 'react'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import WithAuth from 'components/config/protect'

const icons = {
  IpulsaReguler: <IpulsaReguler />,
  IPaketData: <IPaketData />,
  IPaketTelpon: <IPaketTelpon />,
  IListrikPLN: <IListrikPLN />,
  ITokenListrik: <ITokenListrik />,
  IUangElektronik: <IUangElektronik />,
  IGames: <IGames />,
  IAir: <IAir />,
  IInternetKabek: <IInternetKabek />,
  IBPJSKesehatan: <IBPJSKesehatan />,
}

const Kategori = () => {

  const kategori = [
    {
      title: 'pulsa Reguler',
      icons: 'IpulsaReguler',
    },
    {
      title: 'Paket Data',
      icons: 'IPaketData',
    },
    {
      title: 'Paket Telpon & SMS',
      icons: 'IPaketTelpon',
    },
    {
      title: 'Listrik PLN',
      icons: 'IListrikPLN',
    },
    {
      title: 'Token Listrik',
      icons: 'ITokenListrik',
    },
    {
      title: 'Uang Elektronik',
      icons: 'IUangElektronik',
    },
    {
      title: 'Game',
      icons: 'IGames',
    },
    {
      title: 'Air',
      icons: 'IAir',
    },
    {
      title: 'Internet & TV Kabel',
      icons: 'IInternetKabek',
    },
    {
      title: 'BPJS Kesehatan',
      icons: 'IBPJSKesehatan',
    },
  ]

  return (
    <Admin>
      <div style={{
        background: 'white',
      }}>

        <div className='finance-penerimaan-wrapp-top'>
          <div className='finance-penerimaan-title'>Kategori Produk Digital</div>
          <IReload />
        </div>

        <div className='grid grid-cols-4 gap-4 p-3'>

          {
            kategori?.map((res) => {
              return (

                <div className='produk-digital-pengaturan-title-sub-kategori-wrapp'>
                  <div style={{
                    display: 'flex'
                  }}>
                    {
                      icons[res?.icons]
                    }
                    <div className='display-flex-align-center'><div className='ml-3 produk-digital-pengaturan-title-sub-kategori'>{res?.title}</div></div>
                  </div>
                  <ICeklis />
                </div>

              )
            })
          }

        </div>
      </div>
    </Admin>
  )
}

export default WithAuth(Kategori)