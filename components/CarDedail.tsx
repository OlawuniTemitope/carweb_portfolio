'use client'
import { carProp } from '@/types';
import { generateCarImageUrl } from '@/utils';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react'

interface carDetailsProp{ 
  isOpen:boolean;
  closeModal:()=>void;
  car:carProp
}
function CarDedail({isOpen,closeModal,car}
  :carDetailsProp) {
  return (
    <>
    <Transition appear 
    show={isOpen}
    as={Fragment}>
      <Dialog as='div' 
      className='relative z-10'
      onClose={closeModal}>
        <Transition.Child
        enter="duration-300 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-200 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        as={Fragment}>
          <div className='fixed inset-0 bg-black bg-opacity-25'/>
          </Transition.Child>
          <div className='fixed inset-0 bg-black overflow-y-auto'>
            <div className='flex min-h-full items-center 
            justify-center p-4 text-center'>
              <Transition.Child
        enter="duration-300 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        as={Fragment}>
          <Dialog.Panel className=' relative w-full max-w-lg m-h-[90vh]
          overflow-y-auto transform rounded-2xl p-6 bg-white
           text-left shadow-xl transition-all flex flex-col gap-5'>
            <button type='button' className='absolute top-2 right-2 
            z-10 w-fit p-2 bg-primary-blue-100 rounded-full '
            onClick={closeModal}>
              <Image src='/close.svg' alt='close'
              width={20}
              height={20}
              className='object-contain'/>
            </button>
            <div className='flex flex-1 flex-col gap-3'>
              <div className='relative w-full h-40 
              bg-pattern bg-cover bg-center rounded-lg'>
              <Image src={generateCarImageUrl(car,'angle')} 
              alt='car hero' className='object-contain' fill/>
            </div>
            <div className='flex gap-3'>
            <div className=' flex-1 relative w-full h-24 bg-primary-blue-100
             rounded-lg'>
               <Image src={generateCarImageUrl(car,'29')} 
              alt='car hero' className='object-contain' fill/>
            
             </div>
            <div className=' flex-1 relative w-full h-24 bg-primary-blue-100
             rounded-lg'>
               <Image src={generateCarImageUrl(car,'33')} 
              alt='car hero' className='object-contain' fill/>
            
             </div>
            <div className=' flex-1 relative w-full h-24 bg-primary-blue-100
             rounded-lg'>
               <Image src={generateCarImageUrl(car,'13')} 
              alt='car hero' className='object-contain' fill/>
            
             </div>
             </div>
            </div>
            <div className='flex flex-1 flex-col gap-2'>
              <h2 className='font-semibold text-xl capitalize'>
                {car.make} {car.model}
              </h2>
              <div className='mt-3 gap-4 flex flex-wrap'>
                {Object.entries(car).map(([key,value])=>
                <div className='flex justify-between gap-5 w-full text-right' key={key}>
                  <h4 className='text-grey capitalize'>
                    {key.split('_').join(' ')}
                  </h4>
                  <p className=' text-black font-semibold'> {value}</p>

                </div>)}

              </div>
            </div>

          </Dialog.Panel>
        </Transition.Child>
          
            </div>
          </div>
        

      </Dialog>

    </Transition>
     </>
  )
}

export default CarDedail 