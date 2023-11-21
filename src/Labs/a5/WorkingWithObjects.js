import { useState, useEffect } from "react";
import { combineReducers } from "redux";
import axios from "axios";
function WorkingWithObjects () {
    const assignmentJson = {
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    }
    const [assignment, setAssignment] = useState(assignmentJson);
    // const API_BASE = process.env.REACT_APP_API_BASE;
    // const URL = `${API_BASE}/a5/assignment`;
    // const URL = "http://localhost:4000/a5/assignment"; 
    const URL = "https://kanbas-node-server-app-5eyi.onrender.com/a5/assignment";
    const fetchAssignment = async () => {
        console.log("Here");
        const response = await axios.get(`${URL}`);
        console.log("Here",response);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
          .get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
      useEffect(() => {
        fetchAssignment();
      }, []);
      
    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a 
                // href="http://localhost:4000/a5/assignment"
                href = "https://kanbas-node-server-app-5eyi.onrender.com/a5/assignment"
                // href = {`${API_BASE}/a5/assignment`}
                className="btn btn-primary">
                Get Assignment
            </a>
            {/* <button onClick={fetchAssignment}
                className="w-100 btn btn-danger mb-2">
                Fetch Assignment
            </button> */}

            <h4>Retrieving & Modifying Properties</h4>
            
            <h5>Updating Title:</h5>
            {/* <a
                href={`${URL}/title/${assignment.title}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Title
            </a> */}
            <input value={assignment.title} className="form-control mb-2 w-75" type="text"
                onChange={(e)=>setAssignment({...assignment, title: e.target.value})}/> 
            <button onClick={updateTitle}
                className="w-100 btn btn-primary mb-2">
                Update Title to: {assignment.title}
            </button>       
            <a 
                // href="http://localhost:4000/a5/assignment/title"
                href = "https://kanbas-node-server-app-5eyi.onrender.com/a5/assignment/title"
                // href = {`${API_BASE}/a5/assignment/title`}
                className="btn btn-primary">
                Get Title
            </a>

            <h5>Updating Score:</h5>
            <a
                href={`${URL}/score/${assignment.score}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Score
            </a>
            
            <input value={assignment.score} className="form-control mb-2 w-75" type="text"
                onChange={(e)=>setAssignment({...assignment, score: e.target.value})}/> 
            <a 
                // href="http://localhost:4000/a5/assignment/score"
                href = "https://kanbas-node-server-app-5eyi.onrender.com/a5/assignment/score"
                // href = {`${API_BASE}/a5/assignment/score`}
                className="btn btn-primary">
                Get Score
            </a>
            
            <h5>Updated completed status</h5>            
            <a href={`${URL}/completed/${assignment.completed}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Completed status
            </a>
            <label>
            <input type="checkbox" value={assignment.completed} checked={assignment.completed} className=""
                    onChange={(e)=>{setAssignment({...assignment, completed: e.target.checked})}}
            /> Completed </label>
            <br/>
            <a 
                // href="http://localhost:4000/a5/assignment/completed"
                href = "https://kanbas-node-server-app-5eyi.onrender.com/a5/assignment/completed"
                // href = {`${API_BASE}/a5/assignment/completed`}
                className="btn btn-primary">
                Get Completed status
            </a>
            

        </div>
    );

}
export default WorkingWithObjects;