import stepReducer from "./stepReducer";
import foodReducer from "./foodReducer";
import foodSelectReducer from "./foodSelectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    stepReducer,
    foodReducer,
    foodSelectReducer,
});
export default rootReducer;