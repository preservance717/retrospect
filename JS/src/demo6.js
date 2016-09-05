/*JS的底层，根本没有整数，所有数字是小数
 console.log(1===1.0);*/

/*parseInt()函数结果只返回字符串头部可以转换数字的部分
 console.log(parseInt("222Q"));
 console.log(parseInt('.3'));//NAN
 console.log(parseInt("1000",2));//parseInt第二个参数的表示被解析的值的进制，第二个参数为整数，只有在2到36之间
 console.log(parseInt("1456", 2));//如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值
 console.log(parseInt("456", 2));//如果最高位无法转换，则直接返回NaN
 //上面两行代码，对于二进制来说，1是有意义的字符，5、4、6都是无意义的字符，所以第一行返回1，第二行返回NaN
 */

/*
 parseFloat()与Number的不同
 console.log(parseFloat(''));
 console.log(Number(''));

 console.log(parseFloat(true));
 console.log(Number(true));

 console.log(parseFloat(null));
 console.log(Number(null));

 console.log(parseFloat("124.4#"));
 console.log(Number("124.4#"));
 */

/*
 var o1 = {};
 var o2 = o1;

 o1.a = 2;

 console.log(o1);
 console.log(o2);

 //如果取消某一个变量对于原对象的引用，不会影响到另一个变量
 var o3 = {};
 var o4 = o3;

 o3 = 1;

 console.log(o3);
 console.log(o4);
 */

/*
 JavaScript规定，如果行首是大括号，一律解释为语句（即代码块）。如果要解释为表达式（即对象），必须在大括号前加上圆括号。
 console.log(eval('{foo:123}'));
 console.log(eval('({foo:123})'));
 */

/*读取对象的属性时，一种是点运算符，另一种是方括号运算
 （使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。但是，数字键可以不加引号，因为会被当作字符串处理）
 数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符
 var o = {
 p: "Hello World",
 33: "ddd",
 q: "asdf"
 };

 console.log(o);
 console.log(o.p);
 console.log(o['p']);
 console.log(o["33"]);
 //console.log(o."33");
 console.log(delete o[33]);//delete命令用于删除对象的属性，删除成功后，返回true
 console.log(delete o.c);//当对象的属性不存在时，删除时不报错，且返回true
 console.log(o);

 console.log(delete o.toString());
 console.log(o.toString());//delete只能删除自身的属性，不能删除继承的属性

 var p = 1;
 console.log(delete p);
 console.log(p);//delete不能删除var命令声明的变量，只能用来删除属性
 for(var i in o){
 console.log(o[i]);
 }

 var i = 0;
 var props = [];

 for(props[i++] in o);
 console.log(props);
 */

/*
 with区块内部的变量，必须是当前对象已经存在的属性
 var o = {
 p1:"",
 p2:""
 };

 with(o){
 p1 = 1;
 p2 = 2;
 p3 = 4;
 }
 console.log(o);
 console.log(p3);// 4 因为with区块没有改变作用域，它的内部依然是当前作用域
 */