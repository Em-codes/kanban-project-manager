import Modal from '@components/Modal'
import TaskDetailsModal from '@components/Modal/TaskDetailsModal'
import React, { useState } from 'react'

interface props {
    data: any,
    j: number,
    boardNameTag: string
}

const Task = ({data, j, boardNameTag }: props) => {
    const [showDetails, setShowDetails] = useState<boolean>(false)
    // console.log('datata,', data)

    return (
        <>
            <li onClick={() => setShowDetails(!showDetails)} key={j} className='group select-none shadow-main px-4 py-6 rounded-lg cursor-pointer bg-white text-black dark:bg-darkGrey dark:text-white'>
                <h4 className="font-bold text-[15px] mb-2 group-hover:text-mainPurple">{data.title}</h4>
                <p className="font-bold text-[12px] text-mediumGrey"> {data.subtasks.filter((val: any) => val.isCompleted).length} of {data.subtasks.length} subtasks</p>
            </li>
            <Modal setShowModal={setShowDetails} showModal={showDetails}>
                <TaskDetailsModal data={data} j={j} boardNameTag={boardNameTag}/>
            </Modal>
        </>
    )
}

export default Task;