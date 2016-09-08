/*字符串拼接
 console.log(1+[1]);
 console.log(1+2+'3');
 console.log('1'+2+3);
 console.log([1,2]+[3]);
 */

/*余数运算符
 运算结果的正负号由第一个运算子的正负号决定
 console.log(1%2);
 console.log(-1%2);
 console.log(1%-2);
 */

/*数值运算符(+)将任何数值转换为数值（与number函数相同）
 负数值运算符（-）也同样具有将一个值转为数值的功能，只不过得到的值正负相反
 console.log(+true);
 console.log(-true);
 console.log(+[]);
 */


/*比较运算符
 若两个运算子是字符串，则按照字典顺序比较（unicode比较）
 console.log("a">"v");
 console.log([2]>[1]);
 console.log([2]>[31]);//两个数组的比较，先转化成原始类型的值，在进行比较
 console.log("打">"xiao");
 */

/*严格相等运算符
 console.log(NaN === NaN);//NaN与任何值都不相等，包括自身
 console.log(undefined === undefined);
 console.log(null === null);
 console.log(undefined === null);
 console.log(undefined == null);
 console.log(+0 === -0);

 //严格不相等运算符
 console.log(undefined !== null);
 */

/*相等运算符
 原始类型的数据会转化成数值类型再比较
 对象与原始类型比较时，对象会转换成原始类型的值,再进行比较
 console.log([1] == 1);//Number([1])
 */

/*!运算符
 console.log(!!undefined);//等同于Boolean(undefined)
 console.log(!!undefined == false);
 */

/*&&运算符
 若第一个运算子的布尔值为true，则返回第二个运算子的值（非布尔值）
 若第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不对第二个运算子求值（短路运算）
 console.log(1 && 0);
 console.log(0 && 1);
 console.log(true && 1);
 */

/*||运算符
 若第一个运算子的布尔值为true，则返回第一个运算子的值，且不对第二个运算子求值(短路运算)
 若第一个运算子的布尔值为false，则返回第二个运算子的值
 console.log(1 || 0);
 var x = 3;
 console.log(0 || ++x);
 console.log(x);
 */

/*否运算
 一个数与自身取反值相加等于-1
 console.log(~~ -3);
 */

/*JS编程风格
JavaScript会自动添加句末的分号
有些JavaScript代码压缩器不会自动添加分号，因此遇到没有分号的结尾，就会让代码保持原状，而不是压缩成一行，使得压缩无法得到最优的结果
function f() {
    return
    {
        a:1
    }
}

console.log(f());*/