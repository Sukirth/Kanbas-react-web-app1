import "../../vendors/bootstrap-5.1.3-dist/css/bootstrap.css";
import Add from "./Add";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvents from "./ClickEvents";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariables from "./ObjectStateVariables";
import ParentStateComponent from "./ParentSTateComponent";
import PassingDataOnevent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

function Lab4 () {
    const SayHello = () => {
        alert ("Saying Hello");
    };

    return (
        <div>
            <h1>Lab 4</h1>
            <Add a={2} b={3}/>
            <ClickEvents/>
            <PassingDataOnevent/>
            <PassingFunctions theFunction = {SayHello}/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariables/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            <ReduxExamples/>            
        </div>
    );
}
export default Lab4;