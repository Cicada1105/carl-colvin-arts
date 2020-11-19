// Imports
import { ILink } from '../global/interfaces/general'

// Use during development
const isHomePage:boolean = window.location.pathname.includes("index");
const isServicePage:boolean = window.location.pathname.includes("services/");
const isPerformancesPage:boolean = window.location.pathname.includes("performances/");
const rootDir:string = isPerformancesPage ? "../../../" : (isServicePage ? "../../" : (isHomePage ? "./" : "../"))
//const rootDir:string = isHomePage ? "./" : (isServicePage ? "../../" : (isPerformancesPage ? "../../../" : "../"));
// Use during production
//const rootDir:string = "/";


const links:Array<ILink> = [
  {
    name:"Carl Colvin Arts",
    link:rootDir + "index.html",
    subdirectories: []
  },
  {
    name:"About",
    link:rootDir + "pgs/about.html",
    subdirectories: []
  },
  {
    name:"Services",
    link:rootDir + "pgs/services.html",
    subdirectories:[
      {
        name:"Reedmaking",
        link:rootDir + "pgs/services/reedmaking.html",
        subdirectories: []
      },
      {
        name:"Writing",
        link:rootDir + "pgs/services/writing.html",
        subdirectories: []
      },
      {
        name:"Performance",
        link:rootDir + "pgs/services/performances.html",
        subdirectories: []
      },
      {
        name:"Editing",
        link:rootDir + "pgs/services/editing.html",
        subdirectories: []
      }
    ]
  },
  {
    name:"Listen",
    link:rootDir + "pgs/listen.html",
    subdirectories: []
  },
  {
    name:"Contact",
    link:rootDir + "pgs/contact.html",
    subdirectories: []
  }
]

export { links }