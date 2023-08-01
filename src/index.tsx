import App from "app/app";
import React from "react";
import './app/styles/index.scss'
import ReactDom from 'react-dom'
import { BrowserRouter } from "react-router-dom";
//font
import './public/fonts/Raleway-ExtraBoldItalic.ttf'
import './public/fonts/Raleway-Regular.ttf'
//redux store
import {store} from 'app/providers/store'
import {Provider} from 'react-redux'

const root = document.getElementById('root')
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,
    root
)