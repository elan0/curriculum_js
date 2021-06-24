//Humanクラスを作成
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let yamada = new Human("山田", 25);
console.log(yamada.name);

class Taiyaki {
    constructor(cream) {
        this.cream = cream;
    }
}

let taiyaki1 = new Taiyaki("あんこ");
console.log("中身は"+taiyaki1.cream+"です");

let taiyaki2 = new Taiyaki("クリーム");
console.log("中身は"+taiyaki2.cream+"です");

let taiyaki3 = new Taiyaki("チーズ");
console.log("中身は"+taiyaki3.cream+"です");