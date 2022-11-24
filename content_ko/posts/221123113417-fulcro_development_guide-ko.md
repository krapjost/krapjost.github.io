---
title: "fulcro 개발자 가이드"
author: ["krapjost"]
publishDate: 2022-11-23T11:34:00+09:00
lastmod: 2022-11-23T13:05:03+09:00
tags: ["fulcro"]
categories: ["번역", "clojure"]
draft: false
---

-   [원문](https://book.fulcrologic.com/)

개인적인 학습을 위해 번역합니다.
건너뛰면서 번역할 수 있습니다.


## 1. About this book {#1-dot-about-this-book}

fulcro3를 위한 개발자 가이드입니다. 초보자와 경험 많은 개발자들에게 이 라이브러리의 세부적인 내용들을 안내하기 위해 쓰여졌습니다. fulcro 관련 자료는 웹 상에 많이 있어 당신의 학습 스타일에 맞춰 배울 수 있습니다.

-   [Clojure docs](https://cljdoc.org/d/com.fulcrologic/fulcro/3.0.0/doc/readme)
-   [Youtube videos](https://www.youtube.com/playlist?list=PLVi9lDx-4C_T7jkihlQflyqGqU4xVtsfi)
-   [Fulcro community](https://fulcro-community.github.io/main/index.html)


### 1.1. Common Prefixes and Namespaces {#1-dot-1-dot-common-prefixes-and-namespaces}

```clojure
(ns your-ns
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.application :as app]
            [com.fulcrologic.fulcro.data-fetch :as df]
            [com.fulcrologic.fulcro.dom :as dom]
            [com.fulcrologic.fulcro.algorithms.lookup :as ah]
            [com.fulcrologic.fulcro.algorithms.merge :as merge]
            [com.fulcrologic.fulcro.algorithms.data-targeting :as targeting]
            [com.fulcrologic.fulcro.algorithms.denormalize :as fdn]
            [com.fulcrologic.fulcro.algorithms.normalize :as fnorm]
            [com.fulcrologic.fulcro.algorithms.react-interop :as interop]
            [com.fulcrologic.fulcro.algorithms.tempid :as tempid]
            [com.fulcrologic.fulcro.algorithms.form-state :as fs]
            [com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing :as stx]
            [com.fulcrologic.fulcro.networking.http-remote :refer [fulcro-http-remote]]
            [com.fulcrologic.fulcro.ui-state-machines :as uism]
            [com.fulcrologic.fulcro.react.hooks :as hooks]
            [com.fulcrologic.fulcro.routing.dynamic-routing :as dr]
            [com.fulcrologic.fulcro.routing.legacy-ui-routers :as r]
            [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]
            [edn-query-language.core :as eql]))
```


### 1.2. Best Practices {#1-dot-2-dot-best-practices}

베스트 프랙티스들은 시간에 따라 발전됩니다. 하지만 새로운 인사이트나 기술이 발견될 때마다 이 책을 업데이트하고 있지는 못합니다. 이 책에 있는 함수들은 모두 fulcro 최신 버전을 사용하고 있지만, 이 섹션은 현재 이 라이브러리의 발전 상황과 어떤 피쳐들에 집중하면 좋을지에 대한 노트 리스트를 작성하려고 했습니다.

2020년 9월, 다음을 이해하기 위해 집중하면 좋습니다.

-   Fulcro가 어떻게 데이터를 정규화(Normalizes)하는가.
    query, ident, initial state를 집중해서 보세요. 이들이 Fulcro의 핵심입니다.
-   내부 I/O 작업은 여전히 뮤테이션들입니다. 차례대로 내부적인 로드를 구현하기 위해 사용됩니다.
    하지만 앱 작성자는 UI State Machines에 주의를 기울여야 할 것입니다. 이는 보통 컴포넌트와 관련된 작업들을 그루핑하여 관리하기에 더 나은 방법입니다.
-   Fulcro에서 UI 라우팅은 다른 방식으로 접근합니다. UI와 Query들이 함께 관리됩니다.
-   Fulcro RAD를 초기 앱 개발에 고려해보십시오. attibute 위주로 초점이 맞추어져 있어 더 나은 확장성과 유연성을 제공합니다. 그리고 전반적인 디자인은 Fulcro 자체의 고급 사용법에 대한 이해를 도울 수 있습니다.
-   쿼리를 가볍게 작성하세요. 이를 위해 유니언 라우터나 동적 라우터를 사용할 수 있습니다. 앱의 최상단에서 사용될 때, 현재 활성화된 뷰에 필요한 데이터만 데이터베이스로부터 가져옴으로서 더 나은 성능을 이끌어냅니다.


## 2. Fulcro From 10,000 Feet {#2-dot-fulcro-from-10-000-feet}

핵심 아이디어들:

-   그래프와 그래프 쿼리는 데이터 모델들을 종합하기에 좋은 방법이다.
-   UI 트리는 방향이 있는 그래프로 그래프 쿼리로부터 쉽게 데이터를 넘겨받을 수 있다.
-   사용자가 주도하는 작업들(User-driven operations)은 트랜잭션(DB 상태변경 최소 단위)으로 모델링 되어있고, 그 값은 단순한 데이터이다.
-   서버로부터 오는 임의의 데이터 그래프는 정규화되어야 한다. (DB 정규화와 마찬가지로):
    -   UI tree는 종종 그래프의 일부를 반복한다.
    -   그래프에서 받은 데이터의 지역적인 조작은 중복이 제거되어야 한다.
-   컴포지션이 왕이다. 심리스한 컴포지션은 소프트웨어 유지보수성을 위한 필수 요소이다.


### 2.1. But Does it Have X? {#2-dot-1-dot-but-does-it-have-x}


#### Where are the "reducers"? {#where-are-the-reducers}

Fulcro 3의 "UI State Machines"는 "리듀셔/이벤트" 시스템과 동일한 방식으로 사용할 수 있다.
하지만 다른 점은, 논리 흐름에서의 역할을 수행하기 위해 런타임에 UI 컴포넌트의 인스턴스가 할당되는 actor model을 지원한다는 것이다. 이는 진정한 상태 기계이다(단순한 switch/case 구문이 아니다).


#### What about Server-Side Rendering? {#what-about-server-side-rendering}

Fulcro는 CLJC로 작성되었다. 앱을 headless JS나 Java VM 환경에서 실행할 수 있기 위함이다. 둘 다 DOM을 조작하거나 문자열로서 프레임을 렌더링할 수 있다.
