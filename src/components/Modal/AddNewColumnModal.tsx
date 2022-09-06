import { Form, Formik, FieldArray } from "formik"
import * as Yup from 'yup';
import Button from "@components/shared/Button";
import TextInput from "@components/shared/TextInput";
import { createNewBoard, createNewColumn } from "features/board/boardSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";

const AddNewColumnModal = () => {
    const dispatch = useAppDispatch();

    const validate = Yup.object({
        name: Yup.string().required("Can't be empty"),
    })

    // const createColumn = (column) => {
    //     column.id = uuidv4();
    //     column.tasks = [];
    //     currentBoard.columns.push(column);
    //     setBoards([...boards]);
    //   };
    const boards = useAppSelector((state: RootState) => state.boards.boards)
    const currentBoard = useAppSelector((state: RootState) => state.currentBoard.value)
    const boardNameTag = boards[currentBoard] && boards[currentBoard].name
    const boardColumnsx = boards?.find(element => element.name === boardNameTag);
    console.log(boardColumnsx)

    return (
        <Formik
            initialValues={{
                columns: [
                    { name: '', tasks: [] }
                ]
            }}
            // validationSchema={validate}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)

                //make async call
                console.log('submit:', values);
                dispatch(createNewColumn(values))
                setSubmitting(false)
                resetForm()
            }
            }
        >
             {({ values, isSubmitting, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <label className="body-md capitalize text-mediumGrey dark:text-white mt-6 block">
                            Board Columns
                        </label>

                        <FieldArray name="columns"
                            render={arrayHelpers => (
                                <div>
                                    {values.columns.map((_, i) => (
                                        <div key={i} className="flex">
                                            <TextInput label='' name={`columns.${i}.name`} type="text" placeholder="e.g. Archived" />
                            
                                            <button onClick={() => arrayHelpers.remove(i)}
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
                                        type='button'
                                        onClick={() => arrayHelpers.push({name: '', tasks: []})}
                                        className={'bg-[#635FC71A] rounded-full w-full py-[7px] text-mainPurple transition duration-200 text-base hover:bg-mainPurpleHover font-sans'}
                                    >
                                        {'+ Add New Column'}
                                    </button>
                                </div>
                            )}
                        />
                        <br />

                        <Button type="submit" disabled={isSubmitting} children={'Save Changes'} width={"w-full"} padding={'py-[7px]'} color={'text-white'} />
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                // </div>
            )}
        </Formik>
    )
}
export default AddNewColumnModal
