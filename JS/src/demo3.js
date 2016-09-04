/*变量没有类型，但是数据本身和各种运算符是有类型的*/
console.log("4" - "3");

/*使用Number函数将各种类型的值转换为数值
 console.log(Number("123"));
 console.log(Number("123ew"));//字符串如果不可以被解析为数值，返回NaN
 console.log(Number(undefined));
 console.log(Number(null));
 console.log(Number(true));
 console.log(Number(false));
 console.log(Number({a: 3}));//Number方法的参数是对象时，返回NaN
 console.log(Number({}.toString()));
 */

/*使用String函数将各种类型的值转换为字符串
 console.log(String(123));
 console.log(String("123"));
 console.log(typeof String(true));
 console.log(typeof String(false));
 console.log(typeof String(undefined));
 console.log(typeof String(null));
 console.log(String([1, 3]));
 */

/*使用Boolean函数将各种类型的值转换为布尔值
 除了以下几个值转化为false，其他的值都被转化为true
 console.log(Boolean(undefined));
 console.log(Boolean(null));
 console.log(Boolean(0));
 console.log(Boolean(-0));
 console.log(Boolean(''));
 console.log(Boolean(NaN));
 */

/*除了加法运算符，当其它运算符的运算数都会被强制转化为Number类型
 console.log(true+2);
 console.log(5 + []);
 */

