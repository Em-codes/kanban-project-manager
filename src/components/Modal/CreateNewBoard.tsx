import TextInput from '@components/shared/TextInput'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import Button from '@components/shared/Button'

const CreateNewBoard = () => {

    const validate = Yup.object({
        name: Yup.string().required("Board title is required"),
        columns: Yup.array().of(
                Yup.string().required("Column title is required"),
        )
    })

    return (
        <div>
            <Formik
                initialValues={{ name: "" }}
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
                        <TextInput label='Board Name' name="name" type="input" placeholder='eg: Web Design' />
                        <Button children={'Save Changes'} width={"w-full"} padding={'py-[7px]'} color={'text-white'}/>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CreateNewBoard
