import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./Cart/reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cartReducer"],
};

const rootReducer = combineReducers({
  cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
