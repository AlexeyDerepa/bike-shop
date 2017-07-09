import React, {Component} from 'react';
import './Header.css';
import logo from '../images/wheel-logo.png';

class Header extends Component{
    render(){
        return(
            <div className="headerContainer">
                <div className="headerLogo">
                    <img src={logo} className="Header-logo" alt="logo" />
                </div>
                <div className="headerInfo">Welcome to our bike shop</div>
                
            </div>
        );
    }
}

export default Header;