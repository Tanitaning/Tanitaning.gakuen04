// 名前の情報を取得して
// 検索ボタンをおす
'use strict'
const button = document.getElementById("searchBtn");

button.addEventListener("click",searchToBrowser);

// データを表示したい
function searchToBrowser(){
    // 検索のinputタグのでーたを取得
    const name = document.getElementById("anyName").value;

    //その名前を使って、Valueの値を取得してデータにアクセス
    const sample = localStorage.getItem(name);
    const data = JSON.parse(sample);

    const joukyou = data.joukyou
    const naiyou = data.naiyou

    // 表示したい要素を追加したい
    const div1 = document.createElement("div1")
    div1.id = "test";
    div1.textContent = joukyou;
    const divaaaaa = document.querySelector(".aaaaa");
    divaaaaa.appendChild(div1);

    const div2 = document.createElement("div2")
    div2.id = "tests";
    div2.textContent = naiyou;
    divaaaaa.appendChild(div2);

    //上記divに対して、17行目の値を代入したい

    


}


