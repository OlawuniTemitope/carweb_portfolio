'use client'
import { ShowMoreProps } from '@/types'
import { updateSearchParam } from '@/utils'
import { useRouter } from 'next/navigation'
import React from 'react'
import CustomButon from './CustomButon'

function ShowMore({isNext,pageNumber,setLimit}:ShowMoreProps) {
    // const router =useRouter()
    function handleNavigation(){
      const newLimit =(pageNumber+1)*10
      setLimit(newLimit)
    //   const newPathName=updateSearchParam('limit',`${newLimit}`)
    // router.push(newPathName)
    }
  return (
    <div className=' w-full gap-5 flex-center mt-10'>
      {!isNext && <CustomButon title='show more'
      containerStyles=' bg-primary-blue rounded-full text-white'
      handleClick={handleNavigation} btnType='button'/>}
       
    </div>
  )
}

export default ShowMore