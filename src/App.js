import * as React from 'react';
import {Button, Checkbox, FormGroup, FormControlLabel }  from '@mui/material';
import {Route, Link, Routes} from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path ="/" element = {<LoginPage/>} />
      </Routes>
   
    </div>
  );
}

export default App;
