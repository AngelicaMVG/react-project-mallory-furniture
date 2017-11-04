import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Categories extends Component {
  render() {
    return (
      <div className="buttons-container">
        <h2 className="subtitle">Browse by Categories</h2>
        <p className="label-subtitle">Explore by furniture type.</p>
        <div className="btn-categories-container">
          <Link to="category/seatings" className="btn-categories">
            Seating
          </Link>
          <Link to="category/tables" className="btn-categories">
            Tables
          </Link>
          <Link to="category/desks" className="btn-categories">
            Desks
          </Link>
          <Link to="category/bedroom" className="btn-categories">
            Bedroom
          </Link>
          <Link to="category/storage" className="btn-categories">
            Storage
          </Link>
          <Link to="category/misc" className="btn-categories">
            Misc
          </Link>
        </div>
      </div>
    );
  }
}
