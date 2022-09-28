import React from 'react';
import '../css/login.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import SignUp from './SignUp';
function LoginPage(){
  //for the signUp tab
  React.useEffect(() => {
    const element = document.querySelector('.LoginPage');
    const showTable = document.querySelector("#table");
      element.style.opacity = "1";
       showTable.classList.add("hidden");
  }, []);


const menuHandler = () => {
  const element = document.querySelector('.LoginPage');
  const showTable = document.querySelector("#table");
  console.log(element.style.opacity)
  if (element.style.opacity == 1) {
    element.style.opacity = "0.3";
    showTable.classList.remove("hidden");
    showTable.style.opacity = "1";
  } else {
    element.style.opacity = "1";
    showTable.classList.add("hidden");
  }
}
//end of signup tab!!!!
    return(
       <div id="page">
       <div className="LoginPage">
          <div id="Welcome-section">
            <h1>facebook</h1>
            <p>Connect with friends and the World around you with facebook</p>
          </div>
          <div id="Forum">
            <div id="border">
            <TextField 
            className="userInfo"
            id="outlined-basic"
            label="Email or Phone Number" 
            variant="outlined"
            inputProps={{style: {fontSize: 30}}} 
            inputlabelprops={{style: {fontSize: 15}}}
            />
            <TextField className="userInfo" id="outlined-basic"  label="Password" variant="outlined"
             inputProps={{style: {fontSize: 30}}} 
             inputlabelprops={{style: {fontSize: 15}}} />
            <Button variant="contained"
            ><p>Log In</p></Button>
           <a href=""><b>Forgot Password?</b></a></div>
            <Button id="NewAcc" onClick={menuHandler} variant="contained"><p>Create New Account</p></Button>
          </div>
          </div>
          <div id="table"><SignUp/></div>
       </div>
    )
}
export default LoginPage;