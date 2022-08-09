import React from 'react';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Autocomplete, Button, TextField} from "@mui/material";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

export default function Cart(){
    const [value, setValue] = React.useState(null);
    return(

        <div className='products'>
            <label className='lbl_re'>Cart Manage</label>
            <div className='re_middle_con'>
                <ValidatorForm className="re_form"
                    // ref='form'
                    //            onSubmit={handleSubmit}
                    //            onError={errors => console.log(errors)}
                >
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        size='small'
                        // options={top100Films}
                        sx={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="User Name" />}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                            label="Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField size='small' {...params} />}
                        />
                    </LocalizationProvider>

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        size='small'
                        // options={top100Films}
                        sx={{ width: '100%' }}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />
                    <TextValidator id="outlined-basic" label="Price" variant="outlined" size="small"
                                   name="price"
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
            </div>
        </div>
    )
}