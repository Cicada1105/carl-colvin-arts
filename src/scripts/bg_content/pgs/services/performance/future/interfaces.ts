/*
	This file is for defining interfaces for the future performances page
*/

interface DateTimeInterface {
	date:string;
	time: {
		start:string;
		end:string;
	}
}
interface AboutPerformanceInterface {
	name:string;
	location:string;
	description:string;
}
interface PerformanceInterface extends AboutPerformanceInterface, DateTimeInterface {
	instruments:string[];
}

export {
	PerformanceInterface as IPerformance,
	AboutPerformanceInterface as IAboutPerformance,
	DateTimeInterface as IDateTime
}