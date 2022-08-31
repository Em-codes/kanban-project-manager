import React, { } from 'react'

interface detailsProps {
    taskTitle: string
}

const TaskDetailsModal = ({taskTitle}: detailsProps) => {

  return (
    // <div>
        <h1>{taskTitle}</h1>
    // </div>
  )
}

export default TaskDetailsModal