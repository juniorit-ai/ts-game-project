
export enum Event {
    KEYDOWN = "keydown",
    KEYUP = "keyup",
    MOUSEWHEEL = "wheel",
    MOUSEBUTTONDOWN = "mousedown",
    MOUSEBUTTONUP = "mouseup",
    MOUSEMOTION = "mousemove",
    UNKNOWN = "null"
}

export enum FlipMode {
    FLIP_NONE = 0,
    FLIP_HORIZONTAL = 1,
    FLIP_VERTICAL = 2,
    FLIP_DIAGONAL = 3
}

export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class Rect {
    x: number;
    y: number;
    w: number;
    h: number;

    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}