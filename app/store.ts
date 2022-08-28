import { configureStore } from '@reduxjs/toolkit'
 import boardsReducer  from 'features/board/boardSlice'
 import currentBoardReducer from 'features/board/currentBoardSlice'


export const store = configureStore({
  reducer: {
        boards: boardsReducer,
        currentBoard: currentBoardReducer
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

