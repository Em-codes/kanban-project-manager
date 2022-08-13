import React from 'react'
import Image from 'next/image'
import Button from '@components/shared/Button'


const Header = () => {
  return (
    <header className='flex items-center h-[85px] '>
        <div className="w-[360px] p-8 box-border transition-all ease border-r border-r-lightGreyLine dark:border-r-darkGreyLine">
            <Image src="/assets/logo-dark.svg" height={25} width={152} />
        </div>
        <div className='flex items-center justify-between w-full px-6'>
            <h2 className='font-sans text-lg font-bold'>Platform Launch</h2>
            <div className='flex items-center gap-4'>
              <Button children={"+ Add New Task"} padding={'py-3 px-4'} width={''} color={'text-white'} onClick={() => alert('hello')} />
              <Image className='cursor-pointer' src="/assets/icon-vertical-ellipsis.svg" alt="vertical ellipsis" height={16} width={4} />
            </div>
        </div>
    </header>
  )
}

export default Header;