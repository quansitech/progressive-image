# 渐进式图片加载

1. 先通过加载小图并模糊化提高用户体验，最后再加载高清图替换掉小图
2. 高清图的加载替换会延迟进行，只有窗口滚动到图片的位置才会触发高清图的加载替换。
3. 支持img标签和div background-image的渐进式加载

## 用法
```javascript
<link href="/progressive-image.css" rel="stylesheet">
<script src="/progressive-image-min.js"></script>
```

需要使用渐进式加载的img标签
```javascript
//data-src 放需要加载的高清图
//src 放模糊小图
<img class="qs-progressive-image" data-src="./1920x640.jpg" src="./192x64.jpg" alt="">
```

div 背景图的用法
```javascript
//data-src 放需要加载的高清图
//src 放模糊小图
<div class="qs-progressive-image" data-src="./1920x640.jpg" style="background-image: url(./192x64.jpg);" alt="">
```
