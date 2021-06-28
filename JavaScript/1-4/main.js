/*

//while条件式
let number = 1;
while (number <= 100) {
    console.log(number);
    number++;
}

//Do while条件式
let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 100);

//for条件式
for (let number = 1; number <= 100; number++) {
     console.log(number);
}

break	ループを強制的に 「終了」 させる
continue	その処理を 「スキップ」 して、次の条件式の評価を行う
*/


//課題FizzBuzz!
for(let i =1;i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz!");
        continue;
    } else if(i % 3 === 0) {
        console.log("Fizz!");
        continue;
    } else if(i % 5 === 0) {
        console.log("Buzz!");
        continue;
    } else {
    console.log(i);
    }
}