// ==========================================
//  建築ギャラリーのデータ（ここを編集！）
// ==========================================
const buildData = [
    {
      title: "水上モダンハウス",
      image: "../fig/maikura_water_modern.jpg", // 画像ファイルのパス
      // ▼ここから詳細データ（ポップアップ用）
      materialsFull: "クォーツブロック×約2スタック、灰色のコンクリート×約1スタック、板ガラス×約30枚",
      steps: [
      "1. 水中に土台となる柱（深さ3ブロック）を4本立てる",
      "2. 柱の上にクォーツで床の枠組みを作る（10×15ブロック）",
      "3. 灰色のコンクリートで壁を立ち上げる（高さ4ブロック）",
      "4. 海側の壁をすべて板ガラスにして、ランタンを吊るす"
    ]

    },
    {
      title: "木造の風車小屋",
      image: "../fig/maikura_wooden_windmill.jpg",
      // ▼ここから詳細データ（ポップアップ用）
      materialsFull: "オークの原木×3スタック、石レンガ×2スタック、白色の羊毛×40個",
      steps: [
      "1. 石レンガで円形の土台（直径7ブロック）を作る",
      "2. オークの原木で柱を建てながら、上に行くほど細くなるように壁を積む",
      "3. 頂上に屋根を作り、正面にフェンスで風車の軸を作る",
      "4. 羊毛を使って、斜め方向に羽（長さ6ブロック）を4枚広げる"
    ]
    }
  ];
  
 // ==========================================
// 処理部分
// ==========================================

// 1. 建築カードの書き出し処理
const galleryContainer = document.getElementById("build-gallery");
if (galleryContainer) {
  buildData.forEach((build, index) => {
    const card = document.createElement("div");
    card.className = "build-card";
    // onclick属性を追加し、クリック時に openModal(番号) を実行するようにしました
    card.setAttribute("onclick", `openModal(${index})`);
    
    card.innerHTML = `
      <img src="${build.image}" alt="${build.title}" onerror="this.src='https://via.placeholder.com/400x225/1a1a2e/ffffff?text=No+Image'">
      <div class="build-info">
        <h4>${build.title}</h4>
      </div>
    `;
    galleryContainer.appendChild(card);
  });
}

// 2. ポップアップ（モーダル）を開く処理
window.openModal = function(index) {
  const build = buildData[index]; // クリックされた建築のデータを取得
  
  document.getElementById("modal-title").textContent = build.title;
  document.getElementById("modal-image").src = build.image;
  document.getElementById("modal-image").onerror = function() { this.src='https://via.placeholder.com/400x225/1a1a2e/ffffff?text=No+Image'; };
  document.getElementById("modal-materials").textContent = build.materialsFull;
  
  // 手順（リスト）の書き出し
  const stepsContainer = document.getElementById("modal-steps");
  stepsContainer.innerHTML = ""; // 前のデータを消す
  build.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    li.style.marginBottom = "8px"; // 見やすくするために少し隙間をあける
    stepsContainer.appendChild(li);
  });
  
  // モーダルを表示する
  document.getElementById("build-modal").style.display = "block";
}

// 3. ポップアップ（モーダル）を閉じる処理
window.closeModal = function() {
  document.getElementById("build-modal").style.display = "none";
}

// （おまけ）モーダルの黒い背景部分をクリックしても閉じるようにする
window.onclick = function(event) {
  const modal = document.getElementById("build-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 4. タブ切り替え処理（変更なし）
window.switchTab = function(event, tabId) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(content => content.classList.remove("active"));
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(button => button.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  event.currentTarget.classList.add("active");
}