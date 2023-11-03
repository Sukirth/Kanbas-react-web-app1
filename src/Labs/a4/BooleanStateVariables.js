import React, {useState} from 'react';
function BooleanStateVariables () {
    const [done, setDone] = useState(true);

    return (
        <div>
            <label className='form-control'>
                <input type='checkbox' checked={done} onChange = {()=> setDone(!done)}/>
            </label> Done
            {done && <div className='alert alert-success'>Yay!! you are done</div>}
        </div>
    );

}
export default BooleanStateVariables;