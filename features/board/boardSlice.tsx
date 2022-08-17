import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { Board } from '@src/types'
import data from '../../src/data.json'
import { v4 as uuidv4 } from "uuid";


interface boardsProps{
    boards : Board[],
       
}

const initialState : boardsProps = {
    boards : []

}


export const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        getAllBoards:(state, action: PayloadAction<Board[]>) => {
            state.boards =  action.payload
        },

        createNewBoard: (state, action: PayloadAction<Board>) => {
            state.boards.push(action.payload)
        },
    }
})

export const { getAllBoards, createNewBoard } = boardsSlice.actions
export default boardsSlice.reducer