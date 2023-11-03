import React, {useState} from 'react';

function ArrayStateVariable(){

    const [Array, setArray] = useState([11,24,13,64,58]);
    const deleteElement = (index) => {
        setArray(Array.filter((data,i) =>  i!==index ));        
    };
    const addElement = () => {
        setArray([...Array, Math.floor(Math.random()*100)]);
    };


    return(
        <div>
            <h1>Array State Variables:</h1>
            <pre>{JSON.stringify(Array)}</pre>
            <ul> 
                <button className='btn btn-success' onClick={addElement}>Add Element</button>
                {Array.map((data, index) => (
                    <li className='form-control' key={index}>
                        {data}
                        <button className='btn btn-danger ms-3' onClick={() => deleteElement(index)}>Delete</button>
                    </li>
                )) }        
                
            </ul>
        </div>
    );


}
export default ArrayStateVariable;