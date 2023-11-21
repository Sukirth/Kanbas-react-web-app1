// import db from "../../kanbas/Databases";
import { useParams, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {FaBars} from "react-icons/fa6";
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "../Grades";


function Courses({ courses }) {
  const [course, setCourse] = useState({});
  // const URL = "http://localhost:4000/api/courses";
  const URL = "https://kanbas-node-server-app-5eyi.onrender.com/api/courses";
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const lastItem = pathname.substring(pathname.lastIndexOf('/') + 1);
  // const course = courses.find((course) => course._id === courseId);

  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (
    <div className="container-fluid">
        <nav className="wd-breadcrumb-custom" >
            <ol className="breadcrumb">
                <li><button className=""><FaBars/></button></li>
                <li className="breadcrumb-item">{course.name}</li>
                <li className="breadcrumb-item active" aria-current="page">{lastItem}</li>
            </ol>                        
        </nav>
        <hr/> 
        <CourseNavigation />
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            // className="position-fixed bottom-0 end-0"
            style={{
              left: "250px",
              top: "100px",
            }} >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules/*" element={<Modules/>} />
              <Route path="Assignments/*" element={<Assignments/>} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}
              />
              <Route path="Grades" element={<Grades/>} />
            </Routes>
          </div>
        </div>               
    </div>
  );
}
export default Courses;