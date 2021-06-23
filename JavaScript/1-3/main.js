console.log(10 === 10); //true        「両辺が等しい」という条件 → 正しいのでtrue
console.log(10 === 5); //false        「両辺が等しい」という条件 → 正しくないのでfalse
console.log(10 !== 5); //true        「10と5は等しくない」という条件 → 正しいので true
console.log(10 > 20); //false        「10と20を比べて、10の方が大きい」という条件 → 正しくないのでfalse
console.log(10 <= 10); //true        「左辺の10は右辺の10という値以上か」という条件 → 正しいのでtrue

console.log('10' === 10); //false
console.log('10' == 10); //true

let score = 60;
if (score >= 70) {
    console.log('合格');
} else if(score === 0){
    console.log('0点はまずいです...');  
} else {
    console.log('不合格'); 
}
/*
A && B AかつB
A || B A又はB
A != B AじゃなくB
*/

//課題問1
let a = 10; let b =15;
console.log(a !== 10);
console.log(b >= 10 && b<20);
//課題問2
let x =10;
if(x >= 10 && 20 >= x) {
    console.log("成功です");
} else {
    console.log("失敗です");
}
//課題問3
let y = 0;
if(y %2 === 0) {
    console.log("偶数です");
} else {
    console.log("奇数です");
}