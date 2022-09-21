import { Subtask } from '@src/types';
import React from 'react'

interface IProps {
    subtask: Subtask,
    i: number,
    changeSubtaskStatus: (title: string, isChecked: boolean) => void;

}

const SubTaskItem = ({subtask, i, changeSubtaskStatus}:IProps) => {
    const isChecked = subtask.isCompleted

    return (
        <>
            <label
                key={i}
                htmlFor={`${subtask}-${i}`}
                className={`body-md p-3 mb-2 inline-flex w-full rounded transition bg-lightGrey cursor-pointer hover:bg-mainPurple hover:bg-opacity-25 dark:text-white dark:bg-veryDarkGrey dark:hover:bg-mainPurple dark:hover:bg-opacity-25`}>
                <input
                    type="checkbox"
                    // checked={}
                    className="mr-3 accent-mainPurple"
                    onChange={() => { changeSubtaskStatus(subtask.title, !isChecked) }}
                />
                <span className={`${isChecked ? "opacity-50 line-through" : "opacity-100"} transition`}>{subtask.title}</span>
            </label>
        </>
    )
}

export default SubTaskItem