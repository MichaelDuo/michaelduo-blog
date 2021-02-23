---
path: /blogs/rendering-test
date: 2020-02-15
title: Blog rendering test
tags: featured
score: 100
---

# Blog Rendering Test

Renders .md file with various components.

## Text rendering

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id lacus vel turpis venenatis pharetra. Donec porta urna ac hendrerit sodales. Vivamus posuere condimentum metus eu malesuada. Nullam sit amet eros tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec in purus enim. Praesent gravida urna risus, eget tempor ligula pretium eget. Nunc molestie mi sit amet sapien posuere tempor. Vivamus a arcu ac lacus aliquet malesuada. Quisque varius neque in lectus fermentum commodo.

Donec tincidunt justo nulla, eget tempor arcu egestas nec. Pellentesque odio velit, molestie non libero eget, ullamcorper lobortis dolor. Suspendisse mollis neque ante, ac pretium leo rhoncus et. Vestibulum ligula odio, pharetra nec massa a, luctus scelerisque nisi. Curabitur in mi in velit hendrerit condimentum. Proin feugiat turpis dolor, nec consectetur tellus fermentum vel. Quisque et massa pellentesque, fringilla mauris a, finibus augue.

## Links rendering

Link to [MichaelDuo's Blog](/)

## Ordered List Rendering

1. List Item 1
    - Nested Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id lacus vel turpis venenatis pharetra. Donec porta urna ac hendrerit sodales.
    - Nested Item 2
    - Nested Item 2
2. List Item 2
    1. Nested Item 1
    2. Nested Item 2
    3. Nested Item 2
3. List Item 3

## Unordered List Rendering

-   List Item 1
    1. Nested Item 1
    2. Nested Item 2
    3. Nested Item 2
-   List Item 2
    -   Nested Item 1
    -   Nested Item 2
    -   Nested Item 2
-   List Item 3

## Blockquote Rendering

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id lacus vel turpis venenatis pharetra. Donec porta urna ac hendrerit sodales. Vivamus posuere condimentum metus eu malesuada. Nullam sit amet eros tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec in purus enim. Praesent gravida urna risus, eget tempor ligula pretium eget. Nunc molestie mi sit amet sapien posuere tempor.

## Code Rendering

Inline code rendering: this is a javascript code `console.log('helloworld')` test.

Code block:

```javascript
function sayHello() {
	console.log('HelloWorld');
}
```

## Picture Rendering

Small Picture

![:sm hello easy](images/easy.png)

Medium Picture

![:md hello easy](images/easy.png)

Large Picture

![:lg hello easy](images/easy.png)

Extra Large Picture

![:xl hello easy](images/easy.png)

## React Element Rendering

### Counter Component

{{ "component": "rendering-test/counter" }}

### Embeded Component

{{ "component": "rendering-test/codepenEmbed" }}
