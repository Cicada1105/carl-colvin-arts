class CurtainRod {
	private ctx:any;
	private grd:any;
	private width:number;
	private current_position:number;

	constructor(context:any,w:number,pos:number) {
		this.ctx = context;
		this.width = w;
		this.current_position = pos;
	}
	public draw():void {
		this.grd = this.ctx.createLinearGradient(this.current_position,0,(this.current_position + this.width),0);

		this.grd.addColorStop(0,"#2a1212");
		this.grd.addColorStop(0.5,"#b72c22");
		this.grd.addColorStop(1,"#2a1212");

		this.ctx.fillStyle = this.grd;
		this.ctx.fillRect(this.current_position,0,this.width,150);
	}
}

export default CurtainRod;