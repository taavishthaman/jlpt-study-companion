import { ReadingPassage } from "./types";

export const readingPassages: ReadingPassage[] = [
  // === N5 SHORT PASSAGES ===
  {
    id: "r_n5_p01", level: "n5", type: "short-passage",
    passageJp: "わたしは まいにち 7じに おきます。あさごはんを たべてから、がっこうに いきます。がっこうは 9じから 3じまでです。がっこうの あとで、ともだちと こうえんで あそびます。6じに うちに かえります。",
    passageEn: "I wake up at 7 every day. After eating breakfast, I go to school. School is from 9 to 3. After school, I play with friends in the park. I return home at 6.",
    questions: [
      { id: "r_n5_001", level: "n5", section: "reading", type: "short-passage", prompt: "この人は 何時に おきますか。", options: ["6時", "7時", "8時", "9時"], correct: 1, explanation: "7じにおきます" },
      { id: "r_n5_002", level: "n5", section: "reading", type: "short-passage", prompt: "がっこうの あとで 何を しますか。", options: ["べんきょうします", "ともだちとあそびます", "うちにかえります", "あさごはんをたべます"], correct: 1, explanation: "友達と公園で遊ぶ" },
    ],
  },
  {
    id: "r_n5_p02", level: "n5", type: "short-passage",
    passageJp: "きのう デパートに いきました。くつと シャツを かいました。くつは 5000えんで、シャツは 3000えんでした。ぜんぶで 8000えん でした。",
    passageEn: "Yesterday I went to the department store. I bought shoes and a shirt. The shoes were 5000 yen and the shirt was 3000 yen. The total was 8000 yen.",
    questions: [
      { id: "r_n5_003", level: "n5", section: "reading", type: "short-passage", prompt: "どこに 行きましたか。", options: ["スーパー", "デパート", "コンビニ", "えき"], correct: 1, explanation: "デパートに行った" },
      { id: "r_n5_004", level: "n5", section: "reading", type: "short-passage", prompt: "ぜんぶで いくらでしたか。", options: ["3000えん", "5000えん", "8000えん", "10000えん"], correct: 2, explanation: "5000 + 3000 = 8000円" },
    ],
  },

  // === N4 SHORT PASSAGES ===
  {
    id: "r_n4_p01", level: "n4", type: "short-passage",
    passageJp: "山田さんへ\n\n先日は食事に誘ってくださって、ありがとうございました。とてもおいしいレストランでしたね。今度は私がおすすめのお店に案内します。来週の土曜日はいかがですか。ご都合がよければ、お返事をください。\n\n田中より",
    passageEn: "Dear Yamada,\n\nThank you for inviting me to dinner the other day. It was a very delicious restaurant. Next time, I will take you to a restaurant I recommend. How about next Saturday? If it's convenient for you, please reply.\n\nFrom Tanaka",
    questions: [
      { id: "r_n4_001", level: "n4", section: "reading", type: "short-passage", prompt: "田中さんは山田さんに何をしたいですか。", options: ["おすすめのお店に案内したい", "料理を作ってあげたい", "レストランを予約したい", "食事代を払いたい"], correct: 0, explanation: "おすすめのお店に案内する" },
      { id: "r_n4_002", level: "n4", section: "reading", type: "short-passage", prompt: "田中さんは山田さんに何を聞いていますか。", options: ["来週の土曜日の都合", "好きな食べ物", "レストランの名前", "食事の時間"], correct: 0, explanation: "来週の土曜日の都合を聞いている" },
    ],
  },
  {
    id: "r_n4_p02", level: "n4", type: "short-passage",
    passageJp: "日本では、電車の中で電話をかけることはマナー違反だと考えられています。電話が鳴ったら、すぐにマナーモードにするか、次の駅で降りてから電話をかけ直すのが一般的です。ただし、緊急の場合は例外です。",
    questions: [
      { id: "r_n4_003", level: "n4", section: "reading", type: "short-passage", prompt: "日本の電車の中で電話が鳴ったら、どうしますか。", options: ["マナーモードにするか、降りてからかけ直す", "すぐに電話に出る", "大きな声で話す", "無視する"], correct: 0, explanation: "マナーモードにするか降りてからかけ直す" },
      { id: "r_n4_004", level: "n4", section: "reading", type: "short-passage", prompt: "どんな場合は例外ですか。", options: ["緊急の場合", "友達からの場合", "短い電話の場合", "朝の場合"], correct: 0, explanation: "緊急の場合は例外" },
    ],
  },

  // === N4 MEDIUM PASSAGES ===
  {
    id: "r_n4_p03", level: "n4", type: "medium-passage",
    passageJp: "私は去年の4月に日本に来ました。最初は日本語がほとんど話せませんでした。買い物をするときも、店員さんの言葉が分からなくて困りました。\n\nでも、日本語学校で毎日勉強して、少しずつ上手になりました。今は、簡単な会話ならできるようになりました。日本人の友達もできて、週末にはよく一緒に出かけます。\n\n来年のJLPTのN4に合格したいです。そのために、毎日2時間日本語を勉強しています。漢字が一番難しいですが、がんばります。",
    questions: [
      { id: "r_n4_005", level: "n4", section: "reading", type: "medium-passage", prompt: "この人が日本に来たとき、一番困ったことは何ですか。", options: ["日本語が分からなかったこと", "友達がいなかったこと", "食べ物が合わなかったこと", "電車の乗り方が分からなかったこと"], correct: 0, explanation: "店員の言葉が分からなくて困った" },
      { id: "r_n4_006", level: "n4", section: "reading", type: "medium-passage", prompt: "今、この人は日本語がどのくらいできますか。", options: ["簡単な会話ができる", "全然できない", "何でも話せる", "読むことだけできる"], correct: 0, explanation: "簡単な会話ならできるようになった" },
      { id: "r_n4_007", level: "n4", section: "reading", type: "medium-passage", prompt: "この人にとって、日本語の勉強で一番難しいのは何ですか。", options: ["漢字", "文法", "聴解", "会話"], correct: 0, explanation: "漢字が一番難しい" },
    ],
  },
  {
    id: "r_n4_p04", level: "n4", type: "medium-passage",
    passageJp: "日本の学校では、生徒が自分たちで教室を掃除します。これは「そうじの時間」と呼ばれていて、毎日昼休みの後にあります。\n\n生徒は班に分かれて、教室だけでなく、廊下やトイレ、体育館なども掃除します。先生も一緒に掃除することもあります。\n\nこの習慣は、自分が使う場所は自分できれいにするという考え方から来ています。また、掃除を通じて、責任感や協力する心を学ぶことができると言われています。外国人がこの習慣を知ると、驚く人が多いそうです。",
    questions: [
      { id: "r_n4_008", level: "n4", section: "reading", type: "medium-passage", prompt: "「そうじの時間」はいつですか。", options: ["昼休みの後", "朝", "放課後", "授業の前"], correct: 0, explanation: "毎日昼休みの後" },
      { id: "r_n4_009", level: "n4", section: "reading", type: "medium-passage", prompt: "生徒はどこを掃除しますか。", options: ["教室や廊下、トイレ、体育館など", "教室だけ", "トイレだけ", "体育館だけ"], correct: 0, explanation: "教室だけでなく廊下やトイレ体育館なども" },
      { id: "r_n4_010", level: "n4", section: "reading", type: "medium-passage", prompt: "この習慣から何を学べると言われていますか。", options: ["責任感と協力する心", "日本語の読み方", "料理の仕方", "スポーツの技術"], correct: 0, explanation: "責任感や協力する心" },
    ],
  },

  // === N4 INFORMATION RETRIEVAL ===
  {
    id: "r_n4_p05", level: "n4", type: "information-retrieval",
    passageJp: "【さくら日本語学校 夏期講座のお知らせ】\n\n期間：7月20日（月）〜 8月14日（金）\n時間：午前クラス 9:00-12:00 ／ 午後クラス 13:00-16:00\n費用：1か月 35,000円（教材費込み）\n\nクラス：\n・初級（N5レベル）月〜金\n・中級（N4レベル）月・水・金\n・上級（N3レベル）火・木\n\n申込み：7月10日まで\n連絡先：03-1234-5678\n\n※定員になり次第、締め切ります。",
    questions: [
      { id: "r_n4_011", level: "n4", section: "reading", type: "information-retrieval", prompt: "N4レベルの授業は何曜日ですか。", options: ["月・水・金", "毎日", "火・木", "月〜金"], correct: 0, explanation: "中級（N4）は月・水・金" },
      { id: "r_n4_012", level: "n4", section: "reading", type: "information-retrieval", prompt: "申し込みはいつまでですか。", options: ["7月10日まで", "7月20日まで", "8月14日まで", "いつでも"], correct: 0, explanation: "7月10日まで" },
      { id: "r_n4_013", level: "n4", section: "reading", type: "information-retrieval", prompt: "費用に何が含まれていますか。", options: ["教材費", "交通費", "食事代", "試験代"], correct: 0, explanation: "教材費込み" },
    ],
  },
  {
    id: "r_n4_p06", level: "n4", type: "information-retrieval",
    passageJp: "【東京スポーツジム 会員プラン】\n\n◆ フルタイム会員：月額 8,800円\n  利用時間：6:00-23:00（年中無休）\n\n◆ デイタイム会員：月額 6,600円\n  利用時間：10:00-18:00（平日のみ）\n\n◆ ナイト会員：月額 5,500円\n  利用時間：18:00-23:00（毎日）\n\n◆ 週末会員：月額 4,400円\n  利用時間：6:00-23:00（土日祝のみ）\n\n※ 入会金：5,000円（キャンペーン中は無料）\n※ プール・サウナは全プラン利用可",
    questions: [
      { id: "r_n4_014", level: "n4", section: "reading", type: "information-retrieval", prompt: "平日の夜だけジムに行きたい人は、どのプランがいいですか。", options: ["ナイト会員", "フルタイム会員", "デイタイム会員", "週末会員"], correct: 0, explanation: "ナイト会員は18:00-23:00毎日" },
      { id: "r_n4_015", level: "n4", section: "reading", type: "information-retrieval", prompt: "デイタイム会員は土曜日にジムを使えますか。", options: ["使えません", "使えます", "午前だけ使えます", "午後だけ使えます"], correct: 0, explanation: "デイタイムは平日のみ" },
    ],
  },
];
