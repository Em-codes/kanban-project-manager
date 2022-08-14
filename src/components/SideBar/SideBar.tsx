import React, { useEffect } from 'react'
import BoardNamesTag from './BoardNamesTag'
import SideBardToggle from './HideSideBar'
import ToggleThemeSwitch from './ToggleThemeSwitch'

interface props {
    isSidebar: boolean,
    setIsSidebar: (val: boolean) => void;
}

const SideBar = ({ isSidebar, setIsSidebar }: props): JSX.Element => {

    useEffect(() => {

    }, [])
    return (
        <section className='w-[372px] transition-all border-r bg-white dark:bg-darkGrey dark:text-white dark:border-r-darkGreyLine border-r-lightGreyLine ease '>
            <div className='flex flex-col justify-between h-[calc(90vh-120px)]'>
                <BoardNamesTag />
                <div>
                    <ToggleThemeSwitch />
                    <SideBardToggle setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
                </div>
            </div>
        </section>
    )
}

export default SideBar