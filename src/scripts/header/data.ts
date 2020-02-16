interface ILink {
  name:string;
  path:string;
  subdirectories: ILink[] | null;
}

const links:Array<ILink> = [
  {
    name:"About",
    path:"pgs/about.html",
    subdirectories:[]
  },
  {
    name:"Services",
    path:"pgs/services/services_home.html",
    subdirectories:[
      {
        name:"Reedmaking",
        path:"pgs/services/reedmaking.html",
        subdirectories:[]
      },
      {
        name:"Editing",
        path:"pgs/services/editing.html",
        subdirectories:[]
      },
      {
        name:"Writing",
        path:"pgs/services/writing.html",
        subdirectories:[]
      },
      {
        name:"Performance",
        path:"pgs/services/performance.html",
        subdirectories:[]
      },
    ]
  },
  {
    name:"Listen",
    path:"pgs/listen.html",
    subdirectories:[]
  },
  {
    name:"Contact",
    path:"pgs/contact.html",
    subdirectories:[]
  }
]

export { links, ILink }