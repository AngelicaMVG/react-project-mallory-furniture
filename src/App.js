import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Seatings from "./components/categories/Seatings";
import Tables from "./components/categories/Tables";
import Desks from "./components/categories/Desks";
import Bedrooms from "./components/categories/Bedrooms";
import Storage from "./components/categories/Storage";
import Misc from "./components/categories/Misc";
import Product from "./components/Product";
import request from "superagent";

class App extends Component {
  componentWillMount = () => {
    request
      .get("https://mallory-furniture-admin.now.sh/api/v1/products")
      .then(data => {
        this.setState({
          products: data.body
        });
      });
  };

  constructor() {
    super();

    this.state = {
      products: []
    };
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all-products" component={AllProducts} />
          <Route path={"/category/seatings"} component={Seatings} />
          <Route path={"/category/tables"} component={Tables} />
          <Route path={"/category/desks"} component={Desks} />
          <Route path={"/category/bedroom"} component={Bedrooms} />
          <Route path={"/category/storage"} component={Storage} />
          <Route path={"/category/misc"} component={Misc} />
          <Route
            path={"/product/:id"}
            render={props => <Product {...props} data={this.state.products} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
