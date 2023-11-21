import { Link } from "react-router-dom";
import db from "../Databases";
import "./index.css";
import {FaBookOpen} from "react-icons/fa6";
import { React, useState } from "react";


function Dashboard({
    courses, course, setCourse, addNewCourse, deleteCourse, updateCourse,
}) {


//   const courses = db.courses;

//   const [courses, setCourses] = useState(db.courses);
//   const [course, setCourse] = useState({
//     name: "New Course",      number: "New Number",
//     startDate: "2023-09-10", endDate: "2023-12-15",
//   });
//   const addNewCourse = () => {
//     setCourses([...courses,
//               { ...course,
//                 _id: new Date().getTime() }]);
//   };
//   const deleteCourse = (courseId) => {
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };

//   const updateCourse = () => {
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };



  return (
    <div style={{ paddingLeft : "10px" }}>
        
        <div className="wd-heading-1"> Dashboard</div>
        <hr/> 
        <div style={{ paddingLeft : "20px" }}>
            <div className="wd-heading-2">Published Courses (24)</div>
            <hr/>
            <h5>New Course</h5>
            <input value={course.name} className="form-control" onChange={(e) => setCourse({...course, name: e.target.value})} />
            <input value={course.number} className="form-control" onChange={(e) => setCourse({...course, number: e.target.value})}/>
            <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
            <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({...course, endDate: e.target.value})} />
            
            <button className="btn btn-secondary ms-2" onClick={addNewCourse}>Add</button>
            <button className="btn btn-primary ms-2" onClick={() => {updateCourse(course);}} > Update </button>

            
            <div className="wd-card-padding d-flex flex-wrap">
    
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">           
                        
                            <div className="card" style={{width : "18rem", margin: "10px"}}>
                                <img src="/images/bluecard.jpg"
                                        className="card-img-top wd-cards-logo" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title wd-card-title">{course.name}</h5>
                                    <h4 className="wd-card-text1 wd-card-colorgrey">{course.number}</h4>
                                    <p className="card-text wd-card-text2 wd-card-colorgrey">
                                        Start Date: {course.startDate}&nbsp;
                                        End Date: {course.endDate}</p>
                                    <div className ="wd-card-colorgrey"><FaBookOpen/></div>
                                    
                                </div>
                            </div>
                            <button className="btn btn-secondary ms-2" onClick={(event) => {
                                                                event.preventDefault();
                                                                setCourse(course);
                                                                
                                                            }}>
                            Edit
                            </button>

                            <button  className="btn btn-danger ms-2" onClick={(event) => {
                                                            event.preventDefault();
                                                            // deleteCourse(course._id);
                                                            deleteCourse(course);
                                                        }}>
                            Delete
                            </button>

                        
                    </Link>
                ))}
            </div>            
        </div>        
    </div>
  );
}
export default Dashboard;

// {courses.map((course) => (
//     <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
//       {course.name}
//     </Link>
//   ))}