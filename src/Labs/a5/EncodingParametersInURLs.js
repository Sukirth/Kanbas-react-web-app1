import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs () {
    // const API_BASE = process.env.REACT_APP_API_BASE;
    // const URL = `${API_BASE}/a5`;
    // const URL = "http://localhost:4000/a5/";
    const URL ="https://kanbas-node-server-app-5eyi.onrender.com/a5";
    const [a,seta] = useState(30);
    const [b, setb] = useState(20);
    const [result, setResult] = useState(0);
    const [welcome, setWelcome] = useState("");
    const fetchWelcome = async () => {
        const response = await axios.get(`${URL}/welcome`);
        setWelcome(response.data);
    };
    const fetchSum = async (a, b) => {
    const response = await
        axios.get(`${URL}/add/${a}/${b}`);
    setResult(response.data);
    };
    const fetchSubtraction = async (a, b) => {
    const response = await axios.get(
        `${URL}/subtract/${a}/${b}`);
    setResult(response.data);
    };
    


  useEffect(() => {
    fetchWelcome();
  }, []);

    return(
        <div>
            <h3>Encoding Parameters In URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6 className = "text-success bg-warning">{welcome}</h6>


            <h3>Query Parameters</h3>
            <a
            // href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
            // href={`https://kanbas-node-server-app-5eyi.onrender.com/a5/calculator?operation=add&a=${a}&b=${b}`}
            href = {`${URL}/calculator?operation=add&a=${a}&b=${b}`}
            className="btn btn-primary">
            Add {a} + {b}
            </a>
            <a
            // href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
            // href={`https://kanbas-node-server-app-5eyi.onrender.com/a5/calculator?operation=subtract&a=${a}&b=${b}`}
            href = {`${URL}/calculator?operation=subtract&a=${a}&b=${b}`}
            className="btn btn-danger">
            Substract {a} - {b}
            </a>

            <h4>Calculator</h4>

            <input className="form-group-item" type="number" value={a} onChange={(e) => seta(e.target.value)}/>
            <input className="form-group-item" type="number"  value={b} onChange={(e) => setb(e.target.value)}/>
            <label>Result: <input value={result} className="form-control mb-2" type="number" readOnly /></label>
            <h3>Fetch Result</h3>
            <button onClick={() => fetchSum(a, b)}
                className="btn btn-primary mb-2  w-100" >
                Fetch Sum of {a} + {b}
            </button>
            <button onClick={() => fetchSubtraction(a, b)}
                className="btn btn-danger me-2 w-100" >
                Fetch Substraction of {a} - {b}
            </button>
            {/* <a href={`http://localhost:4000/a5/add/${a}/${b}`} className="btn btn-primary">Add {a} + {b}</a>
            <a href={`http://localhost:4000/a5/subtract/${a}/${b}`} className="btn btn-primary">Subtract {a} - {b}</a> */}
        
        </div>
    );

}
export default EncodingParametersInURLs;