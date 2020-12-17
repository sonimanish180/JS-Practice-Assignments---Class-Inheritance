// declare class
class Shape {
  constructor(color) {
    this.color = color;
  }
  drawShape = function () {
    console.log("draw");
  };
  calculateArea = function () {
    console.log("Area");
  };
}

// export class using module.exports
module.exports = Shape;
