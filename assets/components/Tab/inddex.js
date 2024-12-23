import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const Tab = ({
  Tabs,
  IsActiveTab,
  onClick,
  hideTab,
  typeAction,
}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    Tabs?.map((data, i) => {
      if (hideTab?.[i] == data) {
        return dispatch({
          type: typeAction,
          payload: 0,
        })
      }
    })
    
  }, [
    dispatch,
    Tabs,
    typeAction,
  ]);

  return (
    <div className='Tab-container'>
      {
        Tabs?.map((tab, index) => {
          if (index === IsActiveTab) {
            return (
              <>
                <div className='Tab-container-sub'>
                  <div>{tab}</div>
                  <div className='Tab-container-active'></div>
                </div>
                {
                Tabs.length - 1 != index && <div className='Gap-right'></div>
                }
              </>
            )
          }
          if (hideTab?.[index] == tab) {
            return ''
          }
          return (
            <>
              <div onClick={() => onClick(index)} className='Tab-container-sub'>
                <div>{tab}</div>
              </div>
              {
                Tabs.length - 1 != index && <div className='Gap-right'></div>
              }
            </>
          )
        })
      }
    </div>
  )
}

export default Tab