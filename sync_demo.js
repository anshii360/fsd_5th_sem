function register(){
    waitfordelay(10000);
    console.log("registration here")
}
function login(){
    waitfordelay(2000);

    console.log("login here")
}
function getData(){
    waitfordelay(6000);

    console.log("fetch the data from DB")
}
function displayData(){
    waitfordelay(3000);

    console.log("display data")
}
function waitfordelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){
        
    }
}
register();
login();
getData();
displayData();