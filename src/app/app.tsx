import React, {useEffect} from 'react'
import {AppRouter} from './providers/router'
import Navbar from 'widgets/navbar/ui/navbar'
import {useDispatch, useSelector} from 'react-redux'
import './styles/app.scss'
import {RootState} from './providers/store'
import {AuthModal} from 'features/authentification/AuthModal'
import {useAppSelector} from "app/providers/store/store";
import {showAuthModal} from "app/providers/store/reducers/htmlStates";
import mainBg from 'bg_mainPage.jpg'
import {Footer} from "widgets/footer";
import {BackDrop, SideDrawer} from "features/payment/ui/drawer";
import {toggleDrawer}  from "app/providers/store/reducers/htmlStates";

const App = () => {
    // const [showModal, setShowModal] = React.useState(false);
    const dispatch = useDispatch()
    const showModal = useAppSelector(state => state.htmlStatesReducer.showModal)
    const showDrawer = useAppSelector(state=>state.htmlStatesReducer.showDrawer)
    const onClose = () => {
        document.body.style.overflow = "unset"
        dispatch(showAuthModal(false))
    }
    const onOpen = () => {
        document.body.style.overflow = "hidden"
        dispatch(showAuthModal(true))
    }

    const closeDrawer = () =>{
        dispatch(toggleDrawer(false))
    }
    const toggleDrawerState = () =>{
        if(showDrawer === true) dispatch(toggleDrawer(false))
        else dispatch(toggleDrawer(true))
    }

    document.body.style.background = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${mainBg})`
    document.body.style.backgroundSize = "cover"
    return (
        <div style={{overflowX:"hidden"}} className={"app"}>
            <SideDrawer showDrawer={showDrawer}  closeDrawer={closeDrawer}/>
            {showDrawer && <BackDrop closeDrawer={closeDrawer}/>}
            <div>
                <div className={`overlay ${showModal ? 'openIt' : 'closeIt'}`}>
                    {showModal && <AuthModal onClose={onClose}></AuthModal>}
                </div>
                <div className='app'>
                    <Navbar onOpen={onOpen}/>
                    <div>
                        <AppRouter></AppRouter>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default App