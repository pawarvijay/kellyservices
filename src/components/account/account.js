import React from 'react';
import { Form, Formik } from 'formik';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

import MyTextField from '../common/textfield'
import { saveUser, setPasswordVerification, setUsernameVerification } from '../../actions/authentication'
import Footer from '../footer'
import * as Yup from 'yup';
import "./account.scss";

import { useDispatch } from "react-redux";


const Account = () => {

    const dispatch = useDispatch();

    /**
     * below dispatched are for reset purpose, so that demo app does not have to refresh
     * not for development
     * Clear store
     */
    dispatch(saveUser({}))
    dispatch(setPasswordVerification(false))
    dispatch(setUsernameVerification(false))

    let history = useHistory();

    const notify = () => toast.info(<div> {'Account Created Successfully'} </div>, { position: toast.POSITION.TOP_CENTER, closeButton: false ,autoClose: 1700 , hideProgressBar : true })

    return <div className='account'>
        <div className="container">
            <div className="mainTitle">  Create account </div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    username: '',
                    retypeUsername: '',
                    password: '',
                    retypePassword: ''
                }}

                validationSchema={AccountSchema}

                onSubmit={(values) => {
                    notify()
                    dispatch(saveUser(values))
                    history.push("/");
                }}
            >
                {(props) => (
                    <Form>
                        <div className="firstnameWrapper"> <MyTextField name="firstName" type="text" label="First Name" /> </div>
                        <div className='lastnameWrapper'> <MyTextField name="lastName" type="text" label="Last Name" /> </div>
                        <MyTextField name="username" type="text" label="Username" />
                        <MyTextField name="retypeUsername" type="text" label="Re-type username" />
                        <MyTextField name="password" type="password" label="Password" />
                        <MyTextField name="retypePassword" type="password" label="Re-type password" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            <div className="centerText commonLabels alreayAccount">
                Already have an account ?  <Link to="/">Signin</Link>
            </div>
            <Footer/>
        </div>
    </div>
};

const AccountSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    username: Yup.string().required('Please enter valid username'),
    retypeUsername: Yup.string().oneOf([Yup.ref('username')], 'Username does not match').required('Please retype username'),
    password: Yup.string().required('please enter valid password'),
    retypePassword: Yup.string().oneOf([Yup.ref('password')], 'Password does not match').required('Please retype password'),
});

export default Account