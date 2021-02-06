/*
    This file is for creating individual components for the future performances page
*/
// Imports
//    Methods
import { createElement, createTextElement } from '../../../../../../global/methods/elements';
const createPerformanceRow = (performance) => {
    // Create section to contain all sub-semantic performance data
    let row = createElement({
        className: "performanceSection"
    });
    // Create main section for performance row 
    let mainSection = createMainSection({
        name: performance["name"],
        location: performance["location"],
        instruments: performance["instruments"],
        description: performance["description"]
    });
    // Create date time container 
    let dateTimeCont = createDateTimeCont(performance["date_time"]);
    // Append main section and date time aside section to row 
    row.appendChild(mainSection);
    row.appendChild(dateTimeCont);
    return row;
};
const createMainSection = ({ name = "", location = "", instruments = [""], description = "" }) => {
    // Create section to hold the performance information excluding date & time 
    let section = document.createElement("section");
    // Create container for holding info about performance 
    let aboutPerformanceCont = createAboutPerformaceCont({
        name,
        location,
        description
    });
    // Create instruments container 
    let instrumentsCont = createInstrumentsCont(instruments);
    // Append name, location, description and instruments container to section 
    section.appendChild(aboutPerformanceCont);
    section.appendChild(instrumentsCont);
    return section;
};
const createAboutPerformaceCont = (performance) => {
    // Create container for about performance data 
    let cont = createElement({
        className: "aboutPerformanceCont"
    });
    // Create headers for main section 
    let nameHeader = createTextElement({
        element: "h2",
        text: performance["name"]
    });
    let locationHeader = createTextElement({
        element: "h3",
        text: performance["location"]
    });
    // Create description of performance 
    let descriptionEl = createTextElement({
        text: performance["description"]
    });
    // Append performance name, location and description to container 
    cont.appendChild(nameHeader);
    cont.appendChild(locationHeader);
    cont.appendChild(descriptionEl);
    return cont;
};
const createInstrumentsCont = (instruments) => {
    // Create instruments container 
    let cont = createElement({
        className: "instrumentsCont"
    });
    // Create instruments header 
    let instrumentsHeader = createTextElement({
        element: "h3",
        text: "Instrument of Use"
    });
    // Create proper text format for instruments 
    let txt = "";
    instruments.forEach((instrument, i) => {
        // If more than one instrument, include ", "
        txt += i === 0 ? instrument : `, ${instrument}`;
    });
    let instrumentsList = createTextElement({
        text: txt
    });
    // Append instruments header and formatted instruments string 
    cont.appendChild(instrumentsHeader);
    cont.appendChild(instrumentsList);
    return cont;
};
const createDateTimeCont = (dateTime) => {
    // Create aside containing date and time 
    let aside = document.createElement("aside");
    // Create text elements for date and time
    let dateEl = createTextElement({
        element: "h3",
        text: dateTime["date"]
    });
    let timeEl = createTextElement({
        element: "h3",
        text: `${dateTime.time['start']} - ${dateTime.time['end']}`
    });
    // Append date and time to aside 
    aside.appendChild(dateEl);
    aside.appendChild(timeEl);
    return aside;
};
export { createPerformanceRow };
