import React, { Component } from "react";
import request from "superagent";
import Furniture from "../Furniture";

export default class Seatings extends Component {
  constructor() {
    super();
    this.state = {
      seatings: [],
      activeBtn: "all"
    };
  }

  _handleClick(e) {
    this.setState({ activeBtn: e.target.value });
  }

  componentDidMount() {
    request
      .get(
        "https://mallory-furniture-admin.now.sh/api/v1/products?category=seating"
      )
      .then(response =>
        this.setState({ ...this.state, seatings: response.body })
      );
  }

  render() {
    let seatings = this.state.seatings.filter(obj => {
      if (this.state.activeBtn === "all") {
        console.log("hi");
        return true;
      }
      if (this.state.activeBtn === "onSale" && obj.onSale === true) {
        console.log("hola");
        return true;
      }
    });
    return (
      <div className="contentFilter">
        <div className="img-category img-category-seating" />
        <h2 className="subtitle">Seating</h2>
        <p className="label-subtitle">All seating products</p>
        <div className="btns-products">
          <button
            className={this.state.activeBtn === "all" ? "active" : ""}
            value="all"
            onClick={e => this._handleClick(e)}
          >
            All Items
          </button>
          <button
            className={this.state.activeBtn === "onSale" ? "active" : ""}
            value="onSale"
            onClick={e => this._handleClick(e)}
          >
            On Sale
          </button>
        </div>
        <p className="productsNumber">
          {seatings.length}
          <span className="label-subtitle">items showing</span>
        </p>
        <Furniture list={seatings} />
      </div>
    );
  }
}
