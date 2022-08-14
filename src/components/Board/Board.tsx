import ShowSidebar from "./ShowSideBar";

interface props {
  isSidebar: boolean,
  setIsSidebar: (val: boolean) => void;
}

const Board = ({ isSidebar, setIsSidebar }: props): JSX.Element => {
  return (
    <div className="bg-lightGrey w-full dark:bg-veryDarkGrey">
      Board
      <ShowSidebar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
    </div>
  )
}

export default Board;

