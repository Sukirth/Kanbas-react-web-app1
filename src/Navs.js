import { Link, useLocation } from "react-router-dom";
function Navs () {
    const { pathname } = useLocation();   
    return (
        <div className = "container">           
            <div className='nav nav-pills'>          
                <Link to="/hello" className={`nav-link ${pathname.includes("hello")? "active" : ""}`}>Hello</Link> 
                <Link to="/Labs/*" className={`nav-link ${pathname.includes("Labs")? "active" : ""}`}>Labs</Link> 
                <Link to="/Kanbas" className={`nav-link ${pathname.includes("Kanbas")? "active" : ""}`}>Kanbas</Link>
            </div>
        </div>
    );
}
export default Navs