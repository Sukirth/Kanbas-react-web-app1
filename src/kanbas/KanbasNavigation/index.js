import { Link, useLocation } from "react-router-dom";
import './index.css';
import {FaTachometerAlt, FaBook, FaCalendarAlt, FaEnvelopeOpenText } from "react-icons/fa"; 
import {FaCircleUser, FaRegClock, FaComputer, FaRegCircleQuestion, FaRightFromBracket } from "react-icons/fa6"; 


function KanbasNavigation() {
  const links = [
    {title : "Account", icon: < FaCircleUser className="wd-account-icon"/>}, 
    {title : "Dashboard", icon: <FaTachometerAlt/>},
    {title : "Courses", icon: <FaBook/>}, 
    {title : "Calendar", icon: <FaCalendarAlt/>}, 
    {title : "Inbox", icon: <FaEnvelopeOpenText/>}, 
    {title : "History", icon: <FaRegClock/>}, 
    {title : "Studio", icon: <FaComputer/>}, 
    {title : "Commons", icon: <FaRightFromBracket/>}, 
    {title : "Help", icon: <FaRegCircleQuestion/>}, 
    
    // "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help" 
];
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation wd-kanbas-nav-list" >
        <img className="wd-logo" src="/images/logo.jpeg"></img>
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link.title}`}
                className={`wd-kanbas-nav-list list-group-item ${pathname.includes(link.title) && "active"} `}>               
                {link.icon}
                {link.title}                
            </Link>
        ))}
    </div>
  );
}
export default KanbasNavigation;