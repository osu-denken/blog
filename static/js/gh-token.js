// 公式サイトのログイン（idToken）で、web-api から GitHub のトークンを受け取る。
// トークンはブラウザで管理画面（hugo-gh-admin）が使う。記事の保存はブラウザから GitHub を直接叩く（サーバーは通さない）。
const API = 'https://api.osudenken4dev.workers.dev';

async function refreshIdToken() {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) return null;
  const res = await fetch(`${API}/user/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });
  const data = await res.json().catch(() => ({}));
  if (!data.idToken || !data.refreshToken) return null;
  localStorage.setItem('idToken', data.idToken);
  localStorage.setItem('refreshToken', data.refreshToken);
  return data.idToken;
}

export async function getGitHubToken() {
  let idToken = localStorage.getItem('idToken');
  if (!idToken) return null;

  const send = (token) => fetch(`${API}/github/session-token`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });

  let res = await send(idToken);
  if (res.status === 401) {
    idToken = await refreshIdToken();
    if (!idToken) return null;
    res = await send(idToken);
  }
  if (!res.ok) return null;

  const data = await res.json().catch(() => ({}));
  return data.token ?? null;
}
