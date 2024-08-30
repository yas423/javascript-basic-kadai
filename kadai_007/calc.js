// 変数numに0～4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 16);
 
// 変数numの値を出力する（確認用）
console.log(num);

// 変数(num)が3の倍数の場合
if (num === 3 || num === 6 || num === 9 || num === 12) {
  console.log('3の倍数です');
}

// 変数(num)が5の倍数の場合
else if (num === 5 || num === 10) {
  console.log('5の倍数です');
}

// 変数(num)が3と5の倍数の場合
else if (num === 15) {
  console.log('3と5の倍数です') 
}

// それ以外のときは変数(num)を出力する
else {
  console.log(num);
}