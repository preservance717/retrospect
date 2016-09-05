/*函数的声明(3种)
 function命令
 函数表达式
 Function构造函数

 var print = function x() {
 console.log(typeof x);
 };

 print();
 console.log(x);
 */

/*函数名的提升 当采用function命令声明函数时，整个函数会像变量声明一样，被提升到代码头部，但是采用赋值语句定义函数，JS就会报错
 function f() {
 console.log(1);
 }

 f();

 function f() {
 console.log(2);
 }

 f();
 当同时采用赋值语句和function命令声明同一函数时，最后总是采用赋值语句的定义
 var f = function () {
 console.log(1);
 };
 function f() {
 console.log(2);
 }
 f();//1
 */
/*现代浏览器的JS引擎已经支持块作用域了， 只是在非严格模式下，只有函数名变量声明会提升到当前闭包的顶部，这也是不管if 分支是否成立
 (function e() {
 if (false) {
 function f() {
 console.log("haha,我进来了");
 }
 }
 console.log(f);

 })();
 */

/*函数的属性：name、length(返回函数预期传入的参数个数)、toString(返回函数的源码，内部注释也可以被返回(利用此可以实现多行字符串 ))
 function f(a) {
 //注释
 console.log(1);
 console.log(2);
 }

 console.log(f.name);
 console.log(f.length);
 console.log(f.toString());

 var f1 = function myName() {};

 console.log(f1.name);
 */

/*
 函数的作用域
 对于var命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量
 var v = 2;

 function f() {
 var v = 1;

 console.log(v);
 }

 if(1){
 v = 3;
 }
 console.log(v);

 f();
 */

/*
 函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。
 如果函数A调用函数B，函数B不会引用函数A的内部变量*
 var x = function () {
 console.log(v);
 };

 function y(f) {
 var v = 3;
 f();
 }

 y(x);
 */

/*
 函数参数的传递方式：传值传递：在函数内部修改参数值，不会影响到外部；
 传址传递：传入参数的原始值的地址，在函数内部修改参数，将会影响到原始值
 如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。
 var p = 2;

 function change(p) {
 p = 4;
 }

 change(p);

 console.log(p);

 var obj = {a:4};

 function modify(obj) {
 obj.a = 3;
 //obj = {w:4}
 }

 modify(obj);
 console.log(obj);
 */

/*如果有同名的参数，则取最后出现的那个值。
 function f(a, a) {
 console.log(a);
 }

 f(1, 2);
 f(1);
 */

/*
 闭包
 f2就是闭包：定义在一个函数内部的函数

 //读取函数内部的变量
 function f1() {
 var n = 5;
 function f2() {
 console.log(n);
 }
 return f2;
 }
 var result = f1();
 result();

 //让这些变量保存在内存中，闭包可以使诞生环境一直存在
 function createIncrementor(start) {
 return function () {
 return start++;
 }
 }

 var inc = createIncrementor(1);
 console.log(inc());
 console.log(inc());
 console.log(inc());

 //闭包可以封装对象的私有属性和私有方法

 //外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。
 因此不能滥用闭包，否则会造成网页的性能问题
 */
/*IIFE
 (function() {}());
 (function() {}());
 */

/*eval函数
 eval('var a = 1');
 console.log(a);
 */