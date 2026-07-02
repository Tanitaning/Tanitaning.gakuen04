'use strict'
const button = document.getElementById("button");

button.addEventListener("click",saveToBrowser);
function saveToBrowser() {
const Date = document.getElementById("BirthDate").value;
const place = document.getElementById("place").value;
const situation=document.getElementById("situation").value;
 // 品名
const hinmei = document.getElementById("productName").value;
// 指導員
const teacher = document.getElementById("teacher").value;
// 内容
const content = document.getElementById("content").value;
//1なぜ
const one = document.getElementById("one").value;
console.log(one);
//2なぜ
const two = document.getElementById("two").value;
//3なぜ
const three = document.getElementById("three").value;
//4なぜ
const four = document.getElementById("four").value;
//5なぜ
const five = document.getElementById("five").value;
//真因
const cause = document.getElementById("cause").value;
//対策
const countermeasure = document.getElementById("countermeasure").value;
 
console.log("通過")

const nazeInfo = {
        occurrenceDate:Date,
        occurrencePlace:place,
        joukyou:situation,
        hinmei:hinmei,
        sidouin:teacher,
        naiyou:content,
        onenaze:one,
        twonaze:two,
        threenaze:three,
        fournaze:four,
        fivenaze:five,
        sinnin:cause,
        taisaku:countermeasure
    }
    const key = document.getElementById("FirstName").value;
    // const value = document.getElementById("product-name").value;
    localStorage.setItem(key,  JSON.stringify(nazeInfo));
    alert("保存しました！");
}
// キー 'theme', 値 'dark' を保存
localStorage.setItem('theme', 'dark');
