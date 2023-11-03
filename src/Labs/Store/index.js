import { configureStore } from "@reduxjs/toolkit";
import HelloReducer from "../a4/ReduxExamples/HelloRedux/HelloReducer";
import CounterReducer from "../a4/ReduxExamples/CounterRedux/CounterReducer";
import AddReducer from "../a4/ReduxExamples/AddRedux/AddReducer";
import TodosReducer from "../a4/ReduxExamples/Todos/TodosReducer";

const store = configureStore ({
    reducer: {
        HelloReducer,
        CounterReducer,
        AddReducer,
        TodosReducer,
    }
});
export default store;