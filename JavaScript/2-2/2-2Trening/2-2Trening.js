/*
let boxClass = document.querySelector(".box");
console.log(boxClass);
console.log("クラス名の一番上の取得が出来る");

let box = document.querySelector("#box");
console.log(box);
console.log("idの一番上を取得できる");

let boxAll = document.querySelectorAll('.box');
for (let i = 0; i < boxAll.length; i++) {
    console.log(boxAll[i]);
}
console.log("box全てを引き出す");
*/
let elems = document.querySelectorAll("form > .box");
for (let i = 0; i < elems.length; i++) {
    console.log(elems[i]);
}

let elemsA = document.querySelectorAll("input[type=radio");
for (let i = 0; i < elemsA.length; i++) {
    console.log(elemsA[i]);
}
