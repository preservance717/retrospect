/*JS的数据类型：
 数值（number）:整数和小数
 字符串（string）：字符串组成的文本
 布尔值（boolean）：true，false
 undefined：未定义或者不存在
 null：表示空缺，即此处有个值，但目前为空
 对象：各种值组成的集合，其又可以分成：狭义的对象（object）、数组（array）、函数（function）

 function f() {
 }
 console.log(typeof f);//函数返回function
 console.log(typeof undefined);//undefined返回undefined
 console.log(typeof v);//未声明的变量返回undefined
 console.log(typeof []);//空数组返回object
 console.log(typeof {});//空对象回object
 console.log(typeof null);//null的类型是object object的一种特殊值
 */

/*用 instanceof 区分数组和对象
var o = {};
var a = [];

console.log(o instanceof Array);//false
console.log(a instanceof Array);//true
*/

/*null和undefined表示没有，含义非常相似，且在if语句中，会被自动转化为false
console.log(null == undefined);//true

if(!undefined){
    console.log('undefined is false');
}

if(!null){
    console.log('null is false');
}*/
