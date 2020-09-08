import React from "react";
import { Form, Formik } from 'formik';
import { Link, useHistory } from "react-router-dom";
import * as Yup from 'yup';
import { useSelector, useDispatch } from "react-redux";

import { verifyUsername } from '../../../actions/authentication'
import MyTextField from '../../common/textfield'
import Footer from '../../footer'
import "./username.scss";

export default function Username() {
    const dispatch = useDispatch();

    const username = useSelector(state => state.user.username)

    return (
        <div className='signin'>
            <div className="container">
                <div className="mainTitle">Sign in</div>

                <Formik
                    initialValues={{ username: username || '' }}
                    validationSchema={SigninUsernameSchema}
                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                        setTimeout(async () => {
                            setSubmitting(false);
                            let userNameMatch = await dispatch(verifyUsername(values))
                            if(!userNameMatch){
                                setFieldError('username', 'Username does not exists !')
                            }
                        }, 1000);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <MyTextField name="username" type="text" label="Username" />
                            <button type="submit">{isSubmitting ? 'Verfying' : 'Next'}</button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="centerText commonLabels">
                New to Autodesk ?  <Link to="/account">Create account</Link>
            </div>

            <Footer/>

        </div>
    );
}

const SigninUsernameSchema = Yup.object().shape({
    username: Yup.string().required('Please enter a valid username')
});
