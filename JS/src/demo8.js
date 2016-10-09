/*
Object.print = function (o) {
    console.log(o);
};

var o = new Object()

Object.print(o);*/

/*
var person = {
    firstName:"gao",
    lastName:"le",
    fullName:function () {
        console.log(this.firstName + this.lastName);
    }
};

person.fullName();
*/

var a =1;

function b() {
    console.log(this);
}

b();