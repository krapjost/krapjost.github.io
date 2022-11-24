---
title: "221123142843 Cognitect_dev_tools_설정 Ko cognitect dev-tools 설정"
author: ["krapjost"]
publishDate: 2022-11-23T14:28:00+09:00
lastmod: 2022-11-23T14:38:44+09:00
categories: ["clojure"]
draft: false
---

datomic을 로컬에서 테스트 해보려면 `com.datomic:dev-local` 라이브러리가 필요한데 이는 공개 저장소에서 받을 수 없다.
[dev-tools 링크](https://cognitect.com/dev-tools)에서 이메일 입력하면 다운로드 링크를 보내준다.

maven으로 설치할 수도 있다.
maven 설정에 서버를 설정해준다.
발급된 개인 비밀번호와 계정을 입력한다.

```xml
<!-- in ~/.m2/settings.xml -->
<settings>
  <servers>
    <server>
       <id>cognitect-dev-tools</id>
       <username>krapjost@gmail.com</username>
       <password>PASSWORD</password>
    </server>
  </servers>
</settings>
```

프로젝트를 deps.edn으로 관리할 경우 다음 전역 설정을 해주면 된다.

```edn
;; in ~/.clojure/deps.edn
{:mvn/repos {"cognitect-dev-tools"
             {:url "https://dev-tools.cognitect.com/maven/releases/"}}}
```

Leiningen은 프로젝트별로 설정해주어야 하는데 나는 안 쓸 것이기 때문에 넘어가기로...
