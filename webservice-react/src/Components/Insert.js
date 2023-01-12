import {useState} from "react";
import { useHistory } from "react-router-dom";
import StudentService from "./StudentService";
const Insert=()=>{

    let history=useHistory();
    let[studOb,setStud]=useState({roll:"",name:"",marks:""});

    const handleChange=(event)=>{
        let{name,value}=event.target;
        setStud({...studOb,[name]:value});
    }

    const addData=()=>{
        StudentService.insertStudent(studOb).then(()=>{
            history.push("/");
        }).catch(()=>{});
    }
    return(
        <div>
            <form>
            <label for="roll">Roll</label>
            <input type="text" name="roll" id="roll" 
            value={studOb.roll}
            onChange={handleChange}
            placeholder="Enter your roll"></input><br/>

            <label for="name">Name</label>
            <input type="text" name="name" id="name" 
            value={studOb.name}
            onChange={handleChange}
            placeholder="Enter your name"></input><br/>

            <label for="roll">Marks</label>
            <input type="text" name="marks" id="marks" 
            value={studOb.marks}
            onChange={handleChange}
            placeholder="Enter your marks"></input><br/>

            <button type="button" onClick={addData}>send</button>
            </form>
        </div>
        
    );
}
export default Insert;
