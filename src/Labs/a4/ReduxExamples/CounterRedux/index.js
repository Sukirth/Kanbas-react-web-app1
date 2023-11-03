import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterReducer";

function CounterRedux () {
    const {count} = useSelector ((state) => state.CounterReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter Redux:</h2>
            <h4>Count value: {count}</h4>
            <button className="btn btn-success" onClick={() => dispatch(increment())}>
                increment
            </button>
            <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
                decrement
            </button>
        </div>
    );

}
export default CounterRedux;