import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Furniture extends Component {
  render() {
    let muebles = this.props.list;

    return (
      <div className="furniture-container">
        {muebles.map(mueble => (
          <Link to={"/product/" + mueble._id}>
            <div className="container" key={mueble._id}>
              <div className="furniture-img">
                <img src={mueble.imageLink} alt="" />
              </div>
              <h3 className="info-item">{mueble.item}</h3>
              <span className="price-item">${mueble.price}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
