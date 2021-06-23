/*
let scores = [50, 60, 70, 80, 90];
for (let i = 0; i < scores.length; i++) {
    console.log("得点は" + scores[i] + "点です");
}

//構造がわかりやすいように字下げをしていますが、カンマ区切りでデータを並べている点は配列と同じです。
let human = {
    name: "山田",
    height: 170,
    weight: 60,
    gender: "男",
    age: 30,
};
console.log(human.name);
console.log(human["age"]);

*/

//課題、問1
let scores = [10,15,20,25]
for(let i = 0 ; i < scores.length;i++) {
    if(scores[i] % 10 ===0) {
        console.log(scores[i]);
    }
}

//課題、問2
let car = {
    gass: 20.5,
    num: 1234,
}
console.log("ガソリンは"+car.gass+"です");
console.log("ナンバーは"+car.num+"です")