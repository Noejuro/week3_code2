export default class Figure {
    constructor(renderProperties) {
        this.renderProperties = renderProperties;
    }
    static getTwoPointsDistance(x1, y1, x2, y2) {
        const A = Math.pow((x2 - x1), 2);
        const B = Math.pow((y2 - y1), 2);
        const C = A + B;
        return Math.sqrt(C);
    }
}
