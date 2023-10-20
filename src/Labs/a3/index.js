import TodoList from "../todo/TodoList";
import ConditionalOutput from "./ConditionalOutput";
import DynamicStyling from "./DynamicStyling";
import JavaScript from "./Javascript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";

function Lab3() {
    
    return (
      <div className="container">
        <h3>Lab 3</h3>
        <TodoList/>
        <ConditionalOutput/>

        <Styles/>

        <DynamicStyling/>

        <PathParameters/>

        <h3>Javascript</h3>
        <JavaScript/>
      </div>
    );
}
export default Lab3;