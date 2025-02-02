import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddlewate from "redux-saga"
import { watcherSaga } from "./sagas/root"

// create the saga middleware
const sagaMiddleware = createSagaMiddlewate()

const composeEnhancers = composeWithDevTools({});
//mount saga middleware to the store 
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

// run the sagas
sagaMiddleware.run(watcherSaga)

export default store 