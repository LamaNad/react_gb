import './mainStyles.scss';

import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import { getAuth } from 'firebase/auth';

export const MainLayout = ({ children }) =>{
    const { changeTheme } = useContext(ThemeContext);
    const { theme } = useContext(ThemeContext);
    const isAuth = getAuth().currentUser;

    const lightMode= () => document.body.classList.add('light-mode');
    const darkMode= () => document.body.classList.remove('light-mode');

    useEffect(() => {
        (theme === "dark") ? lightMode() : darkMode();
    },[theme]);

    return(
    <>
    <div className="dark-light" onClick={ changeTheme }>
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
    </div>
    <div className="app">
        <div className="header">
            <div className="menu-circle"></div>
                { isAuth
                    ?
                    <div className="header-menu">
                        <NavLink className={({ isActive }) => 'logo-link' + (isActive ? ' is-active' : '')} to="/">Chat App</NavLink>
                        <NavLink className={({ isActive }) => 'top-link' + (isActive ? ' is-active' : '')} to="/chat">Chat</NavLink>
                        <NavLink className={({ isActive }) => 'top-link' + (isActive ? ' is-active' : '')} to="/profile">Profile</NavLink>
                        <NavLink className={({ isActive }) => 'top-link' + (isActive ? ' is-active' : '')} to="/nationalize">Nationalize</NavLink>
                    </div>
                    :
                    <div className="header-menu">
                        <NavLink className={({ isActive }) => 'logo-link' + (isActive ? ' is-active' : '')} to="/">Chat App</NavLink>
                        <NavLink className={({ isActive }) => 'top-link' + (isActive ? ' is-active' : '')} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => 'top-link' + (isActive ? ' is-active' : '')} to="/nationalize">Nationalize</NavLink>
                    </div>
                }
            <div className="search-bar mt-2">
                <TextField id="outlined-basic" variant="outlined" placeholder="Search" />
            </div>
        </div>
        { children }
            <div className="main-header">
              <div className="header-menu">
                { isAuth && <>
                    <NavLink className={({ isActive }) => 'menu-link' + (isActive ? ' is-active' : '')} to="/chat">Chat</NavLink>
                    <NavLink className={({ isActive }) => 'menu-link' + (isActive ? ' is-active' : '')} to="/profile">Profile</NavLink>
                </> }
                    <NavLink className={({ isActive }) => 'menu-link' + (isActive ? ' is-active' : '')} to="/nationalize">Nationalize</NavLink>
              </div>
            </div>
        <div className="overlay-app"></div>
    </div>
    </>
)
}