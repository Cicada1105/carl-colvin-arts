declare class Rectangle {
    private cvs;
    private ctx;
    private x;
    private y;
    private width;
    private height;
    constructor();
    draw(): void;
    fill(): void;
    unfill(): void;
    get canvas(): HTMLCanvasElement;
}
export { Rectangle };
