---
title: "pandoc으로 md파일 pdf로 변환하기"
author: ["krapjost"]
publishDate: 2022-10-18T16:07:00+09:00
lastmod: 2022-10-18T16:21:03+09:00
tags: ["pandoc"]
draft: false
---

1.  패키지 매니저로 `pandoc`, `wkhtmltopdf` 를 설치한다.
    ```shell
     yay pandoc
     yay wkhtmltopdf
    ```

2.  css 파일을 같은 디렉터리에 위치시킨다.
    ```shell
     wget https://gist.githubusercontent.com/dashed/6714393/raw/ae966d9d0806eb1e24462d88082a0264438adc50/github-pandoc.css
    ```

3.  css를 적용한 html문서를 만들고, pdf로 출력한다.

<!--listend-->

```shell
pandoc -t html5 --metadata pagetitle="resume.md" --css=github-pandoc.css resume.md -o res.pdf
```

상세한 설명은 [스택 오버플로우](https://stackoverflow.com/questions/23825317/how-to-convert-markdown-css-pdf/64257218#64257218)에...
