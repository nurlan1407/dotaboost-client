import React from 'react'
import { AppRouter } from './providers/router'
import './styles/index.scss'

const App = () =>{
    return(
        <div className='app'>
            <div className='page-wrapper'>
                <AppRouter></AppRouter>
            </div>
        </div>
    )
}

export default App