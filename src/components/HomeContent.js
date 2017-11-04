import React, { Component } from "react";
import Furniture from "./Furniture";

export default class Prueba extends Component {
  render() {
    let muebles = this.props.furniture;
    let projectList = muebles.filter(proyect => {
      if (proyect.featured === true) {
        return true;
      }
      return false;
    });
    return <Furniture list={projectList} />;
  }
}
