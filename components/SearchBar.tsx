'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
function SearchButon({otherClasses}:{otherClasses:string}){
return (
   <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image src='/magnifying-glass.svg'
      alt='Magnifying Glass'
      width={40}
      height={40}
      className='object-contain'/>
   </button>
)
}

export default function SearchBar ({setManufacturer,setModel}) {
   const router=useRouter()
     
   const [searchManufacturer,setSearchManufacturer]= useState('toyota')
   const [searchModel,setSearchModel] =useState('')
    const handdleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(searchManufacturer==='' ) return(alert(`please
       fill in the search bar`))
      //  updateSearchPrams(searchManufacturer,searchModel)
      setModel(searchModel)
      setManufacturer(searchManufacturer)
    }
   //  const updateSearchPrams=(manufacturer:string,model:string)=>{
   //     const searchParams = new URLSearchParams(window.location.search)
   //    if(model) {
   //       searchParams.set('model',model)
   //    } else{
   //       searchParams.delete('model')
   //    }
   //    if(manufacturer){
   //       searchParams.set('manufacturer',manufacturer)
   //    }else searchParams.delete('manufacturer')
   //    const pathName=`${window.location.pathname}?${searchParams.toString()}`
   //    router.push(pathName)
   //  }
  return (
    <form className='searchbar'
     onSubmit={handdleSearch}>
        <div className='searchbar__item' >
         
        <SearchManufacturer selected ={searchManufacturer}
             setSelected={setSearchManufacturer} />
            <SearchButon otherClasses='sm:hidden'/>
       </div>
       <div className='searchbar__item'>
         <Image src='/model-icon.png'
         alt='Car model'
         width={25}
         height={25}
         className='absolute w-[20px] h-[20px] ml-4'/>
         <input 
         type='text'
         name='mode'
         value={searchModel}
         onChange={(e)=>setSearchModel(e.target.value)}
         placeholder='Tiguan'
         className='searchbar__input'
          />
          <SearchButon otherClasses='sm:hidden'/>
       </div>
       <SearchButon otherClasses='max-sm:hidden'/>
     </form>
  )
}
