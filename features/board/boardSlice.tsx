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
        },
        editTask: (state, action: PayloadAction<{task: Task, prevTaskTitle: string; boardName: string; columnName: string }>) => {
            const board = state.boards.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => { return column.name === action.payload.columnName })
          
            const taskIndex = column?.tasks.map(task => task.title).indexOf(action.payload.prevTaskTitle)
            if(column && typeof taskIndex === "number" && taskIndex >= 0){
                column.tasks[taskIndex] = action.payload.task
            }
        },
        deleteTask: (state, action: PayloadAction<{ taskTitle: string; boardName: string; columnName: string }>) => {
            const board = state.boards.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => { return column.name === action.payload.columnName })
            const taskIndex = column?.tasks.map(task => task.title).indexOf(action.payload.taskTitle)
            if(typeof taskIndex === "number"){
                column?.tasks.splice(taskIndex, 1)
            }
        },
        editSubtasks: (state, action: PayloadAction<{ task: Task; index: number; boardName: string; columnName: string }>) => {
            const board = state.boards.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => {
                return column.name === action.payload.columnName
            })
            const task = column?.tasks[action.payload.index]
            if(task){
                task.subtasks = action.payload.task.subtasks
            }
        },

         changeTaskStatus: (state, action: PayloadAction<{ taskStatus: string; index: number; boardName: string; columnName: string }>) => {
            const board = state.boards.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => {
                return column.name === action.payload.columnName
            })
            const task = column?.tasks[action.payload.index]
            console.log(action.payload.index)
            if(task){
                task.status = action.payload.taskStatus
            }
        },
    }
})

export const { getAllBoards, createNewBoard, deleteBoard, editBoard, addTask, editTask, deleteTask, editSubtasks, changeTaskStatus } = boardsSlice.actions
export default boardsSlice.reducer
