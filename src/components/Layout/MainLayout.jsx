import './mainStyles.scss';

import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ChatList } from '../ChatList/ChatList';

export const MainLayout = ({ children }) =>
    <div className="app">
        <div className="header">
            <div className="menu-circle"></div>
            <div className="header-menu">
                <Link className="menu-link is-active" to="/">Home</Link>
                <Link className="menu-link" to="/chat">Chat</Link>
            </div>
            <div className="search-bar mt-2">
                <TextField id="outlined-basic" variant="outlined" placeholder="Search" />
            </div>
        </div>
        <div className="wrapper">
            <div className="left-side">
                <div className="side-wrapper">
                    <div className="side-title">Messages</div>
                    <div className="side-menu">
                        <ChatList />
                    </div>
                </div>
            </div>
            <div className="main-container">
                <div className="main-header">
                    <Link className="menu-link-main" to="/">All Apps</Link>
                    <div className="header-menu">
                        <Link className="main-header-link is-active" to="/">Desktop</Link>
                        <Link className="main-header-link" to="/">Mobile</Link>
                        <Link className="main-header-link" to="/">Web</Link>

                    </div>
                </div>
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
        </div>
        <div className="overlay-app"></div>
    </div>
    ;