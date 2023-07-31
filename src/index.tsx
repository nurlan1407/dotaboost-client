import App from "app/app";
import React from "react";
import ReactDom from 'react-dom'
import { BrowserRouter } from "react-router-dom";

//style
import './app/styles/index.scss'
//font
import './public/fonts/Raleway-ExtraBoldItalic.ttf'
import './public/fonts/Raleway-Regular.ttf'

const root = document.getElementById('root')
ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    root
)