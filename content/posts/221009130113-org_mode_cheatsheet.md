+++
title = "org-mode cheat-sheet"
author = ["krapjost"]
publishDate = 2022-10-09T13:01:00+09:00
lastmod = 2022-10-09T14:04:49+09:00
tags = ["org-mode", "org"]
categories = ["emacs"]
draft = false
+++

## line breaks {#line-breaks}

1.  Enter twice.
    It renders `<p>line</p><p>line</p>`

    line1

    line2
2.  Insert '\\\\' end of line.
    It renders `<p>line<br>line<p/>`

    line1<br />
    line2


## Inline code block {#inline-code-block}

1.  Wrap code with ~
    ```text
       ~code~
    ```
    It shown as `code`

2.  Wrap code with =
    ```text
       =code=
    ```
    It shown as `code`


## Code block {#code-block}

`<C-c> <C-,> s`

```org
[ #+begin_src <language> ]
  code
[ #+end_src ]
```


## Example {#example}

To ignore special syntax.<br />
`<C-c> <C-,> e`


#### Notes: Insert comma before [ \* | ,\* | #+ | ,#+ ]. {#notes-insert-comma-before-plus-plus-dot}

```text
#+begin_example
#+end_example
```


## Center {#center}

`<C-c> <C-,> c`

```text
#+begin_center
text centered
#+end_center
```

<style>.org-center { margin-left: auto; margin-right: auto; text-align: center; }</style>

<div class="org-center">

text centered

</div>


## Comment {#comment}

`<C-c> <C-,> C`

```text
#+begin_comment
This is comment.
#+end_comment
```


## Verse and Quote {#verse-and-quote}


### verse {#verse}

To preserve the line breaks, indentation and blank lines in a region,<br />
but otherwise use normal formatting.<br />
`<C-c> <C-,> v`

<div class="verse">

**The road not taken**<br />
<br />
Two roads diverged in a yellow wood,<br />
And sorry I could not travel both<br />
And be one traveler, long I stood<br />
And looked down one as far as I could<br />
To where it bent in the undergrowth;<br />
<br />
Then took the other, as just as fair,<br />
And having perhaps the better claim,<br />
Because it was grassy and wanted wear;<br />
Though as for that the passing there<br />
Had worn them really about the same,<br />
<br />
And both that morning equally lay<br />
In leaves no step had trodden black.<br />
Oh, I kept the first for another day!<br />
Yet knowing how way leads on to way,<br />
I doubted if I should ever come back.<br />
<br />
I shall be telling this with a sigh<br />
Somewhere ages and ages hence:<br />
Two roads diverged in a wood, and I—<br />
I took the one less traveled by,<br />
And that has made all the difference.<br />
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Robert Frost<br />

</div>


### quote {#quote}

Usual format to quoting a passage from another document.<br />
`<C-c> <C-,> q`

> The road not taken
>
> Two roads diverged in a yellow wood,
> And sorry I could not travel both
> And be one traveler, long I stood
> And looked down one as far as I could
> To where it bent in the undergrowth;
>
> Then took the other, as just as fair,
> And having perhaps the better claim,
> Because it was grassy and wanted wear;
> Though as for that the passing there
> Had worn them really about the same,
>
> And both that morning equally lay
> In leaves no step had trodden black.
> Oh, I kept the first for another day!
> Yet knowing how way leads on to way,
> I doubted if I should ever come back.
>
> I shall be telling this with a sigh
> Somewhere ages and ages hence:
> Two roads diverged in a wood, and I—
> I took the one less traveled by,
> And that has made all the difference.
>
> --Robert Frost
