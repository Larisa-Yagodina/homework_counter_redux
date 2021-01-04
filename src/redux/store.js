import {applyMiddleware, createStore} from "redux";
import counter from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(
    counter, composeWithDevTools(applyMiddleware())
)

export default store