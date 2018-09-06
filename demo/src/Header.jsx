import React, { Component } from 'react';
import '../assets/styles/header.css';

class Header extends Component {
    render() {
        return (
            <div className="demo-header">
                <div className="demo-header--title">rc-chat-view</div>
                <div className="demo-header--links">
                    <a href="https://github.com/Christopher-Caroni/rc-chat-view">Usage</a>
                </div>
            </div>
        );
    }
}

export default Header;
