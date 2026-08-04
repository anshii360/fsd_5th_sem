function register(){
    setTimeout(()=>{
    console.log("registration here");
},2000)
}
function login(){
    setTimeout(()=>{
    console.log("login here");
},2000)
}
function getData(){
setTimeout(()=>{
    console.log("fetch the data from DB");
},3000)
}
function displayData(){
    setTimeout(()=>{
    console.log("display data");
},4000)
}

register();
login();
getData();
displayData();