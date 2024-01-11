'use client'
import { customButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function CustomButon({title,
  btnType,
  containerStyles,textStyles,rightIcon
  ,handleClick}
  :customButtonProps) {
  return (
    <button 
    disabled={false}
    type={btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
          <div className='relative w-6 h-6'>
            <Image src={rightIcon}
             alt='right icon' fill className='object-contain'/>
          </div>
        )}
    </button>
  )
}
