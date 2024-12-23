import { ActGetPenerimaan } from 'components/config/api/finance/penerimaan.api'
import IAdd from 'components/icons/IAdd'
import IEyes from 'components/icons/IEyes'
import ISampaiTgl from 'components/icons/ISampaiTgl'
import ISearchInput from 'components/icons/IsearchInput'
import INoData from 'components/INoData'
import SkeletonTable from 'components/skeleton/skeletonTable'
import { ceil, round } from 'lodash'
import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-date-picker'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

const DataTablePenerimaan = ({
  urlCreatePenerimaan,
  setobjModalUp,
  objModalUp,
  isModalUp,
  setisModalUp,
}) => {
  const [loading, setloading] = useState(true)
  const [initialData, setinitialData] = useState(false)

  const dispatch = useDispatch()
  const { data } = useSelector((state) => state?.PenerimaanReducer?.respon)
  const { search, limit, page, start_date, end_date } = useSelector((state) => state?.PenerimaanReducer?.params)

  useEffect(() => {
    dispatch(ActGetPenerimaan(setloading, setinitialData))
  }, [])

  useEffect(() => {
    if (initialData) {
      dispatch(ActGetPenerimaan(setloading, setinitialData))
    }
  }, [limit])

  useEffect(() => {
    if (initialData) {
      dispatch(ActGetPenerimaan(setloading, setinitialData))
    }
  }, [page])

  useEffect(() => {
    if (initialData) {
      dispatch(ActGetPenerimaan(setloading, setinitialData))
    }
  }, [start_date])

  useEffect(() => {
    if (initialData) {
      dispatch(ActGetPenerimaan(setloading, setinitialData))
    }
  }, [end_date])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (initialData) {
        dispatch(ActGetPenerimaan(setloading, setinitialData))
      }
    }, 1200);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);


  const columns = [
    {
      name: 'Nomor',
      selector: row => row?.receipt_number,
    },
    {
      name: 'Tanggal',
      selector: row => moment(row?.transaction_date).format('YYYY-MM-DD'),
    },
    {
      name: 'Akun',
      selector: row => row?.account?.name,
    },
    {
      name: 'Keterangan',
      selector: row => row?.remark,
    },
    {
      name: 'Kredit',
      selector: row => row?.total_amount,
      cell: (row) => {
        return (
          <div>Rp. {row?.total_amount}</div>
        )
      }
    },
    {
      name: 'Total',
      selector: row => row?.account?.balance,
      cell: (row) => {
        return (
          <div>Rp. {row?.account?.balance}</div>
        )
      }
    },
    {
      name: 'Aksi',
      width: '70px',
      cell: (row, index, column, id) => {
        return (
          <div className='cursor-pointer' onClick={() => {
            setisModalUp(true)
            dispatch({
              type: 'SET_DETAILS_PENERIMAAN',
              details: row,
            })
          }}>
            <IEyes />
          </div>
        )
      }
    },
  ];

  const handlePagination = (page) => {
    dispatch({
      type: 'SET_PAGE_PENERIMAAN',
      page: page.selected + 1,
    })
  };

  const CustomPagination = () => {
    const count = round(Math.ceil(data.length / limit));
    const currentPage = page;

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
    <>
      {
        loading ?
          <div className='p-16px'>
            <SkeletonTable />
          </div>
          : <>
            <div className='finance-penerimaan-wrapp-second'>

              <div style={{ display: 'flex' }}>
                <div className='finance-penerimaan-wrapp-search'>
                  <ISearchInput />
                  <input
                    onChange={(e) => dispatch({
                      type: 'SET_SEARCH_PENERIMAAN',
                      search: e.target.value,
                    })}
                    value={search}
                    placeholder='cari'
                    className='finance-penerimaan-wrapp-search-input'
                    type="text" />
                </div>

                <div className='finance-penerimaan-filter-tgl'>
                  <div className='finance-penerimaan-filter-tgl-style mr-16px'>Filter tgl</div>
                  <div>
                    <DatePicker onChange={(date) => {
                      dispatch({
                        type: 'SET_START_DATE_PENERIMAAN',
                        start_date: date
                      })
                    }} value={start_date} />
                  </div>
                  <div style={{ minWidth: '8px' }}></div>
                  <ISampaiTgl />
                  <div style={{ minWidth: '8px' }}></div>
                  <div>
                    <DatePicker onChange={(date) => {
                      dispatch({
                        type: 'SET_END_DATE_PENERIMAAN',
                        end_date: date
                      })
                    }} value={end_date} />
                  </div>
                </div>

              </div>
              <div>
                <Link href={'/finance/penerimaan/create'}>
                  <div className='finance-penerimaan-buttont-buat-wrapp'>
                    <IAdd />
                    <div className='finance-penerimaan-buttont-buat'>Buat Penerimaan</div>
                  </div>
                </Link>
              </div>

            </div>

            <div
              style={{
                height: '2px',
                background: '#091E4224',
                marginBottom: '16px',
              }}
            ></div>
            <div className='p-16px'>
              {
                data?.length > 0 ? <DataTable
                  columns={columns}
                  data={data}
                /> : <div>
                  <INoData />
                </div>
              }
              <div className='d-flex justify-between'>
                <div className='dropdown-limit mt-8px'>
                  <select value={limit} onChange={(e) => {
                    dispatch({
                      type: 'SET_LIMIT_PENERIMAAN',
                      limit: e.target.value
                    })
                  }} className='dropdown-limit-sub'>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>50</option>
                  </select>
                </div>
                <CustomPagination />
              </div>
            </div>
          </>
      }
    </>
  )
}

export default DataTablePenerimaan