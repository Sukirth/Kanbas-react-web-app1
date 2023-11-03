import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Databases";
// import { useState } from "react";

import "./index.css";
import { FaCaretDown, FaEllipsisVertical, FaGripVertical, FaPlus} from "react-icons/fa6";
import {BsFillCheckCircleFill, BsCheckCircle} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./ModulesReducer";
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
//   const [modules, setModules] = useState(db.modules);
//   const [module, setModule] = useState({
//     name: "New Module",
//     description: "New Description",
//     course: courseId,
//   });
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

//   const addModule = (module) => {
//     setModules([
//       { ...module, _id: new Date().getTime().toString() },
//         ...modules,
//     ]);
//   };
//   const deleteModule = (moduleId) => {
//     setModules(modules.filter(
//       (module) => module._id !== moduleId));
//   };
//   const updateModule = () => {
//     setModules(
//       modules.map((m) => {
//         if (m._id === module._id) {
//           return module;
//         } else {
//           return m;
//         }
//       })
//     );
//   }




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
            
            <li className="list-group-item list-group-item list-group-item-heading align-items-center justify-content-between me-4">
                
                <input className="form-control" value={module.name}
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
                        }
                />
                <textarea className="form-control" value={module.description}
                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                        }
                />
                <button className="btn btn-danger mt-3 me-3" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                    Add
                </button>
                <button className="btn btn-secondary mt-3" onClick={() => dispatch(updateModule(module))}> Update </button>

            </li>

            
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    // <li key={index} className="list-group-item">
                    //     <h3>{module.name}</h3>
                    //     <p>{module.description}</p>
                    // </li>

                <li key={index} className="d-flex list-group-item list-group-item-heading align-items-center justify-content-between me-4 wd-border-left">
                    <div className="d-flex">
                        <FaGripVertical className="me-3"/> 
                        <FaCaretDown className="me-3"/>                        
                    </div>
                    <div className="col-7">
                        <h4>{module.name}</h4>
                        <p>{module.description}</p>
                        <p>{module._id}</p>
                    </div>
                    <div className="d-flex">
                        <BsFillCheckCircleFill className = "wd-publish-checkCircle"/>
                        <FaCaretDown className="me-3"/>  
                        <FaPlus className="me-3"/>
                        <FaEllipsisVertical />
                        {/* <i className="fa fa-check-circle wd-icon-green" aria-hidden="true"></i>
                        <i className="fa fa-plus wd-padding-20-right" aria-hidden="true"></i>
                        <i className="fa fa-ellipsis-v wd-padding-20-right" aria-hidden="true"></i> */}
                    </div>
                    <button className="btn btn-danger"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                    </button>
                    <button className="btn btn-danger ms-2"
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                    </button>
        
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