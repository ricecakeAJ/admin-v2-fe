import React from 'react';
import {Link,NavLink} from 'react-router-dom';
class NavSide extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="navbar-default navbar-side" >
                <div className="sidebar-collapse">
                    <ul className="nav" >

                        <li>
                            <NavLink exact activeClassName="active-menu" to="/">
                                <i className="fa fa-dashboard"></i>
                                <span>HomePage</span>
                            </NavLink>
                        </li>
                        <li className="active">
                            <Link to="/product">
                                <i className="fa fa-sitemap"></i>
                                <span>Commodity</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/product" activeClassName="active-menu">
                                        <span>Commodity Management</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-category" activeClassName="active-menu">
                                        <span>Category Management</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <NavLink to="/order">
                                <i className="fa fa-sitemap"></i>
                                <span>Order</span>
                                <span className="fa arrow"></span>
                            </NavLink>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/order" activeClassName="active-menu">
                                        <span>Order Management</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <NavLink to="/user">
                                <i className="fa fa-sitemap"></i>
                                <span>User</span>
                                <span className="fa arrow"></span>
                            </NavLink>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/user" activeClassName="active-menu">
                                        <span>User Management</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default NavSide;