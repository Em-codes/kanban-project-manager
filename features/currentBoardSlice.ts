import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface currentBoardState {
    value: number
}

const initialState: currentBoardState = {
    value: 0
}

export const currentBoardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setCurrentBoard: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})

export const { setCurrentBoard } = currentBoardSlice.actions

export default currentBoardSlice.reducer