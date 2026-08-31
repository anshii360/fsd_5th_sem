function Book(b){
    const image=React.createElement("img",{src:"https://m.media-amazon.com/images/I/51j1nrM7ETL.jpg",width:"200px",height:"200px"},null)
    const title=React.createElement("h2",{style:{color:"red"}},b.title)
    const price=React.createElement("h2",{style:{color:"blue"}},"Price:"+b.price+"/-")
    const btn=React.createElement("button",{style:{color:"green"}},"Add To Cart")
    const div=React.createElement("div",{className:"card"},[image,title,price,btn]);
    return div;
}

