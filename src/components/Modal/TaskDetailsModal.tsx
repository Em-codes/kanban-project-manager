import React, { useState } from 'react'
import Image from 'next/image'

interface props {
    data: any
}

const TaskDetailsModal = ({ data }: props) => {    
    
    const handleOnchange = ({e, subtask}) => {
        console.log(e.target.checked, subtask)
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
                Subtasks ({2} of {data.subtasks.length})
            </h3>
            <form>
            {
                data.subtasks.map((subtask: any, i:number) => (
                    <label
                        key={i}
                        htmlFor={`${subtask}-${i}`}
                        className={`body-md p-3 mb-2 inline-flex w-full rounded transition bg-lightGrey cursor-pointer hover:bg-mainPurple hover:bg-opacity-25 dark:text-white dark:bg-veryDarkGrey dark:hover:bg-mainPurple dark:hover:bg-opacity-25`}>
                        <input
                            type="checkbox"
                            // checked={''}
                            className="mr-3 accent-mainPurple"
                            onChange={e => handleOnchange({e, subtask})}
                        />
                        <span className={`${subtask.isCompleted ? "opacity-50 line-through" : "opacity-100"} transition`}>{subtask.title}</span>
                    </label>
                ))
            }
            </form>
        </>
    )
}

export default TaskDetailsModal;