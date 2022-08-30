import React from 'react'
import { useAppSelector } from 'app/hooks'
import { RootState } from 'app/store'

const BoardColumn = () => {
    const boards = useAppSelector((state: RootState) => state.boards.boards)
    const currentBoard = useAppSelector((state: RootState) => state.currentBoard.value)
    const boardNameTag = boards[currentBoard] && boards[currentBoard].name
    const boardColumnsx = boards?.find(element => element.name === boardNameTag);


    const showBoards = (boardColumnsx?.columns)?.map((val, i) =>
        <div key={i} className='column w-[280px] shrink-0'>
            <h3 className="heading-sm uppercase mb-6">
                <span className="task-status inline-block h-3 w-3 rounded-full mr-3"></span>
                {val.name} ({val.tasks.length})
            </h3>
            <ul className="scrollbar-thin scrollbar-thumb-mainPurple scrollbar-track-transparent overflow-y-scroll h-full pb-12 flex flex-col gap-5">
                {(val.tasks).map((taskVal, index: any) => (
                    taskVal.status === val.name &&
                    <li key={index} className='group select-none shadow-main px-4 py-6 rounded-lg cursor-pointer bg-white text-black dark:bg-darkGrey dark:text-white'>
                        <h4 className="heading-md mb-2 group-hover:text-mainPurple">{taskVal.title}</h4>
                        <p className="body-md text-mediumGrey">{'2'} of {taskVal.subtasks.length} subtasks</p>
                    </li>
                ))}
            </ul>
        </div>
    )



    return (

        <div className='h-[calc(100vh-85px)] overflow-y-hidden scrollbar-thin scrollbar-thumb-mainPurple scrollbar-track-transparent flex-1 p-4 space-x-4 bg-lightGrey dark:bg-veryDarkGrey flex'>
            {showBoards}
        </div>
    )
}

export default BoardColumn;