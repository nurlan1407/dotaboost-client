import React, {useEffect} from 'react'
import {AppRouter} from './providers/router'
import Navbar from 'widgets/navbar/ui/navbar'
import {useSelector} from 'react-redux'
import './styles/app.scss'
import {RootState} from './providers/store'
import {AuthModal} from 'features/authentification/AuthModal'
import {useAppSelector} from "app/providers/store/store";
import {showAuthModal} from "app/providers/store/reducers/htmlStates";

const App = () => {
    // const [showModal, setShowModal] = React.useState(false);
    const showModal = useAppSelector(state => state.htmlStatesReducer.showModal)
    console.log(showModal)
    const ModalRef = React.useRef(null);
    const onClose = () => {
        document.body.style.overflow = "unset"
        showAuthModal(false)
    }
    const onOpen = () => {
        document.body.style.overflow = "hidden"
        showAuthModal(true)
    }

    return (
        <>
            <div className={`overlay ${showModal?'openIt':'closeIt'}`}>
                {showModal &&<AuthModal onClose={onClose}></AuthModal>}
            </div>
            <div className='app'>
                <Navbar onOpen={onOpen}/>
                <div>
                    <AppRouter></AppRouter>
                </div>
            </div>
        </>
    )
}

export default App