import React from 'react'
import { useAppSelector } from 'app/hooks'
import { RootState } from 'app/store'

const BoardColumn = () => {
    const data = useAppSelector((state: RootState) => state.boards)
    // console.table(data)
    let boardsData = data.boards.map((val) => val.columns)
    let namel = boardsData.map((val) => val.map((val) => val.tasks))
    let namelT = boardsData.map((val) => val.map((val) => val.name))
    // console.log('mau', namel)

    const x =  {namel}
    console.log(x)
    console.log(namelT)

   
  return (
   
    <div>BoardColumn
        <div>
            {namel.map((val, i) => (
                <div key={i}>
                    <p>{i}</p>
                </div>
            ))}
        </div>
        <div>
        </div>
        
    </div>
  )
}

export default BoardColumn