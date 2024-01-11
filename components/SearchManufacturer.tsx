'use client'
import { manufacturers } from '@/constant'
import { searchManufacturerProps } from '@/types'
import { Combobox,Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'


function SearchManufacturer({selected,setSelected}
    :searchManufacturerProps) {
    const [query,setQuery] = useState('corolla')
    const filterManufacturers= query === ''?manufacturers
    : manufacturers.filter(item=>
        item.toLowerCase().replaceAll(' ','')
        .includes(query.toLowerCase().replaceAll(' ','')))
  return (
    <div className='search-manufacturer'>
        <Combobox value={selected} onChange={setSelected}>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image 
                    src='/car-logo.svg'
                    alt='Car logo'
                    height={20}
                    width={20}
                    className='ml-4'
                    />
                </Combobox.Button>
                <Combobox.Input className='search-manufacturer__input
                 w-full'
                placeholder='Volkswagen'
                displayValue={(manufacturer:string) =>
                 manufacturer}
                onChange={(e)=>setQuery(e.target.value)}/>
                <Transition 
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={()=>setQuery("")}
                >
                    <Combobox.Options>
                        {(filterManufacturers.map(item=>
                          <Combobox.Option 
                          key={item}
                          className={({active})=>`relative
                           search-manufacturer__option
                           ${active? `bg-primary-blue text-white`
                           :`text-gray-900`}`}
                           value={item}>

                            
                            {({ active, selected }) => (
              <li
                className={`${
                  active ? 'bg-blue-500 text-white' : 
                  'bg-white text-black'
                }`}
              >
                {selected && <CheckIcon />}
                {item}
              </li>
            )}
         
                          </Combobox.Option>))}
                    </Combobox.Options>
                    </Transition>
                 </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer