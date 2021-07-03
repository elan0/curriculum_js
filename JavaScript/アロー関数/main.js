let a = 1;
let b = 2;
let c = 3;
// 通常の関数の書き方
let sum = function(a, b, c) {
    return a + b + c;
}
// 短縮した書き方
let sum2 = (a, b, c) => {a + b + c;}
// returnしか使わない場合の書き方
let sum3 = (a, b, c) => a + b + c;
// 引数が一つだけの場合の書き方
let sum4 = a =>a + b + c; 
