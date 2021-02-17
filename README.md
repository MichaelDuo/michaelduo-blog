# MichaelDuo's Blog

Visit: [http://michaelduo.github.io/](http://michaelduo.github.io/)

This blog serves as a place to store my personal thoughts, notes, experience, it is also a playground.

## How to write a blog

The blog has two types, the default type is `markdown ` type, another is `jsx` type.

All `markdown` blogs should be saved under `/markdowns/blogs`, and all `jsx` blogs should be saved under `src/blogs` the `jsx` blogs should also have a `.md` file saved under `/markdowns/blogs`, it will serve as a index.

All markdown files should include frontmatter, it will be the metadata for the file. It currently support 5 attributes.

-   path: the path generated for the artical, if the path starts with `/blogs`, it will be regarded as a blog. If the path doesn't start with `/blogs`, the pash is still getting generated, but will not be indexed as a blog.
-   date: `YYYY-MM-DD`
-   title
-   tags: tags should be seperated by ',', a tag should not include any spaces, case is ignored.
-   type(optional): if not specified, it will be regarded as a markdown blog, if set to `jsx`, the blog file will be look up by the `./src/${path}`
-   brief(optional): The excerpt that will be displayed on the home page.

Frontmatter example:

```
---
type: jsx
path: /blogs/jsx-blog
date: 2019-05-04
title: This is a jsx blog
tags: featured
brief: This is a jsx blog brief
---
```

## What is being displayed?

Only blogs contains `feature` tag will be displayed on the home page. All blogs will be displayed under 'All Posts' tab.

## How date is being inserted?

All blogs should start with a `h1` tag, as the renderer will look for the first `h1` tag in the tree, and insert the date underneath.

## JSX type notes

All 3rd party dependencies should be dynamically imported by using `import()` function. Check out this [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
