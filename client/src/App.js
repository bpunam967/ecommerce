import React from "react";
import { Router,Routes, Route} from "react-router-dom";
import Register from "./containers/Users/register";
import Login from "./containers/Users/login";

const App = ()=> {
  return (
    <>
    <Router>
     <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>

      </Routes>
      </Router>
    </>
  )
}



export default App;
