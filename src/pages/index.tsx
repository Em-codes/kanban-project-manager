import type { NextPage } from 'next'
import Header from '@components/Header'
import SideBar from '@components/SideBar'
import Board from '@components/Board'



const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className='flex border border-green-500 h-[calc(100vh-85px)]'>
        <SideBar />
        <Board />
      </div>
    </div>
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
