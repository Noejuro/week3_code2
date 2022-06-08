import Figure from './Figure.js'

export default class Triangle extends Figure {
    x1: number;
    y1: number;
    x2: number; 
    y2: number;
    x3: number;
    y3: number;

    constructor(x1, y1, x2, y2, x3, y3, renderProperties) {
        super(renderProperties);
        
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }

    getArea() {

        const A = (this.x1 * this.y2) + (this.x2 * this.y3) + (this.x3 * this.y1);
        const B = (this.x1 * this.y3) + (this.x3 * this.y2) + (this.x2 * this.y1);

        const res = (A - B) / 2;

        return res;
    }

    getPerimeter() {
        const sideA = Figure.getTwoPointsDistance(this.x1, this.y1, this.x2, this.y2);
        const sideB = Figure.getTwoPointsDistance(this.x1, this.y1, this.x3, this.y3);
        const sideC = Figure.getTwoPointsDistance(this.x2, this.y2, this.x3, this.y3);

        return sideA + sideB + sideC;
    }
    

}