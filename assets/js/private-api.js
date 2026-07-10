// 非公開記事は web-api が認証と権限を確認してから返す。静的サイトには含まれない
const PRIVATE_API_BASE = 'https://api.osudenken4dev.workers.dev';

// 非公開記事のURL。スラッグはクエリで渡す
function privatePostUrl(slug) {
  return '/blog/private/?page=' + encodeURIComponent(slug);
}

// 認証つきで web-api を叩く。ログインしていなければ null を返す
async function fetchPrivate(path, body) {
  const token = localStorage.getItem('idToken');
  if (!token) return null;

  const res = await fetch(PRIVATE_API_BASE + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(body || {})
  });

  // 権限が無い、または期限切れ。どちらも非公開記事を見せない扱いにする
  if (!res.ok) return null;

  const data = await res.json();
  return data && data.success ? data : null;
}
