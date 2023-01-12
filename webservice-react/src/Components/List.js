import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentService from "./StudentService";

const List = () => {
    const [studArr, setStudArr] = useState([]);
    //const history = useHistory();

    //[] => for intialization
    useEffect(() => {
        StudentService.getStudent().then((result) => {
            setStudArr(result.data);
        }).catch((err) => { console.log(err) });
    }, []);

    const deleteStudent=(roll)=>{
        StudentService.deleteStudent(roll).then((result)=>{
            console.log(result.data);

        }).catch((err)=>{
            console.log(err);
        });
    }

    const renderList = () => {
       return studArr.map((student) => {
            return <tr key={student.roll}> <td>{student.roll}</td><td>{student.name}</td>
            <td>{student.marks}</td><td><button type="button" name="btn" id="delete" onClick={()=>deleteStudent(student.roll)}>Delete student</button></td>
            </tr>
        });
    }

    return (
        <div>
            <div>
                <table>
                {renderList()}
                </table>
            {/* console.log("list component"); */}
            </div>
            <Link to="/insert">
                <button type="button" name="btn" id="insert">Add Student</button>
            </Link>
            

                
            
        </div>
    );

}
export default List;