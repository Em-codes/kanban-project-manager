import React, { useState } from 'react'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { editSubtasks } from '../../../features/board/boardSlice'
import SubTaskItem from './SubTaskItem';
import { RootState } from 'app/store'
import { Task } from '@src/types';

interface props {
    data: Task;
    j: number
    boardNameTag: string
}

const TaskDetailsModal = ({ data, j, boardNameTag }: props) => {
    const dispatch = useAppDispatch()
    const currentBoard = useAppSelector((state: RootState) => state?.currentBoard.value)
    const subtasks = [...data.subtasks]
    
    const changeSubtaskStatus = (title: string) => {
        const newSubtasks = subtasks.map((subtask: any) => {
          return subtask.title !== title ? subtask : {...subtask, isCompleted: !subtask.isCompleted}
        })
        console.log(newSubtasks)
        const newTask = {...data, subtasks: newSubtasks}
        console.log('nt',newTask)
        // dispatch(editSubtasks({task: newTask, index: currentBoard, boardName:boardNameTag, columnName: data.status}))
      }

    return (
        <>
            <div className="flex items-center justify-between gap-4 mb-6">
                <h1 className="text-[18px] font-bold">{data.title}</h1>
                <Image src="/assets/icon-vertical-ellipsis.svg" alt="vertical ellipsis" height={16} width={4} />
            </div>
            <p className="text-[13px] text-mediumGrey">
                {data.description ? data.description : 'no description'}
            </p>
            <h3 className="mt-6 mb-4 text-[13px] font-bold text-mediumGrey dark:text-white">
                Subtasks ({data.subtasks.filter((val: any) => val.isCompleted).length} of {data.subtasks.length})
            </h3>
            <form>
            {
                data.subtasks.map((subtask: any, i:number) => {
                return <SubTaskItem subtask={subtask} i={i} key={i} changeSubtaskStatus={() => changeSubtaskStatus(subtask.title)} />
                
        })
            }
            </form>
        </>
    )
}

export default TaskDetailsModal;