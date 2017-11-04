import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let idProduct = this.props.data.map(product => {
      if (product._id === this.props.match.params.id) {
        return (
          <div className="pad">
            <div className="imgProduct">
              <img src={product.imageLink} alt="" />
            </div>
            <div className="product-info-container">
              <div className="product-info">
                <h2>{product.item}</h2>
                <h3>${product.price}</h3>
                <hr />
                <div className="product-specifications">
                  <div>
                    <p className="label">Condition</p>
                    <span>{product.condition}</span>
                  </div>
                  <div>
                    <p className="label">Measurements</p>
                    <span>
                      W: {product.width} L: {product.length} H:{product.height}
                    </span>
                  </div>
                  <button className="add-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });

    return <div>{idProduct}</div>;
  }
}
