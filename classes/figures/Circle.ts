import Figure from './Figure.js'

export default class Circle extends Figure {
    xc: number;
    yc: number;
    radio: number;
    static #PI: number = 3.14;

    renderProperties: Map<string, string>

    constructor(radio: number = 0, renderProperties) {
        super(renderProperties)
        
        this.radio = radio;
    }

    getArea(): number {
        return Circle.#PI * Math.pow(this.radio, 2);
    }

    getPerimeter(): number {
        return 2 * Circle.#PI * this.radio;
    }

}