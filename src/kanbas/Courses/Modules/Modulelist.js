import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Databases";
import "./index.css";
import { FaCaretDown, FaEllipsisVertical, FaGripVertical, FaPlus} from "react-icons/fa6";
import {BsFillCheckCircleFill, BsCheckCircle} from "react-icons/bs";
// import {BsThreeDotsVertical} from "react-icons/bs";

// function ModuleList (){
//     return (
//         <div>
//             <div>
//             moduleList
//             </div>
            
//         </div>
//     );
// }

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="flex-grow-1" style={{paddingTop:"10px"}}>
        <nav style={{ padding:"10px"}}>
            <form className="form-group">
                <div className="justify-content-center">
                    <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit">Collapse All</button>
                    <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit">View Progress</button>
                    <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit">
                        <BsCheckCircle  className = "wd-publish-checkCircle"/> Publish All <FaCaretDown/>
                    </button>
                    <button className="btn wd-select-button ms-1 me-1" type="submit">+ Module</button>
                    <button className="btn btn-light btn-outline-secondary ms-1 me-1" type="submit"><FaEllipsisVertical/></button>  
                </div>
            </form> 
            <hr style ={{ marginTop: "10px"}}/>      
        </nav>
        {/* <hr/> */}
        <ul className="list-group" style={{paddingTop:"10px"}}>
        {
            modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    // <li key={index} className="list-group-item">
                    //     <h3>{module.name}</h3>
                    //     <p>{module.description}</p>
                    // </li>

                <li key={index} className="d-flex list-group-item list-group-item-heading justify-content-between align-items-center mb-5 me-4 wd-modules">
                    <div>
                        <FaGripVertical className="me-3"/> 
                        <FaCaretDown className="me-3"/>                        
                        <>{module.name}</>
                    </div>
                    <div>
                        <BsFillCheckCircleFill className = "wd-publish-checkCircle"/>
                        <FaCaretDown className="me-3"/>  
                        <FaPlus className="me-3"/>
                        <FaEllipsisVertical />
                        {/* <i className="fa fa-check-circle wd-icon-green" aria-hidden="true"></i>
                        <i className="fa fa-plus wd-padding-20-right" aria-hidden="true"></i>
                        <i className="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i> */}
                    </div>        
                </li>
            ))
        }
        </ul>    


            
        {/* <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
        </li> */}
    </div>    
  );
}
export default ModuleList;