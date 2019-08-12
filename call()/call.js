let obj={
    name:"bhavesh",
    last:"solanki",
    fullName:function(){
        console.log(this.name+" "+this.last);
    }
}
obj.fullName();