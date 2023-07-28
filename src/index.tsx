import App from "app/app";
import React from "react";
import ReactDom from 'react-dom'
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById('root')
ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    root
)