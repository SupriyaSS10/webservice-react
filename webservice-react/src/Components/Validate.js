import { useEffect, useState } from "react";
import StudentService from "./StudentService";
const Validate = (props) => {

    let [studData, setStuData] = useState([]);

    useEffect(
        StudentService.getStudent().then((result) => {
            setStuData(result.data);
        }).catch((err) => {
            console.log("Error occrued");
        }),[]);

const renderList = () => {
    return studData.filter((stud) => {
        return stud.uid === props.valCheck.uid &&
            stud.pass === props.valCheck.pass
    });
}
return (
    <div>
        {renderList};
    </div>
);

};

export default Validate;