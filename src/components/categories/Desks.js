import React, { Component } from "react";
import request from "superagent";
import Furniture from "../Furniture";

export default class Seatings extends Component {
  constructor() {
    super();
    this.state = {
      desks: [],
      activeBtn: "all"
    };
  }

  _handleClick(e) {
    this.setState({ activeBtn: e.target.value });
  }

  componentDidMount() {
    request
      .get(
        "https://mallory-furniture-admin.now.sh/api/v1/products?category=desks"
      )
      .then(response => this.setState({ ...this.state, desks: response.body }));
  }

  render() {
    let desks = this.state.desks.filter(obj => {
      if (this.state.activeBtn === "all") {
        return true;
      }
      if (this.state.activeBtn === "onSale" && obj.onSale === true) {
        return true;
      }
    });
    return (
      <div className="contentFilter">
        <div className="img-category-desk img-category" />
        <h2 className="subtitle">Desks</h2>
        <p className="label-subtitle">All desks products</p>
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
          {desks.length}
          <span className="label-subtitle">items showing</span>
        </p>
        <Furniture list={desks} />
      </div>
    );
  }
}
