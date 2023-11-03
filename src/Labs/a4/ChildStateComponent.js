function ChildStateComponent ({counter, setCounter}) {
    return (
        <div>
            <h3>Counter Manipulation in child component</h3>
            <button className="btn btn-primary me-2" onClick={() => setCounter(counter+1)}>Increment</button>
            <button className="btn btn-secondary ms-2" onClick={() => setCounter(counter-1
                )}>Decrement</button>
        </div>
    );



}
export default ChildStateComponent;