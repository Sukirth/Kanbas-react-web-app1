import { Link, Route, Routes, useLocation } from "react-router-dom";
import store from "./Store";
import { Provider } from "react-redux";
import Lab4 from "./a4/Lab4";
import Lab5 from "./a5/Lab5";
import Lab3 from "./a3";
import Kanbas from "../kanbas/index";

function LabNav () {
    const { pathname } = useLocation();
    return (
      <Provider store={store}>
        <div className="container">
          <div className="nav nav-pills">          
            <Link to="/Labs/Lab3" className={`nav-link ${pathname.includes("Lab3")? "active" : ""}`}>Lab 3</Link>
            <Link to="/Labs/Lab4" className={`nav-link ${pathname.includes("Lab4")? "active" : ""}`}>Lab 4</Link>
            <Link to="/Labs/Lab5" className={`nav-link ${pathname.includes("Lab5")? "active" : ""}`}>Lab 5</Link>   
            <Link to="/Kanbas" className={`nav-link ${pathname.includes("Kanbas")? "active" : ""}`}>Kanbas</Link>       
          </div>
          <Routes>
            {/* <Route path="/" element={ <Navigate to="a3" /> }/> */}
            <Route path="/Lab3/*" element={<Lab3/>}/>
            <Route path="/Lab4/*" element={<Lab4/>}/>
            <Route path="/Lab5/*" element={<Lab5/>}/>
            <Route path="/Kanbas/" element={<Kanbas/>}/>
          </Routes>        
        </div>
      </Provider>
      
    );

}
export default LabNav