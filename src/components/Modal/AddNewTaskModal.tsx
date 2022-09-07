import TextInput from '@components/shared/TextInput'
import { Formik, FieldArray, Form } from 'formik'
import * as Yup from 'yup'
import React, { useEffect } from 'react'
import Button from '@components/shared/Button'
import TextArea from '@components/shared/TextArea'
import StatustDropdown from '@components/shared/StatustDropdown'
import { useAppSelector } from 'app/hooks'
import { RootState } from 'app/store'

const AddNewTaskModal = () => {

    const validate = Yup.object({
        name: Yup.string().required("required"),
        subtasks: Yup.array().of(
            Yup.string().required("required"),
        )
    })

    const boards = useAppSelector((state: RootState) => state.boards.boards)
    const currentBoard = useAppSelector((state: RootState) => state.currentBoard.value)
    const boardColumns =  boards?.map((val) => val.columns[currentBoard])
    const showBoards =  boardColumns?.map((val) => val.name)

    useEffect(() => {
        console.log('sb', showBoards)

    },[])

    return (
        <div>
            <h1 className="text-lg font-bold mb-6"> Add New Task</h1>
            <Formik
                // initialValues={{ title: "", subtasks: [] }}
                initialValues={{
                    title: "",
                    description: "",
                    subtasks: ['', ''],
                    status: status
                }}
                validationSchema={validate}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true)

                    //make async call
                    console.log('submit:', values);
                    setSubmitting(false)
                    resetForm()
                }}
            >
                {({ values, isSubmitting, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <TextInput label='Title' name="title" type="input" placeholder='eg: Take Coffee Break' />
                        <TextArea label="Description" name="description" type="text" placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little." />

                         <label className="body-md text-sm font-bold capitalize text-mediumGrey dark:text-white mt-6 block">
                            subtasks
                        </label>

                        <FieldArray name="subtasks"
                            render={val => (
                                <div>
                                    {values.subtasks.map((_, i) => (
                                        <div key={i} className="flex">
                                            <TextInput label='' name={`subtasks[${i}]`} type="text" placeholder="e.g. Archived" />
                                            <button onClick={() => val.remove(i)}
                                                className="text-mediumGrey hover:text-mainRed ml-4"
                                            >
                                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="currentColor" fillRule="evenodd">
                                                        <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                                                        <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                    <br />

                                    <button
                                        type='submit'
                                        onClick={() => val.push('')}
                                        className={'bg-[#635FC71A] rounded-full w-full py-[7px] text-mainPurple transition duration-200 text-base hover:bg-mainPurpleHover font-sans'}
                                    >
                                        {'+ Add New Subtask'}
                                    </button>
                                </div>
                            )}
                        />
        
                        <StatustDropdown columns={boardColumns}/> <br /> <br />

                        <Button type="submit" disabled={isSubmitting} children={'Save Changes'} width={"w-full"} padding={'py-[7px]'} color={'text-white'} />
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddNewTaskModal
