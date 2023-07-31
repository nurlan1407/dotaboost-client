import React from 'react'
import { AppRouter } from './providers/router'
import Navbar from 'widgets/navbar/ui/navbar'
import './styles/app.scss'

const App = () =>{
    return(
        <div className='app'>
            <Navbar/>
            <div>
                <AppRouter></AppRouter>
            </div>
        </div>
    )
}

export default App