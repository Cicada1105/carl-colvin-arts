const createGradient = ():void => {
	const cvsEl = document.createElement("canvas");
	cvsEl.setAttribute("id","bgCanvas");
  document.body.appendChild(cvsEl);

  const cvs = document.getElementById("bgCanvas");

	let ctx = cvs.getContext('2d');
	let grd = ctx.createLinearGradient(0,0,300,150);

	// Create color stops
	grd.addColorStop(0,"#340604");
	grd.addColorStop(1,"black");

	ctx.fillStyle = grd;
	ctx.fillRect(0,0,300,150);
}

export { createGradient }