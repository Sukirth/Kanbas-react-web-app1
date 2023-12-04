// import logo from './logo.svg';
// import './App.css';
// import Labs from './Labs/index';
import HelloWorld from './Labs/a3/HelloWorld';
// import Kanbas from './kanbas';
import { HashRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navs from './Navs';
import LabNav from './Labs/LabsNav';
import Kanbas from './kanbas';
import Project from './kanbas/Project';


function App() {
  
  return (
    <HashRouter>
      <div>
        {/* <Routes>
          <Route path="/Kanbas/*" element={<Kanbas/>} />
        </Routes> */}
        
        {/* <Kanbas/> */}
        {/* <h1>React Labs</h1> */}
        {/* <Navs/> */}
        <Routes>        
          <Route path="/" element={<Navigate to="/Labs"/>} />
          <Route path="/hello" element={<HelloWorld/>}/>
          <Route path="/Labs/*" element={<LabNav/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          {/* <Route path="/Signin" element={<Signin />} /> */}
          <Route path="/Project/*" element={<Project/>} />
        </Routes>  

      </div>
    </HashRouter>
    
    // <div>     
    //   <HelloWorld/> 
    //   <Labs/>      
      
    //   <h1>Placeholder for kanbas</h1>
    //   <Kanbas/>
    // </div>

  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
