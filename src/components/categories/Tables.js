import React, { Component } from "react";
import request from "superagent";
import Furniture from "../Furniture";

export default class Seatings extends Component {
  constructor() {
    super();
    this.state = {
      tables: [],
      activeBtn: "all"
    };
  }

  _handleClick(e) {
    this.setState({ activeBtn: e.target.value });
  }

  componentDidMount() {
    request
      .get(
        "https://mallory-furniture-admin.now.sh/api/v1/products?category=tables"
      )
      .then(response =>
        this.setState({ ...this.state, tables: response.body })
      );
  }

  render() {
    let tables = this.state.tables.filter(obj => {
      if (this.state.activeBtn === "all") {
        return true;
      }
      if (this.state.activeBtn === "onSale" && obj.onSale === true) {
        return true;
      }
    });
    return (
      <div className="contentFilter">
        <div className="img-category-table img-category" />
        <h2 className="subtitle">Tables</h2>
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
          {tables.length}
          <span className="label-subtitle">items showing</span>
        </p>
        <Furniture list={tables} />
      </div>
    );
  }
}
