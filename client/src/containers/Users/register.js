import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';
import ShowhidePassword from '../../components/Auth/showhidePassword';
import { useNavigate, Link } from 'react-router-dom';

const Register = ()=>{
    const navigate = useNavigate()

    const registerUser = async(values)=>{
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch('http://localhost:4000/register', requestOptions);
        const data = await response.json()

        if(data){
            alert(data.msg)
            navigate('/')
        }
    }

    const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

	const SignupSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		phoneNumber: Yup.string().required('Required'),
        permanentAddress: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
			.required('Required')
			.min(6)
			.matches(passwordRule, { message: 'Please create a stronger password' }),
	});

    return(
        <section className='form_section'>
            <div className='container'>
                <div className='form'>
                    <h1>Sign Up</h1>

                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phoneNumber: '',
                            permanentAddress: '',
                            password: '',
                            zipCode: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values=>{
                            registerUser(values)
                        }}
                    >

                        {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                            <Form  onSubmit={handleSubmit}>
                                <Field name="name" placeholder="Your Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
								{errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}

                                <Field name="email" placeholder="Your Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                                <Field name="phoneNumber" placeholder="Your phoneNumber" value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                                {errors.phoneNumber && touched.phoneNumber ? (<div className="error">{errors.phoneNumber}</div>) : null}

                                <Field name="permanentAddress" placeholder="Your Address" value={values.permanentAddress} onChange={handleChange} onBlur={handleBlur} />
                                {errors.permanentAddress && touched.permanentAddress ? (<div className="error">{errors.permanentAddress}</div>) : null}

                                <Field name="password" placeholder="Your password" value={values.password} onChange={handleChange} onBlur={handleBlur} component={ShowhidePassword}/>
                                {errors.password && touched.password ? (<div className="error">{errors.password}</div>) : null}

                                <Field name="zipCode" placeholder="Your zipCode" value={values.zipCode} onChange={handleChange} onBlur={handleBlur} />
                                {errors.zipCode && touched.zipCode ? (<div className="error">{errors.zipCode}</div>) : null}

                                <button type="submit">Signup</button>
                            </Form>
                        )} 
                    </Formik>
                    <p style={{ marginTop: '10px' }}>Already have an account? Please <Link to="/">Login</Link> to continue</p>
                </div>
            </div>
        </section>
    )
}
export default Register