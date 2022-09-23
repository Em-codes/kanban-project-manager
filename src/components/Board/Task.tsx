import Modal from '@components/Modal'
import TaskDetailsModal from '@components/Modal/TaskDetailsModal'
import React, { useState } from 'react'
import { CircleWavyCheck } from 'phosphor-react'
import { Task } from '@src/types'

interface props {
    data: Task,
    j: number,
    i: number
    boardNameTag: string,
}

const Task = ({ data, i, j, boardNameTag }: props) => {
    const [showDetails, setShowDetails] = useState<boolean>(false)
    const subtaskLength = data.subtasks.length
    const completedTaskCount = data.subtasks.filter((val: any) => val.isCompleted).length
    const isAllSubtasksCompleted = completedTaskCount === subtaskLength

    return (
        <>
            <li onClick={() => setShowDetails(!showDetails)} key={j} className='group select-none shadow-main px-4 py-6 rounded-lg cursor-pointer bg-white text-black dark:bg-darkGrey dark:text-white'>
                <h4 className="font-bold text-[15px] mb-2 group-hover:text-mainPurple">{data.title}</h4>
                <div className='flex items-center space-x-3'>
                    <p className="font-bold text-[12px] text-mediumGrey"> {data.subtasks.filter((val: any) => val.isCompleted).length} of {data.subtasks.length} subtasks</p>
                    {isAllSubtasksCompleted && <CircleWavyCheck size={20} color="#635FC7" weight="thin" /> }
                </div>
            </li>
            <Modal setShowModal={setShowDetails} showModal={showDetails}>
                <TaskDetailsModal data={data} i={i} j={j} boardNameTag={boardNameTag} completedTaskCount={completedTaskCount}/>
            </Modal>
        </>
    )
}

export default Task;