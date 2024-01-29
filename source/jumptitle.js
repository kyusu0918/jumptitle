/********************************************************************************
 * ジャンプタイトルティラノスクリプトプラグイン ver1.0.0
 *
 * @since 2024/01/27
 * @author Kei Yusu
 *
 *********************************************************************************/
(function(){

  /********************************************************************************
   * タイトルへジャンプ
   *
   * @since 2024/01/27
   * @author Kei Yusu
   * @see デフォルトの関数をオーバーライドしています。
   * 
   *********************************************************************************/
  TYRANO.kag.backTitle = () => {

    "appJsInterface" in window
      ? appJsInterface.finishGame()
      : "function" == typeof TyranoPlayer
      ? webkit.messageHandlers.backHandler.postMessage("endgame")
      : $.confirm(
          $.lang("go_title"),
          function () {

            // ページ遷移をコメントアウト
            // location.href = "./index.html";
            
            // ジャンプタグで移動
            TYRANO.kag.ftag.startTag("jump", {storage: TYRANO.kag.variable.sf.jumptitle_dispose,});

          },
          function () {
            return !1;
          }
        );

  } 

})();
