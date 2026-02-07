/*
	This file contains the home page positioning "state"
	The state will be managed by a class which handles the repctive
	properties
	The goal of this file is to abstract out the home page positioning
	logic
*/
// Interface for defining SingletonObject type
interface ISingletonConstructor<T extends ComponentPositioning> {
	new (componentCont:HTMLDialogElement):T
}
interface ISingleton extends ComponentPositioning {
	update():void;
}
/*
	The ComponentPositioning abstract class will be implemented as a singleton factory. When accessing certain components on screen from multiple locations, it is important to extract this data out to prevent rewriting the same code multiple times. Instead of updating a single component's position in multiple places, store calculations in one place and allowing it's update member to be called from multiple locations
*/
abstract class ComponentPositioning {
	/*
		protected static SingletonObject:T

		-Static property that can only be accessed in subclasses of the ComponentPositioning class. Being a protected member prevents any "harmful" updates to the current SinglteonObject instance
	*/
	//protected static SingletonObject:ISingleton;
	private static SingletonObject:any;

	constructor() { }

	/*
		public static getInstance():typeof CompositionPositioning.SingletonObject

		-Method for accessing the single instance of the Singleton Pattern class. Accessible outside of subclasses that extend ComponentPositioning abstract class

		-Returns the single instance of class T, where T is the instance type denoted by the Subclass when extending the abstract ComponentPositioning class

		@return T
	*/
	
	public static getInstance():typeof ComponentPositioning.SingletonObject {
		if (ComponentPositioning.SingletonObject !== null)
			return ComponentPositioning.SingletonObject;
		else 
			throw new ReferenceError("Singleton instance has not been created. Cannot reference uninstantiated object");
	};

	// Methods accessible through static "instance" of class
	public static create<T extends ComponentPositioning>(this:ISingletonConstructor<T>, componentCont:HTMLDialogElement):void {
		ComponentPositioning.SingletonObject = <T>new this(componentCont);
	}
	// Abstract methods
	//abstract create(componentCont?:HTMLDialogElement):void;
	/*
		abstract update():void

		-Method used for updating current instance positionings based on window dimensions and possible other factors implemented by each subclass

		-Each subclass must implment this method in it's own way and is accessible outside of the class through an instance of the class derived from the getInstance method

		@return void
	*/
	abstract update():void;
}
class HomeComponentPositioning extends ComponentPositioning implements ISingleton {
	// Defined private members to be accessed through current instance of HomeComponentPositioning class
	private imgPostCont:HTMLDialogElement;

	//private static SingletonObject:HomeComponentPositioning;

	// Private constructor only to be instantiated from inside class
	constructor(componentCont:HTMLDialogElement) {
		super();
		this.imgPostCont = componentCont;
	}


	// Instance of HomeComponentPositioning only has one method: update
	public update():void {
	// Store recurring values
		// Store window dimensions
		const windowHeight:number = window.innerHeight;
		const windowWidth:number = window.innerWidth;
		// Test size of screen
		const isMobile:boolean = windowWidth <= 900;
		// Store img of post container
		const imgCont:HTMLDivElement = <HTMLDivElement>this.imgPostCont.firstElementChild;
		// Return image to control dimensions
		const img:HTMLImageElement = <HTMLImageElement>imgCont.firstElementChild;

		// Check if image dimensions are within bounds of default width and height
		const isMinHeight:boolean = img.naturalHeight > 320;
		const isMinWidth:boolean = img.naturalWidth > 320;

		// Is the user on a mobile screen (less than 900px)
		if (isMobile) {
		/*
			visibleViewPort = window height - (header height + footer height)
				header height + footer height = 2.75rem + 2.75rem
					2.75rem = 44px
			visibleViewPort = window height - 88
		*/
			const visibleViewPort:number = (windowHeight - 88);
			// Store value of container height to be used to calculate margin for other elements on page
			let postContHeight:number;

			// windowWidth > 600	-	post img and descr side by side
			if (windowWidth > 600) {
				const withinHeightMax:boolean = img.naturalHeight < visibleViewPort;
				const withinWidthMax:boolean = img.naturalWidth < (windowWidth / 2);

				// Check if image meets minimum width and height requirements to establish a minimum size container
				this.imgPostCont.style.height = isMinHeight ? (withinHeightMax ? `${img.naturalHeight}px` : `${visibleViewPort}px`) : "320px";
				this.imgPostCont.style.width = isMinWidth ? (withinWidthMax ? `${img.naturalWidth * 2}px` : `${windowWidth}px`) : "640px";
				// Change image size only if it's too large: height larger than visibleViewPort and width is larger than half of viewport 
				img.style.height = withinHeightMax ? `${img.naturalHeight}px` : `${visibleViewPort}px`;
				img.style.width = withinWidthMax ? `${img.naturalWidth}px` : `${windowWidth / 2}px`;

				// Store post container height for margin spacing of remaining elements on page
				postContHeight = parseInt(this.imgPostCont.style.height);
			}
			else {
				this.imgPostCont.style.width = "100vw";
				this.imgPostCont.style.height = `${visibleViewPort}px`;
				img.style.width = img.naturalWidth < windowWidth ? `${img.naturalWidth}px` : `${windowHeight}px`;
				img.style.height = img.naturalHeight < (visibleViewPort * 0.6) ? `${img.naturalHeight}px` : `${visibleViewPort * 0.6}px`;

				postContHeight = visibleViewPort;
			}

		/* 
			Calculate margin to be added to rows and contact as positioning offset by 
			calculating space between bottom of post and bottom of viewport
				margin = space below post container
					space below post cont = (window height / 2) - (postCont height / 2)
		*/
			// Subtract half of window height by half of image post height to get space below
			let marginPx:number = (windowHeight / 2) - (postContHeight / 2);
			// Convert pixels to a percentage to create a general margin
			let marginPercent:number = (marginPx / windowHeight) * 100;
			// Use number as a basis for height and margin with units of viewport-height
			let marginStyle:string = marginPercent + "vh";
			this.imgPostCont.style.marginBottom = `${marginStyle}`;

			// Rows needs to be offset by previously calculated margin
			let rows:HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("row") as HTMLCollectionOf<HTMLElement>;

			for (let row of rows) {
				row.style.top = marginStyle;
			}

			// Contact container also needs to be offset by previously calculated margin
			//let contactForm:HTMLFormElement = document.forms[0];
			//contactForm.style.top = marginStyle;
		}
		else {
			this.imgPostCont.style.width = isMinWidth ? `${img.naturalWidth * 2}px` : "640px";
			this.imgPostCont.style.height = isMinHeight ? `${img.naturalHeight}px` : "320px";
		}
	}
}

export { HomeComponentPositioning }