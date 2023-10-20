import ModuleList from "../Modules/Modulelist";
import Status from "./Status";
function Home() {
    return (
      <div  className="container-fluid d-flex">
        {/* <h2>Home</h2> */}
        <ModuleList/>
        <Status/>
      </div>
    );
  }
  export default Home;