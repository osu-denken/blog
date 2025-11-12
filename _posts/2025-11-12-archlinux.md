---
title: "ArchLinuxインストールメモ"
date: 2025-11-12
categories: []
tags: [Linux,OS]
layout: default
---

### lsblkでドライブ情報
```bash
lsblk -O NAME,SIZE,MODEL,VENDER
```

### fdiskでディスク確認
```bash
fdisk -l
```

```
wipefs -a /dev/sda
```

cfdisk /dev/sda

mkfs.fat -F32 /dev/sda1
mkfs.ext4 /dev/sda2

mount /dev/sda2 /mnt
mkdir /mnt/boot
mount /dev/sda1 /mnt/boot

pacstrap /mnt base linux linux-firmware

genfstab -U /mnt >> /mnt/etc/fstab

arch-chroot /mnt

