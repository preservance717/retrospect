var err = new Error("出错了");
console.log(err.message);
/*SyntaxError:解析代码发生的语法错误
 ReferenceError:引用一个不存在的变量时发生的错误
 RangeError:当一个值超出有效范围时的错误（数组长度为负数、Number对象的方法超出范围以及堆栈超过最大值）
 TypeError:变量或参数不是预期类型时发生的错误
 URIError:和URI相关的函数的参数不正确时抛出的错误
 EvalError:eval函数(计算字符串的值)没有被正确执行时
 console.log(eval("44+33"));
 */

function f() {
    try {
        console.log(0);
        throw "bug";
    } catch (e) {
        console.log(1);
        return true;
        console.log(2);
    } finally {
        console.log(3);
        return false;
        console.log(4);
    }
}

console.log(f());