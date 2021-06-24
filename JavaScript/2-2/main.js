let target = document.getElementById('target');
console.log(target);

function myfunc() {
let point = document.getElementById("point");
point.textContent = "こんにちは";
}

let elems = document.getElementsByTagName('h1');
console.log(elems[0]);
console.log(elems[1]);

let boxs = document.getElementsByName('box');
for (let i = 0; i < boxs.length; i++) {
    console.log(boxs[i]);
}