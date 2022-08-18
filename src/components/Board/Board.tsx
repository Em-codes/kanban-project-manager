import Modal from "@components/Modal";
import ShowSidebar from "./ShowSideBar";
import { useState } from 'react'
import BoardColumn from "./BoardColumn";

interface props {
  isSidebar: boolean,
  setIsSidebar: (val: boolean) => void;
}

const Board = ({ isSidebar, setIsSidebar }: props): JSX.Element => {
  const [isModal, setIsModal] = useState(false)

  return (
    <>
    <ShowSidebar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
    <div className="bg-lightGrey w-full dark:bg-veryDarkGrey">
    <BoardColumn />
    </div>
    </>
  )
}

export default Board;

