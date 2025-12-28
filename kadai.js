"use strict";
const { openDelimiter } = require("ejs");
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let Character = [
  { id:1, code:"1番目", name:"ちいかわ", old:"ハチワレ，うさぎ", day:"2020/01/01", acter:"青木遥" },
  { id:2, code:"2番目", name:"うさぎ", old:"ちいかわ，ハチワレ", day:"2020/01/27", acter:"小澤亜李" },
  { id:3, code:"3番目", name:"くりまんじゅう", old:"特になし", day:"2020/01/29", acter:"淺井孝行" },
  { id:4, code:"4番目", name:"ハチワレ", old:"ちいかわ，うさぎ", day:"2020/05/01",acter:"田中誠人"},
  { id:5, code:"5番目", name:"モモンガ", old:"古本屋", day:"2020/07/22", acter:"井口裕香" },
  { id:6, code:"6番目", name:"ポシェットの鎧さん", old:"ちいかわ，ハチワレ，うさぎ" ,day:"2020/07/25", acter:"杉田智和" },
  { id:7, code:"7番目", name:"ラーメン屋の鎧さん", old:"シーサー", day:"2020/09/23", acter:"松岡禎丞" },
  { id:8, code:"8番目", name:"ラッコ", old:"ハチワレ", day:"2021/01/24", acter:"内田雄馬" },
  { id:9, code:"9番目", name:"シーサー", old:"ラーメン屋の鎧さん", day:"2021/08/24", acter:"島袋美由利" },
  { id:10, code:"10番目", name:"古本屋", old:"モモンガ", day:"2023/01/24", acter:"春海百乃" },
];

// 一覧
app.get("/chiikawa", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('chiikawa', {data: Character} );
});

// Create
app.get("/chiikawa/create", (req, res) => {
  res.redirect('/public/chiikawa_new.html');
});

// Read
app.get("/chiikawa/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = Character[ number ];
  res.render('chiikawa_detail', {id: number, data: detail} );
});

// Delete
app.get("/chiikawa/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  Character.splice( req.params.number, 1 );
  res.redirect('/chiikawa' );
});

// Create
app.post("/chiikawa", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = Character.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const old = req.body.old;
  const day = req.body.day;
  const acter = req.body.acter;
  Character.push( { id: id, code: code, name: name, old: old, day: day, acter: acter } );
  console.log( Character );
  res.render('chiikawa', {data: Character} );
});

// Edit
app.get("/chiikawa/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = Character[ number ];
  res.render('chiikawa_edit', {id: number, data: detail} );
});

// Update
app.post("/chiikawa/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  Character[req.params.number].code = req.body.code;
  Character[req.params.number].name = req.body.name;
  Character[req.params.number].old = req.body.old;
  Character[req.params.number].day = req.body.day;
  Character[req.params.number].acter = req.body.acter;
  console.log( Character );
  res.redirect('/chiikawa' );
});


app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let menber = [
  { id:1, code:"Buster Bros!!!", name:"山田一郎", old:"19", day:"7/26", acter:"木村昴" },
  { id:2, code:"Buster Bros!!!", name:"山田二郎", old:"17", day:"2/6", acter:"石谷春貴" },
  { id:3, code:"Buster Bros!!!", name:"山田三郎", old:"14", day:"12/16", acter:"天﨑滉平" },
  { id:4, code:"MAD TRIGGER CREW", name:"碧棺左馬刻", old:"25", day:"11/11",acter:"浅沼晋太郎"},
  { id:5, code:"MAD TRIGGER CREW", name:"入間銃兎", old:"29", day:"5/30", acter:"駒田航" },
  { id:6, code:"MAD TRIGGER CREW", name:"毒島メイソン理鶯", old:"28" ,day:"6/21", acter:"神尾晋一郎" },
  { id:7, code:"Fling Posse", name:"飴村乱数", old:"24", day:"2/14", acter:"白井悠介" },
  { id:8, code:"Fling Posse", name:"夢野幻太郎", old:"24", day:"4/1", acter:"斉藤壮馬" },
  { id:9, code:"Fling Posse", name:"有栖川帝統", old:"20", day:"7/7", acter:"野津山幸宏" },
  { id:10, code:"麻天狼", name:"神宮寺寂雷", old:"35", day:"1/9", acter:"速水奨" },
  { id:11, code:"麻天狼", name:"伊奘冉一二三", old:"29", day:"5/15", acter:"木島隆一" },
  { id:12, code:"麻天狼", name:"観音坂独歩", old:"29", day:"6/22", acter:"伊東健人" },
];

// 一覧
app.get("/hyp", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('hyp', {data: menber} );
});

// Create
app.get("/hyp/create", (req, res) => {
  res.redirect('/public/hyp_add.html');
});

// Read
app.get("/hyp/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = menber[ number ];
  res.render('hyp_detail', {id: number, data: detail} );
});

// Delete
app.get("/hyp/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  menber.splice( req.params.number, 1 );
  res.redirect('/hyp' );
});

// Create
app.post("/hyp", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = menber.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const old = req.body.old;
  const day = req.body.day;
  const acter = req.body.acter;
  menber.push( { id: id, code: code, name: name, old: old, day: day, acter: acter } );
  console.log( menber );
  res.render('hyp', {data: menber} );
});

// Edit
app.get("/hyp/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = menber[ number ];
  res.render('hyp_edit', {id: number, data: detail} );
});

// Update
app.post("/hyp/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  menber[req.params.number].code = req.body.code;
  menber[req.params.number].name = req.body.name;
  menber[req.params.number].old = req.body.old;
  menber[req.params.number].day = req.body.day;
  menber[req.params.number].acter = req.body.acter;
  console.log( menber );
  res.redirect('/hyp' );
});

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let uma = [
  { id:1, code:"1", name:"エキサイトバイオ", rider:"荻野 極", father:"レイデオロ", mother:"アニメイトバイオ" },
  { id:2, code:"1", name:"シンエンペラー", rider:"坂井 瑠星", father:"Siyouni", mother:"Starlet's Sister" },
  { id:3, code:"2", name:"ジャスティンパレス", rider:"団野 大成", father:"ディープインパクト", mother:"パレスルーマー" },
  { id:4, code:"2", name:"ミュージアムマイル", rider:"C.デムーロ", father:"リオンディーズ",mother:"ミュージアムヒル"},
  { id:5, code:"3", name:"レガレイラ", rider:"C.ルメール", father:"スワーヴリチャード", mother:"ロカ" },
  { id:6, code:"3", name:"メイショウタバル", rider:"武 豊" ,father:"ゴールドシップ", mother:"メイショウツバクロ" },
  { id:7, code:"4", name:"サンライズジパング", rider:"鮫島 克駿", father:"キズナ", mother:"サイマー" },
  { id:8, code:"4", name:"シュヴァリエローズ", rider:"北村 友一", father:"ディープインパクト", mother:"ヴィアンローズ" },
  { id:9, code:"5", name:"ダノンデサイル", rider:"戸崎 圭太", father:"エピファネイア", mother:"トップデサイル" },
  { id:10, code:"5", name:"コスモキュランダ", rider:"横山 武史", father:"アルアイン", mother:"サザンスピード" },
  { id:11, code:"6", name:"ミステリーウェイ", rider:"松本 大輝", father:"ジャスタウェイ", mother:"ジプシーハイウェイ" },
  { id:12, code:"6", name:"マイネルエンペラー", rider:"丹内 祐次", father:"ゴールドシップ", mother:"マイネテレジア" },
  { id:13, code:"7", name:"アドマイヤテラ", rider:"川田 将雅", father:"レイデオロ", mother:"アドマイヤミヤビ" },
  { id:14, code:"7", name:"アラタ", rider:"大野 拓弥", father:"キングカメハメハ", mother:"サンシャイン" },
  { id:15, code:"8", name:"エルトンバローズ", rider:"西村 淳也", father:"ディープブリランテ", mother:"ショウナンカラット" },
  { id:16, code:"8", name:"タスティエーラ", rider:"松山 弘平", father:"サトノクラウン", mother:"パルティトゥーラ" },
];

// 一覧
app.get("/arima", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('arima', {data: uma} );
});

// Create
app.get("/arima/create", (req, res) => {
  res.redirect('/public/arima_add.html');
});

// Read
app.get("/arima/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = uma[ number ];
  res.render('arima_detail', {id: number, data: detail} );
});

// Delete
app.get("/arima/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  uma.splice( req.params.number, 1 );
  res.redirect('/arima' );
});

// Create
app.post("/arima", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = uma.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const rider = req.body.rider;
  const father = req.body.father;
  const mother = req.body.mother;
  uma.push( { id: id, code: code, name: name, rider: rider, father: father, mother: mother } );
  console.log( uma );
  res.render('arima', {data: uma} );
});

// Edit
app.get("/arima/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = uma[ number ];
  res.render('arima_edit', {id: number, data: detail} );
});

// Update
app.post("/arima/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  uma[req.params.number].code = req.body.code;
  uma[req.params.number].name = req.body.name;
  uma[req.params.number].rider = req.body.rider;
  uma[req.params.number].father = req.body.father;
  uma[req.params.number].mother = req.body.mother;
  console.log( uma );
  res.redirect('/arima' );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));