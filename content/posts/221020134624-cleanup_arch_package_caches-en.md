---
title: "cleanup arch package caches"
author: ["krapjost"]
publishDate: 2022-10-20T13:46:00+09:00
lastmod: 2022-10-20T15:29:52+09:00
tags: ["arch"]
categories: ["linux"]
draft: false
---

[reference](https://averagelinuxuser.com/clean-arch-linux/)

Pacman stores all downloaded packages in `/var/cache/pacman/pkg/`.
It does not remove the old and uninstalled packages automatically.
This is intended behavior for handling situations like downgrading
a package without retrieve the previous version through the Arch Linux Archive.


## Check size of cached packages {#check-size-of-cached-packages}

```shell
du -sh /var/cache/pacman/pkg/
```


## Cleaning the cache manually {#cleaning-the-cache-manually}

```shell
# delete cached packages that are not installed
sudo pacman -Sc
# delete caches including those that are currently installed.
sudo pacman -Scc
```
