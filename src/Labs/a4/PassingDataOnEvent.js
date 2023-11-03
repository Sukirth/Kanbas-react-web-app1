function PassingDataOnevent () {
    const sub = (a,b) => {
        alert(`${a} - ${b} = ${a-b}`);
    }

    return (
        <div>
            <h1>Passing Data On Event</h1>
            <button className="btn btn-primary" onClick={()=>sub(5,3)}> Pass data on event</button>
        </div>
    );

}
export default PassingDataOnevent;