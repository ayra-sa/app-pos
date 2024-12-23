import React from 'react'

function DetailModalData({
  data = []
}) {
  return (
    <>
      {
        data?.map((res) => {
          return (
            <div className='mt-16px finance-penerimaan-modal-detail-field-title'>
              <div className='finance-penerimaan-modal-detail-field-title'>
                {
                  res?.label
                }
              </div>
              <div className='mt-2 finance-penerimaan-modal-detail-field-value'>
                {
                  res?.value
                }
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default DetailModalData