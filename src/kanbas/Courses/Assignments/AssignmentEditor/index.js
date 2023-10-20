import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Databases";
import {FaRegCircleCheck, FaCaretDown, FaEllipsisVertical, FaGripVertical, FaPlus} from "react-icons/fa6";
// import {BsThreeDotsVertical} from "react-icons/bs";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  console.log(useParams());
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
        <nav >
            <form className="form-group">
                <div className="d-flex justify-content-end pt-2">     
                    <div>            
                        <span className="wd-icon-green wd-padding-20-right">
                            <span className="pe-2"><FaRegCircleCheck/></span>
                            Published
                        </span>                                
                        <button className="btn btn-light btn-outline-secondary me-3" type="submit"><FaEllipsisVertical/></button>
                    </div>
                </div>
            </form> 
            <hr className="mt-2 mb-3" />      
        </nav>

        <form className="form-group col-8" action="/kanbas/courses/assignments/screen.html">
            <div className="mb-3">
                <label for="assignmentName" className="form-label">Assignment Name</label>
                <input type="text" className="form-control" id="assignmentName" placeholder="Assignment Name" value={assignment.title}/>
            </div>
            <div className="mb-3">            
            <textarea className="form-control" id="AssignmentDescription" rows="4">
                Clicking on the title of any assignment displays the Edit Assignment screen as shown below. For now this screen displays the same content regardless which assignment you click. In later assignments the content will be different depending which assignment you click. The screen provides a form for faculty to edit the assignment including the Assignment Name, Description, Points, and Due Date. Use Bootstrap classes such as form-control, float-end, btn, btn-success, row, and col, to style the Edit Assignment screen as close to the screen shots shown below.
            </textarea>
            </div>
            <div className="mb-3 row form-group">
                <div className="col">
                    <label className="form-label" for="points">Points</label>
                </div>
                <div className="col-7">
                    <input className="form-control" type="number" value="100" id="points"/>
                </div>
                <div className="col-2"></div>
            </div>
                
            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" for="assignGroup">Assignment Group</label>
                </div>
                <div className="col-7">
                    <select className="form-select" id="assignGroup" aria-label="Default select example">
                        <option selected>ASSIGNMENTS</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-2"></div>                                                                        
            </div>
            
            <div className="mb-3 row ">
                <div className="col">
                    <label className="form-label" for="displayGrade">Display Grade as</label>
                </div>
                <div className="col-7">
                    <select className="form-select" id="displayGrade" aria-label="Default select example">
                        <option selected>PERCENTAGE</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="mb-3 row">
                <div className="col-1"></div>
                <div className="col form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Do not count this assignment towards the final grade
                    </label>
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" for="assignGroup">Display Grade as</label>
                </div>
                <div className="col-7">
                    <input className="form-control" type="number" value="100" id="assignGroup"/>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" for="submissionType">Submission Type</label>
                </div>
                <div className="col-7 border rounded-2">
                    <select className="mb-3 mt-3 form-select" id="submitMode" aria-label="Default select example">
                        <option selected>Online</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <div className="mb-3">
                        <label className="form-label" for="submissionType"><b>Online Entry Options</b></label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="st1" checked/>
                        <label className="form-check-label" for="st1">
                            Text Entry
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="st2" checked/>
                        <label className="form-check-label" for="st2">
                            Website URL
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="st3" checked/>
                        <label className="form-check-label" for="st3">
                            Media Recordings
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="st4" checked/>
                        <label className="form-check-label" for="st4">
                            Student Annotation
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="st5" checked/>
                        <label className="form-check-label" for="st5">
                            File Uploads
                        </label>
                    </div>
                    <div className="form-check align-middle">
                        <input className="form-check-input" type="checkbox" value="" id="st6" checked/>
                        <label className="form-check-label" for="st6">
                            Restrict uoload file types
                        </label>
                    </div>
                </div>
                <div className="col-2"></div>                                
            </div>
            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" for="subattempts">Submission Attempts</label>
                </div>                            
                <div className="col-7 border rounded-2">
                    <div className="mb-3">
                        <label className="form-label" for="submissionType"><b>Allowed Attempts</b></label>
                    </div>

                    <select className="mb-3 mt-3 form-select" id="submitMode" aria-label="Default select example">
                        <option selected>Unlimited</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" for="subattempts">Plagiarism Review</label>
                </div>                            
                <div className="col-7 border rounded-2">

                    <select className="mb-3 mt-3 form-select" id="submitMode" aria-label="Default select example">
                        <option selected>None</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <hr/>
                    <div className="mb-3 mt-3">
                        <label className="form-label" for="submissionType">Show report to students</label>
                    </div>
                    <select className="mb-3 mt-3 form-select" id="submitMode" aria-label="Default select example" disabled>
                        <option selected>Immediately</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" for="subattempts">Group Assignments</label>
                </div>                            
                <div className="col-7 border rounded-2">
                    <div className="form-check mt-3 mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="groupAssignC" />
                        <label className="form-check-label" for="groupAssignC">
                            This is a Group Assignment
                        </label>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" for="subattempts">Peer Reviews</label>
                </div>                            
                <div className="col-7 border rounded-2">
                    <div className="form-check mt-3 mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="peerReviews" />
                        <label className="form-check-label" for="peerReviews">
                            Require Peer Reviews
                        </label>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="mb-3 row">
                <div className="col">
                    <label className="form-label" for="subattempts">Assign</label>
                </div>                            
                <div className="col-7 border rounded-2">
                    <div className="mb-3 mt-3">
                        <label for="assignTo" className="form-label mb-0"><b>Assign To</b></label>
                        <input type="text" className="form-control" id="assignTo" value="Everyone"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="due" className="form-label mb-0"><b>Due</b></label>
                        <input type="date" className="form-control" id="due" value="2023-09-18"/>
                    </div>
                    <div className="row mt-3">
                        <div className="col mb-3">
                            <label for="availableFrom" className="form-label mb-0"><b>Available from</b></label>
                            <input type="date" className="form-control" id="availableFrom" value="2023-09-06"/>
                        </div>
                        <div className="col mb-3">
                            <label for="until" className="form-label mb-0"><b>Until</b></label>
                            <input type="date" className="form-control" id="until" value="2023-09-06"/>
                        </div>
                    </div>
                    <div className="row mt-0 border border-top rounded-2">
                        <button type="button" className="btn btn-light">+Add</button>
                    </div>                                    
                </div>
                <div className="col-2"></div>
            </div>
            <hr/>
            <div className="d-flex justify-content-between">                            
                <div className="form-check mt-2">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Do not count this assignment towards the final grade
                    </label>
                </div>
                <div className="mt-1">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-outline-secondary btn-light">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-light btn-outline-secondary wd-select-button">
                        Save
                    </button>
                    {/* <button type="submit" className="btn btn-outline-secondary btn-light">Cancel</button>
                    <button type="submit" className="btn btn-light btn-outline-secondary wd-select-button">Save</button> */}
                </div>                             
            </div>
                    
        </form>




      {/* <input value={assignment.title}
             className="form-control mb-2" />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button> */}
    </div>
  );
}


export default AssignmentEditor;