import React from 'react'
import { useAppSelector } from 'app/hooks'
import { RootState } from 'app/store'

const BoardColumn = () => {
    const boards = useAppSelector((state: RootState) => state.boards.boards)
    const currentBoard = useAppSelector((state: RootState) => state.currentBoard.value)
    const boardColumns =  boards?.map((val) => val.columns[currentBoard])
    const showBoards =  boardColumns?.map((val) => val.name)
    console.log('sb', showBoards)
    console.log('bc', boardColumns)


   
  return (
   
    <div>
        {showBoards}
    </div>
  )
}

export default BoardColumn