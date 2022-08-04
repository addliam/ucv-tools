import React, {useState} from 'react'
import logo from './sources/ejemplo_logo.png'
import menuIco from './sources/menu_icon_30x30.png'
import './styles/NavBarComponent.css'
import { Link } from "react-router-dom";
export const NavBarElement = (props) => {
    let className = 'navbar-item' ;
    if (props.ident === props.active){
        // console.log(`Are equal props.ident === props.active`);
        className += ' selected'
    }
  return (
        <li className='navbar-element'>
            <Link id={props.ident} className={className} to={props.reference}>{props.name}</Link>
            {/* <a id={props.ident} className={className} href={props.reference}>{props.name}</a> */}
        </li>
  )
}


// ELEMENT ACTIVE: salas-zoom
export const NavBarComponent = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuButtonHandler = () =>{
        setShowMenu(!showMenu);
    }
    console.log(`ELEMENT ACTIVE: ${props.active}`);
  return (
    <nav className='navbar-master-container'>

    <div id='navbar-container'>
        <div id='site-logo'>
            <Link id='site-logo-anchor' to='/'>
                <img id='logo-image' src={logo} alt='logo-ucvTools' height='35px' width='35px'></img>
                <span id='logo-title'>UCV Tools</span>
            </Link>
            {/* <a id='site-logo-anchor' href='./#'>
                <img id='logo-image' src={logo} alt='logo-ucvTools' height='35px' width='35px'></img>
                <span id='logo-title'>UCV Tools</span>
            </a> */}
            <div id='menu-button'>
                <button type='button' onClick={menuButtonHandler}>
                    <img alt='menu-icon' src={menuIco} height='24px' width='24px' ></img>
                <span id='fa-bars'></span>
                Menu
                </button>
            </div>
        </div>
        <div className='navbar-collapse'>
            {/* <ul id='list-container' style={{display: showMenu ? 'list-item':'none'}}> */}
            <ul id='list-container'>
                <NavBarElement ident='inicio' reference='/inicio' name='Inicio' active={props.active}/>
                <NavBarElement ident='salas-zoom' reference='/salas-zoom' name='Salas Zoom' active={props.active}/>
                <NavBarElement ident='mis-apuntes' reference='/apuntes' name='Mis apuntes' active={props.active}/>
                <NavBarElement ident='investigacion' reference='/investigacion' name='Investigacion' active={props.active}/>
                <NavBarElement ident='mi-perfil' reference='/mi-perfil' name='Mi perfil' active={props.active}/>
            </ul>
        </div>
    </div>
    </nav>
  )
}
