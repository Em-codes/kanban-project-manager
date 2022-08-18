import React from 'react'
import { useAppSelector } from 'app/hooks'
import { RootState } from 'app/store'

const BoardColumn = () => {
    const data = useAppSelector((state: RootState) => state.boards)
    console.log(data)
    let boardsData = data.boards.map((val) => val.columns)
    let namel = boardsData.map((val) => val.map((val) => val.name))
    console.log('mau', namel)
   
  return (
   
    <div>BoardColumn
        <div>
            {namel.map((val, i) => (
                <div key={i}>
                    <p>{val}</p>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default BoardColumn