import TFigures from "../types/TFigures";

export default class Page {
    width: number;
    height: number;
    dpi: number;
    pageOrientation: 'vertical' | 'horizontal';
    renderProperties: Map<string, string>;
    figures: Array<TFigures>

    constructor(width, height, dpi, pageOrientation, renderProperties, figures) {
        this.width = width;
        this.height = height;
        this.dpi = dpi;
        this.pageOrientation = pageOrientation;
        this.renderProperties = renderProperties;
        this.figures = figures;
    }

}