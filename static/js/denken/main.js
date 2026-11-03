// 部の公式サイトのログイン（idToken）と、テーマの切り替え。denken-blog から移した
// テーマ切り替え（初期値は head.html のインラインスクリプトで設定済み）
function applyThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function() {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });

  // 明示的に選択していない場合のみOSの設定に追従する
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', function(e) {
    let saved = null;
    try {
      saved = localStorage.getItem('theme');
    } catch (err) {}
    if (saved === 'light' || saved === 'dark') return;
    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  });
}


// ログインしているときの処理
function applyUserNav() {
  const login = document.getElementById('nav-login');

  // ナビバーの書き換え
  const loginLink = login.getElementsByTagName('a')[0];
  loginLink.href = '#logout';
  loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem("idToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("displayName");
    window.location.reload();
  });
  loginLink.textContent = 'ログアウト';
}



// 全体読み込み後に初期化する
document.addEventListener('DOMContentLoaded', function() {
  applyThemeToggle();

  const token = localStorage.getItem("idToken");
  if (token) {
    applyUserNav();
  }
});
