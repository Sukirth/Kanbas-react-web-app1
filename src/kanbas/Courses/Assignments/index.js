import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Databases";
import {FaRegCircleCheck, FaCaretDown, FaEllipsisVertical, FaGripVertical, FaPlus} from "react-icons/fa6";
import {FaRegEdit} from "react-icons/fa";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div style={{marginTop:"10px"}} className = "container" >
        <nav style={{}}>
            <form className="form-group">
                <div className="d-flex justify-content-between">
                    <div>
                        <input className="form-control me-2 float-start" type="search" placeholder="Search for Assignment" aria-label="Search" />
                    </div>
                    <div>
                        <button className="btn btn-light btn-outline-secondary me-1" type="submit">+ Group</button>
                        <button className="btn btn-light btn-outline-secondary wd-select-button me-1" type="submit">+ Assignment</button>
                        <button className="btn btn-light btn-outline-secondary me-1" type="submit"><FaEllipsisVertical/></button>
                    </div>
                </div>
            </form> 
            <hr style={{marginTop: "10px", marginBottom: "10px"}} />      
        </nav>
        <ul className="list-group">
            <li className="list-group-item list-group-item-heading d-flex justify-content-between align-items-center wd-heading">
                <div>
                    <FaGripVertical className="me-2"/>
                    <FaCaretDown className="me-1"/>
                    <b>Assignments</b>
                </div>
                <div>
                    <button className="trending-button1">40% of total</button>
                    <FaPlus className="me-2"/>
                    <FaEllipsisVertical/>
                </div>
            </li>

            {courseAssignments.map((assignment) => (
                    <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="list-group-item d-flex justify-content-between">                 
                        <div className="d-flex justify-content-between">
                            <FaGripVertical className="me-3 mt-3"/>
                            <FaRegEdit className="me-3 mt-3 wd-publish-checkCircle"/>
                            <span>
                              <div className="fs-5">{assignment.title}</div>
                              <div className="fw-light">Week 0 - SETUP -Week starting on Monday September 5th (9/5/2022) Module | </div>
                              <div className="fw-light">Due Sep 18, 2022 at 11:59pm | 100 pts</div>
                            </span>                       
                            
                        </div>
                        <div>
                            <FaRegCircleCheck className="me-2 mt-3 wd-publish-checkCircle"/>
                            <FaEllipsisVertical className="mt-3"/>
                        </div>  
                    </Link>
            ))}
                              
        </ul>



        {/* <a href="\kanbas\courses\Assignments\assignmentEdit\screen.html" className="list-group-item d-flex justify-content-between align-items-center"> */}
        
        {/* </a> */}






      {/* <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div> */}
    </div>
  );
}
export default Assignments;