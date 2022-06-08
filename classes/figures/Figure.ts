export default class Figure {
    renderProperties: Map<string, string>

    constructor(renderProperties) {
        this.renderProperties = renderProperties;
    }

    static getTwoPointsDistance(x1: number, y1: number, x2: number, y2: number) {
        const A = Math.pow((x2 - x1), 2);
        const B = Math.pow((y2 - y1), 2);
        const C = A + B;
        return Math.sqrt(C)
    }
}