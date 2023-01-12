import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import List from './Components/List';
import Insert from './Components/Insert';
import Validate from './Components/Validate';
import Login from './Components/Login';

function App() {

  let[credential,setCred]=useState({uid:"",pass:""});

  const credData=(data)=>{
      setCred({...credential,...data});
  }


  return (
    <div>
    <Router>
    <Switch>
      <Route path="/" exact render={()=>(<List></List>)}></Route>
      <Route path="/insert"  render={()=>(<Insert></Insert>)}></Route>
      <Route path="/login"  render={(props)=>(<Login {...props} cred={credData}> </Login>)}></Route>
      <Route path="/validate"  render={(props)=>(<Validate {...props} valCheck={credential}></Validate>)}></Route>
    </Switch>
  </Router>
    </div>
  );
}

export default App;
