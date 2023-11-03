import React, {useState} from 'react';

function DateStateVariable () {

    const [stateDate, setStateDate] = useState(new Date());
    const dateObjectToHtmlDateString = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
                date.getMonth() + 1}-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;


    };

    return (
        <div>
            <h1>Date State Variables</h1>
            <h3>{JSON.stringify(stateDate)}</h3>
            <h3>{dateObjectToHtmlDateString(stateDate)}</h3>
            <label className="from-control"> Date: 
                <input type="date" 
               value={dateObjectToHtmlDateString(stateDate)} onChange={(e) => setStateDate(new Date(e.target.value))}/>
            </label>
        </div>
    );

}
export default DateStateVariable;