import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/** Redux */
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/reducers/'
import { Provider } from 'react-redux'

/** Redux-Thunk */
import thunk from 'redux-thunk'

/** Firebase */
import fbConfig from './config/fbConfig'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'


const store = createStore(
    rootReducer,
    {},
    compose(  
        applyMiddleware(
            thunk.withExtraArgument({getFirestore, getFirebase})
        ),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
        
    )
)

ReactDOM.render(
    <Provider store={ store } >
        <App />
    </Provider>
    , document.getElementById('root'));