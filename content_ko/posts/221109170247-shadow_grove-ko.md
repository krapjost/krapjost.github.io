---
title: "shadow-grove-"
author: ["krapjost"]
publishDate: 2022-11-09T17:02:00+09:00
lastmod: 2022-11-09T17:15:28+09:00
tags: ["clojurescript", "shadow-grove"]
categories: ["clojure"]
draft: false
---

## 컴포넌트 리스트 그리는 방법 {#컴포넌트-리스트-그리는-방법}

아래와 같은 데이터와

```clojurescript
(def book-list
  {:section "Today"
    :list [{:id "0"
            :name "book1"
            :author "doong"
            :description "rorlame edalkwdqd qwlmdkwmd ql"}
           {:id "1"
            :name "book2"
            :author "ojo"
            :description "heleld qwdmlkqwd awlkda wk"}]}
   {:section "Weekly"
    :list [{:id "4"
            :name "book5"
            :author "asdw"
            :description "asdawd"}
           {:id "6"
            :name "book7"
            :author "qw w w"
            :description "wqlwd qwldkm qwlkdasd asd"}]})
```

아래와 같은 컴포넌트가 있을 때

```clojurescript
(defc book-card [{:keys [name author description]}]
  (render
   (<< [:a {:class (css :relative :block :h-96)}
        [:span {:class (css :absolute :inset-0 :border-2 :border-dashed :border-black)}]
        [:div
         {:class (css :relative :flex :h-full :items-end :border-2 :border-black :bg-white :transition-transform [:hover {:transform "translate(-0.5rem, -0.5rem)"}])}
         [:div
          {:class (css :px-8 :pb-8 :transition-opacity [:hover :absolute :opacity-0])}
          [:h2
           {:class (css :mt-4 :text-2xl :font-medium)} name] [:h3 author]]
         [:div
          {:class (css :absolute :p-8 :opacity-0 :transition-opacity [:hover :relative :opacity-100])}
          [:h2 {:class (css :mt-4 :text-2xl :font-medium)} name]
          [:h3 author]
          [:p {:class (css :mt-4)} description]
          [:p {:class (css :mt-8 :font-bold)} "읽어보기"]]]])))
```

`keyed-seq` 를 사용해 book-list 데이터를 풀어 book-card에 전해줄 수 있다.
이때 2번 째 아규먼트는 키 함수인데 키워드를 통해 키 중복을 방지할 수 있다.
키 대신 `identity` 를 넣으면 모든 데이터에 중복이 없어야 렌더링 된다.

```clojurescript
(sg/keyed-seq book-list :id book-card)
```
