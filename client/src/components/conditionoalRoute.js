import React from "react";
import Register from "../containers/Auth/register";
import Login from "../containers/Auth/login";
import UserDashboard from "../containers/Users/dashboard"
import AdminDashboard from "../containers/Admin/dashboard"
import {useSelector} from 'react-redux';
import { Routes, Route} from "react-router-dom";

const ConditionalRouting = ()=>{
    const {userRole} = useSelector(state=>state.user)
    if(userRole==='user'){
        return <UserScreen/>
      }else if(userRole === 'admin'){
        return (<AdminScreen/>)
      }else{
        return <AuthScreens/>
      }
}

const AuthScreens=()=>{
    return(
      <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
      </Routes>
    )
  }
 
  const UserScreen=()=>{
    return(
      <Routes>
        <Route exact path='/' element={<UserDashboard/>}/>
      </Routes>

    )
  }
  const AdminScreen=()=>{
    return(
      <Routes>
        <Route exact path='/' element={<AdminDashboard/>}/>
      </Routes>
    )
  }

export default ConditionalRouting

