// OS判定関数
function detectOSGroup() {
  const ua = navigator.userAgent || "";
  const platform = (navigator.platform || "").toUpperCase();

  // Windows判定
  const isWindows = /Windows NT/.test(ua) || platform.indexOf("WIN") >= 0;

  // Linux判定（Androidは除外）
  const isLinux = /Linux/.test(ua) && !/Android/.test(ua);

  // PC系OS = Windows または Linux
  if (isWindows || isLinux) {
    return "PC";
  }

  // それ以外 = Mac, iOS, Android など
  return "Other";
}

// 判定結果を取得
const osGroup = detectOSGroup();

// リダイレクト処理
if (osGroup === "PC") {
  // PC系は windows.html に飛ばす
  window.location.replace("windows.html");
}

const button = document.getElementById('button');
const block  = document.getElementById('overlay');
button.addEventListener('click', () => {
console.log('success!');
overlay.style.display = "block";
});