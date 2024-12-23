import IAdd from 'components/icons/IAdd';
import IBack from 'components/icons/IBack'
import ModalConfirmationAdd from 'components/modalConfirmationAdd';
import Admin from 'layouts/Admin'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { useRouter } from 'next/router'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import ICeklis from 'components/icons/ICeklis';
import WithAuth from 'components/config/protect';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { ActAddPenerimaan } from 'components/config/api/finance/penerimaan.api';
import ModalSukses from 'components/modalSukses';
import ModalError from 'components/modalErrorGlobal';
import ILoading from 'components/ILoading';
import ButtonSubmitForm from 'components/Button/buttonSubmitForm';
import ButtonCancel from 'components/Button/buttonCancel';
import InputDropdownvalue from 'components/Input/InputDropdownValue';
import moment from 'moment';
import IClose from 'components/icons/Close';
import { FormatRupiah } from 'components/helper/formatRupiah';
import { ActGetAkun } from 'components/config/api/finance/kas.api';

const CreatePenerimaan = () => {

  const { data } = useSelector((state) => state?.KasbankReducer?.respon)

  const [Tgl, setTgl] = useState(new Date());
  const [isModalConfirmationAdd, setisModalConfirmationAdd] = useState(false);
  const [modalSukses, setmodalSukses] = useState(false)
  const [modalLoading, setmodalLoading] = useState(false)
  const [modalError, setmodalError] = useState(false)
  const [titleRespon, settitleRespon] = useState('')
  const [loading, setloading] = useState(true)
  const [isModalUp, setisModalUp] = useState(false)

  const [listGroup_code, setlistGroup_code] = useState([
    { label: 'NKD-BDG', value: 'NKD-BDG' }
  ]);
  const [group_code, setgroup_code] = useState('');
  const [account, setaccount] = useState(null)
  const [listCurrency, setlistCurrency] = useState([
    { label: 'IDR', value: 'IDR' }
  ])
  const [currency, setcurrency] = useState('')
  const [details, setdetails] = useState([
    { account: null, listAccount: [], amount: 0, errorAkun: '', errorAmount: '', }
  ])
  const [transaction_date, settransaction_date] = useState(new Date())

  const router = useRouter()
  const dispatch = useDispatch()

  const SimpanAct = () => {
    setisModalConfirmationAdd(false)
    router.push('/finance/penerimaan/')
  }

  useEffect(() => {
    setdetails((prevDetails) =>
      prevDetails.map((detail) => ({
        ...detail,
        listAccount: data,
      }))
    );
  }, [data]);

  const handleAddDetailAccount = () => {
    setdetails((prevDetails) => [
      ...prevDetails,
      {
        account: null,
        listAccount: data,
        amount: 0,
        errorAkun: 'Akun tidak boleh kosong',
        errorAmount: 'Amount tidak boleh kosong',
      },
    ]);
  };

  const handleDeleteDetail = (index) => {
    if (index != 0) {
      setdetails((prevDetails) => prevDetails.filter((obj, i) => i !== index));
    }
  };


  const handleChangeAmount = (index, newAmount) => {
    setdetails((prevDetails) =>
      prevDetails.map((detail, i) =>
        i === index
          ? {
            ...detail,
            amount: newAmount,
            errorAmount: newAmount == ''
              ? 'Amount tidak boleh kosong'
              : !/^[0-9]+$/.test(newAmount)
                ? 'Amount hanya number' : ''
          }
          : detail
      )
    );
  };

  const handleChangeAccount = (index, value) => {
    setdetails((prevDetails) =>
      prevDetails.map((detail, i) =>
        i === index
          ? {
            ...detail,
            account: value,
            errorAkun: value == ''
              ? 'Akun tidak boleh kosong' : ''
          }
          : detail
      )
    );
  };

  const hasErrors = details.some(detail => detail.errorAmount || detail.errorAkun);
  const totalAmount = details.reduce((total, detail) => total + Number(detail.amount), 0);

  useEffect(() => {
    dispatch(ActGetAkun(() => { }, () => { }))
  }, [])


  return (
    <Admin>
      <div className='finance-penerimaan-create-kontainer'>

        <Formik
          initialValues={{
            receipt_number: '',
            remark: '',
          }}
          validate={values => {
            const errors = {};
            if (!group_code) {
              errors.group_code = 'Kode group tidak boleh kosong'
            }
            if (!currency) {
              errors.currency = 'Mata uang tidak boleh kosong'
            }
            if (!account) {
              errors.account = 'Akun tidak boleh kosong'
            }

            if (!values?.remark) {
              errors.remark = 'Deskripsi tidak boleh kosong'
            }

            if (!values.receipt_number) {
              errors.receipt_number = 'Nomor bukti tidak boleh kosong';
            } else if (!/^[0-9]+$/.test(values?.receipt_number)) {
              errors.receipt_number = 'Nomor bukti only number';
            }

            setdetails((prevDetails) =>
              prevDetails.map((detail, i) =>
                i === 0
                  ? {
                    ...detail,
                    errorAmount: detail?.amount != 0 ? '' : 'Amount tidak boleh kosong',
                    errorAkun: detail?.account != null ? '' : 'Akun tidak boleh kosong',
                  }
                  : detail
              )
            );

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const payload = {
              accountId: Number(account),
              group_code: group_code,
              receipt_number: values?.receipt_number,
              transaction_date: moment(transaction_date).format('YYYY-MM-DD'),
              currency: currency,
              remark: values?.remark,
              details: details?.map((res) => {
                return {
                  account: {
                    id: Number(res?.account),
                  },
                  amount: Number(res?.amount)
                }
              }),
            }
            if (!hasErrors) {
              dispatch(
                ActAddPenerimaan(
                  payload,
                  router,
                  setmodalError,
                  settitleRespon,
                  setmodalLoading,
                  setisModalUp,
                  setmodalSukses,
                  setloading,
                ))
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldError,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>

              <div className='finance-penerimaan-create-title-wrapp'>
                <Link href='/finance/penerimaan'>
                  <div className='cursor-pointer'><IBack /></div>
                </Link>
                <div className='finance-penerimaan-create-title'>Buat Penerimaan</div>
              </div>
              <div className='garis-tipis'></div>
              <div>
                <div className='finance-penerimaan-create-title-sub'>Detail Penerimaan</div>
              </div>
              <div className='garis-tebal'></div>

              <div className='grid grid-cols-2 gap-4'>

                <div>
                  <div className='finance-penerimaan-create-title-penerima-input'>Penerimaan ke Akun*</div>
                  <select value={account} onChange={(e) => {
                    setaccount(e.target.value)
                    setFieldError('account', '')
                  }} className='finance-penerimaan-create-dropdown' name="account" id="account">
                    <option className='finance-penerimaan-create-dropdown-option' >Pilih Akun</option>
                    {
                      data?.map((res, i) => {
                        return (
                          <option key={i} className='finance-penerimaan-create-dropdown-option' value={res?.id}>{res?.name}</option>
                        )
                      })
                    }
                  </select>
                  {errors?.account && <div className='mt-0px error-phone-number'>{errors?.account}</div>}

                </div>

                <div>
                  <div className='finance-penerimaan-create-top'>
                    <div className='d-flex align-center justify-between'>
                      <div className='finance-penerimaan-create-title-penerima-input'>Nomor Bukti</div>
                      <div style={{ gap: '10px', marginRight: '8px' }} className='d-flex align-center'>
                        <div style={{ fontWeight: 400 }} className='finance-penerimaan-create-title-penerima-input'>Otomatis</div>
                        <ICeklis />
                      </div>
                    </div>
                    <input name='receipt_number' value={values?.receipt_number} onChange={handleChange} className='finance-penerimaan-create-input-number' type="text" />
                    {errors?.receipt_number && <div className='mt-0px error-phone-number'>{errors?.receipt_number}</div>}
                  </div>
                </div>

              </div>

              <div className='grid grid-cols-2 gap-4 mt-2'>
                <div>
                  <div className='finance-penerimaan-create-title-penerima-input'>Tanggal*</div>
                  <DatePicker className={'finance-penerimaan-create-title-penerima-tgl'} onChange={(date => settransaction_date(date))} value={transaction_date} />
                </div>
                <div>
                  <div className='finance-penerimaan-create-title-penerima-input'>Mata uang*</div>
                  <select style={{ padding: '5px' }} value={currency} onChange={(e) => {
                    setcurrency(e.target.value)
                    setFieldError('currency', '')
                  }} className='finance-penerimaan-create-dropdown' name="account" id="account">
                    <option className='finance-penerimaan-create-dropdown-option' >Pilih Mata Uang</option>
                    {
                      listCurrency?.map((res, i) => {
                        return (
                          <option key={i} className='finance-penerimaan-create-dropdown-option' value={res?.value}>{res?.label}</option>
                        )
                      })
                    }
                  </select>
                  {errors?.currency && <div className='mt-0px error-phone-number'>{errors?.currency}</div>}

                </div>
              </div>

              <div className='grid grid-cols-2 gap-4 mt-2'>
                <div>
                  <div className='finance-penerimaan-create-title-penerima-input'>Kode Group*</div>
                  <select style={{ padding: '5px' }} value={group_code} onChange={(e) => {
                    setgroup_code(e.target.value)
                    setFieldError('group_code', '')
                  }} className='finance-penerimaan-create-dropdown' name="account" id="account">
                    <option className='finance-penerimaan-create-dropdown-option' >Pilih Kode Group</option>
                    {
                      listGroup_code?.map((res, i) => {
                        return (
                          <option key={i} className='finance-penerimaan-create-dropdown-option' value={res?.value}>{res?.label}</option>
                        )
                      })
                    }
                  </select>
                  {errors?.group_code && <div style={{ marginTop: '0px' }} className='error-phone-number'>{errors?.group_code}</div>}

                </div>
              </div>

              <div className='grid grid-cols-1 gap-4 mt-2'>
                <div>
                  <div className='finance-penerimaan-create-title-penerima-input'>Keterangan*</div>
                  <textarea value={values?.remark} onChange={handleChange} placeholder='Beri keterangan disini' className='finance-penerimaan-create-title-penerima-textarea' name="remark"></textarea>
                  {errors?.remark && <div style={{ marginTop: '-5px' }} className='error-phone-number'>{errors?.remark}</div>}
                </div>
              </div>

              <div className='garis-tipis'></div>
              <div>
                <div className='finance-penerimaan-create-title-sub'>Detail Transaksi</div>
              </div>
              <div className='garis-tebal'></div>

              {
                details?.map((res, i) => {
                  return (
                    <div className='grid grid-cols-2 gap-4 mt-8px'>
                      <div>
                        <div className='finance-penerimaan-create-title-penerima-input'>Akun*</div>
                        <select onChange={(e) => {
                          handleChangeAccount(i, e.target.value)
                        }} className='finance-penerimaan-create-dropdown' name="cars" id="cars">
                          <option className='finance-penerimaan-create-dropdown-option' value="">Pilih Akun</option>
                          {
                            res?.listAccount?.map((resSub, z) => {
                              return (
                                <option className='finance-penerimaan-create-dropdown-option' value={resSub.id}>
                                  {resSub?.name}
                                </option>
                              )
                            })
                          }
                        </select>
                        {res?.errorAkun && <div style={{ marginTop: '0px' }} className='error-phone-number'>{res?.errorAkun}</div>}

                      </div>

                      <div>
                        <div className='finance-penerimaan-create-top'>
                          <div className='finance-penerimaan-create-title-penerima-input'>Nilai</div>
                          <div className='d-flex gap-1'>
                            <input onChange={(e) => handleChangeAmount(i, e.target.value)} value={res?.amount} className='finance-penerimaan-create-input-number' type="text" />
                            {
                              i != 0 && <div
                                onClick={() => {
                                  handleDeleteDetail(i)
                                }}
                                className='cursor-pointer'>
                                <IClose />
                              </div>
                            }
                          </div>
                          {res?.errorAmount && <div style={{ marginTop: '0px' }} className='error-phone-number'>{res?.errorAmount}</div>}
                        </div>
                      </div>
                    </div>
                  )
                })
              }

              <div className='grid grid-cols-1 mt-4 gap-4'>
                <div className='finance-penerimaan-create-tambah-data'>
                  <div onClick={() => {
                    handleAddDetailAccount()
                  }} className='flex finance-penerimaan-create-tambah-data-wrapp'>
                    <IAdd color='#44546F' />
                    <div className='finance-penerimaan-create-tambah-data-wrapp-title ml-2'>Tambah Data</div>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-1 mt-4 gap-4'>
                <div>
                  <div className='finance-penerimaan-create-total-title'>Total</div>
                  <div className='finance-penerimaan-create-total-value'>RP {!isNaN(totalAmount) ? FormatRupiah(totalAmount) : null}</div>
                </div>
              </div>

              <div style={{ paddingTop: '0px' }} className='w-100 justify-end d-flex align-center gap-10px p-16px'>
                <div className='d-flex gap-16px'>
                  <ButtonCancel action={() => setisModalUp(false)} flex={1} paddingBottom={'6px'} paddingTop={'6px'} title={'Batal'} />
                  <ButtonSubmitForm />
                </div>
              </div>
            </form>
          )}
        </Formik>

      </div>
      <ModalConfirmationAdd
        actionCallback={() => SimpanAct()}
        isModalUp={isModalConfirmationAdd}
        setisModalUp={setisModalConfirmationAdd}
      />
      <ModalSukses
        isModalUp={modalSukses}
        setisModalUp={setmodalSukses}
        title={titleRespon}
      />
      <ModalError
        isModalUp={modalError}
        setisModalUp={setmodalError}
        title={titleRespon}
      />
      <ILoading
        isModalUp={modalLoading}
        setisModalUp={setmodalLoading}
      />
    </Admin>
  )
}

export default WithAuth(CreatePenerimaan)