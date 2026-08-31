const bookdata=[
    {image:"",title:"ReactJS",price:465},
    {image:"",title:"ExpressJS",price:750},
    {image:"",title:"NodeJS",price:389},
    {image:"",title:"ReactJS",price:465},
    {image:"",title:"ExpressJS",price:750},
    {image:"",title:"NodeJS",price:389},
    {image:"",title:"ReactJS",price:465},
    {image:"",title:"ExpressJS",price:750},
    {image:"",title:"NodeJS",price:389}
]

function App(){
    const bookstore=bookdata.map((b)=>{
        return Book(b);
    })

    const div=React.createElement("div",{className:"bookstore"},bookstore)
    return div;
}