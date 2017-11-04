import React, { Component } from "react";
import logo from "../images/mf-logo-white.svg";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <img src={logo} alt="" />
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/terms">Terms + Conditions</Link>
          </li>
        </ul>
        <ul className="blue-link">
          <li className="separador">|</li>
          <li>
            <Link to="/seatings">Seating</Link>
          </li>
          <li>
            <Link to="category/tables">Tables</Link>
          </li>
          <li>
            <Link to="category/desks">Desks</Link>
          </li>
          <li>
            <Link to="category/storage">Storages</Link>
          </li>
          <li>
            <Link to="/category/bedroom">Bedroom</Link>
          </li>
          <li>
            <Link to="/category/misc">Misc</Link>
          </li>
          <li className="separador">|</li>
        </ul>
        <a href="/cart" className="car">
          <i className="fa fa-cart-plus" />
        </a>
      </div>
    );
  }
}
