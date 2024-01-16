import { useState } from 'react';
import { Navigate, Link } from "react-router-dom"
import './HeaderPage.css'
import imageLogo from '../../assets/img/template/logo.png'

import { TiThMenu } from "react-icons/ti";


export default function HeaderPage(props){
    const [search, setSearch] = useState('')

    function handleSearch(){

    }

    return(
        <header>
            <div className={`header-container-logo ${props.menuCollected ? 'header-container-logo-collected' : ''}`}>
                <Link to="/dashboard"><img src={ imageLogo } /></Link>
            </div>

            <div className="header-container-search">
                <Link className="header-button-menu" to="#" onClick={ props.changeStateMenu }>
                    <TiThMenu className="menu-item-icon" />
                </Link>

                <input className="header-input-search" type="search" placeholder="Pesquisa geral..." onChange={ (e) => setSearch(e.target.value) } value={ search } />
            </div>
        </header>
    )
}