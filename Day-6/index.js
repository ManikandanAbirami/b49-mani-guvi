class Circle {
  constructor(radius) {
    this._radius = radius; // Use underscore convention for private property
  }

  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (newRadius <= 0) {
      throw new Error("Radius must be a positive number.");
    }
    this._radius = newRadius;
  }

  get area() {
    return Math.PI * Math.pow(this._radius, 2);
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // Output: 5
console.log(myCircle.area); // Output: 78.53981633974483

myCircle.radius = 7;
console.log(myCircle.radius); // Output: 7
console.log(myCircle.area); // Output: 153.93804002589985

myCircle.radius = 3; // Throws an error: Radius must be a positive number.
