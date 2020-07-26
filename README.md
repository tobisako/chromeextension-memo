# chromeextension-memo

## popapi

一般ページに api を埋め込み、呼び出した時にポップアップを表示するサンプル

### usage

エクステンションをインストールする
test.html をブラウザにほおりこむ（「"matches": ["file://*"]」しているので）
ボタンを押すと、注入 api「windows.kani3.payment()」が実行され、background から pay.html ポップアップが開く。
