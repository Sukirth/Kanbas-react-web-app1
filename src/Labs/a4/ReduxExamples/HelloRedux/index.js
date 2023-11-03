import { useSelector, useDispatch } from "react-redux";

function HelloRedux () {

    const {message}  = useSelector((state) => state.HelloReducer);
    return (
        <div>
            <h1>Hello Redux component</h1>
            <h4>Loading Message:  {message} </h4>
        </div>
    );

}
export default HelloRedux;