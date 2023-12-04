import Signin from "../users/signin";
import Account from "../users/account";
import {Route, Routes, Navigate } from "react-router-dom";
import UserTable from "../users/table";
import Signup from "../users/signup";
function Project() {
  return (

        <Routes>
          <Route path="/" element={<Navigate to="/Project/Signin" />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/account" element={<Account/>}/>
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/account/signup"  element={<Signup/>}/>  
        </Routes>
    );
       
}
export default Project;
