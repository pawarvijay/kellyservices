import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { verifyPassword, setUsernameVerification } from '../../../actions/authentication'
import MyTextField from '../../common/textfield'
import backIcon from './assets/backicon.png';
import Footer from '../../footer'
import "./password.scss";

export default function Password() {
    const dispatch = useDispatch();
    const firstName = useSelector(state => state.user.firstName)

    const notify = () => toast.info(<div> {'Successfully signed in'} </div>, { position: toast.POSITION.TOP_CENTER, closeButton: false ,autoClose: 1700 , hideProgressBar : true })

    return (
        <div className='welcome'>
            <div className="container">

                <span onClick={() => dispatch(setUsernameVerification(false))}>
                    <img src={backIcon} alt="backicon" className='backButton' />
                </span>

                <div className="mainTitle centerText">Welcome</div>

                <div className="usernameTitle centerText">{firstName}</div>

                <Formik
                    initialValues={{ password: '' }}

                    validationSchema={SigninPasswordSchema}

                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                        setTimeout(async () => {
                            setSubmitting(false);
                            let passwordMatch = await dispatch(verifyPassword(values))
                            if(!passwordMatch){
                                setFieldError('password', 'Wrong password !')
                                return
                            }
                            notify()
                        }, 1000);
                    }}
                >
                    {({isSubmitting}) => <Form>
                        <MyTextField name="password" type="password" label="Password" />
                        <button type="submit">{isSubmitting ? 'Verfying' : 'Next'}</button>
                    </Form>
                    }
                </Formik>

            </div>

            <div className="centerText commonLabels">
                New to Autodesk ?  <Link to="/account">Create account</Link>
            </div>

            <Footer/>

        </div>
    );
}

const SigninPasswordSchema = Yup.object().shape({
    password: Yup.string().required('Please enter a valid password')
});

