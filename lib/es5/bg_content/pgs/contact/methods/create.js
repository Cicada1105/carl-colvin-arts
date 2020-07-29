"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.createTextAreaCont=exports.createSelectCont=exports.createTextCont=exports.createInputRow=void 0;var _methods=require("../../../../global/methods");const createInputRow=rowData=>{let cont=(0,_methods.createElement)({className:"selectionRow"});let inputLabel=(0,_methods.createLabelElement)({text:rowData.label.text,forIn:rowData.label.for});cont.appendChild(inputLabel);cont.appendChild(rowData.content);return cont;};exports.createInputRow=createInputRow;const createInputCont=inputEl=>{let cont=(0,_methods.createElement)({className:"userInputCont"});let spanAnimation=(0,_methods.createElement)({className:"inputAnimation"});let errorMsg=(0,_methods.createTextElement)({text:"*",className:"errorMsg"});inputEl.addEventListener("focus",()=>{spanAnimation.style.animationName="inputFocus";});inputEl.addEventListener("blur",()=>{spanAnimation.style.animationName="inputUnfocus";});cont.appendChild(inputEl);cont.appendChild(spanAnimation);cont.appendChild(errorMsg);return cont;};const createTextCont=textData=>{let txtInput=(0,_methods.createElement)({element:"input",className:"userInput",idName:textData.id});txtInput.setAttribute("type",textData.data.type);txtInput.setAttribute("placeholder",textData.data.placeholder);txtInput.setAttribute("autocomplete","off");let cont=createInputCont(txtInput);return cont;};exports.createTextCont=createTextCont;const createSelectCont=selectData=>{let selectInput=(0,_methods.createSelectElement)({options:selectData.data.options,className:"userInput",idName:selectData.id});let cont=createInputCont(selectInput);return cont;};exports.createSelectCont=createSelectCont;const createTextAreaCont=textAreaData=>{let txtAreaInput=(0,_methods.createElement)({element:"textarea",className:"userInput",idName:textAreaData.id});txtAreaInput.setAttribute("rows",textAreaData.data.rows);txtAreaInput.setAttribute("cols",textAreaData.data.cols);txtAreaInput.setAttribute("autocomplete","off");let cont=createInputCont(txtAreaInput);return cont;};exports.createTextAreaCont=createTextAreaCont;