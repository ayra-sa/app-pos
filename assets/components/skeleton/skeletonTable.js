import React from 'react'
import Skeleton from 'react-loading-skeleton'
import SkeletonCustom from './skeleton'

const SkeletonTable = () => {
    return (
        <div>
            <div className='d-flex justify-between align-center'>
                <div>
                    <SkeletonCustom height={'25px'} width='200px' />
                </div>
                <div className='d-flex gap-4 align-center'>
                    <SkeletonCustom height={'25px'} width='150px' />
                    <SkeletonCustom height={'25px'} width='150px' />
                </div>
            </div>
            <div className='d-flex align-center w-100 mt-4'>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
            </div>
            <div className='d-flex align-center w-100'>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
            </div>
            <div className='d-flex align-center w-100'>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
            </div>
            <div className='d-flex align-center w-100'>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
                <div className='flex-1 border-2 p-4'><SkeletonCustom width={'100%'} height={'15px'} /></div>
            </div>
            <div className='d-flex gap-4 justify-end mt-4'>
                <SkeletonCustom height={'30px'} width='30px' />
                <SkeletonCustom height={'30px'} width='30px' />
                <SkeletonCustom height={'30px'} width='30px' />
                <SkeletonCustom height={'30px'} width='30px' />
            </div>
        </div>
    )
}

export default SkeletonTable