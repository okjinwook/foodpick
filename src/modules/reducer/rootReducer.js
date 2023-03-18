import stepReducer from "./stepReducer";
import foodReducer from "./foodReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    stepReducer,
    foodReducer
});
export default rootReducer;