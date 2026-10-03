// ==========================================
//  シングルバトルのデータ
// ==========================================
const singleWeaknessData = [
    "メガボーマンダに破壊された"
  ];
  
  // ▼シングルの改善策データを追加！
  const singleImprovementData = [
    "メガボーマンダ対策として、物理受けのポケモンか、ひこう、ドラゴン、地面を無効、半減にするタイプを入れる",
  ];
  
  // ==========================================
  //  ダブルバトルのデータ
  // ==========================================
  const doubleWeaknessData = [
    "晴れパが重い",
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