import React from "react";
import { useField } from 'formik';

import "./textfield.scss";

const Textfield = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <> <div className='textField'>
            {console.log(field)}
            <div className="labelText"> { label } </div>
            <input
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
            </div>
        </>
    );
};

export default Textfield

