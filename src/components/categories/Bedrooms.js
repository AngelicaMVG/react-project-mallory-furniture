import React, { Component } from "react";
import request from "superagent";
import Furniture from "../Furniture";

export default class Bedrooms extends Component {
  constructor() {
    super();
    this.state = {
      bedrooms: [],
      activeBtn: "all"
    };
  }

  _handleClick(e) {
    this.setState({ activeBtn: e.target.value });
  }

  componentDidMount() {
    request
      .get(
        "https://mallory-furniture-admin.now.sh/api/v1/products?category=bedroom"
      )
      .then(response =>
        this.setState({ ...this.state, bedrooms: response.body })
      );
  }

  render() {
    let bedrooms = this.state.bedrooms.filter(obj => {
      if (this.state.activeBtn === "all") {
        return true;
      }
      if (this.state.activeBtn === "onSale" && obj.onSale === true) {
        return true;
      }
    });
    return (
      <div className="contentFilter">
        <div className="img-category-bedroom img-category" />
        <h2 className="subtitle">Bedrooms</h2>
        <p className="label-subtitle">All bedrooms products</p>
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
          {bedrooms.length}
          <span className="label-subtitle">items showing</span>
        </p>
        <Furniture list={bedrooms} />
      </div>
    );
  }
}
