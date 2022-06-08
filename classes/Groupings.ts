import TFigures from "../types/TFigures";

export default class Groupings {
    figures: Array<TFigures>

    constructor(selectedFigures) {
        this.figures = selectedFigures;
    }

    groupFigures() { }

    ungroupFigures() { }

}