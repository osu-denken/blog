---
title: "ArchLinuxインストールメモ"
date: 2025-11-12
categories: []
tags: [Linux,OS]
layout: default
---

### UEFI/BIOSの設定
MSIであればDELETEキーを連打することでUEFI/BIOSを起動する。

セキュアブートをオフにし、BIOSモードであればBIOSからUEFIにする。

### ISO のダウンロード
- [https://archlinux.org/download/](https://archlinux.org/download/) Download
- [https://ftp.jaist.ac.jp/pub/Linux/ArchLinux/iso/](https://ftp.jaist.ac.jp/pub/Linux/ArchLinux/iso/) Japan

### Rufus で USB にイメージの書き込み
- [https://rufus.ie/ja/](https://rufus.ie/ja/)

### イメージディスクに入る
F11を連打してブートディスクを選択する

### ガイド
[https://wiki.archlinux.jp/index.php/インストールガイド](https://wiki.archlinux.jp/index.php/%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%82%AC%E3%82%A4%E3%83%89)を参考にインストールする。

### 日本語キーボードレイアウトに変更
```bash
loadkeys jp106
```

### 起動モードの確認
```bash
cat /sys/firmware/efi/fw_platform_size
```
64 or 32 であればUEFI、そうれなければBIOS

### lsblkでドライブ情報
```bash
lsblk -O NAME,SIZE,MODEL,VENDER
```


### fdiskでディスク確認
```bash
fdisk -l
```

### フォーマットする
```bash
wipefs -a /dev/sda
```

### パーティション作成
```bash
cfdisk /dev/sda
```

```bash
mkfs.fat -F32 /dev/sda1
mkfs.ext4 /dev/sda2

mount /dev/sda2 /mnt
mkdir /mnt/boot
mount /dev/sda1 /mnt/boot

pacstrap -K /mnt base linux linux-firmware vim sudo

genfstab -U /mnt >> /mnt/etc/fstab

arch-chroot /mnt

ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime
hwclock --systohc

vim /etc/locale.gen     # -> en_US.UTF-8 UTF-8とja_JP.UTF-8 UTF-8 をコメントアウト
する

locale-gen
```

### /etc/locale.conf の編集
```conf
LANG=en_US.UTF-8
```

### /etc/vconsole.conf の編集
```conf
KEYMAP=jp106
```

### /etc/hostname の編集
```txt
denken-pc-4
```

### パスワード再設定
```bash
passwd
```

### ブートローダ
```bash
pacman -S grub efibootmgr
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=arch_grub
grub-mkconfig -o /boot/grub/grub.cfg
```

### 再起動
```bash
exit
umount -R /mnt
reboot
```
