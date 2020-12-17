// import using require
// import { Shape } from "./shape";
const Shape = require("./Shape.js");

// declare class
class Circle extends Shape {
  constructor() {
    super();
    this.color = "blue";
  }
  calculateArea = function () {
    console.log("Area");
  };
}

// export class using module.exports
// module.exports(Circle);
module.exports = Circle;
