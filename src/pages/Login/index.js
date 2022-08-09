import React from 'react';
import './style.css'
import {Box, Button, Grid, Link} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {NavLink} from "react-router-dom";

export default function Login() {
    return (
        <div className='login_con'>
            <div className='login_middle_con'>
                <div style={{height:'20%',width:'100%',position:'relative'}}><label className='position_01'>Login</label></div>
                <div style={{height:'50%',width:'80%',left:'50%',position:'relative',transform: 'translateX(-50%)'}}>
                    <ValidatorForm className="pt-2"
                        // ref='form'
                        //            onSubmit={handleSubmit}
                        //            onError={errors => console.log(errors)}
                    >
                        <Box sx={{width: '96%'}} style={{marginLeft: '10px'}}>
                            <Grid
                                container
                                spacing={4}
                                item
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                                rowSpacing={3}
                                className="grid"
                            >
                                <Grid spacing={2} item xs={12} md={12} className='gridItem'>
                                    <TextValidator id="outlined-basic" label="User name" variant="outlined" size="small"
                                                   name="userName"
                                                   style={{width: '100%',marginTop:'10%'}}
                                        // validators={['required','isString']}
                                        //            value={formData.userName}
                                        //            onChange={handleChange}
                                    />
                                </Grid>
                                <Grid spacing={2} item xs={12} md={12} className='gridItem'>
                                    <TextValidator id="outlined-basic" label="E-mail" variant="outlined" size="small"
                                                   name="email"
                                                   style={{width: '100%',marginTop:'6%'}}
                                        // validators={['required', 'isEmail']}
                                        // value={formData.email}
                                        // onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </ValidatorForm>
                </div>
                <div style={{height:'20%',width:'100%'}}>
                    <Button variant="contained" size='small' type='submit' className='position_01 btnLogin' >Login</Button>
                </div>
                <div style={{height:'10%',width:'80%',left:'50%',position:'relative',transform: 'translateX(-50%)'}}>
                    <label>Create new user account?</label>
                    <NavLink to='register'><label style={{margin:'10px'}}>click here</label></NavLink>
                    <NavLink to='cart'><label style={{margin:'10px',display:'inline-block'}}>Cart</label></NavLink>
                    <NavLink to='dashboard'><label style={{margin:'10px'}}>Dashboard</label></NavLink>
                    <NavLink to='products'><label style={{margin:'10px'}}>Product manage</label></NavLink>
                </div>
            </div>
        </div>
    )
}