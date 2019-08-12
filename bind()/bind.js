
//creating func outside the obj
let name={
    first:"harshit",
    last:"jangid",
    
}

let fullName=function(state){
    console.log(this.first+" "+this.last+" "+state);
}
let details=fullName.bind(name,["bihar"]);
details();