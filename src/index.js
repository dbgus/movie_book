import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root'

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'

import { BrowserRouter } from "react-router-dom";

import reducer from './store'

const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Root />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));