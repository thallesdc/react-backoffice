import { useState } from 'react';

import { Navigate } from "react-router-dom"
import authenticated from '../../services/AuthServices'
import HeaderPage from './HeaderPage'
import MenuPage from './MenuPage'
import SubHeaderPage from './SubHeaderPage'

function Template(props){
    const [menuCollected, setMenuCollected] = useState(false)

    function toogleStateMenu(){
        setMenuCollected(!menuCollected)
    }

    if(!authenticated()){
        return <Navigate replace to="/login" />
    } else {
        return(
            <>
                <HeaderPage changeStateMenu={ toogleStateMenu } menuCollected={ menuCollected } />
                <MenuPage selected={ props.operation } menuCollected={ menuCollected } />
            </>
        )
    }
}

export default Object.assign(Template, { HeaderPage, MenuPage, SubHeaderPage });