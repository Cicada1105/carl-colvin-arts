declare class Circle {
    private cvs;
    private ctx;
    private x;
    private y;
    private radius;
    private start;
    private end;
    constructor();
    draw(): void;
    fill(): void;
    unfill(): void;
    get canvas(): HTMLCanvasElement;
}
export { Circle };
