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
     if (!sample) {
        alert("該当するデータがありません");
        return;
    }
    const data = JSON.parse(sample);

    const naiyou = data.naiyou
    const Date = data.occurrenceDate
    const joukyou = data.joukyou
    const hinmei = data.hinmei
    const cause = data.sinnin
    const place = data.occurrencePlace


    // 表示したい要素を追加したい

    
    const div1 = document.createElement("div1")
    div1.id = "test";
    div1.textContent = joukyou;
    const divaaaaa = document.querySelector("#jk");
    divaaaaa.appendChild(div1);
    
    const div2 = document.createElement("div2")
    div2.id = "tests";
    div2.textContent = naiyou;
    const divbbbbb = document.querySelector("#ny");
    divbbbbb.appendChild(div2);
    
    const div3 = document.createElement("div3")
    div3.id = "testss";
    div3.textContent = cause;
    const divccccc = document.querySelector("#si");
    divccccc.appendChild(div3);
    
    const div4 = document.createElement("div4")
    div4.id = "days";
    div4.textContent = Date;
    const divd = document.querySelector("#day");
    divd.appendChild(div4);
    
    const div5 = document.createElement("div5")
    div5.id = "hin";
    div5.textContent = hinmei;
    const dive = document.querySelector("#name");
    dive.appendChild(div5);

    const div6 = document.createElement("div6")
    div6.id = "basyoo";
    div6.textContent = place;
    const divf = document.querySelector("#basyo");
    divf.appendChild(div6);

    const result = document.querySelector("#cmm")
    const omikuji =["管理者コメント：今の自分に何ができるか考えよう😁😁😁",
        "管理者コメント：周りのみんなにも情報を共有しよう👍👍👍",
        "管理者コメント：同じ内容が繰り返されないためになにができるかな？",
        "管理者コメント：今一度自分の行動を見直そう⚠️⚠️⚠️" ]
    const number = Math.floor(Math.random() * omikuji.length);
    result.textContent = omikuji[number]

}






