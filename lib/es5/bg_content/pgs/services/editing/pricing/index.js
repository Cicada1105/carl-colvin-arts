"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.loadPricing=void 0;var _methods=require("../../../../../global/methods");var _load=require("./progress_bar/methods/load");var _load2=require("./input_rows/methods/load");const loadPricing=()=>{let header=(0,_methods.createTextElement)({element:"h2",text:"Pricing",idName:"pricingHeader"});let progressCont=(0,_load.loadProgressBar)();let inputsCont=(0,_load2.loadInputRows)();document.body.appendChild(header);document.body.appendChild(progressCont);document.body.appendChild(inputsCont);};exports.loadPricing=loadPricing;