# denken-hugo-blog

Hugo Modules の部品（`hugo-gh-admin`・`hugo-shortcodes`）を取り込んだ、検証用の小さなサイトです。

## 目的

- 管理画面の部品の契約（設定・partial・テーマの雛形）が、別のサイトでも満たせるかを確かめる。
- テーマは、契約を満たす最小限のものを新しく書く。

## 構成

- `hugo.toml`: 設定と、2 つの部品の取り込み。`params.ghAdmin.repo` は架空のリポジトリを指すため、この検証では記事を保存しない。
- `layouts/`: 最小限のテーマ（`baseof`・`list`・`single`・`404`、partial）。
- `content/posts/sample-*.md`: 架空の記事。コミットする。
- `content/posts/` のそれ以外: 検証用に持ってきた実際の記事。Git の対象外（`.gitignore`）。

## 確認

```sh
hugo --minify
```

## 注意

- 実際の記事（部員の文章）は、コミットしない。公開するかどうかは、内容を確認してから決める。
- `layouts/partials/external-meta.html` と `post-url.html` は、本体のテーマから写している。管理画面の索引が `external-meta.html` を読むため、テーマはこれを用意する必要がある。
