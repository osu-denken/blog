---
title: "部室の機器など"
date: 2025-11-05
last_modified_at: 2025-11-06
categories: []
tags: [マニュアル]
layout: default
---

何があるのかを一度再確認して把握するため、部室に置いてある機器、ケーブルなどを一覧としてまとめました。
ここではそれぞれいくつあるのかも記載しておくといいでしょう。

11/5時点での情報です。

## コンピュータ類
### デスクトップ 1
![デスクトップパソコン-1](https://osu-denken.github.io/blog/images/2025-11-06-pc-1.png)

- CPU: [Intel Core i5 12600K](https://www.intel.co.jp/content/www/jp/ja/products/sku/134589/intel-core-i512600k-processor-20m-cache-up-to-4-90-ghz/specifications.html) (3.7GHz, 10コア16スレッド, L1Cache-864KB L2Cache-9.5MB L3Cache-20MB)
- メモリ: 32GB (16GBx2, DDR5-4800 2400MHz, [ADATA](https://www.adata.com/jp/consumer/category/computer-memory/dram-module-ddr5-4800-u-dimm/))
- ストレージ: SSD 1TB (Samsung SSD 980 PRO 1TB)
- マザーボード: [ASUS ROG STRIX Z690-F GAMING WIFI](https://rog.asus.com/jp/motherboards/rog-strix/rog-strix-z690-f-gaming-wifi-model/)
- グラフィックス: [MSI NVIDIA GeForce RTX 4060](https://jp.msi.com/Graphics-Card/GeForce-RTX-4060-GAMING-X-8G) (GPU 3072コア 2490MHz, VRAM 8GB GDDR6 8500MHz, )
- 無線NIC: Intel Wi-Fi 6E AX210 160MHz
- OS: Windows 11 Pro

イーサネットでの利用のためWi-Fiは利用可能であるが、通常は無効にしている。

### デスクトップ 2
![デスクトップパソコン-2](https://osu-denken.github.io/blog/images/2025-11-06-pc-2.png)

- CPU: [AMD Ryzen 7 9800X3D](https://www.amd.com/ja/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9800x3d.html) (4.7GHz, 8コア16スレッド, L1Cache-640KB L2Cache-8MB L3Cache-96MB)
- メモリ: 32GB (16GBx2, DDR5-5600 2800MHz, 未調査)
- ストレージ: SSD 1TB (未調査)
- マザーボード: 未調査
- グラフィックス: NVIDIA GeForce RTX 3090 Ti, AMD Radeon Graphics (未調査)
- 無線NIC: あり (未調査)
- OS: Windows 11 Pro

イーサネットでの利用のためWi-Fiは利用可能であるが、通常は無効にしている。

### デスクトップ 3
![デスクトップパソコン-3](https://osu-denken.github.io/blog/images/2025-11-06-pc-3.png)

詳細未調査

### デスクトップ 4
![デスクトップパソコン-4](https://osu-denken.github.io/blog/images/2025-11-06-pc-4.png)

詳細未調査

### Raspberry Pi 4 Model B x2
![ラズパイ-フタあり](https://osu-denken.github.io/blog/images/2025-11-06-raspi-1.png)
![ラズパイフタなし](https://osu-denken.github.io/blog/images/2025-11-06-raspi-2.png)

手のひらサイズの小型コンピュータです。LinuxであるDebianベースのRaspberry OSがインストールされています。
大学祭の展示でScratchを用いたプログラミング体験に使いました。

### サーバ x3
- Dell PowerEdge R630 x3<br>
詳細は[部室サーバに関する情報など](https://osu-denken.github.io/blog/2025/10/30/club-sv.html) にて記載しています。

## ケーブル類
### LANケーブル
それぞれの機器をネットワークに繋げるためのケーブルです。LANケーブルの一つとしてUTPケーブルが多く使われています。  

### USBケーブル
ほとんどのデバイスに使われている充電かつデータ転送用のケーブルです。

### Lightningケーブル
従来のiPhoneに使われていたケーブルです。

### HDMIケーブル
映像用のケーブルです。多くの場合、このHDMIが使われます。

### VGAケーブル
映像用のケーブルです。古めのコンピュータに使われていたものです。

### DVIケーブル
映像用のケーブルです。

### DPケーブル
映像用のケーブルです。

### RCAケーブル/AVケーブル
映像用のケーブルです。古めのゲーム機などに使われていたものです。

## ネットワーク類
### L2スイッチ/ルータ UNIVERGE IX2215 (NEC)
![NEC IX2215](https://osu-denken.github.io/blog/images/2025-11-06-nec-ix2215.png)

{% include card.html url="https://jpn.nec.com/univerge/ix/Info/ix2215.html" title="UNIVERGE IX2215 : UNIVERGE IXシリーズ | NEC" description="UNIVERGE IX2000/IX3000シリーズ。ギガビット回線とワイヤレス回線に対応するオールインワンタイプの拠点用ルータ、UNIVERGE IX2215。" %}

- LANポート数 (合計): 10
  - GE0: 1
  - GE1: 1
  - GE2 (L2SW): 8
- その他コネクタ: USB, BRI(2B+1D)

厳密にはスイッチングハブを内蔵したルータですが、ここでは利用用途、機能として表記しています。
LANコネクタ（RJ-45コネクタ）がそこそこあるためスイッチとして利用しています。
同ネットワーク内を有線で接続するために使います。

ここから大学内のネットワーク（LEONET）を経由してインターネットを利用します。一番左側の1つのポートと大学のLANを接続します。

GEとはGigabit EthernetのことでGE0、GE1、GE2はそれぞれ内部で物理的に独立したネットワークインターフェースを持っており、GE2はスイッチングハブのポートです。<br>
同じネットワークに接続する場合、つまり、基本的にパソコンはL2スイッチであるGE2のポート、右側の上下8つのポートに挿し込みます。

L2スイッチではポートベースVLAN機能(仮想LAN)があるため、GE2をより分割できます。

USBメモリによる初期設定が可能です。<br>
BRIは右から3つそれぞれ違った形状のポートですが、ISDNは現時点でほとんど廃止されているため、基本的には利用しません。

### アクセスポインタ（ルータ）
![アクセスポインタ](https://osu-denken.github.io/blog/images/2025-11-06-ap.png)

本来はルータですが、無線機能（アクセスポインタ）のみを利用しているため、アクセスポインタとして表記しています。Wi-Fiを利用するためのものです。

このアクセスポインタはL2スイッチに差し込んでいます。

## 周辺機器類
### マウス

### キーボード

### HDMI入力切替
HDMI接続の映像出力先のモニタをボタンで切り替えることができる機器です。

### スピーカー
ステレオミニジャックで音声入力します。

### Webカメラ
部会をするGoogle Meetに使われています。
マイクが内蔵されています。

### プリンター
EPSON製のプリンターです。

## ディスプレイ x7
### KH275V (I-O DATA)
{% include card.html url="https://www.iodata.jp/product/lcd/wide/kh275v/index.htm" title="KH275V | 超解像技術＆広視野角ADSパネル採用　27型ゲーミングモニター | アイ・オー・データ機器 I-O DATA" description="超解像技術でクッキリ美しい27型ゲーミングモニター「KH275V」の詳細ページです。" %}

- 映像コネクタ: HDMIケーブル, DVIケーブル, VGAケーブル
- 電源コネクタ: AC電源ケーブル (IEC 60320 C13)
- 解像度: 1920x1080
- リフレッシュレート: 60Hz → 最大60fps対応可
- 表示色: 1,677万色
- 種類: 27型ADSパネル (非光沢LED)
- スピーカ: ステレオ
- 音声入出: ステレオミニジャック
- 電圧: AC100V
- 消費電力: 通常16.7W 最大34W

### FLATRON 24EA53VQ-P (LG)
![FLATRON 24EA53VQ-P](https://osu-denken.github.io/blog/images/2025-11-06-FLATRON-24EA53VQ-P.png)

{% include card.html url="https://www.lg.com/jp/monitors/fhd-qhd/24ea53vq-p/" title="23.8inch IPSモニター JAN:49-89027-005242 - 24EA53VQ-P | LG JP" description="LGについて理解する 24EA53VQ-P. LG の写真、レビュー、技術仕様書をクリックしてください 23.8inch IPSモニター JAN:49-89027-005242." %}

- 映像コネクタ: HDMIケーブル, DVIケーブル, VGAケーブル
- 電源コネクタ: DC電源ケーブル (IEC 60320 C13)
- 解像度: 1920x1080
- リフレッシュレート: 75Hz
- 表示色: 1,677万色
- 種類: 23.8型AH-IPSパネル (非光沢LED)
- スピーカ: なし
- 音声入出: ステレオミニジャック、マイク

### FLATRON E2742V-BN (LG)
{% include card.html url="https://www.lg.com/jp/monitors/fhd-qhd/e2742v-bn/" title="27inch ワイド液晶モニター - E2742V-BN | LG JP" description="LGについて理解する E2742V-BN. LG の写真、レビュー、技術仕様書をクリックしてください 27inch ワイド液晶モニター." %}

- 映像コネクタ: HDMIケーブル, DVIケーブル, VGAケーブル
- 電源コネクタ: DC電源ケーブル (IEC 60320 C13)
- 解像度: 1920x1080
- リフレッシュレート: 60Hz
- 表示色: 1,677万色
- 種類: 27型TNパネル (非光沢LED)
- スピーカ: なし
- 音声入出: ステレオミニジャック、マイク

### VX207NE (ASUS)
{% include card.html url="https://www.asus.com/jp/displays-desktops/monitors/eye-care/vx207ne/" title="VX207NE｜モニター｜ASUS 日本" description="ASUSのEye Careモニタは、TÜVRheinlandの低青色発光とちらつきのない認証を最も多く受けています。" %}

- 映像コネクタ: DVIケーブル, VGAケーブル
- 電源コネクタ: DC電源ケーブル
- 解像度: 1366x768
- リフレッシュレート: 75Hz
- 表示色: 1,677万色
- 種類: 19.5型TNパネル (非光沢LCD)
- スピーカ: なし
- 音声入出: なし

### ProLite GE2488HS (iiyama)
{% include card.html url="https://www.mouse-jp.co.jp/iiyama/support/download/manual/lcd/GE2488HS-usermanual-j.pdf?msockid=1602dc13a9b56bbb338bca92a8356ae9" title="GE2488HS-usermanual-j.pdf" description="取扱説明書" %}

- 映像コネクタ: DVIケーブル, VGAケーブル
- 電源コネクタ: AC電源ケーブル
- 解像度: 1920x1080
- リフレッシュレート: 75Hz
- 表示色: 1,677万色
- 種類: 24型TNパネル (非光沢LCD)
- スピーカ: ステレオ
- 音声入出: ステレオミニジャック (イヤホン, マイク)

### PCVD-17SA1 (VAIO)
{% include card.html url="https://contents.sony.jp/support/vaio/download/man/4679244011.pdf" title="PCVD-17SA1" description="取扱説明書" %}

- 映像コネクタ: VGA
- 電源コネクタ: DC電源ケーブル
- 解像度: 1280×1024
- リフレッシュレート: 60Hz
- 表示色: 1619万色
- 種類: 17型TFTパネル (非光沢LCD)
- スピーカ: なし
- 音声入出: なし

### テレビ AQUOS (SHARP)
{% include card.html url="https://jp.sharp/support/aquos/product/lc22k9.html" title="機種別サポート情報（LC-22K9）｜液晶テレビ（AQUOS）｜サポート・お問い合わせ：シャープ" description="ホームサポート・お問い合わせ液晶テレビ（AQUOS）機種別サポート情報LC-22K9" %}

- 映像コネクタ: HDMIケーブル, DVIケーブル, VGAケーブル, RCAケーブル
- その他コネクタ: LANケーブル, USBケーブル
- 解像度: 1366×768
- リフレッシュレート: 60Hz
- 表示色: 1,677万色
- 種類: 22型IPSパネル (非光沢LED)
- スピーカ: ステレオ
- 音声入出: ステレオミニジャック (イヤホン)

