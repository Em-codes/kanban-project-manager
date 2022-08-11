import React from 'react'
import Image from 'next/image'


const Header = () => {
  return (
    <header className='border border-red-500 flex items-center'>
        <div className="w-[260px] lg:w-[300px] p-8 box-border transition-all ease border-r border-r-lightGreyLine dark:border-r-darkGreyLine">
            <Image src="/assets/logo-dark.svg" height={25} width={152} />
        </div>
        {/* <h2 className="heading-lg ml-5 mr-2">{ "No Board Found"}</h2> */}
        <div className='flex items-center justify-between w-full'>
            <h2>Platform Launch</h2>
            <button>Add Task</button>
        </div>
    </header>
  )
}

export default Header