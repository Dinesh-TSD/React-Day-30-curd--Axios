import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser, setLoading, setUsers } from '../../Reducers/UserReducer';
import { toast } from 'react-toastify';
import { SyncLoader } from 'react-spinners';

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { loading } = useSelector(state => state.app)
    const closemeg = (name) => toast(`${name} is updated`, { type: toast.TYPE.SUCCESS, autoClose: 2000 });

    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            email: "",
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: ""

            },
            phone: "",
            website: "",
            company: {
                name: ""
            }
        },
        validate: (values) => {
            let errors = {}

            if (!values.name) {
                errors.name = "Please enter the name"
            }

            if (!values.username) {
                errors.username = "Please enter the username"
            }
            else if (values.username.length <= 3 || values.username.length > 15) {
                errors.username = "User Name should be between 3 to 15"
            }

            if (!values.email) {
                errors.email = "Please enter the email";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.address.street) {
                errors.address = { ...errors.address, street: "Please enter the street" };
            }

            if (!values.address.suite) {
                errors.address = { ...errors.address, suite: "Please enter the suite" };
            }


            if (!values.address.city) {
                errors.address = { ...errors.address, city: "Please enter the city" };
            }


            if (!values.address.zipcode) {
                errors.address = { ...errors.address, zipcode: "Please enter the zipcode" };
            }

            if (!values.phone) {
                errors.phone = "Please enter the phone Number"
            }

            if (!values.website) {
                errors.website = "Please enter your site url"
            }
            if (!values.company.name) {
                errors.company = { ...errors.company, name: "Please enter the Company Name" };
            }

            return errors
        },
        onSubmit: async (values) => {
            try {
                dispatch(setLoading());
                let res = await axios.put(`https://65571300bd4bcef8b611ff00.mockapi.io/product/users/${params.id}`, values)
                closemeg(values.name);
                dispatch(setUsers(res.data))
                navigate('/')
            } catch (error) {
                console.log(error);
            }

        }

    })

    let getUserData = async () => {
        let employee = await axios.get(`https://65571300bd4bcef8b611ff00.mockapi.io/product/users/${params.id}`)
        dispatch(editUser(employee.data))
        console.log(employee.data);
        formik.setValues(employee.data)
    }

    useEffect(() => {
        getUserData();

    }, []);


    return (
        <>
            <div className="container-fluid">
                {
                    loading ?
                        <SyncLoader color="#36d7b7" className="text-center" />
                        : (
                            <form onSubmit={formik.handleSubmit} >
                                <div className="row">

                                    <div className="col-lg-4">
                                        <label >Name</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='name'
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.getFieldMeta('name').touched && formik.errors.name ? (
                                            <div className="text-danger">{formik.errors.name}</div>
                                        ) : null
                                        }
                                    </div>

                                    <div className="col-lg-4">
                                        <label >User Name</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='username'
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.getFieldMeta('username').touched && formik.errors.username ? (
                                            <div className="text-danger">{formik.errors.username}</div>
                                        ) : null
                                        }
                                    </div>

                                    <div className="col-lg-4">
                                        <label >Email</label>
                                        <input
                                            type="email"
                                            className='form-control'
                                            name='email'
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.getFieldMeta('email').touched && formik.errors.email ? (
                                            <div className="text-danger">{formik.errors.email}</div>
                                        ) : null
                                        }
                                    </div>

                                    <div className="col-lg-4">
                                        <label>Phone No</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='phone'
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.getFieldMeta('phone').touched && formik.errors.phone ? (
                                            <div className="text-danger">{formik.errors.phone}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-lg-4">
                                        <label >Website Url</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='website'
                                            value={formik.values.website}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.getFieldMeta('website').touched && formik.errors.website ? (
                                            <div className="text-danger">{formik.errors.website}</div>
                                        ) : null}
                                    </div>
                                    <div className="col-lg-4">
                                        <label >Company Name</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='company.name'
                                            value={formik.values.company.name}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.getFieldMeta('company.name').touched && formik.errors.company?.name ? (
                                            <div className="text-danger">{formik.errors.company.name}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-lg-4">
                                        <label >Street</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='address.street'
                                            value={formik.values.address.street}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.getFieldMeta('address.street').touched && formik.errors.address?.street ? (
                                            <div className="text-danger">{formik.errors.address.street}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-lg-4">
                                        <label >Suite</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='address.suite'
                                            value={formik.values.address.suite}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.getFieldMeta('address.suite').touched && formik.errors.address?.suite ? (
                                            <div className="text-danger">{formik.errors.address.suite}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-lg-4">
                                        <label >City</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='address.city'
                                            value={formik.values.address.city}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.getFieldMeta('address.city').touched && formik.errors.address?.city ? (
                                            <div className="text-danger">{formik.errors.address.city}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-lg-4">
                                        <label >Zip Code</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            name='address.zipcode'
                                            value={formik.values.address.zipcode}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.getFieldMeta('address.zipcode').touched && formik.errors.address?.zipcode ? (
                                            <div className="text-danger">{formik.errors.address.zipcode}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-lg-12">
                                        <input type="submit" className='btn btn-primary mt-3' value={"submit"} />
                                    </div>
                                </div>
                            </form>
                        )}


            </div>

        </>
    )
}

export default EditUser