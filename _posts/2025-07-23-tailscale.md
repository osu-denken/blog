---
title: "Tailscaleについて調べてみた"
date: 2025-07-23
categories: []
tags: [VPN]
layout: default
---

{% include card.html url="https://tailscale.com/" title="Tailscale · Best VPN Service for Secure Networks" description="Securely connect to anything on the internet with Tailscale. Deploy a WireGuard®-based VPN to achieve point-to-point connectivity that enforces least privilege." %}

TailscaleはWireGuardプロトコルを用いたメッシュVPNで、LANの範囲を超えて仮想的にプライベートネットワークを構築できます。<br />
つまり、物理的に別の場所に置いているコンピュータ同士を同じLAN内のようにつなげることができるので場所を問わずに暗号化された経路を使って接続することができます。

1. tailscale.com を開き、右上の「Download」からインストールします。アカウントを持っていない場合は「Get started - it's free!」から作成します。
2. インストールしたTailscaleを開いて「Sign in to your network」からネットワークに入ります。

![Tailscaleサインイン画面](https://osu-denken.github.io/blog/images/2025-07-23-152853.png)

これだけでメッシュVPNを構築できるので初心者でも簡単に扱えそうですね！