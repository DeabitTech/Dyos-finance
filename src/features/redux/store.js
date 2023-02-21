import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [thunk,];

let devToolsExtension = t => t;

//if (process.env.NODE_ENV === 'development') {
  //  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    //  devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__();
    //}
//}

const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middlewares), devToolsExtension)
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./rootReducer', () => {
          const nextRootReducer = require('./rootReducer').default; // eslint-disable-line
          store.replaceReducer(nextRootReducer);
        });
      }
    return store;
}


export default configureStore();