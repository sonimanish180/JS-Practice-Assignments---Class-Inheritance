// import using require
// import { Shape } from "./shape";
const Shape = require("./shape");

// declare class
class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("Area");
  }
}

// export class using module.exports
// module.exports(Circle);
module.exports = Circle;
