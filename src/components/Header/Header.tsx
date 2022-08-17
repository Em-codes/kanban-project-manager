import Reac, { useState } from 'react'
import Image from 'next/image'
import Button from '@components/shared/Button'
import { useTheme } from "next-themes"
import Modal from '@components/Modal'
import AddNewTaskModal from '@components/Modal/AddNewTaskModal'




const Header = () => {
  const [isAddNewTask, setIsAddNewTask] = useState<boolean>(false)
  const { theme } = useTheme();

  return (
    <>
      <header className='flex items-center h-[85px] bg-white dark:bg-darkGrey dark:text-white dark:border-darkGreyLine'>
        <div className="w-[360px] p-8 box-border transition-all ease border-r border-r-lightGreyLine dark:border-r-darkGreyLine">
          {theme === "dark" ? (
            <Image src="/assets/logo-light.svg" height={25} width={152} />
          ) : (
            <Image src="/assets/logo-dark.svg" height={25} width={152} />
          )
          }

        </div>
        <div className='flex items-center justify-between w-full px-6'>
          <h2 className='font-sans text-lg font-bold'>Platform Launch</h2>
          <div className='flex items-center gap-4'>
            <Button children={"+ Add New Task"} padding={'py-3 px-4'} width={''} color={'text-white'} font_weight={'font-bold'} onClick={() => setIsAddNewTask(!isAddNewTask)} />
            <Image className='cursor-pointer' src="/assets/icon-vertical-ellipsis.svg" alt="vertical ellipsis" height={16} width={4} />
          </div>
        </div>
      </header>
      <Modal setShowModal={setIsAddNewTask} showModal={isAddNewTask}>
        <AddNewTaskModal />
      </Modal>
    </>
  )
}

export default Header;