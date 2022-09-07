import { deleteBoard } from '../../../features/board/boardSlice'
import { useAppDispatch } from 'app/hooks'
import { Board } from '@src/types';
import { RootState } from 'app/store'
import { useAppSelector } from 'app/hooks'

interface deleteWarningProps {
    currentBoard: String,
    setShowDeleteBoardModal: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteBoardModal = ({ currentBoard, setShowDeleteBoardModal }: deleteWarningProps) => {
    // const data = useAppSelector((state: RootState) => state.boards)
    // const currentBoard = useAppSelector((state: RootState) => state.currentBoard)
    // const boardTitle = data.boards.length !== 0 && (data?.boards)[currentBoard.value].name
    // const displayBoard = useSelector((state: RootState) => state.boards.value[displayBoardIndex])


    const dispatch = useAppDispatch();
    const deleteBoardAction = () => {
        dispatch(deleteBoard(currentBoard))
        setShowDeleteBoardModal(false)
        // dispatch(setDisplayBoard(0))
    }

    return (
        <div className="space-y-6 w-full mx-auto rounded-md bg-white dark:bg-darkGrey">
            <h1 className="text-mainRed font-bold text-[16px]">Delete this board?</h1>
            <p className="text-[13px]">Are you sure you want to delete the &apos;{currentBoard}&apos; board? This action will remove all columns and tasks and cannot be reversed.</p>
            <div className="flex gap-4">

                <button className="flex-1 bg-mainRed text-white text-[13px] rounded-full p-2 transition duration-200 hover:bg-mainRedHover"
                    onClick={deleteBoardAction}>
                    Delete
                </button>
                <button onClick={() => setShowDeleteBoardModal(false)} className="flex-1 bg-mainPurple bg-opacity-10 text-mainPurple text-[13px] rounded-full p-2 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white"  >
                    Cancel
                </button>
            </div>
        </div>
    )
}
export default DeleteBoardModal;
