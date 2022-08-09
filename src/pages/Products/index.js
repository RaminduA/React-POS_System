import React from 'react';
import './style.css'
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Autocomplete, Button, IconButton, TextareaAutosize, TextField} from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function Products(){
    return(
        <div className='products'>
            <label className='lbl_re'>Product Manage</label>
            <div className='re_middle_con'>
                <ValidatorForm className="re_form"
                    // ref='form'
                    //            onSubmit={handleSubmit}
                    //            onError={errors => console.log(errors)}
                >
                    <TextValidator id="outlined-basic" label="Title" variant="outlined" size="small"
                                   name="title"
                                   style={{width: '100%'}}
                        // validators={['required','isString']}
                        //            value={formData.userName}
                        //            onChange={handleChange}
                    />

                    <TextValidator id="outlined-basic" label="Price" variant="outlined" size="small"
                                   name="price"
                                   style={{width: '100%'}}
                        // validators={['required', 'isEmail']}
                        // value={formData.email}
                        // onChange={handleChange}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        size='small'
                        // options={top100Films}
                        sx={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />
                    <TextField
                        placeholder="Description"
                        multiline
                        rows={2}
                        maxRows={4}
                    />
                </ValidatorForm>
                <img src="" alt="" className='img_pro' style={{display:'block',marginBottom:'10px'}}/>
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                </IconButton>
                <div className='re_button_con'>
                    <Button variant="contained" size='small' type='button'  >Clear</Button>
                    <Button variant="contained" size='small' type='submit'  >Save</Button>
                </div>
            </div>
        </div>
    )
}