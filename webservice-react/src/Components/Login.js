import { useState } from "react";
import {useHistory} from 'react-router-dom';
const Login=(props)=>{

let[creds,setCreds]=useState({});
let history=useHistory();

const handleChange=(event)=>{
    let[name,value]=event.target;
    setCreds({...creds,[name]:value});
};

const sendCred=()=>{
    props.cred(creds);
    console.log(creds);

    history.push("/validate");
}

return (

    <div>
<form  >


    <label for="uid">Enter your userid</label>
    <input type="text" name="uid" id="uid"
    onChange={handleChange}></input>

    
    <label for="pass">Enter your password</label>
    <input type="text" name="pass" id="pass"
     onChange={handleChange}></input>


    <button type="submit" name="btn" id="btn" onClick={sendCred}>login</button>

</form>
</div>
)
};
export default Login;