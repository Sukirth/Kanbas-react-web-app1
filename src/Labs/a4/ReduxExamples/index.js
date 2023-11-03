import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./Todos/TodoList";


const ReduxExamples = () => {

    return (
        <div>
            <h1>Assignment 4 - Redux Examples</h1>
            <HelloRedux/>
            <CounterRedux/>
            <AddRedux/>
            <TodoList/>
        </div>
    );

};
export default ReduxExamples;