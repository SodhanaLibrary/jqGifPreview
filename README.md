# jqGifPreview
jQuery Plugin For GIF Preview As Like Facebook
###Explanation
[Click here] (http://blog.ftmocks.com/2016/03/facebook-like-gif-preview-using-jquery.html) to read complete explanation
###Demo
[Click here] (http://demo.ftmocks.com/angular/gif_preview/jqGifPreview/demo.html) to see demo

##Implementation
###Add jQuery 
```js
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```
###Add CSS and JS files
```js
<link rel="stylesheet" href="jqGifPreview/jqGifPreview.css" />
<script src="jqGifPreview/jqGifPreview.js"></script>
```
###HTML 
```js
<img class="myImg" src="sample_first_frame.png" data-gif="sample_giphy.gif" />
```
####Attributes
**data-gif** : gif image path

**src** : gif preview image path
##JS Code
```js
$(".myImg").jqGifPreview();
```
