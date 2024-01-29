
[iscript]

  // 後処理シナリオ変数がない場合
  if(!sf.jumptitle_dispose){

    // 後処理シナリオ変数を初期化
    sf.jumptitle_dispose = "";

  }

  // 後処理シナリオが指定されている場合は設定
  sf.jumptitle_dispose = mp.dispose ? mp.dispose : "first.ks";

[endscript ]

[loadjs storage=plugin/jumptitle/jumptitle.js]

[return]