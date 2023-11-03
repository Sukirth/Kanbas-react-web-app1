import React, {useState} from "react";
import ChildStateComponent from "./ChildStateComponent";

function ParentStateComponent () {

    const [counter, setCounter] = useState(10);
    
    return(
        <div>
            <h3>Parent Component Counter: {counter}</h3>
            <ChildStateComponent counter={counter} setCounter={setCounter}/>
        </div>
    );
    

}
export default ParentStateComponent;