import React, { useState } from "react";
function StringStateVariables(){

    const [FirstName, setFirstName] = useState("John");

    return (
        <div>
            <h1>String State Variables:</h1>
            <h3>{FirstName}</h3>
            <label> FirstName:
                <input type="text" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
        </div>
    );


}
export default StringStateVariables;