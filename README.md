#jquery.cbiframesize.js

##＜概要＞

ブラウザに表示させている`iframe要素の高さ`をコンテンツの横幅（画面の横幅）に応じてアスペクト比を維持したまま伸縮させるjQueryプラグイン（リアルタイムリサイジング対応）

##＜実装方法＞

###1.外部ファイルを読み込む

jQueryと当プラグインをページに読み込みます。

```
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="jquery.cbiframesize.min.js"></script>
```

###2.高さを変更したいiframe要素に任意のidやclass属性を付与
```
<iframe src="" width="600" height="200" class="iframe-class">
```

###3.jQueryのセレクタで高さを変更したいiframe要素を取得し、当プラグインの.cbIframeSize()メソッドを実行
```
$(".iframe-class").cbIframeSize();
```

##＜デモ＞

[http://jsrun.it/maechabin/ryzq](http://jsrun.it/maechabin/ryzq)


##＜ライセンス＞

MIT license
