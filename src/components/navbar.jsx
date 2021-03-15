/** @format */

import React, { Component } from "react";
import "../utils/movie.css";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    let { user } = this.props;
    return (
      <div className='navbar'>
        <span className='title'>
          <p className='logo'> Vidly</p>
          <p>
            <NavLink
              to='/movies'
              className='inactive'
              activeStyle={{ color: "Black" }}
            >
              Movies
            </NavLink>
          </p>
          <p>
            <NavLink
              to='/customers'
              className='inactive'
              activeStyle={{ color: "Black" }}
            >
              Customers
            </NavLink>
          </p>
          <p>
            <NavLink
              to='/rentals'
              className='inactive'
              activeStyle={{ color: "Black" }}
            >
              Rentals
            </NavLink>
          </p>
          {user && (
            <React.Fragment>
              <p>
                <NavLink
                  to='/'
                  className='inactive'
                  activeStyle={{ color: "Black" }}
                >
                  {user.name}
                </NavLink>
              </p>
              <p>
                <NavLink
                  to='/logout'
                  className='inactive'
                  activeStyle={{ color: "Black" }}
                >
                  logout
                </NavLink>
              </p>
            </React.Fragment>
          )}
          {!user && (
            <React.Fragment>
              <p>
                <NavLink
                  to='/login'
                  className='inactive'
                  activeStyle={{ color: "Black" }}
                >
                  login
                </NavLink>
              </p>
              <p>
                <NavLink
                  to='/register'
                  className='inactive'
                  activeStyle={{ color: "Black" }}
                >
                  Register
                </NavLink>
              </p>
            </React.Fragment>
          )}
        </span>
      </div>
    );
  }
}

export default Navbar;
