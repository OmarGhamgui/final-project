// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// import combineReducers from '../reducers';

// const middleware = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const initialState = {};

// const store = createStore(
//   combineReducers,
//   initialState,
//   composeEnhancers(applyMiddleware(...middleware))
// );
// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept("../reducers", () => {
//     const nextRootReducer = require("../reducers/index");
//     store.replaceReducer(nextRootReducer);
//   });
// } 
// export default store;
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger-simple";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import combineReducer from "../reducers"
const persistConfig = {
  key: "User",
  timeout: null,
  storage,
  whitelist: ["userReducer"],
  blacklist: []
};
const middleware = [thunkMiddleware];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware, logger)
  // other store enhancers if any
);



const persistedReducers = persistReducer(persistConfig, combineReducer);

const store = createStore(persistedReducers, enhancer);
export default store;
export const persistor = persistStore(store);