import { Question } from "./types";

export const vocabularyQuestions: Question[] = [
  // === N5 KANJI READING ===
  { id: "v_n5_001", level: "n5", section: "vocabulary", type: "kanji-reading", prompt: "__天気__がいいですね。", promptJp: "てんきがいいですね。", options: ["てんき", "てんけ", "でんき", "あまき"], correct: 0, explanation: "天気 (てんき) means weather" },
  { id: "v_n5_002", level: "n5", section: "vocabulary", type: "kanji-reading", prompt: "__水__をください。", promptJp: "みずをください。", options: ["すい", "みず", "こおり", "ゆ"], correct: 1, explanation: "水 (みず) means water" },
  { id: "v_n5_003", level: "n5", section: "vocabulary", type: "kanji-reading", prompt: "__学校__に行きます。", promptJp: "がっこうにいきます。", options: ["がくこう", "がっこ", "がっこう", "がくこ"], correct: 2, explanation: "学校 (がっこう) means school" },
  { id: "v_n5_004", level: "n5", section: "vocabulary", type: "kanji-reading", prompt: "毎日__新聞__を読みます。", promptJp: "まいにちしんぶんをよみます。", options: ["しんもん", "しんぶん", "しんぷん", "にゅーす"], correct: 1, explanation: "新聞 (しんぶん) means newspaper" },
  { id: "v_n5_005", level: "n5", section: "vocabulary", type: "kanji-reading", prompt: "__電車__で会社に行きます。", promptJp: "でんしゃでかいしゃにいきます。", options: ["でんしゃ", "でんき", "くるま", "じてんしゃ"], correct: 0, explanation: "電車 (でんしゃ) means train" },
  { id: "v_n5_006", level: "n5", section: "vocabulary", type: "kanji-reading", prompt: "__食べ物__を買いました。", promptJp: "たべものをかいました。", options: ["しょくべもの", "たべもの", "のみもの", "たべぶつ"], correct: 1, explanation: "食べ物 (たべもの) means food" },
  { id: "v_n5_007", level: "n5", section: "vocabulary", type: "kanji-reading", prompt: "あの__花__はきれいです。", promptJp: "あのはなはきれいです。", options: ["か", "はな", "くさ", "はね"], correct: 1, explanation: "花 (はな) means flower" },
  { id: "v_n5_008", level: "n5", section: "vocabulary", type: "kanji-reading", prompt: "__先生__はやさしいです。", promptJp: "せんせいはやさしいです。", options: ["せんせ", "せいせん", "せんせい", "さきせい"], correct: 2, explanation: "先生 (せんせい) means teacher" },

  // === N5 ORTHOGRAPHY ===
  { id: "v_n5_009", level: "n5", section: "vocabulary", type: "orthography", prompt: "きょう は __あつい__ です。", promptJp: "Choose the correct kanji for あつい", options: ["暑い", "厚い", "熱い", "圧い"], correct: 0, explanation: "暑い means hot (weather)" },
  { id: "v_n5_010", level: "n5", section: "vocabulary", type: "orthography", prompt: "__やすみ__ の 日 に 山 に 行きます。", promptJp: "Choose the correct kanji for やすみ", options: ["体み", "休み", "安み", "保み"], correct: 1, explanation: "休み means holiday/rest" },
  { id: "v_n5_011", level: "n5", section: "vocabulary", type: "orthography", prompt: "えき の __みなみ__ に でぐち が あります。", promptJp: "Choose the correct kanji for みなみ", options: ["北", "東", "西", "南"], correct: 3, explanation: "南 means south" },
  { id: "v_n5_012", level: "n5", section: "vocabulary", type: "orthography", prompt: "__おかね__ が ありません。", promptJp: "Choose the correct kanji for おかね", options: ["お金", "お銀", "お貨", "お鉄"], correct: 0, explanation: "お金 means money" },

  // === N5 CONTEXT-DEFINED ===
  { id: "v_n5_013", level: "n5", section: "vocabulary", type: "context-defined", prompt: "このへやは（　　）ですね。まどをあけましょう。", options: ["あつい", "さむい", "つめたい", "あたたかい"], correct: 0, explanation: "The room is hot, so let's open the window" },
  { id: "v_n5_014", level: "n5", section: "vocabulary", type: "context-defined", prompt: "あしたは（　　）ですから、がっこうにいきません。", options: ["にちようび", "げつようび", "すいようび", "きんようび"], correct: 0, explanation: "Sunday, so no school" },
  { id: "v_n5_015", level: "n5", section: "vocabulary", type: "context-defined", prompt: "でんしゃで（　　）かかります。", options: ["さんじかん", "さんにん", "さんまい", "さんぼん"], correct: 0, explanation: "It takes 3 hours by train (時間 for duration)" },
  { id: "v_n5_016", level: "n5", section: "vocabulary", type: "context-defined", prompt: "あさ（　　）をたべます。", options: ["ごはん", "おかし", "ケーキ", "アイスクリーム"], correct: 0, explanation: "Eat a meal in the morning" },

  // === N4 KANJI READING (heavy focus) ===
  { id: "v_n4_001", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__経験__がないので、心配です。", promptJp: "けいけんがないので、しんぱいです。", options: ["けいけん", "けけん", "きょうけん", "けいげん"], correct: 0, explanation: "経験 (けいけん) means experience" },
  { id: "v_n4_002", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__届け__を出してください。", promptJp: "とどけをだしてください。", options: ["届け", "届け", "とどけ", "とけ"], correct: 2, explanation: "届け (とどけ) means notification/delivery" },
  { id: "v_n4_003", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "この__製品__は日本で作りました。", options: ["せいひん", "せいぶん", "さくひん", "しょうひん"], correct: 0, explanation: "製品 (せいひん) means product" },
  { id: "v_n4_004", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__交通__が便利な場所に住みたい。", options: ["こうつう", "こうとう", "こうどう", "きょうつう"], correct: 0, explanation: "交通 (こうつう) means traffic/transportation" },
  { id: "v_n4_005", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__習慣__をかえるのはむずかしい。", options: ["しゅうかん", "しゅかん", "がくかん", "しゅうけん"], correct: 0, explanation: "習慣 (しゅうかん) means habit" },
  { id: "v_n4_006", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__予約__をお願いします。", options: ["よやく", "よやき", "よやぐ", "きやく"], correct: 0, explanation: "予約 (よやく) means reservation" },
  { id: "v_n4_007", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "明日__退院__できます。", options: ["たいいん", "たいん", "にゅういん", "かいいん"], correct: 0, explanation: "退院 (たいいん) means leaving the hospital" },
  { id: "v_n4_008", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__受付__はあちらです。", options: ["うけつけ", "じゅつけ", "うけつき", "じゅふ"], correct: 0, explanation: "受付 (うけつけ) means reception" },
  { id: "v_n4_009", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "駅の__周り__にお店が多い。", options: ["まわり", "めぐり", "あたり", "そばり"], correct: 0, explanation: "周り (まわり) means surroundings" },
  { id: "v_n4_010", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "友達と__相談__しました。", options: ["そうだん", "しょうだん", "そうたん", "しだん"], correct: 0, explanation: "相談 (そうだん) means consultation" },
  { id: "v_n4_011", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__趣味__は何ですか。", options: ["しゅみ", "きょうみ", "おもみ", "しゅうみ"], correct: 0, explanation: "趣味 (しゅみ) means hobby" },
  { id: "v_n4_012", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__引っ越し__の準備をしています。", options: ["ひっこし", "いっこし", "ひこし", "ひっきし"], correct: 0, explanation: "引っ越し (ひっこし) means moving (house)" },
  { id: "v_n4_013", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__届ける__のを忘れないでください。", options: ["とどける", "つたえる", "あつめる", "たずねる"], correct: 0, explanation: "届ける (とどける) means to deliver" },
  { id: "v_n4_014", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "日本の__文化__に興味があります。", options: ["ぶんか", "ぶんが", "もんか", "ふうか"], correct: 0, explanation: "文化 (ぶんか) means culture" },
  { id: "v_n4_015", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__景色__がとてもきれいでした。", options: ["けしき", "けいしょく", "けいろ", "けしょく"], correct: 0, explanation: "景色 (けしき) means scenery" },

  // === N4 ORTHOGRAPHY ===
  { id: "v_n4_016", level: "n4", section: "vocabulary", type: "orthography", prompt: "もうすこし __くわしく__ せつめいしてください。", options: ["詳しく", "話しく", "親しく", "正しく"], correct: 0, explanation: "詳しく means in detail" },
  { id: "v_n4_017", level: "n4", section: "vocabulary", type: "orthography", prompt: "あの みせ は __ねだん__ が たかい。", options: ["値段", "直段", "植段", "根段"], correct: 0, explanation: "値段 means price" },
  { id: "v_n4_018", level: "n4", section: "vocabulary", type: "orthography", prompt: "えきまえの __ちゅうしゃじょう__ は いつも いっぱい です。", options: ["注車場", "中車場", "駐車場", "柱車場"], correct: 2, explanation: "駐車場 means parking lot" },
  { id: "v_n4_019", level: "n4", section: "vocabulary", type: "orthography", prompt: "かれ は __しょうらい__ いしゃ に なりたい。", options: ["将来", "商来", "生来", "小来"], correct: 0, explanation: "将来 means future" },
  { id: "v_n4_020", level: "n4", section: "vocabulary", type: "orthography", prompt: "この __かいぎ__ は なんじ に おわりますか。", options: ["会議", "会義", "会技", "会疑"], correct: 0, explanation: "会議 means meeting" },
  { id: "v_n4_021", level: "n4", section: "vocabulary", type: "orthography", prompt: "あの ひと は __きびしい__ せんせい です。", options: ["厳しい", "激しい", "悲しい", "苦しい"], correct: 0, explanation: "厳しい means strict" },
  { id: "v_n4_022", level: "n4", section: "vocabulary", type: "orthography", prompt: "あした の __てんきよほう__ を みましたか。", options: ["天気予法", "天気予報", "天気余報", "天気与報"], correct: 1, explanation: "天気予報 means weather forecast" },
  { id: "v_n4_023", level: "n4", section: "vocabulary", type: "orthography", prompt: "ちかてつ の __うんちん__ は いくら ですか。", options: ["運賃", "運金", "運貨", "運貸"], correct: 0, explanation: "運賃 means fare" },

  // === N4 CONTEXT-DEFINED (heavy focus) ===
  { id: "v_n4_024", level: "n4", section: "vocabulary", type: "context-defined", prompt: "あの店は味も（　　）もいいので、いつも混んでいます。", options: ["サービス", "アドバイス", "ニュース", "コース"], correct: 0, explanation: "Good taste and good service" },
  { id: "v_n4_025", level: "n4", section: "vocabulary", type: "context-defined", prompt: "友達の結婚式に出席するために、新しい（　　）を買いました。", options: ["スーツ", "タオル", "スリッパ", "エプロン"], correct: 0, explanation: "Bought a suit for a wedding" },
  { id: "v_n4_026", level: "n4", section: "vocabulary", type: "context-defined", prompt: "彼は会社の（　　）が高い人です。", options: ["地位", "背", "声", "足"], correct: 0, explanation: "高い地位 means high position" },
  { id: "v_n4_027", level: "n4", section: "vocabulary", type: "context-defined", prompt: "薬を飲んだら、熱が（　　）。", options: ["下がった", "落ちた", "減った", "消えた"], correct: 0, explanation: "Fever went down (下がる)" },
  { id: "v_n4_028", level: "n4", section: "vocabulary", type: "context-defined", prompt: "このアパートは駅に（　　）ので便利です。", options: ["近い", "低い", "狭い", "薄い"], correct: 0, explanation: "Close to the station" },
  { id: "v_n4_029", level: "n4", section: "vocabulary", type: "context-defined", prompt: "約束の時間に（　　）そうなので、タクシーに乗りました。", options: ["遅れ", "忘れ", "間違え", "慣れ"], correct: 0, explanation: "About to be late, so took a taxi" },
  { id: "v_n4_030", level: "n4", section: "vocabulary", type: "context-defined", prompt: "彼女は外国語が（　　）で、三か国語を話せます。", options: ["得意", "上手", "好き", "便利"], correct: 0, explanation: "得意 means skilled/strong at" },
  { id: "v_n4_031", level: "n4", section: "vocabulary", type: "context-defined", prompt: "仕事が忙しくて、なかなか（　　）が取れません。", options: ["休み", "席", "切符", "手"], correct: 0, explanation: "Can't take a break because of busy work" },
  { id: "v_n4_032", level: "n4", section: "vocabulary", type: "context-defined", prompt: "試験の（　　）は来週発表されます。", options: ["結果", "原因", "目的", "理由"], correct: 0, explanation: "Test results will be announced next week" },
  { id: "v_n4_033", level: "n4", section: "vocabulary", type: "context-defined", prompt: "エレベーターが（　　）しているので、階段を使ってください。", options: ["故障", "修理", "工事", "掃除"], correct: 0, explanation: "Elevator is broken, use stairs" },
  { id: "v_n4_034", level: "n4", section: "vocabulary", type: "context-defined", prompt: "この料理は（　　）がちょうどいいです。", options: ["味", "色", "形", "音"], correct: 0, explanation: "The seasoning/taste is just right" },
  { id: "v_n4_035", level: "n4", section: "vocabulary", type: "context-defined", prompt: "友達に旅行の（　　）を見せました。", options: ["写真", "地図", "切符", "案内"], correct: 0, explanation: "Showed travel photos to friends" },

  // === N4 PARAPHRASE ===
  { id: "v_n4_036", level: "n4", section: "vocabulary", type: "paraphrase", prompt: "あの人はとても まじめ です。", options: ["一生懸命にやる人です", "おもしろい人です", "やさしい人です", "元気な人です"], correct: 0, explanation: "まじめ = serious, diligent" },
  { id: "v_n4_037", level: "n4", section: "vocabulary", type: "paraphrase", prompt: "この問題は ふくざつ です。", options: ["かんたんではありません", "おもしろくありません", "むずかしくありません", "ただしくありません"], correct: 0, explanation: "複雑 = not simple, complex" },
  { id: "v_n4_038", level: "n4", section: "vocabulary", type: "paraphrase", prompt: "彼の説明は あいまい でした。", options: ["はっきりしていませんでした", "長かったです", "短かったです", "正しかったです"], correct: 0, explanation: "あいまい = vague, unclear" },
  { id: "v_n4_039", level: "n4", section: "vocabulary", type: "paraphrase", prompt: "この辺は しずか です。", options: ["うるさくないです", "にぎやかです", "あぶないです", "きたないです"], correct: 0, explanation: "静か = quiet, not noisy" },
  { id: "v_n4_040", level: "n4", section: "vocabulary", type: "paraphrase", prompt: "天気が くもり です。", options: ["空に雲が多いです", "雨が降っています", "風が強いです", "太陽が出ています"], correct: 0, explanation: "曇り = cloudy, many clouds" },

  // === N4 USAGE ===
  { id: "v_n4_041", level: "n4", section: "vocabulary", type: "usage", prompt: "Which sentence uses 「届く」 correctly?", options: ["荷物が届きました。", "約束が届きました。", "音が届きました。", "答えが届きました。"], correct: 0, explanation: "届く is used for packages/mail arriving" },
  { id: "v_n4_042", level: "n4", section: "vocabulary", type: "usage", prompt: "Which sentence uses 「通う」 correctly?", options: ["毎日学校に通っています。", "この道を通ってください。", "時間が通っています。", "試験に通いました。"], correct: 0, explanation: "通う means to commute/attend regularly" },
  { id: "v_n4_043", level: "n4", section: "vocabulary", type: "usage", prompt: "Which sentence uses 「間に合う」 correctly?", options: ["電車に間に合いました。", "お金が間に合いました。", "料理が間に合いました。", "天気が間に合いました。"], correct: 0, explanation: "間に合う means to make it in time" },
  { id: "v_n4_044", level: "n4", section: "vocabulary", type: "usage", prompt: "Which sentence uses 「やっと」 correctly?", options: ["やっと宿題が終わりました。", "やっと天気がいいです。", "やっと友達がいます。", "やっと日本語です。"], correct: 0, explanation: "やっと means finally (after effort)" },
  { id: "v_n4_045", level: "n4", section: "vocabulary", type: "usage", prompt: "Which sentence uses 「つもり」 correctly?", options: ["来年日本に行くつもりです。", "昨日行ったつもりです。", "毎日勉強するつもりです。", "Both A and C"], correct: 3, explanation: "つもり expresses intention, works with both future plans and habitual intent" },

  // More N4 vocab questions
  { id: "v_n4_046", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__乗り換え__はどこですか。", options: ["のりかえ", "のりかわ", "じょうかえ", "のりがえ"], correct: 0, explanation: "乗り換え (のりかえ) means transfer (trains)" },
  { id: "v_n4_047", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "この道は__危険__です。", options: ["きけん", "きげん", "あぶけん", "きかん"], correct: 0, explanation: "危険 (きけん) means dangerous" },
  { id: "v_n4_048", level: "n4", section: "vocabulary", type: "kanji-reading", prompt: "__翻訳__してもらえますか。", options: ["ほんやく", "ほうやく", "はんやく", "ふんやく"], correct: 0, explanation: "翻訳 (ほんやく) means translation" },
  { id: "v_n4_049", level: "n4", section: "vocabulary", type: "context-defined", prompt: "この店は日曜日は（　　）です。", options: ["定休日", "祝日", "平日", "連休"], correct: 0, explanation: "Closed on Sundays (定休日 = regular holiday)" },
  { id: "v_n4_050", level: "n4", section: "vocabulary", type: "context-defined", prompt: "新しい仕事に（　　）するのに時間がかかりました。", options: ["慣れ", "変わり", "始め", "決め"], correct: 0, explanation: "Takes time to get used to new work" },
];
