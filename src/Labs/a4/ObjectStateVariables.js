import React, {useState} from 'react';
function ObjectStateVariables () {

    const [person, setPerson] = useState({name:"John", age:"24"});

    return(
        <div>
            <h1>Object State Varibales</h1>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <label>
                Name: <input type="text" value={person.name} onChange={(e) => setPerson({...person, name: e.target.value})}/>
            </label>
            <label>
            Age: <input type="text" value={person.age} onChange={(e) => setPerson({...person, age:parseInt(e.target.value)})}/>
            </label>
        </div>
    );

}
export default ObjectStateVariables;