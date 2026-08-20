// ==========================================
//  シングルバトルのデータ
// ==========================================
const singleWeaknessData = [
    "イッカネズミに破壊された",
    "サーナイトが重い",
    "ブリムオンが重い"
  ];
  
  // ▼シングルの改善策データを追加！
  const singleImprovementData = [
    "イッカネズミ対策として、特性さめはだでHBに振って受けれるようにするか、ノーマルを無効、半減にするタイプを入れる",
    "サーナイト対策として、鋼タイプを入れる。しんくうはとマジカルフレイムをどうするか。",
    "ブリムオン対策として、サーナイトと同じ感じになりそう。トリルが重いからちょうはつを誰かに入れるといいかも。",
    "<span class='poke-out'>OUT: ライチュウ</span> ➔ <span class='poke-in'>IN: ヒートロトム</span> : メガ枠3枠は多すぎた",
    "<span class='poke-out'>OUT: ヒスイヌメルゴン</span> ➔ <span class='poke-in'>IN: ギルガルド</span> : 格闘が重かった",
  ];
  
  // ==========================================
  //  ダブルバトルのデータ
  // ==========================================
  const doubleWeaknessData = [
    "フシギバナの持ち物を変えるべきかも。基本メガをリザードンに切ってる",
  ];
  
  // ▼ダブルの改善策データを追加！
  const doubleImprovementData = [
    "これから"
  ];
  
  // ==========================================
  // 処理部分
  // ==========================================
  
  // 【シングル】のリストを書き出す
  const singleList = document.getElementById("single-weakness-list");
  if (singleList) {
    singleWeaknessData.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item;
      singleList.appendChild(li);
    });
  }
  const singleImpList = document.getElementById("single-improvement-list");
  if (singleImpList) {
    singleImprovementData.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item;
      singleImpList.appendChild(li);
    });
  }
  
  // 【ダブル】のリストを書き出す
  const doubleList = document.getElementById("double-weakness-list");
  if (doubleList) {
    doubleWeaknessData.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item;
      doubleList.appendChild(li);
    });
  }
  const doubleImpList = document.getElementById("double-improvement-list");
  if (doubleImpList) {
    doubleImprovementData.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item;
      doubleImpList.appendChild(li);
    });
  }
  
  // タブを切り替える処理
  window.switchTab = function(event, tabId) {
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.remove("active"));
  
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(button => button.classList.remove("active"));
  
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
  }