import { Link } from "react-router-dom";
import db from "../Databases";
import "./index.css";
import {FaBookOpen} from "react-icons/fa6";

function Dashboard() {
  const courses = db.courses;
  return (
    <div style={{ paddingLeft : "10px" }}>
        
        <div className="wd-heading-1"> Dashboard</div>
        <hr/> 
        <div style={{ paddingLeft : "20px" }}>
            <div className="wd-heading-2">Published Courses (24)</div>
            <hr/>
            
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