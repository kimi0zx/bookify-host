import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loggedReducer from "./reducers/isLogged";
import menuReducer from "./reducers/isMenu";
import userState from "./reducers/userState";
import bookid from "./reducers/bookid";
import isAddrev from "./reducers/isAddrev";
import addIamge from "./reducers/addIamge";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
	isLogged: loggedReducer,
	isMenu: menuReducer,
	userState: userState,
	bookid: bookid,
	isAddrev: isAddrev,
	addImage: addIamge,
});

const store = createStore(
	reducers,
	initialState,
	applyMiddleware(...middleware)
);

export default store;
