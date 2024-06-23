

/*Project Standards
 - LOgin Standards
 -Naming Standards
     function,method,variable => CAMEL
     class => PASCAL
     folder => KEBAB 
     css => SNAKE CASE 

Error Handling

*/ 

/*
API:
Traditional API
Rest API 
GraphQL API

*/




/*
Traditional Frontend Development => BSSR  => EJS (framework)
Modern Frontend Development      => SPA   => frontend miz backend dan qabul qiladi (HTMl di ozi xosil qiladi) REACT (library)


*/

// L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";


function reverseSentence(str:string){
  let asItis = str.split(' ').reverse() .join( ' ');
  
    let example = ' '; 
   
   

    for (let i = asItis.length -1; i >= 0 ; i--) {
      example+=asItis[i];

    }
    
    return example;

}
const result = reverseSentence("hello how are you");

console.log(result);






// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function getVowels(str:string){
//   let vowelCount = 0;

// for (let b = 0; b < str.length; b++) {
//  if (str[b] === "a" || str[b] === "i" || str[b] === "e" || str[b] === "o" || str[b] === "u" ) {
//   vowelCount++;
//  }

// }
// return vowelCount;

// }

// const result = getVowels("stringagmagmowemnmuenfj");
// console.log(result);


// J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(str) {
//   const words = str.split(' ');

//   let longestWord = '';
//   for (let word of words) {
//       if (word.length > longestWord.length) {
//           longestWord = word;
//       }
//   }

//   return longestWord;
// }


// console.log(findLongestWord("I come from Uzbekistan")); 


// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function getMajorEle(numbers: number []){
//   let maxcount = 0;
//   let majorEle = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     let  count = 0;
//     for (let j = 0; j < numbers.length; j++) 
//     if (numbers[i] == numbers[j]) {
//       count++;
      
//     }
// if (count  > maxcount) {
//   maxcount = count
//   majorEle = numbers[i];
// }

// }
// return majorEle;
// }

// const result = getMajorEle([3,6,7,5,3,4,3,4,4]);

// console.log(result);






// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"



// function getDigits(digit:string):string{
//     let result: string = '';
//     for(let char of digit){
//       if(!isNaN(Number(char))){
// result += char;
//       }
//     }
//     return  result;

// }

// console.log(getDigits("ewknf242qwqwdqq344"));

















// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(numbers: number[]): string {
//     return numbers.filter(num => num > 0).join('');
// }

// const result = getPositive([1, -4, 2,5,7,-8]);
// console.log(result); 














// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
 
// const numbers = [12, 31, 44, 22, 55];
// let highestDigit = -1;

// function getHighestDigit() {
//     for (let count of numbers) {
//         while (count > 0) {
//             let digit = count % 10;  
//             if (digit > highestDigit) {
//                 highestDigit = digit;
//             }
//             count = Math.floor(count / 10);  
//         }
//     }
// }

// getHighestDigit();
// console.log(highestDigit);  