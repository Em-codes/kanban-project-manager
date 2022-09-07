import React, { useState, useRef } from 'react'
import Image from 'next/image';
import Modal from '@components/Modal';
import DeleteBoardModal from '@components/Modal/DeleteBoardModal';
import UpdateBoardModal from '@components/Modal/UpdateBoardModal';
import { useOnClickOutside } from 'usehooks-ts'


interface editButtonProps {
  className: string,
  currentBoard: string
}

const EditButton = ({ className, currentBoard }: editButtonProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showUpdateBoardModal, setShowUpdateBoardModal] = useState<boolean>(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState<boolean>(false);

  const menuRef = useRef(null)

  const handleClickOutside = () => { setShowMenu(!showMenu) }
  useOnClickOutside(menuRef, handleClickOutside)

  return (
    <div className='relative'>
      <button className="h-8 w-8" onClick={() => setShowMenu(!showMenu)}>
        <Image src="/assets/icon-vertical-ellipsis.svg" alt="vertical ellipsis" height={16} width={4} />
      </button>
     {showMenu && 
     <div ref={menuRef} className={`${className} flex flex-col items-start space-y-4 absolute body-lg rounded-lg p-4 w-48 shadow-main capitalize bg-white dark:bg-veryDarkGrey`}
      >
        <>
          <button
            className="text-mediumGrey text-[13px]"
            onClick={() => setShowUpdateBoardModal(!showUpdateBoardModal)}
          >
            Edit board
          </button>
          <Modal showModal={showUpdateBoardModal} setShowModal={() => setShowUpdateBoardModal(!showUpdateBoardModal)}>
            <UpdateBoardModal setShowUpdateBoardModal={setShowUpdateBoardModal}/>
          </Modal>
          <button
            className="text-mainRed  text-[13px]"
            onClick={() => setShowDeleteBoardModal(true)}
          >Delete board
          </button>
          <Modal showModal={showDeleteBoardModal} setShowModal={() => setShowDeleteBoardModal(!showDeleteBoardModal)}>
            <DeleteBoardModal currentBoard={currentBoard} setShowDeleteBoardModal={setShowDeleteBoardModal} />
          </Modal>
        </>
      </div> 
      }
    </div>

  )
}

export default EditButton;