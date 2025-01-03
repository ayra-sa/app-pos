import Tab from 'components/Tab/inddex'
import IReload from 'components/icons/IReload'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const TitlePageBack = ({ 
  title, 
  icon = <IBack/>,
  Reload,
  marginTopWrapp,
  marginBottomWrapp,
  action = () => {},
}) => {

  return (
    <>
      <div style={{
        marginTop: marginTopWrapp,
        marginBottom: marginBottomWrapp 
      }} className='title-page-back-wrapp'>
        <div onClick={() => action ()} className='cursor-pointer d-flex align-center'>
          <div className='cursor-pointer'>
            {icon}
          </div>
          <div className='ml-16px finance-penerimaan-title'>{title}</div>
        </div>
        {
          Reload && <IReload/>
        }
      </div>
    </>
  )
}

const IBack = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.207 5.79329C12.2999 5.88607 12.3737 5.99628 12.424 6.11759C12.4743 6.23891 12.5002 6.36895 12.5002 6.50029C12.5002 6.63162 12.4743 6.76166 12.424 6.88298C12.3737 7.00429 12.2999 7.1145 12.207 7.20729L8.414 11.0003H18C18.2652 11.0003 18.5196 11.1056 18.7071 11.2932C18.8946 11.4807 19 11.7351 19 12.0003C19 12.2655 18.8946 12.5199 18.7071 12.7074C18.5196 12.8949 18.2652 13.0003 18 13.0003H8.414L12.207 16.7933C12.2999 16.8861 12.3737 16.9963 12.424 17.1176C12.4743 17.2389 12.5002 17.369 12.5002 17.5003C12.5002 17.6316 12.4743 17.7617 12.424 17.883C12.3737 18.0043 12.2999 18.1145 12.207 18.2073C11.817 18.5973 11.183 18.5973 10.792 18.2073L5.293 12.7073C5.1119 12.5269 5.00701 12.2838 5 12.0283V11.9713C5.00716 11.7161 5.11205 11.4734 5.293 11.2933L10.792 5.79329C10.8849 5.70031 10.9952 5.62655 11.1166 5.57623C11.238 5.5259 11.3681 5.5 11.4995 5.5C11.6309 5.5 11.761 5.5259 11.8824 5.57623C12.0038 5.62655 12.1141 5.70031 12.207 5.79329Z" fill="#44546F" />
    </svg>
  )
}

export default TitlePageBack