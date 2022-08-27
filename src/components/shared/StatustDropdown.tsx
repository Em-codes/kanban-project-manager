import React, { useState} from 'react'

const StatustDropdown = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <>
        <h3 className="mt-6 text-[13px] font-bold font-sans mb-[4px] text-mediumGrey dark:text-white">{'Status'}</h3>

    <button
            onClick={() => setShowMenu(!showMenu )}
            type="button"
            className="inline-flex justify-between items-center w-full rounded-md outline outline-1 outline-lightGreyLine shadow-sm px-4 py-2 bg-white text-sm font-medium text-black focus:outline-mainPurple dark:bg-darkGrey dark:text-white dark:outline-darkGreyLine"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            >
            {/* {status || data.status} */}Hello
            <svg className="-mr-1 ml-2 h-5 w-5 fill-mainPurple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </button>
        </>
  )
}

export default StatustDropdown;