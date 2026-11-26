# blog

電子計算研究部（電研）の公式ブログを Hugo で作るリポジトリです。

## 構成

- `hugo.toml`: 設定と、[Blogit](https://github.com/kmmz532/blogit) のテーマ（`themes/base`）の取り込み。管理画面（`hugo-gh-admin`）と `hugo-shortcodes` も、テーマ経由で取り込む。版は固定せず、ビルドのたびに最新を利用する
- `layouts/`: 電研ブログの見た目（トップページのグリッド、ヘッダー、フッター、記事ページなど）。テーマの同じパスのファイルを上書きする。サイドバー・アーカイブ・目次などは、テーマのものを使う
- `assets/`・`static/js/denken/`・`static/lib/`: スタイルと、ブラウザで動く JS
- `posts/`: 記事リポジトリ（`osu-denken/denken-articles`）を clone する場所。Git の対象外

## 管理画面のログイン

公式サイトにログインしていれば、そのトークン（`static/js/gh-token.js`）で管理画面を使える。ログインしていない場合は、ログイン画面の「GitHubでログイン」（BlogitのOAuth Appを共用する）か、トークンの入力でログインする。

## 手元で動かす

記事リポジトリを clone してから、開発サーバーを起動します。

```sh
git clone git@github.com:osu-denken/denken-articles.git posts
npm run dev
```

ブラウザで http://localhost:1323/blog/ を開きます。

## 確認

```sh
npm run check
npm run build
```
