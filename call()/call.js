//simple funtion call
let obj={
    name:"bhavesh",
    last:"solanki",
    fullName:function(){
        console.log(this.name+" "+this.last);
    }
}
obj.fullName();

//function call using call() function
let obj2={
    name:"salman",
    last:"khan",
}

obj.fullName.call(obj2);