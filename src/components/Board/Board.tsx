import ShowSidebar from "./ShowSideBar";
import BoardColumn from "./BoardColumn";
import { useAppSelector } from 'app/hooks'
import { RootState } from 'app/store'
import CreateNewBoard from "@components/Modal/CreateNewBoard";
import NoBoard from "./NoBoard";


interface props {
  isSidebar: boolean,
  setIsSidebar: (val: boolean) => void;
}

const Board = ({ isSidebar, setIsSidebar }: props): JSX.Element => {
  const boards = useAppSelector((state: RootState) => state.boards.boards)

  return (
    <>
      <ShowSidebar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
      <div className="bg-lightGrey w-full dark:bg-veryDarkGrey">
        {boards?.length ? <BoardColumn /> : <NoBoard />  }
      </div>
    </>
  )
}

export default Board;

