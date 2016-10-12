function foo() {
    console.log(baz);
   // console.log(bar);

    bar = 2;
    console.log(window.bar);

    function baz() {
        console.log("baz");
    }

}

foo();