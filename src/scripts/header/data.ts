// Imports
import { ILink } from '../global/interfaces'

// Use during development
const rootDir:string = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/";
// Use during production
// const rootDir:string = "/";


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
    link:rootDir + "pgs/services/services.html",
    subdirectories:[
      {
        name:"Reedmaking",
        link:rootDir + "pgs/services/reedmaking.html",
        subdirectories: []
      },
      {
        name:"Editing",
        link:rootDir + "pgs/services/editing.html",
        subdirectories: []
      },
      {
        name:"Writing",
        link:rootDir + "pgs/services/writing.html",
        subdirectories: []
      },
      {
        name:"Performance",
        link:rootDir + "pgs/services/performance.html",
        subdirectories: []
      },
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

export { links, ILink }