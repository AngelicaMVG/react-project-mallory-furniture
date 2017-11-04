import React, { Component } from "react";
import Furniture from "./Furniture";

export default class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      furniture: [],
      activeBtn: "all"
    };
    this._fetchFurniture = this._fetchFurniture.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e, filter) {
    this.setState({ activeBtn: e.target.value });
    this._fetchFurniture(filter);
  }

  _fetchFurniture(filter) {
    const url = "https://mallory-furniture-admin.now.sh/api/v1/products";
    const params = filter && `/?${filter}`;
    const requestURL = filter ? `${url}${params}` : url;
    fetch(requestURL)
      .then(response => response.json())
      .then(response => this.setState({ ...this.state, furniture: response }));
  }
  componentDidMount() {
    this._fetchFurniture();
  }
  render() {
    return (
      <div className="allProducts-container">
        <h2 className="subtitle">All Products</h2>
        <p className="label-subtitle">All available listings</p>
        <div className="btns-products">
          <button
            className={this.state.activeBtn === "all" ? "active" : ""}
            value="all"
            onClick={e => this._handleClick(e, null)}
          >
            All Items
          </button>
          <button
            className={this.state.activeBtn === "onSale" ? "active" : ""}
            value="onSale"
            onClick={e => this._handleClick(e, "onSale=true")}
          >
            On Sale
          </button>
        </div>
        <p className="productsNumber">
          {this.state.furniture.length}
          <span className="label-subtitle">items showing</span>
        </p>
        <div>
          <Furniture list={this.state.furniture} />
        </div>
      </div>
    );
  }
}
