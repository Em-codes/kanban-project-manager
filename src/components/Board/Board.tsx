import Modal from "@components/Modal";
import ShowSidebar from "./ShowSideBar";
import { useState } from 'react'

interface props {
  isSidebar: boolean,
  setIsSidebar: (val: boolean) => void;
}

const Board = ({ isSidebar, setIsSidebar }: props): JSX.Element => {
  const [isModal, setIsModal] = useState(false)

  return (
    <>
    <div className="bg-lightGrey w-full dark:bg-veryDarkGrey">
      <span onClick={() => setIsModal(!isModal)}>Open Modal</span>
      <ShowSidebar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
    </div>
    <Modal showModal={isModal} setShowModal={setIsModal} >
        Hello World
      </Modal>
    </>
  )
}

export default Board;

