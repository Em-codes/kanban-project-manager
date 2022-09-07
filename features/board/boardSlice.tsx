import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Board, Column, indexedBoard } from '@src/types'
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
        // createNewColumn: (state, action: PayloadAction<Column>) => {
        //     const x = state.boards?.columnns
        //     x.push(action.payload)
        // },
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
    }
})

export const { getAllBoards, createNewBoard, deleteBoard, editBoard } = boardsSlice.actions
export default boardsSlice.reducer
