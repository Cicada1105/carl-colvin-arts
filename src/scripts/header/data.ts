interface ILink {
  name:string;
  path:string;
  subdirectories: ILink[] | null;
}

// Use during development
const rootDir:string = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/";
// Use during production
// const rootDir:string = "./";

const links:Array<ILink> = [
  {
    name:"Carl Colvin Arts",
    path:rootDir + "index.html",
    subdirectories: []
  },
  {
    name:"About",
    path:rootDir + "pgs/about.html",
    subdirectories: []
  },
  {
    name:"Services",
    path:rootDir + "pgs/services/services.html",
    subdirectories:[
      {
        name:"Reedmaking",
        path:rootDir + "pgs/services/reedmaking.html",
        subdirectories: []
      },
      {
        name:"Editing",
        path:rootDir + "pgs/services/editing.html",
        subdirectories: []
      },
      {
        name:"Writing",
        path:rootDir + "pgs/services/writing.html",
        subdirectories: []
      },
      {
        name:"Performance",
        path:rootDir + "pgs/services/performance.html",
        subdirectories: []
      },
    ]
  },
  {
    name:"Listen",
    path:rootDir + "pgs/listen.html",
    subdirectories: []
  },
  {
    name:"Contact",
    path:rootDir + "pgs/contact.html",
    subdirectories: []
  }
]

export { links, ILink }