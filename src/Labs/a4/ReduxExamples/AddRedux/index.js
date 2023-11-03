import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./AddReducer";
function AddRedux () {

    const [a, setA] = useState(2);
    const [b, setB] = useState(3);
    const {sum} = useSelector ((state) => state.AddReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h1> Add Reducer </h1>
            <h4>{a} + {b} = {sum} </h4>

            <input type = "number" value = {a} onChange={(e) => setA(parseInt(e.target.value))}/>
            <input type = "number" value={b} onChange={(e) => setB(parseInt(e.target.value))}/>

            <button className="btn btn-primary" onClick={() => dispatch(add({a,b}))}> AddRedux </button>

        </div>
    );


}
export default AddRedux;