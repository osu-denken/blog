---
title: "電研Webシステムの使い方"
date: 2025-12-16
categories: []
tags: [マニュアル]
layout: default
author: osu-denken
---

## システムの概要 (電研Webサイト)
電子計算研究部内部向けのシステムでブログ管理や部員管理などあらゆる機能を統合しています。

Jekyll で構築したブログ以外のWebシステムは電研の独自実装、独自APIとなっており、フロントエンドとバックエンドを別々に分離しています。<br>
Next.jsはGitHub Pages上へ静的エクスポートしてデプロイするためにSSGとして利用しています。<br>
REST API の多くは部員のみが利用できます。ライセンスはMITです。安全にGitHub PagesやFirebase、その他各種サービスにWorkersを経由してアクセスします。

- フロントエンド『osu-denken.github.io』 Next.js/TypeScript on GitHub Pages
- バックエンド『OSU-Denken Web API』 TypeScript on Cloudflare Workers

詳しくは [osu-denken.github.io](https://github.com/osu-denken/osu-denken.github.io), [OSU-Denken Web API](https://github.com/osu-denken/web-api) をご覧ください。

## ユーザー登録について (仮)
入部した者のみユーザーを登録することが可能です。<br>
ユーザーを登録するには他の部員から招待コードを受け取る必要があります。

※なお今後、登録する仕組みを変更する可能性があります。

## ログインについて
電研Webサイトのナビゲーションバーにあるログインからログイン画面を開きます。

![image](/blog/images/a845ebe9-cc9e-4b7a-b800-3d08ca2c3e98.png)

学籍番号とパスワードを入力してログインします。

![image](/blog/images/71e4a774-3230-422b-b2e1-85dca47b672e.png)

## ポータルについて
ログインするとログアウトの隣にあなたの学籍番号が表示されます。(ディスプレイ名を設定している場合はディスプレイ名が反映)

![image](/blog/images/76ef7dad-0d57-4196-9170-c474f4d19c96.png)

## ブログの投稿、編集について

### 新しくページを投稿する
![image](/blog/images/9f6a78dd-2467-4493-92a0-5f3e9b965a7e.png)

### 現在開いているページを編集する
![image](/blog/images/fe91ee54-2878-4b95-920b-e36749084e30.png)

## ブログの編集画面について
ブログはMarkdown記法で記述します。<br>

![image](/blog/images/d35dc87e-7e54-42cd-920f-70ca356b5d71.png)

左側が入力画面、右側がプレビュー画面となります。

{% include card.html url="https://qiita.com/Qiita/items/c686397e4a0f4f11683d" title="Markdown記法 チートシート" description="Markdown記法のチートシートです。 記法はGitHub Flavored Markdownに準拠し、一部拡張しています。 Qiitaでシンタックスハイライト可能な言語一覧" %}

### 画像のアップロードと貼り付け
ブログ編集画面で直接、画像をアップロードして貼り付けることができます。<br>
なお、デプロイに時間がかかるため、1～3分ほどは画像が表示されません。

- クリップボードから貼り付ける
 画像をコピーし、入力画面でCtrl + Vを入力することで画像をアップロードして貼り付けます。
 
 - ドラッグ&ドロップで貼り付ける
 画像ファイルを入力画面にD&Dすることでアップロードして貼り付けます。
