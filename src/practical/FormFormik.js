import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import "./fromFormik.css";
export default function FormFormik() {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            channel:''
        },
        validationSchema:Yup.object().shape({
            name: Yup.string().required().min(4),
            email: Yup.string().email().required("Required")
        }),
        onSubmit: values =>{
            console.log("onsubmit", values)
        }
    });

    return (
        <div className="d-flex">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name' className="required">Name</label>
                <input type="text" id="name" name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className={
                        formik.errors.name && formik.touched.name
                          ? "text-input error"
                          : "text-input"
                      } />
                      {formik.errors.name && formik.touched.name && (
              <div className="input-feedback">{formik.errors.name}</div>
            )}

                <br/>   

                 <label htmlFor='email' className="required">Email</label>
                <input type="text" id="email" name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={
                        formik.errors.email && formik.touched.email
                          ? "text-input error animated shake"
                          : "text-input"
                      } />
                      {formik.errors.email && formik.touched.email && (
              <div className="input-feedback">{formik.errors.email}</div>
            )}

                <br/>

                <label htmlFor='channel'>Channel</label>
                <input type="text" id="channel" name="channel"
                    onChange={formik.handleChange}
                    value={formik.values.channel} />

                <button type="submit">  Submit </button>
                <button type="button" className="outline" onClick={ formik.handleReset} > Reset </button>
                
            </form>

            <div style={{ margin: '1rem 0' }} className="ml-5">
                <pre style={{ background: '#f6f8fa', fontSize: '.65rem', padding: '.5rem', }} >
                    <strong>props</strong> = {' '}
                    {JSON.stringify(formik, null, 2)}
                </pre>
                </div>

        </div>
    )
}
