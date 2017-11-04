import React, { Component } from "react";
import Categories from "./BrowseByCategories";
import HomeContent from "./HomeContent";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { furniture: [] };
  }

  componentWillMount() {
    fetch("https://mallory-furniture-admin.now.sh/api/v1/products")
      .then(response => response.json())
      .then(response => this.setState({ ...this.state, furniture: response }));
  }
  render() {
    return (
      <div>
        <div className="portada">
          <h1 className="title">Mallory Furniture</h1>
          <p>Your furniture is old.</p>
          <p>Ours is older.</p>
        </div>
        <div>
          <h2 className="subtitle">Featured Products</h2>
          <p className="label-subtitle">
            Check out some of our favorite listing
          </p>
          <HomeContent furniture={this.state.furniture} />
        </div>
        <div className="btn-allProducts-container">
          <Link className="btn-allProducts" to="/all-products">
            All Products
          </Link>
        </div>
        <Categories category={this.state.furniture} />
      </div>
    );
  }
}
