//問1:jsEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    if(num % 2 === 0) {
    console.log(num + 'は偶数です');
    }
}
for(let i = 0; i < numbers.length;i++) {
    isEven(numbers[i]);
}

//問2:以下の要件を満たすように実装してください。
//ガソリン、ナンバーのCarクラス。getNumGas関数を作る。
class Car{
    constructor(gas,number) {
        this.gas = gas;
        this.number = number;
    }
    getNumGas() {
        console.log("ガソリンは"+this.gas+"です。ナンバーは"+this.number+"”です。");
    }
}
let Buggy = new Car(20,1975);
Buggy.getNumGas();