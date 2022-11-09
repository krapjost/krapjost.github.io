---
title: "greenlabs-bootcamp"
author: ["krapjost"]
publishDate: 2022-11-08T15:10:00+09:00
lastmod: 2022-11-08T21:02:46+09:00
categories: ["greenlabs"]
draft: false
---

## 함수형은 {#함수형은}

익숙해?
고등학교 2학년 과정에 있음

<http://blog.jenkster.com/2015/12/what-is-functional-programming.html>


## 두 뿌리 {#두-뿌리}


### 튜링 기계 언어 {#튜링-기계-언어}

기계에 명령하기 위함


### 람다 계산 언어 ( Alonzo church ) {#람다-계산-언어--alonzo-church}

값을 계산하기 위함 ( Applicative language )

자바 스트림?


## 추상화의 스펙트럼 {#추상화의-스펙트럼}

goto -&gt;&gt; for loop -&gt;&gt; map/filter/reduce
<https://www.youtube.com/watch?v=mVVNJKv9esE>

닐 포드 함수형 사고


## Dev dive 2022 {#dev-dive-2022}


### Why functional programming matters {#why-functional-programming-matters}

<https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf>
모듈식 설계
분해와 좋은 조립이 핵심이다.


#### 조립 수단 {#조립-수단}

1.  고차 함수
2.  지연 평가 (lazy eval)
    지연평가가 왜 좋은가


## rtfeldman - why functional programming isn't norm {#rtfeldman-why-functional-programming-isn-t-norm}


## IEEE 잡지 Why functional programming should be the future of software development {#ieee-잡지-why-functional-programming-should-be-the-future-of-software-development}


## constacts liftIO 김은민 {#constacts-liftio-김은민}

쏙쏙 들어오는 함수형 코딩 저자


### constacts 스택 {#constacts-스택}

GCP + kubernetes + github action + GHCup + Haskell tool stack + postgresql + GraphQL + Kafka


### 도메인? {#도메인}

[Types &lt;- Service] &lt;-  [ 나머지 ( DB, GraphQL resolver, 외부 SASS ) ] -&gt; Kafka ( 엔티티 변경 이벤트 발생 )
postgresql-typed
뷰는 도메인에 의존하지 않고 다른 타입을 만들었다


### 테스트? {#테스트}

유닛테스트와 통합테스트 -&gt; 테스트서버와 테스트DB


## Polylith {#polylith}

-   repo
    -   core ( base  )
    -   lambda ( 날씨 )
    -   lambda ( 가격 )
    -   lambda ...


### 배포 사이즈 {#배포-사이즈}


### 증분 테스트 {#증분-테스트}

태그 이후의 변경 사항에 대해서만 테스트 ( 브릭 )


## 데이터 시각화 {#데이터-시각화}

stuart halloway  repl driven development
[Tap](https://clojuredocs.org/clojure.core/tap%3E), Portal


### 가시성 {#가시성}

잘 볼 수 있는 툴


### 탐색성 {#탐색성}

amazon-correto17 jvm
gosura graphql
