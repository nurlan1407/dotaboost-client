import React from 'react'
import { AppRouter } from './providers/router'
import Navbar from 'widgets/navbar/ui/navbar'

const App = () =>{
    return(
        <div className='app'>
            <Navbar/>
            <div className='page-wrapper'>
                <AppRouter></AppRouter>
            </div>
        </div>
    )
}

export default App