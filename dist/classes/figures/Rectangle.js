import Figure from './Figure.js';
export default class Rectangle extends Figure {
    constructor(height = 0, width = 0, x1, y1, x2, y2, renderProperties) {
        super(renderProperties);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
    getPerimeter() {
        return (this.height + this.width) * 2;
    }
}
