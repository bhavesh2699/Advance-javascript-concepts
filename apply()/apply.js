
//creating func outside the obj
let name={
    first:"harshit",
    last:"jangid",
    
}

let fullName=function(state,country){
    console.log(this.first+" "+this.last+" "+state+" "
    +country);
}
fullName.apply(name,["bihar","india"]);//passes list of arguments