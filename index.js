//math.jsを読み込む
const math = require('./math');
// math.jsのメソッドを全部実行して、実行結果をconsole.logで出力する
// ターミナル上に出力される
console.log('math.add(1, 2)', math.add(1, 2));
console.log('math.sub(3, 4)', math.sub(3, 4));
console.log('math.mul(5, 6)', math.mul(5, 6));
console.log('math.div(7, 8)', math.div(7, 8));
