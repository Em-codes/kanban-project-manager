import React, { } from 'react'
import Image from 'next/image'

interface props {
    data: any
}

const TaskDetailsModal = ({ data }: props) => {

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
            {
                data.subtasks.map((subtask: any, i:number) => (
                    <label
                        key={i}
                        htmlFor={`${subtask}-${i}`}
                        className={`body-md p-3 mb-2 inline-flex w-full rounded transition bg-lightGrey cursor-pointer hover:bg-mainPurple hover:bg-opacity-25 dark:text-white dark:bg-veryDarkGrey dark:hover:bg-mainPurple dark:hover:bg-opacity-25`}>
                        <input
                            id={`${subtask}-${i}`}
                            type="checkbox"
                            checked={subtask.isCompleted}
                            className="mr-3 accent-mainPurple"
                        // onChange={() => toggleSubtask(data.id, i)}
                        />
                        <span className={`${subtask.isCompleted ? "opacity-50 line-through" : "opacity-100"} transition`}>{subtask.title}</span>
                    </label>
                ))
            }
        </>
    )
}

export default TaskDetailsModal;


// import { useBoards } from "@src/context";
// import EditButton from "@components/shared/EditButton";
// import StatusDropdown from "@components/shared/StatusDropdown";

// const TaskDetailModal = ({ data, completedSubtasks, switchToUpdate, switchToDelete }) => {
//   const { toggleSubtask } = useBoards();

//   return (
//     <div className="w-full mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
//         <div className="flex items-center justify-between gap-4 mb-6">
//             <h1 className="heading-lg">{data.title}</h1>
//             <EditButton
//             switchToUpdate={switchToUpdate}
//             switchToDelete={switchToDelete}
//             taskId={data.id}
//             type="Task"
//             className="bottom-0 left-0 -translate-x-2/4 translate-y-28"/>
//         </div>
//         <p className="body-lg text-mediumGrey">
//             {data.description}
//         </p>
//         <h3 className="mt-6 mb-4 body-md text-mediumGrey dark:text-white">
//             Subtasks ({completedSubtasks} of {data.subtasks.length})
//         </h3>
//         {
//             data.subtasks.map((subtask, i) => (
//                 <label key={i} htmlFor={`${subtask}-${i}`} className={`body-md p-3 mb-2 inline-flex w-full rounded transition bg-lightGrey cursor-pointer hover:bg-mainPurple hover:bg-opacity-25 dark:text-white dark:bg-veryDarkGrey dark:hover:bg-mainPurple dark:hover:bg-opacity-25`}>
//                     <input
//                     id={`${subtask}-${i}`}
//                     type="checkbox"
//                     checked={subtask.isCompleted}
//                     className="mr-3 accent-mainPurple"
//                     onChange={() => toggleSubtask(data.id, i)}
//                     />
//                     <span className={`${subtask.isCompleted ? "opacity-50 line-through" : "opacity-100"} transition`}>{subtask.title}</span>
//                 </label>
//             ))
//         }

//         <StatusDropdown label="Current Status" data={data} />

//     </div>
//   )
// }
// export default TaskDetailModal