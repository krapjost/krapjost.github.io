+++
title = "org-roam-template config"
author = ["krapjost"]
publishDate = 2022-10-09T10:09:00+09:00
lastmod = 2022-10-09T21:39:18+09:00
tags = ["org-roam", "hugo"]
categories = ["emacs"]
draft = false
+++

**references**
  <https://seds.nl/notes/export_org_roam_backlinks_with_gohugo/>
  <https://www.linuxzen.com/notes/notes/20211231142642-org_roam_export_backlinks_on_hugo/>

---


## Doom-emacs {#doom-emacs}

press `SPC f p` to open `config.el` file.


## Set default settings. {#set-default-settings-dot}

```elisp
; file-truename function is only necessary when you use symbolic links inside org-roam-directory.
(setq org-roam-directory (file-truename "~/org/roam"))
; provide link completion matching outside of Org links.
(setq org-roam-completion-everywhere t)
; always resolve symlinks, at a performance cost
(setq find-file-visit-truename t)
; ensure that Org-roam is available on startup
(org-roam-db-autosync-mode) ; To build the cache manually, run M-x org-roam-db-sync.
```


## Define function to make template. {#define-function-to-make-template-dot}

```elisp
(defun org-roam-hugo-template ()
  "make template for org-roam-capture-templates"
  (mapconcat #'identity
             `("#+title: ${title}"
               "#+hugo_base_dir: ~/blog" ; hugo project dir path
               "#+hugo_section: posts" ; transpile to ~/blog/content/posts/ dir
               "#+hugo_publishdate: %T" ; %T is date with time
               "#+hugo_auto_set_lastmod: t" ; automatically set modified timestamp.
               "#+filetags: %?\n") ; %? is where cursor located, filetags are [tag | @category]
             "\n"))
```


## Set template to org-roam-capture-templates {#set-template-to-org-roam-capture-templates}

```elisp
(setq org-roam-capture-templates
      '(("p" ; Key to press
         "Posts" ; Description
         plain ; Type of entry, available types are entry, item, checkitem, table-line
         (function org-roam-hugo-template) ; Template
         :target (file "%<%y%m%d%H%M%S>-${slug}.org") ; Target file, you can insert "file+head", "file+olp"... Etc.
         :unarrowed t))) ; Show the full buffer
```
