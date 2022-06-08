import Circle from './classes/figures/Circle.js'
import Figure from './classes/figures/Figure.js'
import Triangle from './classes/figures/Triangle.js';

const renderProperties = new Map();
renderProperties.set('color', 'red');
renderProperties.set('pattern', 'single');
renderProperties.set('line', 'solid');
renderProperties.set('size', 'small');

const newCircle = new Circle(3, renderProperties)

console.log("Circle Area: ", newCircle.getArea())
console.log("Circle Perimeter: ", newCircle.getPerimeter())

const newTriangle = new Triangle(-2, 3, 3, -1, 5, 6, renderProperties);

console.log("Triangle Area: ", newTriangle.getArea())
console.log("Triangle Perimeter: ", newTriangle.getPerimeter())