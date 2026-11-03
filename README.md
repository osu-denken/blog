# blog

電子計算研究部（電研）の公式ブログを Hugo で作るリポジトリです。

## 構成

- `hugo.toml`: 設定と、部品（`hugo-gh-admin`・`hugo-shortcodes`）の取り込み
- `layouts/`: テーマ（画面の形）
- `assets/`・`static/js/denken/`・`static/lib/`: スタイルと、ブラウザで動く JS
- `posts/`: 記事リポジトリ（`osu-denken/denken-articles`）を clone する場所。Git の対象外

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
