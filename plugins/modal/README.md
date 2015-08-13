
# modal.js 模态框组件
基于avalon的组件


---


## 功能介绍：
modal.js是一个基于avalon的弹出框组件,特点是他会在点击触发按钮的位置开始弹出。动画基于css3

不过这个不是重点，重点是，他可以任意扩展，这里只是提供了弹出框的弹出关闭的动作，其样式根据所需自定义。而且，规范化了在一个网站上不同的弹出框公用一套弹出动作的实现方法。


## 用法：
1.首先在项目中引入modal.js以及modal.css。

2.在页面中编写结构层如下：

```html
<!--modal 模态框-->
    <div ms-controller="modal">
        <div class="modal-bg" id="myModal" ms-visible="toggle" ms-click="getOut">
            <div class="modal-box"
                 ms-css-left="x"
                 ms-css-top="y"
                 ms-css-height="mh"
                 ms-css-width="mw">
                <!--modal 模态框内容映入点-->
                <div ms-include-src="url"></div>
            </div>
        </div>
    </div>
 ```

3.在其他的地方编写模态框内部的内容，建立一个html文件例如："./plugins/modal.html"

4.触发：首先引入模态框内部的内容modal.html，再触发modal.getIn("模态框宽度")方法。代码如下:

```javascript
modal.url="./plugins/modal.html";
modal.getIn(800);
 ```

5.关闭:调用方法getOut()代码如下:

```javascript
modal.getOut();
 ```

6.**搞定！**


---
The MIT License (MIT)

Copyright (c) 2015 mooshroom