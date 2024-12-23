import IClose from 'components/icons/Close'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Breadcrums = ({
  title,
  key,
  id,
  obj,
}) => {
  const dispatch = useDispatch()
  const selectMenuMasterReducer = useSelector((state) => state.selectMenuMasterReducer);
  return (
    <>
      <div
        style={{
          background: selectMenuMasterReducer?.subSubMenu?.link == obj?.link ? 'var(--_Internal-Light-Jira-Bottom, linear-gradient(226deg, #0052CC 7.73%, #2684FF 44.66%))' : '#F2F2F2'
        }} key={key} className="Menu-breadcrum-wrapper-satuan">

        <Link href={obj.link}>
          <div
            onClick={() => {
              dispatch({
                type: 'STATUS_SELECT_SUBSUBMENU_SET',
                payload: obj,
              })
            }}
            style={{
              color: selectMenuMasterReducer?.subSubMenu?.link == obj?.link ? 'white' : '#FFFFF!important',
            }}
            className="Menu-breadcrum-wrapper-satuan-title">{title}</div>
        </Link>

        <div style={{ cursor: 'pointer', padding: '5px 16px 5px 0px' }} 
        onClick={() => {
          if (selectMenuMasterReducer?.subSubMenu?.link == obj?.link) {
          } else{
            dispatch({
              type: 'STATUS_BREADCRUM_INDEX_RESET',
              payload: {
                title: title,
                id: id,
              }
            })
          }
        }}><IClose color={selectMenuMasterReducer?.subSubMenu?.link == obj?.link ? '#FFFFFF' : '#44546F'} /></div>
      </div >
      <div style={{ minWidth: '16px' }}></div>
    </>
  )
}