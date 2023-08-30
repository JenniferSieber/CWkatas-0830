// 6kyu, 7kyu, 8kyu
// KATA 1 8kyu
// https://www.codewars.com/kata/5721a78c283129e416000999
const pickIt = arr => {
  const odd = [];
  const even = [];
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] % 2 === 0 ) 
    { even.push(arr[i]) }
    else { odd.push(arr[i]) }
  }
  return [odd, even];
}

console.log(pickIt([1,2,4,5,3]));

// KATA 2 8kyu
// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
const grabDoll = dolls => {
  const bag = [];
  for (let i=0;i<dolls.length;i++) {
    let doll = dolls[i];
    if (doll == 'Hello Kitty' || doll == 'Barbie doll') {
      bag.push(doll);
    } else {
      continue;
    }
    if (bag.length === 3) break;
  }
  return bag;
}

 console.log( grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]));
 console.log( grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]));

// KATA 3 8kyu
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000
const giveMeFive = obj => {
  let arr = [];
  for (let key in obj) {
    if (key === 5 || key.length === 5) arr.push(key);
    if (obj[key].length === 5) arr.push(obj[key]);
  }
  return arr;
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world" })); 
console.log(giveMeFive({Pears:"than",apple:"sweet"})); 

// KATA 4 8kyu
//  https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript
//const whatNumberIsIt = n => `Input number is ${Number(n)}`;
const whatNumberIsIt = n => `Input number is ${isNaN(n) ? "Number.NaN" : n == Number.MAX_VALUE ? "Number.MAX_VALUE" : n == Number.MIN_VALUE ? "Number.MIN_VALUE" : n > Number.MAX_VALUE ? "Number.POSITIVE_INFINITY" : n < Number.MIN_VALUE ? "Number.NEGATIVE_INFINITY" : n}`;

console.log(whatNumberIsIt(1/0));  

// KATA 5 8kyu
//  https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
// .toString(16) hexadecimal
const colorOf = (r,g,b) => `#${r.toString(16).padStart(2,0)}${g.toString(16).padStart(2,0)}${b.toString(16).padStart(2,0)}`;

console.log(colorOf(1, 2, 3));


