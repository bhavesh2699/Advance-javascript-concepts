//simple funtion call
let obj={
    name:"bhavesh",
    last:"solanki",
    fullName:function(state){
        console.log(this.name+" "+this.last+" "+state);
    }
}
obj.fullName();

//function call using call() function
//creating obj2 and reusing fullname function of obj
let obj2={
    name:"salman",
    last:"khan",
}

obj.fullName.call(obj2);

//passing argumnets using call()
obj.fullName.call(obj2,"mumbai");
obj.fullName("jodhpur");