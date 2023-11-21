function Assignment5() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/a5`;
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="btn btn-primary">
          <a className ="text-white" 
          href = "https://kanbas-node-server-app-5eyi.onrender.com/a5/welcome"
          // href="http://localhost:4000/a5/welcome"
          // href = {`${URL}/welcome`}       

          >
            Welcome
          </a>
        </div>
        {/* <SimpleAPIExamples /> */}
      </div>
    );
  }
  export default Assignment5;