import BooleanVariables from "./BooleanVariables";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import Spread from "./Spread";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants ";
import VariableTypes from "./VariableTypes.js";
import WorkingWithArrays from "./WorkingWithArrays/WorkingWithArrays";
import WorkingWithFunctions from "./WorkingWithFunctions/WorkingWithFunctions";

function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         {/* <h1>JavaScript</h1> */}
         <FunctionDestructing/>

         <Destructing/>

         <Spread/>

         <House/>

         <TemplateLiterals/>

         <WorkingWithArrays/>

         <WorkingWithFunctions/>
         

         <IfElse/>
         <TernaryOperator/>
         
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
      </div>
   );
}
export default JavaScript