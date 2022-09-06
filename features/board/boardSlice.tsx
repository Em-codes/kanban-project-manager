import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Board, Column } from '@src/types'
import data from '../../src/data.json'
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
        deleteBoard: (state, action: PayloadAction<string>) => {
            state.boards = state.boards.filter((board) => board.name !== action.payload)
        },
    }
})

export const { getAllBoards, createNewBoard, deleteBoard } = boardsSlice.actions
export default boardsSlice.reducer
