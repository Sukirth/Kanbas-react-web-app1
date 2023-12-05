import Signin from "../usersNew/users";
import Account from "../usersNew/users/account";
import {Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import UserTable from "../usersNew/users/table";
import Signup from "../usersNew/users/signup";
function Project() {
  return (
  
        <Routes>
          <Route path="/" element={<Navigate to="/project/signin" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/account" element={<Account/>}/>
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/account/signup"  element={<Signup/>}/>  
        </Routes>

    );
       
}
export default Project;
