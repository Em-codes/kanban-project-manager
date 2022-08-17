import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Header from '@components/Header'
import SideBar from '@components/SideBar'
import Board from '@components/Board'
import { getAllBoards } from 'features/board/boardSlice'
import { useAppDispatch } from 'app/hooks'
import data from '../data.json'



const Home: NextPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllBoards(data.boards))
  }, [])

  const [isSidebar, setIsSidebar] = useState<boolean>(true)

  return (
    <main>
      <Header />
      <div className='flex h-[calc(100vh-85px)]'>
        {isSidebar && <SideBar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />}
        <Board setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
      </div>
    </main>
  )
}

export default Home















// import Head from 'next/head'
// import Image from 'next/image'
{/* <Head>
        <title>Kanban - Task Management</title>
        <meta name="Kanban" content="Kanban Task Manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
