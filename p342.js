// let string1;



// string1 = "Hello, World!";
// let string2 = 'Hello, World!';
// console.log(string1);
// console.log(string2);


// string1 = '문자열은 큰따옴표(")로 감싸면 됩니다.';
// string2 = "문자열은 작은따옴표(')로 감싸면 됩니다.";
// console.log(string1);
// console.log(string2);


// let string = '문자열' + " 연결 연산자";
// console.log(string);

// string = '문자열은 큰따옴표(")나' + " 작음따옴표(')로 감싸면 됩니다.";
// console.log(string);


// string = '문자열은 큰따옴표(")나 작은따옴표(\')로 감싸면 됩니다.';


// string = `이스케이프 문자를 이용해서
// 줄 바꿈하고 싶어요`;

// string = `문자열은 큰따옴표(")나
//  작은따옴표(')로 감싸면 됩니다.`;
// console.log(string);


// let dan = 3;
// let gugu = 8;
// let string = `${dan} 곱하기 ${gugu}은 ${dan * gugu}입니다.`;
// console.log(string);

// let sum = 0.1 + 0.2;
// console.log(sum);

// let boolean1 = true;
// let boolean2 = false;
// console.log(boolean1); // true
// console.log(boolean2); // false

// boolean1 = 10 < 20;
// boolean2 = 10 > 20;
// console.log(boolean1); // true
// console.log(boolean2); // false

// let empty;
// console.log(empty); // underfined

// let empty = null;
// console.log(empty); // null

// let koreanScore = 80;
// let englishScore = 70;
// let mathScore = 90;
// let scienceScore = 60;

// let studentScore = [80, 70, 90, 60]; // 국어, 영어, 수학, 과학 점수

// let studentScore = [80, 70, 90, 60]; 
// console.log(studentScore[1]);

// let array = ['abc', 10, true, undefined, null, [], {},function(){}];
// let array = [];

// let studentScore = [80, 70, 90, 60];

// let studentScore = {
//     koreanScore:80,
//     englishScore:70,
//     mathScore:90,
//     scienceScore:60
// };
// console.log(studentScore.koreanScore); //80
// console.log(studentScore['englishScore']); //70

// let sum = 10 + 20; // 30
// console.log(sum);
// let sub = 20-10; // 10
// console.log(sub);
// let multi = 10 * 20; // 200
// console.log(multi);
// let div = 10 / 2; // 5
// console.log(div);
// let remain = 10 % 3; // 1
// console.log(remain);
// let expon = 2 ** 3; // 8(2의 3승)
// console.log(expon);
// let q1 = 10 + 10 * 2;
// let q2 = 10 === 10 || 10 !== "10";
// let q3 = !(10 < 20) && 10 < 20;
// console.log(q2)
// console.log(q3)
// console.log(q1)

// switch(key){
//     case value1:
//         //key가 value1일 때 실행할 블록문
//         break;
//     case value2:
//         //key가 value2일 때 실행할 블록문
//         break;
//     default:
//         //아무것도 일치하지 않을 때 실행할 블록문
//         break;
// }




// let food = "melon";
// switch(food){
//     case "melon":
//         console.log("fruit");
//         break;
//     case "apple":
//         console.log("fruit");
//         break;
//     case "banana":
//         console.log("fruit");
//         break;
//     case "carrot":
//         console.log("vegetable");
//         break;
//     default:
//         console.log("It's not fruits and vegetables.");
//         break;
// }

// let food = "melon";
// switch(food){
//     case "melon":
//     case "apple":
//     case "banana":
//         console.log("fruit");
//         break;
//     case "carrot":
//         console.log("vegetable");
//         break;
//     default:
//         console.log("It's not fruits and vegetables.");
//         break;
// }

// let score = 90;
// if(score >= 90){
//     console.log("A++ 학점");
// }

// let score = 90;
// if(score >= 90 && score <= 100){
//     console.log("A++ 학점");
// }

// let score = 90;
// if(score >= 90 && score < 100){
//     console.log("A++ 학점");
// }

// let score = 90;
// switch(score/10){
//     case 9:
//     // case 90:
//     // case 91:
//     // case 92:
//     // case 93:
//     // case 94:
//     // case 95:
//     // case 96:
//     // case 97:
//     // case 98:
//     // case 99:
//         console.log("A++ 학점");
//     break;
// default:
//     break;
// }

// while(조건식){
//     // 조건식이 참이면 실행
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// let num = 1;
// while(num <= 9999){
//     console.log(num);
//     num++;
// }

// let num = 1;
// while(num <= 9999){
//     console.log(num);
//     num++ //코드가 한 번 반복될 때 마다 num 변수를 1씩 증가시킵니다.
// }
// // do{
// //     //블록문
// // }while(조건식);

// do {
//     console.log("무조건");
//     console.log("한 번은 실행");
// }while(false);

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// for(let i = 0; i < 2; i++){
//     console.log(`i: ${i}`);
//     for(let k = 0; k < 2; k++){
//         console.log(`k: ${k}`);
//     }
// }

// let arr = ["banana", "apple", "orange"];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let obj = {name:"철수", age:"20"};
// for(let key in obj){
//     console.log(key +":" + obj[key]);
// }

// let arr = ["arange", "banana", "apple"];
// for(let index in arr){
//     console.log(index + ": " + arr[index]);
// }

// for(let i = 0; i < 10; i++){
//     console.log(i);
//     if(i === 5) break;
// }

// let obj = {name:"철수", age:20};
// for(let key in obj){
//     if(key === "age") break;
//     console.log(obj[key]);
// }

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 1) continue;
//     console.log(i);
// }

// for(let i = 1; i <= 9; i++){
//     console.log(`3* ${i} = ${3 * i}`);
// }

// function gugudan(){ // 함수 시작
//     for(let i = 1; i <= 9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }

// function gugudan(){
//     for(let i = 1; i <= 9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }
// gugudan();

// const gugudan = function gugudan(){
//     for(let i = 1; i <= 9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }
// gugudan();

// const gugudan = function(){
//     for(let i=1; i<=9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// };
// gugudan();

// #
// const gugudan = function naming(){
//     for(let i = 1; i <= 9; i++){
//     }
// };
// naming();

// const gugudan = () => {
//     for(let i = 1; i <= 9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// };
// gugudan();

// function gugudan5(){
//     for(let i=1; i<=9; i++){
//         console.log(`5 * ${i} = ${5 * i}`);
//     }
// }
// function gugudan8(){
//     for(let i=1; i<=9; i++){
//         console.log(`8 * ${i} = {8 * i}`);
//     }
// }
 
// function gugudan(dan){
//     for(let i = 1; i <= 9; i++){
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }
// gugudan(3);
// gugudan(5);
// gugudan(8);

// function sum(a = 10, b = 10){
//     console.log(a, b);
// }
// sum();
// #
// function sum(sum1, sum2){
//     let result = num1 + num2;
//     console.log("inner:" + result);
// }
// sum(10, 20);

// function sum(num1, num2){
//     let result = num1 + num2;
// }
// sum(10, 20);
// console.log("out: " + result);

// function sum(num1,num2){
//     let result = num1 + num2;
//     return result;
// }
// const result = sum(10, 20);
// console.log("out: "+ result);

// function sum(num1, num2){
//     return num1 + num2;
// }
// const result = sum(10, 20);
// console.log("out: "+ result);

// function sum(num1, num2){
//      if(typeof num1 !== "number" || typeof num2 !== "number"){
//         return;
//     }
//     return num1 + num2;
// }
// let result = sum("a", "b");
// console.log("out: " + result);
// let a = 10;
// function sum(){
//     console.log(`함수 내부: ${a}`);
// }
// sum();
// console.log(`함수 외부: ${a}`);

// function sum(){
//     let a = 10;
//     console.log(`함수 내부: ${a}`);
// }
// sum();
// console.log(`함수 외부: ${a}`);

// let a = 10;
// {
//     let b = 20;
//     console.log(`코드 블록 외부 a: ${a}`);
//     console.log(`코드 블록 외부 b: ${b}`);
// }
// console.log(`코드 블록 외부 a: ${a}`);
// console.log(`코드 블록 외부 b: ${b}`);

// var a = 10;
// {
//     var b = 20;
//     console.log(`코드 블록 내부 a: ${a}`);
//     console.log(`코드 블록 내부 b: ${b}`);
// }
// console.log(`코드 블록 외부 a: ${a}`);
// console.log(`코드 블록 외부 b: ${b}`);

// let a = 10;
// const b = 20;
// function sum(){
//     let a = 50;
//     const b = 70;
//     console.log(`함수 내부 a: ${a}`);
//     console.log(`함수 내부 b: ${b}`);
// }
// sum();

// printHello();
// function printHello(){
//     console.log("Hello");
// }
// #
// function pritnHello(){
//     console.log("Hello");
// }
// printHello();
// #
// printHello();
// var printHello = function pirntHello(){
//     console.log("Hello");
// }

// var printHello;
// printHello();
// printHello = function printHello(){
//     console.log("Hello");
// }

// const init = function(){
//     console.log("initialized!");
// }

// (function init(){
//     console.log("initialized!");
// })();

// #
// (function init(){
//     console.log("initialized!");
// })();
// init();

// (function sum(a, b){
//     console.log(a + b);
// })(10, 20);

// const result = (function(a, b){
//     function init(){
//         return doSum(a, b);
//     }
//     function doSum(a, b){
//         return a + b;
//     }
//     return init();
// })(10, 20);
// console.log(result);
