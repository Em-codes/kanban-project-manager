import React from 'react'
import BoardNamesTag from './BoardNamesTag'
import SideBardToggle from './SideBardToggle'
import ToggleThemeSwitch from './ToggleThemeSwitch'

const SideBar = (): JSX.Element => {
    return (
        <section className='w-[372px] transition-all border-r border-r-lightGreyLine ease '>
            <div className='flex flex-col justify-between h-[calc(90vh-70px)]'>
                <BoardNamesTag />
                <div>
                <ToggleThemeSwitch />
                    <SideBardToggle />
                </div>
            </div>
        </section>
    )
}

export default SideBar

// const Header = (): JSX.Element => (