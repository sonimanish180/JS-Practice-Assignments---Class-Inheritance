// import using require
import { Shape } from "./shape";

// declare class
class Circle extends Shape {
  calculateArea = function () {
    console.log("Area");
  };
}

// export class using module.exports
module.exports(Circle);
