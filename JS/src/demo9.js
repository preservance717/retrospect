// function main(){
//     var a = 522431;
//     var b =2;
//
//     var aArr = a.toString().split('');
//     var c = a.toString().split('');
//
//     aArr.sort((pre, next)=>pre>next);
//     aArr.splice(0, b);
//
//    var p = c.map((cEle)=>{
//        var d = aArr.find((aArrEle)=>aArrEle == cEle);
//        if(d){
//            return cEle;
//        }else {
//            return '';
//        }
//
//    });
//
//     console.log([12,3].join('/'));
// }
//
// main();

var line = '325-1';
// while(line = read_line()){
//     line = line.join('-');
// }
// var input = line.split('-');
// var inputNum = input[0];
// var deleteLen = parseInt(input[1]);
//
// var inputNums = inputNum.split('');
// var originInputNums = inputNum.split('');
//
// inputNums.sort((pre, next)=> pre > next);
//
// inputNums.splice(0, deleteLen);
//
// var resultNums = originInputNums.map((originEle)=>{
//     if(inputNums.find(inputEle=> inputEle == originEle)){
//         return originEle;
//     }else{
//         return '';
//     }
// });
//
// console.log(resultNums.join(''));
let [,,third] = [1,2,3];
console.log(third);