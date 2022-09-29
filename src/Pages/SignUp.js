import React from "react";
import DatePicker1 from './DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import '../css/SignUp.scss';
function SignUp(){
 function close(){
  let element =  document.querySelector("#table");
  const element2 = document.querySelector('.LoginPage');
  element2.style.opacity = "1";
  element.classList.add("hidden");
 }
    return(
        <div id="SignUpPage">
            <div id="table-welcome">
               <div>
               <h1>SignUp</h1>
               <p>It's quick and easy</p>
               </div>
               <div>
               <button onClick={close} type="button" className="btn-close">
                 <span className="icon-cross"></span>
               </button>
               </div>
            </div>
            <div id="table-forum">
              <div id="name">
               <div id="namename">
                <TextField
                 id="outlined-textarea"
                 label="First Name"
                 inputProps={{style: {fontSize: 12}}}
                 style ={{width: '100%'}}
                 /></div>
               
                 <div id="surname"><TextField
                 id="outlined-textarea"
                 label="SurName"
                 inputProps={{style: {fontSize: 12}}}
                 style ={{width: '100%'}}
                 /></div>
               </div>
                 <div id="emailinfo">
                 <div className="emailinfos"><TextField
                 id="outlined-textarea"
                 label="Mobile number or email address"
                 placeholder="Email/Mobile number"
                 multiline
                 style ={{width: '95%',
                 margin: '10px'}}
                 /></div>
                 <div className="emailinfos"><TextField
                 id="outlined-textarea"
                 label="New Password"
                 placeholder="Password"
                 multiline
                 style ={{width: '95%',
                 margin: '10px'}}
                 /></div>
                 </div>
                 <div id="dateOfBirth">
                    <DatePicker1/>
                 </div>
                <div id="gender">
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                   row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                   >
                   <FormControlLabel value="female" control={<Radio />} label="Female" />
                   <FormControlLabel value="male" control={<Radio />} label="Male" />
                   <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                  </FormControl>
             </div>

            </div>
            <p id="end">By clicked SignUp you agree to the terms and policy of blablabla</p>
            <div><Button id="SignUpButton" variant="contained">SignUp</Button></div>
            </div>
    )
}
export default SignUp;