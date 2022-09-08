import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Board, Column, indexedBoard, Task } from '@src/types'
import { v4 as uuidv4 } from "uuid";


interface boardsProps {
    boards: Board[],

}

const initialState: boardsProps = {
    boards: []

}


export const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        getAllBoards: (state, action: PayloadAction<Board[]>) => {
            state.boards = action.payload
        },

        createNewBoard: (state, action: PayloadAction<Board>) => {
            state.boards.push(action.payload)
        },
        deleteBoard: (state, action: PayloadAction<String>) => {
            state.boards = state.boards.filter((board) => board?.name !== action.payload)
        },
        editBoard: (state, action: PayloadAction<indexedBoard>) => {
           const editedData = state.boards.map((board, index) => {
                return index !== action.payload.id ? board
                    : action.payload
            })
            state.boards = (editedData)
        },
        addTask: (state, action: PayloadAction<{ task: Task; boardName: string; columnName: string }>) => {
            const board = state.boards.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => column.name === action.payload.task.status)
            column?.tasks.unshift(action.payload.task)
            console.log(column)

            

            // state.boards.push(newTask)
        },
    }
})

export const { getAllBoards, createNewBoard, deleteBoard, editBoard, addTask } = boardsSlice.actions
export default boardsSlice.reducer
