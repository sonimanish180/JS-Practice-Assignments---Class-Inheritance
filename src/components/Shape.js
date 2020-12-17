// declare class
class Shape {
  constructor(color) {
    this.color = color;
    this.drawShape = function () {
      console.log("draw");
    };
    this.calculateArea = function () {
      console.log("Area");
    };
  }
}

// export class using module.exports
module.exports = Shape;
