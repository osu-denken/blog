---
title: "C言語でのプログラミングのための開発環境構築"
date: 2025-11-09
categories: []
tags: [情報システム学科,プログラミング,C言語]
layout: default
---

## エディタ - VSCode の導入
統合開発環境（IDE）、厳密には異なり、機能の一つではあるが、いわゆるプログラミングをするためのコード編集ツール、エディタを導入します。<br>
実行環境、コンパイラ、テキストエディタがあればコーディングはできるのですが、それらの機能が一つにしたものがIDEと言えるでしょう。

IDEの一つとして有名なものとしてVisual Studio Codeがあります。他にもVisual Studio 2022やIntelliJ IDEA、Eclipseなどがあります。<br>
特に理由がなければ以下のリンクからVSCodeをダウンロードしてインストールしましょう。

{% include card.html url="https://code.visualstudio.com/" title="Visual Studio Code - The open source AI code editor" description="Visual Studio Code redefines AI-powered coding with GitHub Copilot for building and debugging modern web and cloud applications. Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows." %}

## 圧縮/解凍ソフト - 7-Zip の導入 (任意)
下記のリンクから7-Zip をインストールします。
{% include card.html url="https://7-zip.opensource.jp/" title="圧縮・解凍ソフト 7-Zip" description="圧縮・解凍ソフト7-Zipは、7z、ZIP、RAR、LZH、ISO、TAR、DMG、MSIなど、さまざまなデータフォーマットに1つで対応している世界的にデファクトのフリーソフトウェアです。AES256による暗号化（パスワード圧縮および解凍）も可能なおすすめのソフトです。" %}

## コンパイラ - MinGW の導入
Windows向けにはGCC(C/C++コンパイラ)やヘッダファイルなどのパッケージがまとまっているMinGWがあります。

{% include card.html url="https://github.com/niXman/mingw-builds-binaries/releases" title="Releases · niXman/mingw-builds-binaries" description="MinGW-W64 compiler binaries. Contribute to niXman/mingw-builds-binaries development by creating an account on GitHub." %}

1. 上記のリンクを開き、`x86_64-15.2.0-release-win32-seh-ucrt-rt_v13-rev0.7z` を選択してダウンロードします。

![2025-11-10-mingw.png](https://osu-denken.github.io/blog/images/2025-11-10-mingw.png)

2. ダウンロードしたファイルを 7-Zip もしくは OSデフォルトの機能で展開します。

![2025-11-10-dlfile.png](https://osu-denken.github.io/blog/images/2025-11-10-dlfile.png)

3. 展開して作成されたフォルダ`x86_64-15.2.0-release-win32-seh-ucrt-rt_v13-rev0`の中に入っている`mingw64`を任意の場所に移動します。ここでは Cドライブ直下にlangフォルダを作成し、そこに `C:/lang/mingw64/` として移動しました。
Cドライブ直下を開くには、エクスプローラー -> PC -> 任意のドライブ名 (C:) より開きます。

## システム環境変数のパスを設定する
次に`C:\lang\mingw64\bin` にコンパイラが入っているため、環境パスとして設定します。

1. 設定 -> システム -> バージョン情報 から システムの詳細設定 を開きます。

![2025-11-10-setting.png](https://osu-denken.github.io/blog/images/2025-11-10-setting.png)

2. 「環境変数(N)...」ボタン を選択します。

![2025-11-10-sys-detail.png](https://osu-denken.github.io/blog/images/2025-11-10-sys-detail.png)


3. 開かれたウィンドウの下側「システム環境変数(S)」 の 変数 Path をダブルクリックします。もしくは選択して「編集(I)...」ボタンをクリックします。

![2025-11-10-select-path.png](https://osu-denken.github.io/blog/images/2025-11-10-select-path.png)

4. 「新規(N)」ボタン を選択し、入力欄が出てくるので先ほど移動したmingw64のbinフォルダを指定します。ここでは `C:\lang\mingw64\bin` を指定しました。問題なければOKボタンをクリックします。

![2025-11-10-set-path.png](https://osu-denken.github.io/blog/images/2025-11-10-set-path.png)

5. 「OK」をクリックします。
![2025-11-10-env-ok.png](https://osu-denken.github.io/blog/images/2025-11-10-env-ok.png)

## コードを実行する
VSCode上で下記のコードを動作確認で実行してみてください。

```c
#include <stdio.h>

int main() {
    printf("こんにちは, World!\n");
    return 0;
}
```





