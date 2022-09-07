import Button from "@components/shared/Button"
import { useState } from 'react'
import Modal from "@components/Modal"
import CreateNewBoard from "@components/Modal/CreateNewBoard"

const NoBoard = () => {
    const [isCreateBoardModal, setIsCreateBoardModal] = useState<boolean>(false)

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-full bg-lightGrey dark:bg-veryDarkGrey">
                <h2 className="heading-lg text-mediumGrey text-center">Hi {'Emmanuel'}, you have no boards created yet.</h2> <br />
                <Button onClick={() => setIsCreateBoardModal(!isCreateBoardModal)} children={"+ Create New Board"} padding={'py-3 px-4'} width={''} color={'text-white'} font_weight={'font-bold'} />
            </div>
            <Modal showModal={isCreateBoardModal} setShowModal={setIsCreateBoardModal} >
                <CreateNewBoard />
            </Modal>
        </>
    )
}
export default NoBoard
