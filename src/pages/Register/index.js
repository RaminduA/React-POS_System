import React, {useEffect} from 'react';
import './style.css'
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Button} from "@mui/material";
import axios from "axios"

export default function Register() {
    const [user,setUser]=React.useState([]);

    useEffect(()=>{
        getAll()
    },[])

    const getAll =async ()=>{
        axios.get('https://fakestoreapi.com/users')
            .then((res) => {
                console.log(res);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err)


            })
    }

    return (
        <div className='registration_con'>
            <label className='lbl_re'>User Registration</label>
            <div className='re_middle_con'>
                <ValidatorForm className="re_form"
                    // ref='form'
                    //            onSubmit={handleSubmit}
                    //            onError={errors => console.log(errors)}
                >
                    <TextValidator id="outlined-basic" label="First name" variant="outlined" size="small"
                                   name="userName"
                                   style={{width: '100%'}}
                        // validators={['required','isString']}
                        //            value={formData.userName}
                        //            onChange={handleChange}
                    />

                    <TextValidator id="outlined-basic" label="Last Name" variant="outlined" size="small"
                                   name="email"
                                   style={{width: '100%'}}
                        // validators={['required', 'isEmail']}
                        // value={formData.email}
                        // onChange={handleChange}
                    /> <TextValidator id="outlined-basic" label="E-mail" variant="outlined" size="small"
                                      name="email"
                                      style={{width: '100%'}}
                    // validators={['required', 'isEmail']}
                    // value={formData.email}
                    // onChange={handleChange}
                /> <TextValidator id="outlined-basic" label="User Name" variant="outlined" size="small"
                                  name="email"
                                  style={{width: '100%'}}
                    // validators={['required', 'isEmail']}
                    // value={formData.email}
                    // onChange={handleChange}
                /> <TextValidator id="outlined-basic" label="Password" variant="outlined" size="small"
                                  name="email"
                                  style={{width: '100%'}}
                    // validators={['required', 'isEmail']}
                    // value={formData.email}
                    // onChange={handleChange}
                /> <TextValidator id="outlined-basic" label="City" variant="outlined" size="small"
                                  name="email"
                                  style={{width: '100%'}}
                    // validators={['required', 'isEmail']}
                    // value={formData.email}
                    // onChange={handleChange}
                /> <TextValidator id="outlined-basic" label="Street" variant="outlined" size="small"
                                  name="email"
                                  style={{width: '100%'}}
                    // validators={['required', 'isEmail']}
                    // value={formData.email}
                    // onChange={handleChange}
                /> <TextValidator id="outlined-basic" label="Street No" variant="outlined" size="small"
                                  name="email"
                                  style={{width: '100%'}}
                    // validators={['required', 'isEmail']}
                    // value={formData.email}
                    // onChange={handleChange}
                /> <TextValidator id="outlined-basic" label="Zip Code" variant="outlined" size="small"
                                  name="email"
                                  style={{width: '100%'}}
                    // validators={['required', 'isEmail']}
                    // value={formData.email}
                    // onChange={handleChange}
                /> <TextValidator id="outlined-basic" label="Lat value" variant="outlined" size="small"
                                  name="email"
                                  style={{width: '100%'}}
                    // validators={['required', 'isEmail']}
                    // value={formData.email}
                    // onChange={handleChange}
                /> <TextValidator id="outlined-basic" label="Long value" variant="outlined" size="small"
                                  name="email"
                                  style={{width: '100%'}}
                    // validators={['required', 'isEmail']}
                    // value={formData.email}
                    // onChange={handleChange}
                /> <TextValidator id="outlined-basic" label="Mobile Number" variant="outlined" size="small"
                                  name="email"
                                  style={{width: '100%'}}
                    // validators={['required', 'isEmail']}
                    // value={formData.email}
                    // onChange={handleChange}
                />
                </ValidatorForm>
                <div className='re_button_con'>
                    <Button variant="contained" size='small' type='button'  >Clear</Button>
                    <Button variant="contained" size='small' type='submit'  >Save</Button>
                </div>
                <div className='row_con'>
                    <div className='cus_header'>
                        <div>
                            <label className='la'>F. Name</label>
                            <label className='la'>L. Name</label>
                            <label className='la'>E-mail</label>
                            <label className='la'>User Name</label>
                            <label className='la'>City</label>
                            <label className='la'>Street</label>
                            <label className='la'>Street No</label>
                            <label className='la'>zip code</label>
                            <label className='la'>lat value</label>
                            <label className='la'>Long value</label>
                            <label className='la'>Contact</label>
                        </div>
                    </div>
                    {user.map(user =>
                        <>
                            <div className='cus_row'>
                                <div className='rest_con'>
                                    <label className='la'>{user.name.firstname}</label>
                                    <label className='la'>{user.name.lastname}</label>
                                    <label className='la'>{user.email}</label>
                                    <label className='la'>{user.username}</label>
                                    <label className='la'>{user.address.city}</label>
                                    <label className='la'>{user.address.street}</label>
                                    <label className='la'>{user.address.number}</label>
                                    <label className='la'>{user.address.zipcode}</label>
                                    <label className='la'>{user.address.geolocation.lat}</label>
                                    <label className='la'>{user.address.geolocation.long}</label>
                                    <label className='la'>{user.phone}</label>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}