import './mainStyles.scss';

import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

export const MainLayout = ({ children }) =>
    <div className="app">
        <div className="header">
            <div className="menu-circle"></div>
            <div className="header-menu">
                <NavLink className={({ isActive }) => 'logo-link' + (isActive ? ' is-active' : '')} to="/">Chat App</NavLink>
                <NavLink className={({ isActive }) => 'top-link' + (isActive ? ' is-active' : '')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => 'top-link' + (isActive ? ' is-active' : '')} to="/chat">Chat</NavLink>
                <NavLink className={({ isActive }) => 'top-link' + (isActive ? ' is-active' : '')} to="/profile">Profile</NavLink>
            </div>
            <div className="search-bar mt-2">
                <TextField id="outlined-basic" variant="outlined" placeholder="Search" />
            </div>
        </div>
        { children }
            <div className="main-header">
              <div className="header-menu">
                <NavLink className={({ isActive }) => 'menu-link' + (isActive ? ' is-active' : '')} to="/chat">Chat</NavLink>
                <NavLink className={({ isActive }) => 'menu-link' + (isActive ? ' is-active' : '')} to="/profile">Profile</NavLink>
              </div>
            </div>
        <div className="overlay-app"></div>
    </div>
    ;