import axios from "axios";
class Student {
    constructor() {
        this.url = "http://localhost:4000/";
    }

    getStudent() {
        return axios.get(this.url +"stud");
    }

    insertStudent(stud) {
        return axios.post(this.url + "stud", stud);
    }

    deleteStudent(roll){
        return axios.delete(this.url+"stud/"+roll);
    }
    
}

export default new Student();