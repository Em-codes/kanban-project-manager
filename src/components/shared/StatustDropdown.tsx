import { Column } from '@src/types'
import React, { useEffect, useState } from 'react'

interface statusProps {
  boardColumns: any,
  setStatus: any,
  status: any,
  // changeTaskStatus: (id: number, columnName: string) => void
}

const StatustDropdown = ({ boardColumns, status, setStatus }: statusProps) => {
    const [showDropDown, setShowDropDown] = useState(false)

    const changeTaskStatus = (taskId, status) => {
      // const task = boardColumns.tasks.find((task) => task.title === );
      const column = columns.find((column) => column.name === status);
      const prevColumn = columns.find((column) => column.name === task.status);
      prevColumn.tasks = prevColumn.tasks.filter((id) => id !== taskId);
      column.tasks.push(taskId);
      task.status = column.name;
      // setBoards([...boards]);
    };


    return (
      <>
        <h3 className="mt-6 text-[13px] font-bold font-sans mb-[4px] text-mediumGrey dark:text-white">{'Status'}</h3>

        <div className="relative">
          <button
            onClick={() => setShowDropDown(!showDropDown)}
            type="button"
            className="inline-flex justify-between items-center w-full rounded-md outline outline-1 outline-lightGreyLine shadow-sm px-4 py-2 bg-white text-sm font-medium text-black focus:outline-mainPurple dark:bg-darkGrey dark:text-white dark:outline-darkGreyLine"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {/* {status || data.status} */} {status}
            <svg className="-mr-1 ml-2 h-5 w-5 fill-mainPurple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {showDropDown && <div
            className="origin-top-right absolute right-0 w-full rounded-md shadow-lg bg-white  focus:outline-none dark:bg-veryDarkGrey"
          >
            <div className="py-1" >
              {boardColumns.map((column: any, i: number) => (
                <span
                  // onClick={() => updateName(column)}
                  onClick={() => {
                    if(status) {
                        setStatus(column.name);
                    } else {
                        changeTaskStatus(data.id, column.name);
                    }
                    setShowDropDown(false)
                }}
                  key={i}
                  className="text-mediumGrey block px-4 py-2 text-sm hover:text-mainPurple hover:bg-mainPurple dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
                >
                  {column.name}
                </span>
              ))}
            </div>
          </div>}
        </div>
      </>
    )
  }


  // const Dropdown = ({
  //   options
  // }) => {
  //   const [selectedOption, setSelectedOption] = useState(options[0].value);
  //   return (
  //       <select
  //         value={selectedOption}
  //         onChange={e => setSelectedOption(e.target.value)}>
  //         {options.map(o => (
  //           <option key={o.value} value={o.value}>{o.label}</option>
  //         ))}
  //       </select>
  //   );
  // };

  // return (
  //   <select
  //     className="w-full px-4 rounded h-10 text-[13px] font-medium text-black dark:text-white bg-white dark:bg-d-gray border border-l-lines dark:border-m-gray"
  //     value={currentStatus || data.status }
  //     onChange={handleStatusChange}
  //   >
  //     {boardColumns.map((status: any, i: number) => {
  //       return <option
  //         key={i}
  //         className="text-[13px] font-medium"
  //       >
  //         {status.name}
  //       </option>
  //     })}
  //   </select>
  // )
// }



export default StatustDropdown;