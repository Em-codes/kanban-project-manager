import { Form, Formik } from "formik"
import * as Yup from 'yup';
import Button from "@components/shared/Button";
import TextInput from "@components/shared/TextInput";
import { createNewBoard } from "features/board/boardSlice";
import { useAppDispatch } from "app/hooks";

const AddNewColumnModal = () => {
    const dispatch = useAppDispatch();

    const validate = Yup.object({
        name: Yup.string().required("Can't be empty"),
    })

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
                dispatch(createNewBoard(values))
                setSubmitting(false)
                resetForm()
            }
            }
        >
            {formik => (
                <div className="w-full mx-auto rounded-md bg-white dark:bg-darkGrey">
                    <h1 className="heading-lg font-bold mb-6">Add New Column</h1>
                    <Form>

                        <TextInput label="Name" name="name" type="text" placeholder="e.g. Archived" /> <br />

                        <Button type="submit" children={'+ Add New Column'} width={"w-full"} padding={'py-[7px]'} color={'text-white'} />

                    </Form>
                </div>
            )}
        </Formik>
    )
}
export default AddNewColumnModal
