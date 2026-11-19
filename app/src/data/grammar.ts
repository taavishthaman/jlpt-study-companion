import { Question } from "./types";

export const grammarQuestions: Question[] = [
  // === N5 GRAMMAR FORM ===
  { id: "g_n5_001", level: "n5", section: "grammar", type: "grammar-form", prompt: "わたしは まいにち コーヒー（　　）のみます。", options: ["を", "が", "に", "で"], correct: 0, explanation: "を marks the direct object" },
  { id: "g_n5_002", level: "n5", section: "grammar", type: "grammar-form", prompt: "えき（　　）でんしゃに のります。", options: ["で", "に", "を", "から"], correct: 0, explanation: "で marks the location of an action" },
  { id: "g_n5_003", level: "n5", section: "grammar", type: "grammar-form", prompt: "きのう ともだち（　　）えいがを みました。", options: ["と", "を", "が", "で"], correct: 0, explanation: "と means 'with' (together with)" },
  { id: "g_n5_004", level: "n5", section: "grammar", type: "grammar-form", prompt: "にほんご（　　）すこし はなせます。", options: ["が", "を", "は", "の"], correct: 0, explanation: "が marks ability (〜がはなせる)" },
  { id: "g_n5_005", level: "n5", section: "grammar", type: "grammar-form", prompt: "あした ともだちに（　　）つもりです。", options: ["あう", "あって", "あい", "あった"], correct: 0, explanation: "Dictionary form + つもり for intention" },
  { id: "g_n5_006", level: "n5", section: "grammar", type: "grammar-form", prompt: "このケーキは（　　）おいしいです。", options: ["とても", "たくさん", "よく", "もう"], correct: 0, explanation: "とても means very" },
  { id: "g_n5_007", level: "n5", section: "grammar", type: "grammar-form", prompt: "テレビを（　　）ながら、ごはんをたべます。", options: ["み", "みる", "みて", "みた"], correct: 0, explanation: "ます-stem + ながら means while doing" },
  { id: "g_n5_008", level: "n5", section: "grammar", type: "grammar-form", prompt: "この本は（　　）やすいです。", options: ["よみ", "よむ", "よんで", "よめ"], correct: 0, explanation: "ます-stem + やすい means easy to" },

  // === N5 SENTENCE COMPOSITION ===
  { id: "g_n5_009", level: "n5", section: "grammar", type: "sentence-composition", prompt: "Arrange: 「わたし / は / がっこう / に / いきます」", promptJp: "Put the words in correct order", options: ["わたしはがっこうにいきます", "わたしにがっこうはいきます", "がっこうにはわたしいきます", "いきますにがっこうはわたし"], correct: 0, explanation: "Subject は place に verb" },
  { id: "g_n5_010", level: "n5", section: "grammar", type: "sentence-composition", prompt: "Arrange: 「きのう / テレビ / を / みませんでした」", options: ["きのうテレビをみませんでした", "テレビをきのうみませんでした", "みませんでしたをテレビきのう", "きのうをテレビみませんでした"], correct: 0, explanation: "Time word + object を verb (negative past)" },

  // === N4 GRAMMAR FORM (heavy focus) ===
  { id: "g_n4_001", level: "n4", section: "grammar", type: "grammar-form", prompt: "日本語が上手に（　　）ようになりました。", options: ["話せる", "話す", "話し", "話せ"], correct: 0, explanation: "Potential form + ようになる means 'came to be able to'" },
  { id: "g_n4_002", level: "n4", section: "grammar", type: "grammar-form", prompt: "先生に作文を（　　）いただきました。", options: ["直して", "直す", "直し", "直った"], correct: 0, explanation: "て-form + いただく (humble receiving)" },
  { id: "g_n4_003", level: "n4", section: "grammar", type: "grammar-form", prompt: "友達が来る（　　）に、部屋を掃除しました。", options: ["前", "後", "まで", "ため"], correct: 0, explanation: "Dictionary form + 前に means before doing" },
  { id: "g_n4_004", level: "n4", section: "grammar", type: "grammar-form", prompt: "日本に来て（　　）、寿司を食べたことがありません。", options: ["から", "まで", "ので", "ために"], correct: 0, explanation: "て-form + から means since doing" },
  { id: "g_n4_005", level: "n4", section: "grammar", type: "grammar-form", prompt: "天気が（　　）ば、公園に行きましょう。", options: ["よけれ", "よくなけれ", "いいなら", "よかった"], correct: 0, explanation: "ば conditional: よければ" },
  { id: "g_n4_006", level: "n4", section: "grammar", type: "grammar-form", prompt: "この映画は何度（　　）おもしろいです。", options: ["見ても", "見たら", "見れば", "見ると"], correct: 0, explanation: "ても means even if / no matter how many times" },
  { id: "g_n4_007", level: "n4", section: "grammar", type: "grammar-form", prompt: "彼は来週日本に行く（　　）です。", options: ["そう", "よう", "らしい", "みたい"], correct: 2, explanation: "らしい for hearsay/seems (based on evidence)" },
  { id: "g_n4_008", level: "n4", section: "grammar", type: "grammar-form", prompt: "宿題を（　　）しまいました。", options: ["忘れて", "忘れる", "忘れ", "忘れた"], correct: 0, explanation: "て-form + しまう means unfortunately did" },
  { id: "g_n4_009", level: "n4", section: "grammar", type: "grammar-form", prompt: "駅まで歩いて行ける（　　）近いです。", options: ["ほど", "くらい", "まで", "より"], correct: 0, explanation: "ほど means to the extent that" },
  { id: "g_n4_010", level: "n4", section: "grammar", type: "grammar-form", prompt: "母に（　　）られました。", options: ["叱", "叱り", "叱る", "叱って"], correct: 0, explanation: "Passive form: 叱られる (was scolded)" },
  { id: "g_n4_011", level: "n4", section: "grammar", type: "grammar-form", prompt: "子供に野菜を（　　）せました。", options: ["食べさ", "食べ", "食べら", "食べて"], correct: 0, explanation: "Causative form: 食べさせる (made eat)" },
  { id: "g_n4_012", level: "n4", section: "grammar", type: "grammar-form", prompt: "明日は雨が降る（　　）しれません。", options: ["かも", "か", "が", "ので"], correct: 0, explanation: "かもしれない means might" },
  { id: "g_n4_013", level: "n4", section: "grammar", type: "grammar-form", prompt: "駅前のパン屋は朝早く（　　）開いています。", options: ["から", "まで", "ので", "し"], correct: 0, explanation: "から indicates starting point in time" },
  { id: "g_n4_014", level: "n4", section: "grammar", type: "grammar-form", prompt: "このレストランは予約（　　）なくても入れます。", options: ["し", "を", "が", "も"], correct: 0, explanation: "しなくても means even without doing" },
  { id: "g_n4_015", level: "n4", section: "grammar", type: "grammar-form", prompt: "試験に（　　）ために、毎日勉強しています。", options: ["受かる", "受かって", "受かり", "受かった"], correct: 0, explanation: "Dictionary form + ために means in order to" },
  { id: "g_n4_016", level: "n4", section: "grammar", type: "grammar-form", prompt: "彼女はいつも楽しそう（　　）笑っています。", options: ["に", "で", "な", "と"], correct: 0, explanation: "そうに + verb = looking like while doing" },
  { id: "g_n4_017", level: "n4", section: "grammar", type: "grammar-form", prompt: "この仕事は一人では（　　）。", options: ["できません", "できます", "しません", "します"], correct: 0, explanation: "では + negative = can't do alone" },
  { id: "g_n4_018", level: "n4", section: "grammar", type: "grammar-form", prompt: "日本語の勉強を（　　）ことにしました。", options: ["続ける", "続けて", "続け", "続けた"], correct: 0, explanation: "Dictionary form + ことにする means decided to" },
  { id: "g_n4_019", level: "n4", section: "grammar", type: "grammar-form", prompt: "電車が遅れた（　　）で遅刻しました。", options: ["せい", "おかげ", "ため", "こと"], correct: 0, explanation: "せいで means because of (negative cause)" },
  { id: "g_n4_020", level: "n4", section: "grammar", type: "grammar-form", prompt: "この薬は食後に（　　）ことになっています。", options: ["飲む", "飲んで", "飲み", "飲んだ"], correct: 0, explanation: "ことになっている means it's the rule that" },

  // === N4 SENTENCE COMPOSITION ===
  { id: "g_n4_021", level: "n4", section: "grammar", type: "sentence-composition", prompt: "Arrange: ★ marks the second position.\n「先生 / に / 漢字 / の / 読み方 / を / 教えて / いただきました」", options: ["先生に漢字の読み方を教えていただきました", "漢字の読み方を先生に教えていただきました", "教えていただきました先生に漢字の読み方を", "先生に教えていただきました漢字の読み方を"], correct: 0, explanation: "Person に thing を verb いただく" },
  { id: "g_n4_022", level: "n4", section: "grammar", type: "sentence-composition", prompt: "Choose the correct order:\n「映画 / を / 見た / あとで / 食事 / に / 行きましょう」", options: ["映画を見たあとで食事に行きましょう", "食事に映画を見たあとで行きましょう", "見たあとで映画を食事に行きましょう", "映画を食事に見たあとで行きましょう"], correct: 0, explanation: "た form + あとで means after doing" },
  { id: "g_n4_023", level: "n4", section: "grammar", type: "sentence-composition", prompt: "Choose the correct order:\n「東京 / は / 大阪 / より / 人口 / が / 多い」", options: ["東京は大阪より人口が多い", "大阪より東京は人口が多い", "人口が東京は大阪より多い", "東京は人口が大阪より多い"], correct: 0, explanation: "A は B より ~ = A is more ~ than B" },

  // === N4 PASSAGE GRAMMAR ===
  { id: "g_n4_024", level: "n4", section: "grammar", type: "passage-grammar", prompt: "日本に来て3か月に（　　）。最初は大変でしたが、今は少し慣れました。", options: ["なりました", "しました", "ありました", "いました"], correct: 0, explanation: "〜になる means to become / it has been" },
  { id: "g_n4_025", level: "n4", section: "grammar", type: "passage-grammar", prompt: "明日テストがある（　　）、今日はたくさん勉強しなければなりません。", options: ["ので", "のに", "から", "し"], correct: 0, explanation: "ので gives a polite reason" },
  { id: "g_n4_026", level: "n4", section: "grammar", type: "passage-grammar", prompt: "この料理は見た目（　　）おいしくないです。", options: ["ほど", "より", "まで", "から"], correct: 0, explanation: "ほど = not as much as (negative comparison)" },
  { id: "g_n4_027", level: "n4", section: "grammar", type: "passage-grammar", prompt: "彼は日本語（　　）英語も話せます。", options: ["だけでなく", "しか", "だけ", "ばかり"], correct: 0, explanation: "だけでなく means not only... but also" },
  { id: "g_n4_028", level: "n4", section: "grammar", type: "passage-grammar", prompt: "雨が（　　）ようですね。傘を持っていきましょう。", options: ["降りそうな", "降った", "降る", "降らない"], correct: 0, explanation: "〜そうな + noun = looks like it will" },
  { id: "g_n4_029", level: "n4", section: "grammar", type: "passage-grammar", prompt: "今日中にレポートを（　　）なければなりません。", options: ["出さ", "出し", "出す", "出して"], correct: 0, explanation: "〜なければならない obligation form uses ない-stem" },
  { id: "g_n4_030", level: "n4", section: "grammar", type: "passage-grammar", prompt: "日本語を勉強（　　）おかげで、旅行が楽しめました。", options: ["した", "して", "する", "し"], correct: 0, explanation: "した + おかげで = thanks to having studied" },
];
