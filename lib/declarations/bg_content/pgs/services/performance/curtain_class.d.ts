declare class CurtainRod {
    private ctx;
    private grd;
    private width;
    private current_position;
    constructor(context: any, w: number, pos: number);
    draw(): void;
}
export default CurtainRod;
