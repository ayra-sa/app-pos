import ButtonCancel from 'components/Button/buttonCancel';
import ButtonGantiPassword from 'components/Button/buttonGantiPassword';
import ButtonOKe from 'components/Button/buttonOke';
import InputDropdown from 'components/Input/InputDropdown';
import InputEmail from 'components/Input/InputEmail';
import InputPassword from 'components/Input/InputPassword';
import InputText from 'components/Input/InputText';
import Tab from 'components/Tab/inddex';
import TitlePageBack from 'components/TitlePage/TitlePageBack';
import UploadImage from 'components/UploadImage';
import Admin from 'layouts/Admin'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Akun = () => {

  const dispatch = useDispatch();
  const tabsAkunPageReducer = useSelector((state) => state.tabsAkunPageReducer);

  return (
    <Admin>
      <div className='page-kontainer'>
        <TitlePageBack title={'Pengaturan Akun'} />
        <hr />
        <Tab
          onClick={(payload) => {
            dispatch({
              type: 'STATUS_TAB_AKUN_PAGE_SET',
              payload: payload
            })
          }}
          Tabs={tabsAkunPageReducer?.data}
          IsActiveTab={tabsAkunPageReducer?.isActivetab} />

        {
          tabsAkunPageReducer?.isActivetab == 0 ? <>
            <div className='mt-16px'>

              <div className='ml-16px mb-16px'>
                <TitlePageBack icon={<IAkun />} title={'Data Pemilik Akun'} />
              </div>

              <hr />

              <div className='d-flex align-center'>

                <div style={{
                  padding: '16px 24px 24px 24px',
                  width: '20%',
                }}>
                  <UploadImage />
                </div>

                <div style={{
                  padding: '16px 24px 24px 24px',
                  flex: 1,
                }}>
                  <InputText
                    placeholder={'Masukan Nama Lengkap'}
                    title={'Nama Lengkap*'} />
                  <div style={{ minHeight: '10px' }}></div>
                  <InputText
                    placeholder={'Masukan Username'}
                    title={'Username*'} />
                  <div style={{ minHeight: '10px' }}></div>
                  <InputEmail
                    disabled={true}
                    placeholder={'Masukan Email'}
                    title={'Email*'} />
                </div>

              </div>

              <hr />

              <div className='ml-16px mb-16px mt-16px'>
                <TitlePageBack icon={<KeamananAkun />} title={'Keamanan Akun'} />
              </div>

              <hr />

              <div className='d-flex'>

                <div className='w-50'>

                  <div className='ml-16px mb-16px mt-16px'>
                    <TitlePageBack icon={''} title={'Password'} />
                  </div>

                  <div style={{
                    borderTop: '1px solid var(--Gray-5, #E0E0E0)',
                  }}
                    className='px-20px py-16px'
                  >

                    <div style={{ minHeight: '10px' }}></div>
                    <InputPassword
                      placeholder={'Masukan Password Lama'}
                      title={'Password Lama*'} />
                    <div style={{ minHeight: '10px' }}></div>

                    <div style={{ minHeight: '10px' }}></div>
                    <InputPassword
                      placeholder={'Masukan Password Baru'}
                      title={'Password Baru*'} />
                    <div style={{ minHeight: '10px' }}></div>

                    <div style={{ minHeight: '10px' }}></div>
                    <InputPassword
                      placeholder={'Masukan Kembali Password Lama'}
                      title={'Konfirmasi Password Baru*'} />
                    <div style={{ minHeight: '10px' }}></div>

                    <div className='w-100 d-flex align-center justify-end mt-26px'>
                      <ButtonGantiPassword title={'Ganti Password'} />
                    </div>

                  </div>

                </div>

                <div className='w-50'>

                  <div className='ml-16px mb-16px mt-16px'>
                    <TitlePageBack icon={''} title={'PIN'} />
                  </div>

                  <div style={{
                    borderTop: '1px solid var(--Gray-5, #E0E0E0)',
                  }}
                    className='px-20px py-16px'
                  >

                    <div style={{ minHeight: '10px' }}></div>
                    <InputPassword
                      placeholder={'Masukan Pin Baru'}
                      title={'Pin Baru*'} />
                    <div style={{ minHeight: '10px' }}></div>

                    <div style={{ minHeight: '10px' }}></div>
                    <InputPassword
                      placeholder={'Masukan Ulang Pin Baru'}
                      title={'Masukan Ulang Pin Baru*'} />
                    <div style={{ minHeight: '10px' }}></div>

                    <div className='w-100 d-flex align-center justify-end mt-26px'>
                      <ButtonGantiPassword title={'Ganti Pin'} />
                    </div>

                  </div>

                </div>

              </div>

              <div className='d-flex align-center justify-end'>
                <ButtonCancel title={'Batal'} />
                <div className='w-16px'></div>
                <ButtonOKe title={'Simpan Profile'} />
              </div>

            </div>
          </> : <>
            <div className='mt-16px'>

              <div className='ml-16px mb-16px'>
                <TitlePageBack icon={<IAkun />} title={'Data Perusahaan'} />
              </div>

              <hr />

              <div className='d-flex'>

                <div style={{
                  padding: '16px 24px 24px 24px',
                  width: '20%',
                }}>
                  <UploadImage />
                </div>

                <div style={{
                  padding: '16px 24px 24px 24px',
                  flex: 1,
                }}>
                  <InputText
                    placeholder={'Masukan Nama Perusahaan'}
                    title={'Nama Perusahaan*'} />
                  <div style={{ minHeight: '10px' }}></div>
                  <InputText
                    placeholder={'Masukan Layanan'}
                    title={'Layanan*'} />
                  <div style={{ minHeight: '10px' }}></div>
                  <InputText
                    placeholder={'Nama Bisnins'}
                    title={'Bisnins*'} />
                  <div style={{ minHeight: '10px' }}></div>
                  <InputText
                    placeholder={'Masukan Nomer Telepon'}
                    title={'Telepon*'} />
                  <div style={{ minHeight: '10px' }}></div>
                  <InputText
                    placeholder={'Masukan Tagline'}
                    title={'Tagline*'} />
                </div>

              </div>

              <hr />

              <div className='ml-16px mb-16px mt-16px'>
                <TitlePageBack icon={<KeamananAkun />} title={'Alamat Perusahaan'} />
              </div>

              <hr />

              <div className='d-flex w-100'>

                <div style={{
                  width: '100%'
                }} className='w-100'>

                  <div style={{
                    borderTop: '1px solid var(--Gray-5, #E0E0E0)',
                    gap: '16px',
                  }}
                    className='px-20px py-16px w-100 d-flex '
                  >

                    <div className='w-50'>
                      <div style={{ minHeight: '10px' }}></div>
                      <InputDropdown title={'Provinsi*'} />

                      <div style={{ minHeight: '10px' }}></div>
                      <InputDropdown title={'Kecamatan*'} />
                    </div>

                    <div className='w-50'>
                      <div style={{ minHeight: '10px' }}></div>
                      <InputDropdown title={'Kota*'} />

                      <div style={{ minHeight: '10px' }}></div>
                      <InputText
                        placeholder={'Masukan Kelurahan'}
                        title={'Kelurahan*'} />
                    </div>

                  </div>
                </div>
              </div>

              <div className='d-flex align-center justify-end'>
                <ButtonCancel title={'Batal'} />
                <div className='w-16px'></div>
                <ButtonOKe title={'Simpan Profile'} />
              </div>

            </div>
          </>
        }
      </div>
    </Admin>
  )
}

const IAkun = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
      <path d="M13.4444 16.9974V15.2196C13.4444 14.2766 13.0698 13.3723 12.403 12.7055C11.7362 12.0387 10.8319 11.6641 9.88889 11.6641H4.55556C3.61256 11.6641 2.70819 12.0387 2.0414 12.7055C1.3746 13.3723 1 14.2766 1 15.2196V16.9974" stroke="#44546F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.22157 8.11111C9.18525 8.11111 10.7771 6.51923 10.7771 4.55556C10.7771 2.59188 9.18525 1 7.22157 1C5.25789 1 3.66602 2.59188 3.66602 4.55556C3.66602 6.51923 5.25789 8.11111 7.22157 8.11111Z" stroke="#44546F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

const KeamananAkun = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" fill="white" />
      <path d="M16 11V9H14V7.002C14.0001 6.73922 13.9485 6.479 13.8481 6.23617C13.7476 5.99335 13.6003 5.77269 13.4146 5.58679C13.2289 5.40088 13.0084 5.25338 12.7657 5.1527C12.523 5.05202 12.2628 5.00013 12 5C10.898 5 10 5.898 10 7.002V9H8V11H7V19H17V11H16ZM14 11H10V9H14V11ZM8 9V7.002C8.00053 5.94111 8.42206 4.9238 9.17204 4.17345C9.92201 3.4231 10.9391 3.00106 12 3C12.5255 3 13.0458 3.10353 13.5312 3.30467C14.0166 3.50582 14.4577 3.80063 14.8291 4.17228C15.2006 4.54393 15.4952 4.98512 15.6961 5.47065C15.897 5.95619 16.0003 6.47654 16 7.002V9H16.994C17.5262 9.00106 18.0363 9.21316 18.4123 9.58977C18.7884 9.96639 18.9997 10.4768 19 11.009V18.991C19 20.101 18.103 21 16.994 21H7.006C6.4737 20.9992 5.96347 20.7872 5.58736 20.4105C5.21125 20.0338 5 19.5233 5 18.991V11.01C5 9.899 5.897 9 7.006 9H8ZM8 9H10V11H8V9ZM14 9H16V11H14V9Z" fill="#44546F" />
      <path d="M12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17Z" fill="#44546F" />
    </svg>
  )
}
export default Akun