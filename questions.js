const QUESTIONS = {
  n5: [
    // --- Greetings & Basic Phrases ---
    {
      id: "n5_001", type: "Quick Response",
      audio: "すみません、トイレはどこですか。",
      question: "What is the speaker asking about?",
      options: ["Where the bathroom is", "Where the restaurant is", "What time it is", "How much it costs"],
      correct: 0,
      romaji: "Sumimasen, toire wa doko desu ka.",
      translation: "Excuse me, where is the bathroom?"
    },
    {
      id: "n5_002", type: "Quick Response",
      audio: "おはようございます。きょうも いい てんき ですね。",
      question: "What kind of greeting is this?",
      options: ["A good evening greeting", "A morning greeting about nice weather", "A goodbye greeting", "An apology"],
      correct: 1,
      romaji: "Ohayou gozaimasu. Kyou mo ii tenki desu ne.",
      translation: "Good morning. It's nice weather again today, isn't it?"
    },
    {
      id: "n5_003", type: "Quick Response",
      audio: "はじめまして。たなか です。どうぞ よろしく おねがいします。",
      question: "What is happening in this conversation?",
      options: ["Someone is saying goodbye", "Someone is introducing themselves", "Someone is ordering food", "Someone is asking for directions"],
      correct: 1,
      romaji: "Hajimemashite. Tanaka desu. Douzo yoroshiku onegaishimasu.",
      translation: "Nice to meet you. I'm Tanaka. Please treat me well."
    },
    {
      id: "n5_004", type: "Quick Response",
      audio: "すみません、もう いちど いって ください。",
      question: "What is the speaker requesting?",
      options: ["To speak louder", "To say it one more time", "To write it down", "To come back later"],
      correct: 1,
      romaji: "Sumimasen, mou ichido itte kudasai.",
      translation: "Excuse me, please say it one more time."
    },
    {
      id: "n5_005", type: "Quick Response",
      audio: "ありがとうございます。たすかりました。",
      question: "What is the speaker expressing?",
      options: ["An apology", "Gratitude for help received", "A complaint", "A request"],
      correct: 1,
      romaji: "Arigatou gozaimasu. Tasukarimashita.",
      translation: "Thank you very much. That was a great help."
    },
    // --- Weather & Descriptions ---
    {
      id: "n5_006", type: "Point Comprehension",
      audio: "きょうは とても あつい ですね。",
      question: "What is being said about today?",
      options: ["It's very cold", "It's very hot", "It's raining", "It's windy"],
      correct: 1,
      romaji: "Kyou wa totemo atsui desu ne.",
      translation: "It's very hot today, isn't it?"
    },
    {
      id: "n5_007", type: "Point Comprehension",
      audio: "きのうの よる、あめが たくさん ふりました。",
      question: "What happened last night?",
      options: ["It snowed a lot", "It rained a lot", "It was very windy", "It was very cold"],
      correct: 1,
      romaji: "Kinou no yoru, ame ga takusan furimashita.",
      translation: "Last night, it rained a lot."
    },
    {
      id: "n5_008", type: "Point Comprehension",
      audio: "ふゆは さむい ですが、ゆきが きれい です。",
      question: "What does the speaker think about winter?",
      options: ["It's cold but the snow is beautiful", "It's warm and comfortable", "It's the best season", "It's too cold to go outside"],
      correct: 0,
      romaji: "Fuyu wa samui desu ga, yuki ga kirei desu.",
      translation: "Winter is cold, but the snow is beautiful."
    },
    // --- Time & Schedule ---
    {
      id: "n5_009", type: "Point Comprehension",
      audio: "わたしは まいにち ろくじに おきます。",
      question: "What time does this person wake up?",
      options: ["7 o'clock", "5 o'clock", "6 o'clock", "8 o'clock"],
      correct: 2,
      romaji: "Watashi wa mainichi rokuji ni okimasu.",
      translation: "I wake up at 6 o'clock every day."
    },
    {
      id: "n5_010", type: "Point Comprehension",
      audio: "がっこうは くじに はじまって、さんじに おわります。",
      question: "When does school end?",
      options: ["At 2 o'clock", "At 4 o'clock", "At 3 o'clock", "At 1 o'clock"],
      correct: 2,
      romaji: "Gakkou wa kuji ni hajimatte, sanji ni owarimasu.",
      translation: "School starts at 9 and ends at 3."
    },
    {
      id: "n5_011", type: "Point Comprehension",
      audio: "まいしゅう きんようびに にほんごの じゅぎょうが あります。",
      question: "When is the Japanese class?",
      options: ["Every Monday", "Every Wednesday", "Every Friday", "Every Saturday"],
      correct: 2,
      romaji: "Maishuu kinyoubi ni nihongo no jugyou ga arimasu.",
      translation: "There is a Japanese class every Friday."
    },
    {
      id: "n5_012", type: "Point Comprehension",
      audio: "あした しけんが ありますから、こんばん べんきょうします。",
      question: "Why will they study tonight?",
      options: ["They have free time", "Their friend asked them to", "There's an exam tomorrow", "They want to read a book"],
      correct: 2,
      romaji: "Ashita shiken ga arimasu kara, konban benkyou shimasu.",
      translation: "There's an exam tomorrow, so I'll study tonight."
    },
    {
      id: "n5_013", type: "Point Comprehension",
      audio: "まいあさ しちじに うちを でます。かいしゃまで さんじゅっぷん かかります。",
      question: "How long does it take to get to the company?",
      options: ["20 minutes", "30 minutes", "40 minutes", "1 hour"],
      correct: 1,
      romaji: "Maiasa shichiji ni uchi wo demasu. Kaisha made sanjuppun kakarimasu.",
      translation: "I leave home at 7 every morning. It takes 30 minutes to the company."
    },
    // --- Shopping & Prices ---
    {
      id: "n5_014", type: "Task Comprehension",
      audio: "すみません、この りんごは いくらですか。",
      question: "What does the speaker want to know?",
      options: ["Where to buy apples", "How many apples there are", "The price of the apple", "If the apple is delicious"],
      correct: 2,
      romaji: "Sumimasen, kono ringo wa ikura desu ka.",
      translation: "Excuse me, how much is this apple?"
    },
    {
      id: "n5_015", type: "Point Comprehension",
      audio: "この ノートは ひゃくえん です。あの ノートは にひゃくえん です。",
      question: "How much is the other notebook?",
      options: ["100 yen", "200 yen", "300 yen", "150 yen"],
      correct: 1,
      romaji: "Kono nooto wa hyakuen desu. Ano nooto wa nihyakuen desu.",
      translation: "This notebook is 100 yen. That notebook over there is 200 yen."
    },
    {
      id: "n5_016", type: "Task Comprehension",
      audio: "おかあさんに たんじょうびの プレゼントを かいたい です。なにが いいですか。",
      question: "What is the speaker trying to do?",
      options: ["Buy a birthday present for their mother", "Plan a birthday party", "Ask about their mother's age", "Send a birthday card"],
      correct: 0,
      romaji: "Okaasan ni tanjoubi no purezento wo kaitai desu. Nani ga ii desu ka.",
      translation: "I want to buy a birthday present for my mother. What would be good?"
    },
    {
      id: "n5_017", type: "Point Comprehension",
      audio: "この みせは やすくて、おいしい です。まいしゅう いきます。",
      question: "Why does the speaker go to this shop every week?",
      options: ["It's close to home", "It's cheap and delicious", "Their friend works there", "It has nice decorations"],
      correct: 1,
      romaji: "Kono mise wa yasukute, oishii desu. Maishuu ikimasu.",
      translation: "This shop is cheap and delicious. I go every week."
    },
    // --- Food & Drink ---
    {
      id: "n5_018", type: "Task Comprehension",
      audio: "すみません、おちゃを ふたつ おねがいします。",
      question: "What is being ordered?",
      options: ["One coffee", "Two teas", "Two coffees", "One tea"],
      correct: 1,
      romaji: "Sumimasen, ocha wo futatsu onegaishimasu.",
      translation: "Excuse me, two teas please."
    },
    {
      id: "n5_019", type: "Point Comprehension",
      audio: "わたしは にくが すきですが、さかなは あまり すきじゃないです。",
      question: "What does the speaker not like much?",
      options: ["Meat", "Vegetables", "Fish", "Rice"],
      correct: 2,
      romaji: "Watashi wa niku ga suki desu ga, sakana wa amari suki ja nai desu.",
      translation: "I like meat, but I don't like fish very much."
    },
    {
      id: "n5_020", type: "Point Comprehension",
      audio: "あさごはんに パンと たまごを たべました。ぎゅうにゅうも のみました。",
      question: "What did the speaker have for breakfast?",
      options: ["Rice and miso soup", "Bread, eggs, and milk", "Just coffee", "Cereal and juice"],
      correct: 1,
      romaji: "Asagohan ni pan to tamago wo tabemashita. Gyuunyuu mo nomimashita.",
      translation: "For breakfast I ate bread and eggs. I also drank milk."
    },
    {
      id: "n5_021", type: "Task Comprehension",
      audio: "おなかが すきました。なにか たべに いきませんか。",
      question: "What is the speaker suggesting?",
      options: ["Going shopping", "Going to eat something", "Going home", "Going for a walk"],
      correct: 1,
      romaji: "Onaka ga sukimashita. Nanika tabe ni ikimasen ka.",
      translation: "I'm hungry. Shall we go eat something?"
    },
    // --- Family & People ---
    {
      id: "n5_022", type: "Point Comprehension",
      audio: "わたしの かぞくは よにん です。ちちと ははと あにと わたし です。",
      question: "How many people are in the family?",
      options: ["3 people", "5 people", "4 people", "6 people"],
      correct: 2,
      romaji: "Watashi no kazoku wa yonin desu. Chichi to haha to ani to watashi desu.",
      translation: "My family has 4 people. My father, mother, older brother, and me."
    },
    {
      id: "n5_023", type: "Point Comprehension",
      audio: "あねは にじゅうごさいで、びょういんで はたらいて います。",
      question: "Where does the older sister work?",
      options: ["At a school", "At a hospital", "At a bank", "At a restaurant"],
      correct: 1,
      romaji: "Ane wa nijuugosai de, byouin de hataraite imasu.",
      translation: "My older sister is 25 and works at a hospital."
    },
    {
      id: "n5_024", type: "Point Comprehension",
      audio: "おとうとは こうこうせい です。まいにち サッカーを して います。",
      question: "What does the younger brother do every day?",
      options: ["Studies math", "Plays soccer", "Reads books", "Plays video games"],
      correct: 1,
      romaji: "Otouto wa koukousei desu. Mainichi sakkaa wo shite imasu.",
      translation: "My younger brother is a high school student. He plays soccer every day."
    },
    {
      id: "n5_025", type: "Point Comprehension",
      audio: "ともだちは がくせいじゃない です。もう はたらいて います。",
      question: "What is true about the friend?",
      options: ["They are still a student", "They are already working", "They are looking for a job", "They are studying abroad"],
      correct: 1,
      romaji: "Tomodachi wa gakusei ja nai desu. Mou hataraite imasu.",
      translation: "My friend is not a student. They are already working."
    },
    // --- Directions & Locations ---
    {
      id: "n5_026", type: "Task Comprehension",
      audio: "すみません、えきは どちらですか。",
      question: "What is the speaker looking for?",
      options: ["A hospital", "A bank", "The station", "A school"],
      correct: 2,
      romaji: "Sumimasen, eki wa dochira desu ka.",
      translation: "Excuse me, which way is the station?"
    },
    {
      id: "n5_027", type: "Point Comprehension",
      audio: "ぎんこうは ゆうびんきょくの となりに あります。",
      question: "Where is the bank?",
      options: ["In front of the post office", "Behind the post office", "Next to the post office", "Far from the post office"],
      correct: 2,
      romaji: "Ginkou wa yuubinkyoku no tonari ni arimasu.",
      translation: "The bank is next to the post office."
    },
    {
      id: "n5_028", type: "Point Comprehension",
      audio: "この みちを まっすぐ いって ください。みぎに スーパーが あります。",
      question: "Where is the supermarket?",
      options: ["On the left", "On the right", "Straight ahead", "Behind you"],
      correct: 1,
      romaji: "Kono michi wo massugu itte kudasai. Migi ni suupaa ga arimasu.",
      translation: "Please go straight on this road. There is a supermarket on the right."
    },
    {
      id: "n5_029", type: "Point Comprehension",
      audio: "わたしの うちは えきから あるいて じゅっぷん です。",
      question: "How far is the speaker's house from the station?",
      options: ["5 minutes by bus", "10 minutes on foot", "15 minutes by train", "20 minutes by car"],
      correct: 1,
      romaji: "Watashi no uchi wa eki kara aruite juppun desu.",
      translation: "My house is a 10-minute walk from the station."
    },
    // --- Daily Activities ---
    {
      id: "n5_030", type: "Point Comprehension",
      audio: "にちようびに ともだちと えいがを みました。",
      question: "What did they do on Sunday?",
      options: ["Went shopping with family", "Watched a movie with a friend", "Studied at the library", "Played sports at school"],
      correct: 1,
      romaji: "Nichiyoubi ni tomodachi to eiga wo mimashita.",
      translation: "I watched a movie with a friend on Sunday."
    },
    {
      id: "n5_031", type: "Task Comprehension",
      audio: "あしたは やすみ ですから、うみに いきたい です。",
      question: "What does the person want to do tomorrow?",
      options: ["Go to the mountains", "Stay at home", "Go to the sea / beach", "Visit a friend"],
      correct: 2,
      romaji: "Ashita wa yasumi desu kara, umi ni ikitai desu.",
      translation: "Tomorrow is a day off, so I want to go to the beach."
    },
    {
      id: "n5_032", type: "Quick Response",
      audio: "すこし さむいですね。まどを しめて ください。",
      question: "What is the request?",
      options: ["Open the window", "Close the window", "Turn off the lights", "Turn on the heater"],
      correct: 1,
      romaji: "Sukoshi samui desu ne. Mado wo shimete kudasai.",
      translation: "It's a bit cold, isn't it. Please close the window."
    },
    {
      id: "n5_033", type: "Point Comprehension",
      audio: "きのう としょかんで にじかん べんきょう しました。",
      question: "How long did the speaker study at the library?",
      options: ["1 hour", "2 hours", "3 hours", "30 minutes"],
      correct: 1,
      romaji: "Kinou toshokan de nijikan benkyou shimashita.",
      translation: "Yesterday I studied at the library for 2 hours."
    },
    {
      id: "n5_034", type: "Point Comprehension",
      audio: "まいばん じゅういちじに ねます。あさ しちじに おきます。",
      question: "What time does the speaker go to bed?",
      options: ["10 PM", "11 PM", "12 AM", "9 PM"],
      correct: 1,
      romaji: "Maiban juuichiji ni nemasu. Asa shichiji ni okimasu.",
      translation: "I go to bed at 11 every night. I wake up at 7 in the morning."
    },
    {
      id: "n5_035", type: "Point Comprehension",
      audio: "どようびに せんたくを して、そうじも しました。",
      question: "What did the speaker do on Saturday?",
      options: ["Cooking and shopping", "Laundry and cleaning", "Studying and reading", "Swimming and running"],
      correct: 1,
      romaji: "Doyoubi ni sentaku wo shite, souji mo shimashita.",
      translation: "On Saturday I did laundry and also cleaned."
    },
    // --- Transportation ---
    {
      id: "n5_036", type: "Point Comprehension",
      audio: "とうきょうから おおさかまで しんかんせんで にじかんはん かかります。",
      question: "How long does it take from Tokyo to Osaka by bullet train?",
      options: ["1 hour", "2 hours", "2 and a half hours", "3 hours"],
      correct: 2,
      romaji: "Toukyou kara Oosaka made shinkansen de nijikan han kakarimasu.",
      translation: "It takes 2 and a half hours from Tokyo to Osaka by bullet train."
    },
    {
      id: "n5_037", type: "Task Comprehension",
      audio: "すみません、つぎの バスは なんじ ですか。",
      question: "What does the speaker want to know?",
      options: ["Where the bus goes", "When the next bus is", "How much the bus costs", "Which bus to take"],
      correct: 1,
      romaji: "Sumimasen, tsugi no basu wa nanji desu ka.",
      translation: "Excuse me, what time is the next bus?"
    },
    {
      id: "n5_038", type: "Point Comprehension",
      audio: "わたしは まいにち じてんしゃで がっこうに いきます。",
      question: "How does the speaker go to school?",
      options: ["By bus", "On foot", "By bicycle", "By train"],
      correct: 2,
      romaji: "Watashi wa mainichi jitensha de gakkou ni ikimasu.",
      translation: "I go to school by bicycle every day."
    },
    // --- Hobbies & Activities ---
    {
      id: "n5_039", type: "Point Comprehension",
      audio: "しゅみは おんがくを きくことと、ほんを よむこと です。",
      question: "What are the speaker's hobbies?",
      options: ["Cooking and sports", "Listening to music and reading books", "Watching movies and drawing", "Playing games and singing"],
      correct: 1,
      romaji: "Shumi wa ongaku wo kiku koto to, hon wo yomu koto desu.",
      translation: "My hobbies are listening to music and reading books."
    },
    {
      id: "n5_040", type: "Point Comprehension",
      audio: "やすみの ひに よく こうえんで さんぽを します。",
      question: "What does the speaker often do on days off?",
      options: ["Goes shopping", "Takes walks in the park", "Stays home and watches TV", "Plays tennis"],
      correct: 1,
      romaji: "Yasumi no hi ni yoku kouen de sanpo wo shimasu.",
      translation: "On days off, I often take walks in the park."
    },
    {
      id: "n5_041", type: "Point Comprehension",
      audio: "にほんの りょうりが だいすき です。とくに すしが すき です。",
      question: "What does the speaker especially like?",
      options: ["Ramen", "Tempura", "Sushi", "Udon"],
      correct: 2,
      romaji: "Nihon no ryouri ga daisuki desu. Toku ni sushi ga suki desu.",
      translation: "I love Japanese food. I especially like sushi."
    },
    {
      id: "n5_042", type: "Point Comprehension",
      audio: "しゅうまつに ともだちと カラオケに いきました。とても たのしかった です。",
      question: "How was the weekend activity?",
      options: ["It was boring", "It was very fun", "It was tiring", "It was expensive"],
      correct: 1,
      romaji: "Shuumatsu ni tomodachi to karaoke ni ikimashita. Totemo tanoshikatta desu.",
      translation: "I went to karaoke with friends on the weekend. It was very fun."
    },
    // --- Numbers & Counting ---
    {
      id: "n5_043", type: "Point Comprehension",
      audio: "クラスに がくせいが にじゅうにん います。おとこのこが じゅうにん、おんなのこが じゅうにん です。",
      question: "How many students are in the class?",
      options: ["10 students", "15 students", "20 students", "25 students"],
      correct: 2,
      romaji: "Kurasu ni gakusei ga nijuunin imasu. Otokonoko ga juunin, onnanoko ga juunin desu.",
      translation: "There are 20 students in the class. 10 boys and 10 girls."
    },
    {
      id: "n5_044", type: "Point Comprehension",
      audio: "この ほんは せんにひゃくえん です。たかい ですね。",
      question: "How much is the book?",
      options: ["1,000 yen", "1,200 yen", "1,500 yen", "2,000 yen"],
      correct: 1,
      romaji: "Kono hon wa sennihyakuen desu. Takai desu ne.",
      translation: "This book is 1,200 yen. That's expensive, isn't it?"
    },
    // --- Requests & Offers ---
    {
      id: "n5_045", type: "Task Comprehension",
      audio: "この かんじの よみかたを おしえて ください。",
      question: "What is the speaker asking for?",
      options: ["To write a kanji", "To be taught how to read a kanji", "To buy a kanji book", "To look up a word"],
      correct: 1,
      romaji: "Kono kanji no yomikata wo oshiete kudasai.",
      translation: "Please teach me how to read this kanji."
    },
    {
      id: "n5_046", type: "Task Comprehension",
      audio: "しゃしんを とっても いいですか。",
      question: "What is the speaker asking permission to do?",
      options: ["Use the phone", "Take a photo", "Sit down", "Open the window"],
      correct: 1,
      romaji: "Shashin wo tottemo ii desu ka.",
      translation: "Is it okay if I take a photo?"
    },
    {
      id: "n5_047", type: "Task Comprehension",
      audio: "ちょっと まって ください。いま いきます。",
      question: "What is the speaker saying?",
      options: ["Please go ahead", "Please wait a moment, I'm coming", "Please sit down", "Please come back later"],
      correct: 1,
      romaji: "Chotto matte kudasai. Ima ikimasu.",
      translation: "Please wait a moment. I'm coming now."
    },
    // --- More variety ---
    {
      id: "n5_048", type: "Point Comprehension",
      audio: "きょうしつに つくえが みっつと いすが よっつ あります。",
      question: "How many chairs are in the classroom?",
      options: ["3", "4", "5", "6"],
      correct: 1,
      romaji: "Kyoushitsu ni tsukue ga mittsu to isu ga yottsu arimasu.",
      translation: "In the classroom there are 3 desks and 4 chairs."
    },
    {
      id: "n5_049", type: "Point Comprehension",
      audio: "にほんごの べんきょうは むずかしい ですが、おもしろい です。",
      question: "How does the speaker feel about studying Japanese?",
      options: ["It's easy and boring", "It's difficult but interesting", "It's easy and fun", "It's difficult and boring"],
      correct: 1,
      romaji: "Nihongo no benkyou wa muzukashii desu ga, omoshiroi desu.",
      translation: "Studying Japanese is difficult, but interesting."
    },
    {
      id: "n5_050", type: "Point Comprehension",
      audio: "せんせいは めがねを かけて います。せが たかい です。",
      question: "What does the teacher look like?",
      options: ["Short with a hat", "Tall with glasses", "Short with glasses", "Tall with a hat"],
      correct: 1,
      romaji: "Sensei wa megane wo kakete imasu. Se ga takai desu.",
      translation: "The teacher wears glasses. They are tall."
    }
  ],

  n4: [
    // --- Reported Speech & Hearsay ---
    {
      id: "n4_001", type: "Point Comprehension",
      audio: "つぎの でんしゃは じゅうごふん おくれるそうです。",
      question: "What did the speaker hear?",
      options: ["The train has been cancelled", "The next train is 15 minutes late", "The train will arrive in 5 minutes", "The last train has already left"],
      correct: 1,
      romaji: "Tsugi no densha wa juugofun okureru sou desu.",
      translation: "I heard the next train will be 15 minutes late."
    },
    {
      id: "n4_002", type: "Point Comprehension",
      audio: "かのじょは にほんに いった ことが ないので、いちど いってみたいと いっていました。",
      question: "What did she say?",
      options: ["She has been to Japan many times", "She doesn't want to go to Japan", "She wants to visit Japan at least once", "She is planning to move to Japan"],
      correct: 2,
      romaji: "Kanojo wa nihon ni itta koto ga nai node, ichido itte mitai to itte imashita.",
      translation: "She's never been to Japan, so she said she'd like to try going once."
    },
    {
      id: "n4_003", type: "Point Comprehension",
      audio: "てんきよほうに よると、あしたは はれるそうです。",
      question: "What does the weather forecast say?",
      options: ["It will rain tomorrow", "It will be sunny tomorrow", "It will snow tomorrow", "It will be cloudy tomorrow"],
      correct: 1,
      romaji: "Tenki yohou ni yoru to, ashita wa hareru sou desu.",
      translation: "According to the weather forecast, it will be sunny tomorrow."
    },
    {
      id: "n4_004", type: "Point Comprehension",
      audio: "ともだちの はなしに よると、あの レストランは あまり おいしくないらしいです。",
      question: "What did the speaker hear about the restaurant?",
      options: ["It's very popular", "It's not very good", "It's very cheap", "It recently opened"],
      correct: 1,
      romaji: "Tomodachi no hanashi ni yoru to, ano resutoran wa amari oishikunai rashii desu.",
      translation: "According to my friend, that restaurant apparently isn't very good."
    },
    {
      id: "n4_005", type: "Point Comprehension",
      audio: "きむらさんは らいげつ けっこんするそうです。おめでたい ですね。",
      question: "What is the news about Kimura?",
      options: ["They are moving abroad", "They are getting married next month", "They got a promotion", "They are having a baby"],
      correct: 1,
      romaji: "Kimura-san wa raigetsu kekkon suru sou desu. Omedetai desu ne.",
      translation: "I heard Kimura is getting married next month. How wonderful."
    },
    // --- Task Comprehension ---
    {
      id: "n4_006", type: "Task Comprehension",
      audio: "すみません、この にもつを うけとりに きたんですが。",
      question: "Why did the person come?",
      options: ["To send a package", "To pick up a package", "To ask for directions", "To return a product"],
      correct: 1,
      romaji: "Sumimasen, kono nimotsu wo uketori ni kitan desu ga.",
      translation: "Excuse me, I came to pick up this package."
    },
    {
      id: "n4_007", type: "Task Comprehension",
      audio: "すみません、よやくした やまだ ですが、じかんを へんこう しても いいですか。",
      question: "What does Yamada want to do?",
      options: ["Cancel a reservation", "Make a new reservation", "Change the reservation time", "Confirm the reservation"],
      correct: 2,
      romaji: "Sumimasen, yoyaku shita Yamada desu ga, jikan wo henkou shitemo ii desu ka.",
      translation: "Excuse me, I'm Yamada who made a reservation — may I change the time?"
    },
    {
      id: "n4_008", type: "Task Comprehension",
      audio: "この しごとは らいしゅうまでに おわらせなければ なりません。",
      question: "When must the work be finished?",
      options: ["Today", "By tomorrow", "By next week", "By the end of the month"],
      correct: 2,
      romaji: "Kono shigoto wa raishuu made ni owarasenakereba narimasen.",
      translation: "This work must be finished by next week."
    },
    {
      id: "n4_009", type: "Task Comprehension",
      audio: "この へやは つかっても いいですが、じゅうじまでに でなければ なりません。",
      question: "What is the condition for using the room?",
      options: ["Must pay a fee", "Must leave by 10 o'clock", "Must ask permission first", "Cannot eat or drink inside"],
      correct: 1,
      romaji: "Kono heya wa tsukattemo ii desu ga, juuji made ni denakereba narimasen.",
      translation: "You may use this room, but you must leave by 10 o'clock."
    },
    {
      id: "n4_010", type: "Task Comprehension",
      audio: "この しょるいに なまえと じゅうしょを かいて ください。",
      question: "What is the speaker asking to be written?",
      options: ["Name and phone number", "Name and address", "Name and email", "Name and date of birth"],
      correct: 1,
      romaji: "Kono shorui ni namae to juusho wo kaite kudasai.",
      translation: "Please write your name and address on this document."
    },
    {
      id: "n4_011", type: "Task Comprehension",
      audio: "かいぎの まえに このしりょうを コピーして おいて ください。",
      question: "What must be done before the meeting?",
      options: ["Read the documents", "Copy the documents", "Write a report", "Send an email"],
      correct: 1,
      romaji: "Kaigi no mae ni kono shiryou wo kopii shite oite kudasai.",
      translation: "Please copy these documents before the meeting."
    },
    {
      id: "n4_012", type: "Task Comprehension",
      audio: "でんきを けして でて ください。さいごの ひとが けすことに なっています。",
      question: "What is the rule?",
      options: ["First person turns on the lights", "Last person turns off the lights", "Everyone shares the electricity cost", "Lights are on a timer"],
      correct: 1,
      romaji: "Denki wo keshite dete kudasai. Saigo no hito ga kesu koto ni natte imasu.",
      translation: "Please turn off the lights when you leave. The last person is supposed to turn them off."
    },
    // --- Experiences & Changes ---
    {
      id: "n4_013", type: "Point Comprehension",
      audio: "さいきん うんどうを はじめたら、よく ねられるように なりました。",
      question: "What happened after starting exercise?",
      options: ["They lost weight", "They made new friends", "They can sleep better now", "They feel more tired"],
      correct: 2,
      romaji: "Saikin undou wo hajimetara, yoku nerareru you ni narimashita.",
      translation: "Recently after I started exercising, I became able to sleep well."
    },
    {
      id: "n4_014", type: "Point Comprehension",
      audio: "にほんに きてから、はしが つかえるように なりました。",
      question: "What can the speaker do now?",
      options: ["Speak Japanese fluently", "Use chopsticks", "Cook Japanese food", "Read kanji"],
      correct: 1,
      romaji: "Nihon ni kite kara, hashi ga tsukaeru you ni narimashita.",
      translation: "Since coming to Japan, I've become able to use chopsticks."
    },
    {
      id: "n4_015", type: "Point Comprehension",
      audio: "こどもの とき、やさいが きらいでしたが、いまは たべられます。",
      question: "What changed about the speaker?",
      options: ["They used to like vegetables", "They can now eat vegetables they used to dislike", "They still don't eat vegetables", "They became vegetarian"],
      correct: 1,
      romaji: "Kodomo no toki, yasai ga kirai deshita ga, ima wa taberaremasu.",
      translation: "When I was a child I hated vegetables, but now I can eat them."
    },
    {
      id: "n4_016", type: "Point Comprehension",
      audio: "さんねんまえに にほんごの べんきょうを はじめました。いまは かんたんな しんぶんが よめます。",
      question: "What can the speaker do now?",
      options: ["Write novels in Japanese", "Read simple newspapers", "Teach Japanese", "Watch movies without subtitles"],
      correct: 1,
      romaji: "Sannenma ni nihongo no benkyou wo hajimemashita. Ima wa kantan na shinbun ga yomemasu.",
      translation: "I started studying Japanese 3 years ago. Now I can read simple newspapers."
    },
    {
      id: "n4_017", type: "Point Comprehension",
      audio: "まえは まいにち タクシーで かよっていましたが、いまは でんしゃに しました。",
      question: "How does the speaker commute now?",
      options: ["By taxi", "By train", "By bus", "On foot"],
      correct: 1,
      romaji: "Mae wa mainichi takushii de kayotte imashita ga, ima wa densha ni shimashita.",
      translation: "Before I commuted by taxi every day, but now I switched to the train."
    },
    // --- Advice & Suggestions ---
    {
      id: "n4_018", type: "Quick Response",
      audio: "あした あめが ふるかもしれないので、かさを もっていった ほうが いいですよ。",
      question: "What is the advice?",
      options: ["Wear warm clothes", "Bring an umbrella", "Stay at home", "Drive instead of walking"],
      correct: 1,
      romaji: "Ashita ame ga furu kamoshirenai node, kasa wo motte itta hou ga ii desu yo.",
      translation: "It might rain tomorrow, so you'd better take an umbrella."
    },
    {
      id: "n4_019", type: "Quick Response",
      audio: "えきまえに あたらしい レストランが できたらしいですよ。いってみませんか。",
      question: "What is being suggested?",
      options: ["Cooking at home", "Going to a new restaurant near the station", "Taking the train to another city", "Meeting at the station"],
      correct: 1,
      romaji: "Ekimae ni atarashii resutoran ga dekita rashii desu yo. Itte mimasen ka.",
      translation: "It seems a new restaurant opened in front of the station. Shall we try going?"
    },
    {
      id: "n4_020", type: "Quick Response",
      audio: "つかれて いるなら、むりしないで はやく ねた ほうが いいですよ。",
      question: "What is the advice?",
      options: ["Exercise more", "Drink some coffee", "Go to bed early without pushing yourself", "Take some medicine"],
      correct: 2,
      romaji: "Tsukarete iru nara, muri shinai de hayaku neta hou ga ii desu yo.",
      translation: "If you're tired, you shouldn't push yourself and should go to bed early."
    },
    {
      id: "n4_021", type: "Quick Response",
      audio: "かぜを ひいたら、あたたかくして やすんだ ほうが いいですよ。",
      question: "What should you do if you catch a cold?",
      options: ["Go to work anyway", "Stay warm and rest", "Take a cold shower", "Go for a run"],
      correct: 1,
      romaji: "Kaze wo hiitara, atatakaku shite yasunda hou ga ii desu yo.",
      translation: "If you catch a cold, you should stay warm and rest."
    },
    {
      id: "n4_022", type: "Quick Response",
      audio: "にほんごが じょうずに なりたいなら、まいにち すこしずつ れんしゅうした ほうが いいです。",
      question: "What is the advice for improving Japanese?",
      options: ["Study only on weekends", "Practice a little every day", "Only watch anime", "Move to Japan immediately"],
      correct: 1,
      romaji: "Nihongo ga jouzu ni naritai nara, mainichi sukoshi zutsu renshuu shita hou ga ii desu.",
      translation: "If you want to get good at Japanese, you should practice a little every day."
    },
    {
      id: "n4_023", type: "Quick Response",
      audio: "この アプリを つかってみたら どうですか。べんりですよ。",
      question: "What is the speaker suggesting?",
      options: ["Deleting an app", "Trying a convenient app", "Buying a new phone", "Reading a book instead"],
      correct: 1,
      romaji: "Kono apuri wo tsukatte mitara dou desu ka. Benri desu yo.",
      translation: "How about trying this app? It's convenient."
    },
    // --- Shopping & Services ---
    {
      id: "n4_024", type: "Point Comprehension",
      audio: "きのう かった くつが すこし ちいさかったので、こうかん してもらえますか。",
      question: "What is the problem?",
      options: ["The shoes are the wrong color", "The shoes are too expensive", "The shoes bought yesterday are too small", "The shoes are broken"],
      correct: 2,
      romaji: "Kinou katta kutsu ga sukoshi chiisakatta node, koukan shite moraemasu ka.",
      translation: "The shoes I bought yesterday were a little small, so could you exchange them?"
    },
    {
      id: "n4_025", type: "Point Comprehension",
      audio: "この セーターは にまんえんも しました。でも とても あたたかいです。",
      question: "What does the speaker say about the sweater?",
      options: ["It was cheap and warm", "It was expensive but very warm", "It was expensive and not worth it", "It was a gift from a friend"],
      correct: 1,
      romaji: "Kono seetaa wa nimannen mo shimashita. Demo totemo atatakai desu.",
      translation: "This sweater cost as much as 20,000 yen. But it's very warm."
    },
    {
      id: "n4_026", type: "Task Comprehension",
      audio: "すみません、この ふくの えすサイズは ありますか。",
      question: "What is the customer asking?",
      options: ["If the price can be lowered", "If there is a size S available", "If they can return the item", "If there are other colors"],
      correct: 1,
      romaji: "Sumimasen, kono fuku no esu saizu wa arimasu ka.",
      translation: "Excuse me, do you have this clothing in size S?"
    },
    {
      id: "n4_027", type: "Point Comprehension",
      audio: "この みせは げつようびが ていきゅうびで、あさ じゅうじから よる はちじまで あいています。",
      question: "When is the shop closed?",
      options: ["Sundays", "Mondays", "Tuesdays", "It's open every day"],
      correct: 1,
      romaji: "Kono mise wa getsuyoubi ga teikyuubi de, asa juuji kara yoru hachiji made aite imasu.",
      translation: "This shop is closed on Mondays, and is open from 10 AM to 8 PM."
    },
    {
      id: "n4_028", type: "Task Comprehension",
      audio: "ネットで ちゅうもんした ものが まだ とどいて いないんですが。",
      question: "What is the problem?",
      options: ["The item arrived broken", "The online order hasn't arrived yet", "The wrong item was sent", "The payment didn't go through"],
      correct: 1,
      romaji: "Netto de chuumon shita mono ga mada todoite inain desu ga.",
      translation: "The item I ordered online hasn't arrived yet."
    },
    // --- At Work / Office ---
    {
      id: "n4_029", type: "Task Comprehension",
      audio: "この レポートを きんようびまでに ていしゅつして ください。",
      question: "When is the report due?",
      options: ["By Wednesday", "By Thursday", "By Friday", "By Monday"],
      correct: 2,
      romaji: "Kono repooto wo kinyoubi made ni teishutsu shite kudasai.",
      translation: "Please submit this report by Friday."
    },
    {
      id: "n4_030", type: "Point Comprehension",
      audio: "きのうの かいぎは さんじかんも かかりました。とても つかれました。",
      question: "How long was yesterday's meeting?",
      options: ["1 hour", "2 hours", "3 hours", "4 hours"],
      correct: 2,
      romaji: "Kinou no kaigi wa sanjikan mo kakarimashita. Totemo tsukaremashita.",
      translation: "Yesterday's meeting took as long as 3 hours. I was very tired."
    },
    {
      id: "n4_031", type: "Point Comprehension",
      audio: "らいしゅうから あたらしい しゃいんが はいるそうです。",
      question: "What is happening next week?",
      options: ["The office is moving", "A new employee is joining", "There will be a company trip", "The boss is leaving"],
      correct: 1,
      romaji: "Raishuu kara atarashii shain ga hairu sou desu.",
      translation: "I heard a new employee is joining from next week."
    },
    {
      id: "n4_032", type: "Task Comprehension",
      audio: "おきゃくさまが いらっしゃったら、この かいぎしつに ごあんない して ください。",
      question: "What should be done when the client arrives?",
      options: ["Offer them tea", "Guide them to this meeting room", "Call the manager", "Give them the documents"],
      correct: 1,
      romaji: "Okyakusama ga irasshattara, kono kaigishitsu ni goannai shite kudasai.",
      translation: "When the client arrives, please guide them to this meeting room."
    },
    {
      id: "n4_033", type: "Point Comprehension",
      audio: "この プロジェクトは よていより いっしゅうかん おくれて います。",
      question: "What is the status of the project?",
      options: ["It's ahead of schedule", "It's one week behind schedule", "It was cancelled", "It's on time"],
      correct: 1,
      romaji: "Kono purojekuto wa yotei yori isshuukan okurete imasu.",
      translation: "This project is one week behind schedule."
    },
    // --- Health & Body ---
    {
      id: "n4_034", type: "Point Comprehension",
      audio: "あたまが いたいので、きょうは はやく かえらせて いただけませんか。",
      question: "What does the speaker want to do?",
      options: ["Take some medicine at work", "Go home early because of a headache", "See a doctor during lunch", "Take tomorrow off"],
      correct: 1,
      romaji: "Atama ga itai node, kyou wa hayaku kaerasete itadakemasen ka.",
      translation: "I have a headache, so may I go home early today?"
    },
    {
      id: "n4_035", type: "Point Comprehension",
      audio: "さいきん つかれやすく なりました。もう すこし うんどう しなければ。",
      question: "What is the speaker's concern?",
      options: ["They've been sleeping too much", "They get tired easily lately", "They've been eating too much", "They don't have time for hobbies"],
      correct: 1,
      romaji: "Saikin tsukareyasuku narimashita. Mou sukoshi undou shinakereba.",
      translation: "Lately I've been getting tired easily. I need to exercise more."
    },
    {
      id: "n4_036", type: "Quick Response",
      audio: "くすりを のんだら、すこし きぶんが よく なりました。",
      question: "What happened after taking medicine?",
      options: ["They felt worse", "They felt a little better", "Nothing changed", "They fell asleep"],
      correct: 1,
      romaji: "Kusuri wo nondara, sukoshi kibun ga yoku narimashita.",
      translation: "After taking medicine, I felt a little better."
    },
    // --- Housing & Living ---
    {
      id: "n4_037", type: "Point Comprehension",
      audio: "このアパートは えきから ちかくて べんり ですが、やちんが たかいです。",
      question: "What is the downside of this apartment?",
      options: ["It's far from the station", "It's too small", "The rent is high", "It's noisy"],
      correct: 2,
      romaji: "Kono apaato wa eki kara chikakute benri desu ga, yachin ga takai desu.",
      translation: "This apartment is conveniently close to the station, but the rent is high."
    },
    {
      id: "n4_038", type: "Task Comprehension",
      audio: "となりの へやの おとが うるさいので、すこし しずかに して いただけませんか。",
      question: "What is the speaker asking?",
      options: ["To turn up the music", "To be a little quieter", "To move to another room", "To close the window"],
      correct: 1,
      romaji: "Tonari no heya no oto ga urusai node, sukoshi shizuka ni shite itadakemasen ka.",
      translation: "The noise from the next room is loud, so could you please be a little quieter?"
    },
    {
      id: "n4_039", type: "Point Comprehension",
      audio: "らいげつ ひっこしする ことに しました。あたらしい うちは にわが あります。",
      question: "What is true about the new house?",
      options: ["It has a garage", "It has a garden", "It has three floors", "It has a pool"],
      correct: 1,
      romaji: "Raigetsu hikkoshi suru koto ni shimashita. Atarashii uchi wa niwa ga arimasu.",
      translation: "I decided to move next month. The new house has a garden."
    },
    // --- Travel & Plans ---
    {
      id: "n4_040", type: "Point Comprehension",
      audio: "なつやすみに かぞくで おきなわに いく よてい です。",
      question: "What are the summer vacation plans?",
      options: ["Going to Hokkaido alone", "Going to Okinawa with family", "Going to Tokyo with friends", "Staying at home"],
      correct: 1,
      romaji: "Natsuyasumi ni kazoku de Okinawa ni iku yotei desu.",
      translation: "We're planning to go to Okinawa as a family for summer vacation."
    },
    {
      id: "n4_041", type: "Point Comprehension",
      audio: "ホテルの よやくは もう しましたが、ひこうきの チケットは まだ です。",
      question: "What hasn't been done yet?",
      options: ["Hotel reservation", "Airplane ticket", "Passport application", "Travel insurance"],
      correct: 1,
      romaji: "Hoteru no yoyaku wa mou shimashita ga, hikouki no chiketto wa mada desu.",
      translation: "I've already made the hotel reservation, but the airplane ticket is not yet done."
    },
    {
      id: "n4_042", type: "Point Comprehension",
      audio: "きょうとに いったら、きんかくじを みた ほうが いいですよ。すごく きれい ですから。",
      question: "What is recommended to see in Kyoto?",
      options: ["Tokyo Tower", "Fushimi Inari", "Kinkakuji", "Osaka Castle"],
      correct: 2,
      romaji: "Kyouto ni ittara, Kinkakuji wo mita hou ga ii desu yo. Sugoku kirei desu kara.",
      translation: "If you go to Kyoto, you should see Kinkakuji. It's really beautiful."
    },
    {
      id: "n4_043", type: "Point Comprehension",
      audio: "しゅっちょうで おおさかに いきます。にはくみっかの よてい です。",
      question: "How long is the business trip?",
      options: ["1 night 2 days", "2 nights 3 days", "3 nights 4 days", "Day trip"],
      correct: 1,
      romaji: "Shucchou de Oosaka ni ikimasu. Nihaku mikka no yotei desu.",
      translation: "I'm going to Osaka on a business trip. It's planned for 2 nights and 3 days."
    },
    // --- Reasons & Explanations ---
    {
      id: "n4_044", type: "Point Comprehension",
      audio: "でんしゃが おくれたので、かいぎに まにあいませんでした。",
      question: "Why were they late to the meeting?",
      options: ["They overslept", "The train was delayed", "They forgot the time", "Traffic was bad"],
      correct: 1,
      romaji: "Densha ga okureta node, kaigi ni maniaimasen deshita.",
      translation: "The train was delayed, so I didn't make it to the meeting in time."
    },
    {
      id: "n4_045", type: "Point Comprehension",
      audio: "きょうは おべんとうを もって きたので、そとに たべに いきません。",
      question: "Why isn't the speaker going out to eat?",
      options: ["They're not hungry", "They brought a lunch box", "The restaurants are closed", "They don't have money"],
      correct: 1,
      romaji: "Kyou wa obentou wo motte kita node, soto ni tabe ni ikimasen.",
      translation: "I brought a lunch box today, so I won't go out to eat."
    },
    {
      id: "n4_046", type: "Point Comprehension",
      audio: "このへんは しずかで みどりが おおいので、すみやすいです。",
      question: "Why is this area easy to live in?",
      options: ["It's close to the station", "It's quiet with lots of greenery", "The rent is cheap", "There are many shops"],
      correct: 1,
      romaji: "Kono hen wa shizuka de midori ga ooi node, sumiyasui desu.",
      translation: "This area is quiet with lots of greenery, so it's easy to live in."
    },
    {
      id: "n4_047", type: "Point Comprehension",
      audio: "パスポートの きげんが きれて いたので、しんせいしなおさないと いけません。",
      question: "What is the problem?",
      options: ["The passport was lost", "The passport has expired", "The passport application was rejected", "The passport photo is wrong"],
      correct: 1,
      romaji: "Pasupooto no kigen ga kirete ita node, shinsei shi naosanai to ikemasen.",
      translation: "My passport had expired, so I need to reapply."
    },
    // --- Comparisons ---
    {
      id: "n4_048", type: "Point Comprehension",
      audio: "この ホテルは あのホテルより やすいですが、えきから とおいです。",
      question: "What is the disadvantage of this hotel?",
      options: ["It's more expensive", "It's far from the station", "The rooms are small", "The food is bad"],
      correct: 1,
      romaji: "Kono hoteru wa ano hoteru yori yasui desu ga, eki kara tooi desu.",
      translation: "This hotel is cheaper than that hotel, but it's far from the station."
    },
    {
      id: "n4_049", type: "Point Comprehension",
      audio: "にほんの なかで、いちばん にんきが ある かんこうちは きょうとだと おもいます。",
      question: "What does the speaker think is the most popular tourist spot?",
      options: ["Tokyo", "Osaka", "Kyoto", "Nara"],
      correct: 2,
      romaji: "Nihon no naka de, ichiban ninki ga aru kankouchi wa Kyouto da to omoimasu.",
      translation: "I think the most popular tourist spot in Japan is Kyoto."
    },
    {
      id: "n4_050", type: "Point Comprehension",
      audio: "でんしゃと バスと、どちらが べんりですか。えきに ちかいなら でんしゃの ほうが いいですよ。",
      question: "What is recommended if you live near the station?",
      options: ["Taking the bus", "Taking the train", "Walking", "Taking a taxi"],
      correct: 1,
      romaji: "Densha to basu to, dochira ga benri desu ka. Eki ni chikai nara densha no hou ga ii desu yo.",
      translation: "Which is more convenient, train or bus? If you're close to the station, the train is better."
    },
    // --- Giving & Receiving ---
    {
      id: "n4_051", type: "Point Comprehension",
      audio: "たんじょうびに ともだちに とけいを もらいました。とても うれしかったです。",
      question: "What happened on the speaker's birthday?",
      options: ["They bought a watch", "They received a watch from a friend", "They gave a watch to a friend", "They lost their watch"],
      correct: 1,
      romaji: "Tanjoubi ni tomodachi ni tokei wo moraimashita. Totemo ureshikatta desu.",
      translation: "I received a watch from a friend on my birthday. I was very happy."
    },
    {
      id: "n4_052", type: "Point Comprehension",
      audio: "にほんじんの ともだちが にほんごを おしえて くれます。",
      question: "What does the Japanese friend do for the speaker?",
      options: ["Cooks Japanese food", "Teaches them Japanese", "Shows them around Tokyo", "Lends them books"],
      correct: 1,
      romaji: "Nihonjin no tomodachi ga nihongo wo oshiete kuremasu.",
      translation: "My Japanese friend teaches me Japanese."
    },
    {
      id: "n4_053", type: "Point Comprehension",
      audio: "せんぱいに おいしい みせを しょうかい して もらいました。",
      question: "What did the senior do?",
      options: ["Treated them to dinner", "Introduced them to a good restaurant", "Taught them to cook", "Invited them to a party"],
      correct: 1,
      romaji: "Senpai ni oishii mise wo shoukai shite moraimashita.",
      translation: "My senior introduced me to a delicious restaurant."
    },
    // --- Conditional & Hypothetical ---
    {
      id: "n4_054", type: "Point Comprehension",
      audio: "もし じかんが あったら、びじゅつかんに いきたいです。",
      question: "What does the speaker want to do if they have time?",
      options: ["Go shopping", "Go to a museum", "Go to the movies", "Go to the park"],
      correct: 1,
      romaji: "Moshi jikan ga attara, bijutsukan ni ikitai desu.",
      translation: "If I have time, I'd like to go to a museum."
    },
    {
      id: "n4_055", type: "Point Comprehension",
      audio: "あめが ふったら、ピクニックは ちゅうしに なります。",
      question: "What happens if it rains?",
      options: ["The picnic moves indoors", "The picnic is cancelled", "The picnic is postponed", "Everyone brings an umbrella"],
      correct: 1,
      romaji: "Ame ga futtara, pikunikku wa chuushi ni narimasu.",
      translation: "If it rains, the picnic will be cancelled."
    },
    {
      id: "n4_056", type: "Quick Response",
      audio: "たからくじが あたったら、せかいりょこうを したいです。",
      question: "What would the speaker do if they won the lottery?",
      options: ["Buy a house", "Travel the world", "Quit their job", "Save the money"],
      correct: 1,
      romaji: "Takarakuji ga attara, sekai ryokou wo shitai desu.",
      translation: "If I won the lottery, I'd want to travel the world."
    },
    // --- Obligation & Permission ---
    {
      id: "n4_057", type: "Point Comprehension",
      audio: "この びょういんでは くつを ぬがなければ なりません。",
      question: "What must you do at this hospital?",
      options: ["Wear a mask", "Take off your shoes", "Show your ID", "Make an appointment"],
      correct: 1,
      romaji: "Kono byouin dewa kutsu wo nuganakerebba narimasen.",
      translation: "At this hospital, you must take off your shoes."
    },
    {
      id: "n4_058", type: "Point Comprehension",
      audio: "としょかんでは おおきな こえで はなしては いけません。",
      question: "What is not allowed in the library?",
      options: ["Using a computer", "Eating food", "Talking loudly", "Bringing bags"],
      correct: 2,
      romaji: "Toshokan dewa ookina koe de hanashite wa ikemasen.",
      translation: "You must not speak loudly in the library."
    },
    {
      id: "n4_059", type: "Point Comprehension",
      audio: "この プールでは ぼうしを かぶらなくても いいですが、みずぎは ひつよう です。",
      question: "What is required at this pool?",
      options: ["A hat is required", "A swimsuit is required", "Goggles are required", "Nothing special is required"],
      correct: 1,
      romaji: "Kono puuru dewa boushi wo kaburanakutemo ii desu ga, mizugi wa hitsuyou desu.",
      translation: "At this pool, you don't need to wear a cap, but a swimsuit is required."
    },
    // --- Potential Form ---
    {
      id: "n4_060", type: "Point Comprehension",
      audio: "この かんじは むずかしくて、よめません。だれか おしえて くれませんか。",
      question: "What is the speaker's problem?",
      options: ["They can't write the kanji", "They can't read the kanji", "They don't know the meaning", "They forgot how to type it"],
      correct: 1,
      romaji: "Kono kanji wa muzukashikute, yomemasen. Dareka oshiete kuremasen ka.",
      translation: "This kanji is difficult and I can't read it. Can someone teach me?"
    },
    {
      id: "n4_061", type: "Point Comprehension",
      audio: "このレストランでは クレジットカードが つかえないので、げんきんが ひつよう です。",
      question: "What is needed at this restaurant?",
      options: ["A reservation", "Cash", "A membership card", "Photo ID"],
      correct: 1,
      romaji: "Kono resutoran dewa kurejittoka-do ga tsukaenai node, genkin ga hitsuyou desu.",
      translation: "You can't use credit cards at this restaurant, so cash is needed."
    },
    // --- Verbs of Giving/Receiving Help ---
    {
      id: "n4_062", type: "Point Comprehension",
      audio: "みちに まよった とき、しらない ひとが えきまで つれていって くれました。",
      question: "What happened when the speaker got lost?",
      options: ["They used a map app", "A stranger took them to the station", "They called a taxi", "They asked a police officer"],
      correct: 1,
      romaji: "Michi ni mayotta toki, shiranai hito ga eki made tsurete itte kuremashita.",
      translation: "When I got lost, a stranger took me to the station."
    },
    {
      id: "n4_063", type: "Task Comprehension",
      audio: "にもつが おもいので、もって いただけませんか。",
      question: "What is the speaker asking?",
      options: ["To buy a bag", "To carry the luggage", "To put the luggage down", "To open the luggage"],
      correct: 1,
      romaji: "Nimotsu ga omoi node, motte itadakemasen ka.",
      translation: "The luggage is heavy, so could you carry it for me?"
    },
    // --- Cause & Effect ---
    {
      id: "n4_064", type: "Point Comprehension",
      audio: "たべすぎて、おなかが いたく なりました。",
      question: "Why does the speaker have a stomachache?",
      options: ["They ate something bad", "They ate too much", "They skipped a meal", "They drank too much"],
      correct: 1,
      romaji: "Tabesugite, onaka ga itaku narimashita.",
      translation: "I ate too much and got a stomachache."
    },
    {
      id: "n4_065", type: "Point Comprehension",
      audio: "ゆうべ おそくまで ゲームを して、けさ おきられませんでした。",
      question: "Why couldn't the speaker wake up this morning?",
      options: ["They were sick", "They stayed up late playing games", "Their alarm didn't work", "They were very tired from work"],
      correct: 1,
      romaji: "Yuube osoku made geemu wo shite, kesa okiraremansen deshita.",
      translation: "I played games until late last night and couldn't wake up this morning."
    },
    {
      id: "n4_066", type: "Point Comprehension",
      audio: "さいふを わすれて しまったので、ともだちに おかねを かりました。",
      question: "What did the speaker do?",
      options: ["Found their wallet", "Borrowed money from a friend", "Went home to get the wallet", "Used a credit card instead"],
      correct: 1,
      romaji: "Saifu wo wasurete shimatta node, tomodachi ni okane wo karimashita.",
      translation: "I accidentally forgot my wallet, so I borrowed money from a friend."
    },
    // --- Plans & Decisions ---
    {
      id: "n4_067", type: "Point Comprehension",
      audio: "そうだんした けっか、このけいかくは ちゅうしする ことに なりました。",
      question: "What was decided after the discussion?",
      options: ["The plan was approved", "The plan was cancelled", "The plan was postponed", "The plan was modified"],
      correct: 1,
      romaji: "Soudan shita kekka, kono keikaku wa chuushi suru koto ni narimashita.",
      translation: "As a result of the discussion, it was decided to cancel this plan."
    },
    {
      id: "n4_068", type: "Point Comprehension",
      audio: "らいねんから だいがくいんに いく ことに しました。",
      question: "What did the speaker decide?",
      options: ["To get a job", "To go to graduate school next year", "To study abroad", "To change majors"],
      correct: 1,
      romaji: "Rainen kara daigakuin ni iku koto ni shimashita.",
      translation: "I decided to go to graduate school from next year."
    },
    {
      id: "n4_069", type: "Point Comprehension",
      audio: "この しょうひんは らいげつ はつばいされる よてい です。",
      question: "When will the product be released?",
      options: ["This week", "Next month", "Next year", "It was already released"],
      correct: 1,
      romaji: "Kono shouhin wa raigetsu hatsubai sareru yotei desu.",
      translation: "This product is scheduled to be released next month."
    },
    // --- Communication & Relationships ---
    {
      id: "n4_070", type: "Point Comprehension",
      audio: "かれは いつも やくそくの じかんに おくれます。こまりますね。",
      question: "What is the problem with him?",
      options: ["He always cancels plans", "He's always late to appointments", "He never answers his phone", "He forgets people's names"],
      correct: 1,
      romaji: "Kare wa itsumo yakusoku no jikan ni okuremasu. Komarimasu ne.",
      translation: "He's always late to appointment times. It's a problem."
    },
    {
      id: "n4_071", type: "Point Comprehension",
      audio: "ひさしぶりに こうこうの ともだちに あいました。ぜんぜん かわって いませんでした。",
      question: "What was the friend like?",
      options: ["They had changed a lot", "They hadn't changed at all", "They didn't recognize each other", "They had gotten married"],
      correct: 1,
      romaji: "Hisashiburi ni koukou no tomodachi ni aimashita. Zenzen kawatte imasen deshita.",
      translation: "I met my high school friend after a long time. They hadn't changed at all."
    },
    {
      id: "n4_072", type: "Quick Response",
      audio: "ごめんなさい、やくそくの じかんに まにあわなくて。でんしゃが おくれたんです。",
      question: "Why is the speaker apologizing?",
      options: ["They forgot the appointment", "They didn't make it on time because the train was late", "They went to the wrong place", "They lost their phone"],
      correct: 1,
      romaji: "Gomen nasai, yakusoku no jikan ni maniawanakute. Densha ga okuretandesu.",
      translation: "I'm sorry for not making it on time. The train was delayed."
    },
    // --- At school ---
    {
      id: "n4_073", type: "Point Comprehension",
      audio: "らいしゅうの しけんの はんいは だいいっか から だいごか まで です。",
      question: "What is the exam range?",
      options: ["Chapters 1 to 3", "Chapters 1 to 5", "Chapters 3 to 7", "The whole textbook"],
      correct: 1,
      romaji: "Raishuu no shiken no han'i wa daiikka kara daigoka made desu.",
      translation: "The range of next week's exam is from chapter 1 to chapter 5."
    },
    {
      id: "n4_074", type: "Point Comprehension",
      audio: "この じゅぎょうは しゅくだいが おおくて、たいへん です。でも おもしろいです。",
      question: "How does the speaker feel about this class?",
      options: ["It's easy but boring", "It has lots of homework but is interesting", "It's too difficult to understand", "It has no homework"],
      correct: 1,
      romaji: "Kono jugyou wa shukudai ga ookute, taihen desu. Demo omoshiroi desu.",
      translation: "This class has a lot of homework and is tough. But it's interesting."
    },
    {
      id: "n4_075", type: "Task Comprehension",
      audio: "レポートは ワードで かいて、メールで おくって ください。",
      question: "How should the report be submitted?",
      options: ["Print and hand in", "Write in Word and send by email", "Upload to the website", "Write by hand"],
      correct: 1,
      romaji: "Repooto wa waado de kaite, meeru de okutte kudasai.",
      translation: "Please write the report in Word and send it by email."
    },
    // --- Impressions & Opinions ---
    {
      id: "n4_076", type: "Point Comprehension",
      audio: "あの えいがは かなしい はなしでしたが、とても よかったです。",
      question: "What did the speaker think of the movie?",
      options: ["It was boring", "It was a sad story but very good", "It was funny", "It was scary"],
      correct: 1,
      romaji: "Ano eiga wa kanashii hanashi deshita ga, totemo yokatta desu.",
      translation: "That movie was a sad story, but it was very good."
    },
    {
      id: "n4_077", type: "Point Comprehension",
      audio: "この ほんは むずかしそうに みえますが、よんでみたら かんたんでした。",
      question: "What does the speaker say about the book?",
      options: ["It looks easy but is actually hard", "It looks hard but was actually easy to read", "It was exactly as difficult as expected", "They haven't read it yet"],
      correct: 1,
      romaji: "Kono hon wa muzukashisou ni miemasu ga, yonde mitara kantan deshita.",
      translation: "This book looks difficult, but when I tried reading it, it was easy."
    },
    {
      id: "n4_078", type: "Point Comprehension",
      audio: "にほんに すんで いて いちばん こまることは、じしんが おおい ことです。",
      question: "What is the most troublesome thing about living in Japan?",
      options: ["The language barrier", "The many earthquakes", "The expensive prices", "The crowded trains"],
      correct: 1,
      romaji: "Nihon ni sunde ite ichiban komaru koto wa, jishin ga ooi koto desu.",
      translation: "The most troublesome thing about living in Japan is the many earthquakes."
    },
    // --- Trying / Attempting ---
    {
      id: "n4_079", type: "Point Comprehension",
      audio: "はじめて なっとうを たべてみましたが、ちょっと にがてでした。",
      question: "How did the speaker feel about natto?",
      options: ["They loved it", "They found it a bit difficult to eat", "They had eaten it many times before", "They couldn't find it anywhere"],
      correct: 1,
      romaji: "Hajimete nattou wo tabete mimashita ga, chotto nigate deshita.",
      translation: "I tried natto for the first time, but it was a bit hard for me."
    },
    {
      id: "n4_080", type: "Point Comprehension",
      audio: "あたらしい カフェに いってみたら、ふんいきが よくて コーヒーも おいしかったです。",
      question: "What was the new cafe like?",
      options: ["Noisy with bad coffee", "Good atmosphere and tasty coffee", "Cheap but crowded", "Expensive and far away"],
      correct: 1,
      romaji: "Atarashii kafe ni itte mitara, fun'iki ga yokute koohii mo oishikatta desu.",
      translation: "When I tried going to the new cafe, the atmosphere was nice and the coffee was delicious too."
    },
    // --- Te-form connected actions ---
    {
      id: "n4_081", type: "Point Comprehension",
      audio: "あさ おきて、シャワーを あびて、あさごはんを たべてから、かいしゃに いきます。",
      question: "What does the speaker do after showering?",
      options: ["Goes to work", "Eats breakfast", "Brushes their teeth", "Checks their phone"],
      correct: 1,
      romaji: "Asa okite, shawaa wo abite, asagohan wo tabete kara, kaisha ni ikimasu.",
      translation: "I wake up in the morning, take a shower, eat breakfast, and then go to work."
    },
    {
      id: "n4_082", type: "Point Comprehension",
      audio: "でんしゃに のって、ほんを よみながら、かいしゃまで いきます。",
      question: "What does the speaker do on the train?",
      options: ["Sleeps", "Reads a book", "Listens to music", "Watches videos"],
      correct: 1,
      romaji: "Densha ni notte, hon wo yomi nagara, kaisha made ikimasu.",
      translation: "I ride the train and go to work while reading a book."
    },
    // --- Passive & Causative ---
    {
      id: "n4_083", type: "Point Comprehension",
      audio: "あめに ふられて、びしょぬれに なりました。",
      question: "What happened to the speaker?",
      options: ["They forgot their umbrella at home", "They got caught in the rain and got soaked", "They fell in a puddle", "They spilled water on themselves"],
      correct: 1,
      romaji: "Ame ni furarete, bishonure ni narimashita.",
      translation: "I got rained on and became soaking wet."
    },
    {
      id: "n4_084", type: "Point Comprehension",
      audio: "でんしゃの なかで あしを ふまれました。いたかったです。",
      question: "What happened on the train?",
      options: ["Someone bumped into them", "Someone stepped on their foot", "Someone took their seat", "Someone pushed them"],
      correct: 1,
      romaji: "Densha no naka de ashi wo fumaremashita. Itakatta desu.",
      translation: "Someone stepped on my foot on the train. It hurt."
    },
    {
      id: "n4_085", type: "Point Comprehension",
      audio: "おとうとに パソコンを こわされて しまいました。",
      question: "What happened?",
      options: ["The speaker broke their computer", "Their younger brother broke the computer", "The computer was stolen", "The computer needs an update"],
      correct: 1,
      romaji: "Otouto ni pasokon wo kowasarete shimaimashita.",
      translation: "My computer was broken by my younger brother."
    },
    // --- Volitional Form ---
    {
      id: "n4_086", type: "Quick Response",
      audio: "あした はやく おきなきゃ いけないから、もう ねよう。",
      question: "What is the speaker going to do?",
      options: ["Stay up late", "Go to sleep now", "Set an alarm", "Watch one more episode"],
      correct: 1,
      romaji: "Ashita hayaku okinakya ikenai kara, mou neyou.",
      translation: "I have to wake up early tomorrow, so let's sleep now."
    },
    {
      id: "n4_087", type: "Quick Response",
      audio: "のどが かわいたね。なにか のみに いこう。",
      question: "What is the speaker suggesting?",
      options: ["Going to buy water", "Going to get something to drink", "Going home", "Going for a run"],
      correct: 1,
      romaji: "Nodo ga kawaita ne. Nanika nomi ni ikou.",
      translation: "I'm thirsty. Let's go get something to drink."
    },
    // --- Various grammar patterns ---
    {
      id: "n4_088", type: "Point Comprehension",
      audio: "この ケーキは あまくて、ふわふわで、とても おいしいです。",
      question: "How is the cake described?",
      options: ["Sour and hard", "Sweet, fluffy, and very delicious", "Bitter and dry", "Salty and crunchy"],
      correct: 1,
      romaji: "Kono keeki wa amakute, fuwafuwa de, totemo oishii desu.",
      translation: "This cake is sweet, fluffy, and very delicious."
    },
    {
      id: "n4_089", type: "Point Comprehension",
      audio: "さっき じしんが ありましたが、おおきな ひがいは なかったようです。",
      question: "What happened?",
      options: ["A big earthquake caused damage", "There was an earthquake but no major damage", "There was a typhoon warning", "A building collapsed"],
      correct: 1,
      romaji: "Sakki jishin ga arimashita ga, ookina higai wa nakatta you desu.",
      translation: "There was an earthquake a moment ago, but it seems there was no major damage."
    },
    {
      id: "n4_090", type: "Point Comprehension",
      audio: "このまちは むかし しずかでしたが、いまは にぎやかに なりました。",
      question: "How has the town changed?",
      options: ["It used to be lively but is now quiet", "It used to be quiet but is now lively", "It hasn't changed at all", "It has become more dangerous"],
      correct: 1,
      romaji: "Kono machi wa mukashi shizuka deshita ga, ima wa nigiyaka ni narimashita.",
      translation: "This town used to be quiet, but now it has become lively."
    },
    // --- Expressing desires & feelings ---
    {
      id: "n4_091", type: "Point Comprehension",
      audio: "あたらしい パソコンが ほしいんですが、いま おかねが ありません。",
      question: "What is the speaker's situation?",
      options: ["They just bought a new computer", "They want a new computer but have no money", "They are selling their computer", "They don't need a computer"],
      correct: 1,
      romaji: "Atarashii pasokon ga hoshiin desu ga, ima okane ga arimasen.",
      translation: "I want a new computer, but I don't have money right now."
    },
    {
      id: "n4_092", type: "Point Comprehension",
      audio: "いつか じぶんの みせを もちたいと おもって います。",
      question: "What is the speaker's dream?",
      options: ["To travel the world", "To have their own shop someday", "To write a book", "To become a teacher"],
      correct: 1,
      romaji: "Itsuka jibun no mise wo mochitai to omotte imasu.",
      translation: "I think I'd like to have my own shop someday."
    },
    {
      id: "n4_093", type: "Point Comprehension",
      audio: "にほんの マンガに きょうみが あって、にほんごの べんきょうを はじめました。",
      question: "Why did the speaker start studying Japanese?",
      options: ["For work", "Because of interest in manga", "To travel to Japan", "Their friend asked them to"],
      correct: 1,
      romaji: "Nihon no manga ni kyoumi ga atte, nihongo no benkyou wo hajimemashita.",
      translation: "I'm interested in Japanese manga, and that's why I started studying Japanese."
    },
    // --- Describing ongoing states ---
    {
      id: "n4_094", type: "Point Comprehension",
      audio: "まどが あいて いますよ。さむいから、しめましょうか。",
      question: "What does the speaker offer to do?",
      options: ["Open the window", "Close the window because it's cold", "Turn on the heater", "Get a blanket"],
      correct: 1,
      romaji: "Mado ga aite imasu yo. Samui kara, shimemashoo ka.",
      translation: "The window is open. It's cold, shall I close it?"
    },
    {
      id: "n4_095", type: "Point Comprehension",
      audio: "かぎが かかって います。かぎを もって いますか。",
      question: "What is the situation?",
      options: ["The door is open", "The door is locked and they need the key", "The key is lost", "Someone is knocking"],
      correct: 1,
      romaji: "Kagi ga kakatte imasu. Kagi wo motte imasu ka.",
      translation: "It's locked. Do you have the key?"
    },
    // --- Time expressions ---
    {
      id: "n4_096", type: "Point Comprehension",
      audio: "にほんに きて から、もう さんねんに なります。",
      question: "How long has the speaker been in Japan?",
      options: ["1 year", "2 years", "3 years", "5 years"],
      correct: 2,
      romaji: "Nihon ni kite kara, mou sannen ni narimasu.",
      translation: "It's already been 3 years since I came to Japan."
    },
    {
      id: "n4_097", type: "Point Comprehension",
      audio: "しけんまで あと いっしゅうかんしか ありません。がんばらないと。",
      question: "How much time is left until the exam?",
      options: ["Only one day", "Only one week", "One month", "Two weeks"],
      correct: 1,
      romaji: "Shiken made ato isshuukan shika arimasen. Ganbaranai to.",
      translation: "There's only one week left until the exam. I have to do my best."
    },
    {
      id: "n4_098", type: "Point Comprehension",
      audio: "さんじゅっぷんも まったのに、バスが きませんでした。",
      question: "What happened?",
      options: ["The bus came early", "They waited 30 minutes but the bus didn't come", "They missed the bus by 30 minutes", "The bus was cancelled"],
      correct: 1,
      romaji: "Sanjuppun mo matta noni, basu ga kimasen deshita.",
      translation: "Even though I waited 30 minutes, the bus didn't come."
    },
    // --- Describing appearances ---
    {
      id: "n4_099", type: "Point Comprehension",
      audio: "あの ひとは つかれて いるように みえます。",
      question: "How does that person look?",
      options: ["Happy", "Angry", "Tired", "Confused"],
      correct: 2,
      romaji: "Ano hito wa tsukarete iru you ni miemasu.",
      translation: "That person looks like they are tired."
    },
    {
      id: "n4_100", type: "Point Comprehension",
      audio: "このケーキは おいしそうですね。ひとつ たべてみたいです。",
      question: "What does the speaker think about the cake?",
      options: ["It looks too sweet", "It looks delicious and they want to try one", "It looks expensive", "It looks old"],
      correct: 1,
      romaji: "Kono keeki wa oishisou desu ne. Hitotsu tabete mitai desu.",
      translation: "This cake looks delicious. I'd like to try one."
    },
    // --- Instructions ---
    {
      id: "n4_101", type: "Task Comprehension",
      audio: "この ボタンを おしてから、カードを いれて ください。",
      question: "What should be done first?",
      options: ["Insert the card", "Press the button", "Enter the PIN", "Take the receipt"],
      correct: 1,
      romaji: "Kono botan wo oshite kara, kaado wo irete kudasai.",
      translation: "Please press this button first, then insert the card."
    },
    {
      id: "n4_102", type: "Task Comprehension",
      audio: "ここに すわって、なまえが よばれるまで まって ください。",
      question: "What should the listener do?",
      options: ["Stand in line", "Sit and wait until their name is called", "Fill out a form", "Go to the counter"],
      correct: 1,
      romaji: "Koko ni suwatte, namae ga yobareru made matte kudasai.",
      translation: "Please sit here and wait until your name is called."
    },
    // --- Expressing difficulty ---
    {
      id: "n4_103", type: "Point Comprehension",
      audio: "この もんだいは かんがえれば かんがえるほど、わからなく なります。",
      question: "What happens the more the speaker thinks about the problem?",
      options: ["They understand it better", "They get more confused", "They find the answer", "They give up"],
      correct: 1,
      romaji: "Kono mondai wa kangaereba kangaeru hodo, wakaranaku narimasu.",
      translation: "The more I think about this problem, the less I understand it."
    },
    {
      id: "n4_104", type: "Point Comprehension",
      audio: "かんじの べんきょうが いちばん たいへん ですが、あきらめずに がんばります。",
      question: "What does the speaker say about kanji study?",
      options: ["It's the easiest part", "It's the hardest but they won't give up", "They have already mastered it", "They decided to skip it"],
      correct: 1,
      romaji: "Kanji no benkyou ga ichiban taihen desu ga, akiramezu ni ganbarimasu.",
      translation: "Kanji study is the hardest, but I'll keep trying without giving up."
    },
    // --- Conjecture ---
    {
      id: "n4_105", type: "Point Comprehension",
      audio: "あのひとは にほんじんでは ないかもしれません。えいごで はなして いましたから。",
      question: "Why might that person not be Japanese?",
      options: ["They look different", "They were speaking English", "They don't eat Japanese food", "They don't use chopsticks"],
      correct: 1,
      romaji: "Ano hito wa nihonjin dewa nai kamoshiremasen. Eigo de hanashite imashita kara.",
      translation: "That person might not be Japanese. Because they were speaking in English."
    },
    {
      id: "n4_106", type: "Point Comprehension",
      audio: "この ようすだと、あしたの しあいは ちゅうしに なるでしょう。",
      question: "What will likely happen to tomorrow's game?",
      options: ["It will be rescheduled", "It will be cancelled", "It will go ahead as planned", "It will be moved indoors"],
      correct: 1,
      romaji: "Kono yousu da to, ashita no shiai wa chuushi ni naru deshou.",
      translation: "Given this situation, tomorrow's game will probably be cancelled."
    },
    // --- Requests & Favors ---
    {
      id: "n4_107", type: "Task Comprehension",
      audio: "あしたの かいぎの じかんを かくにん して いただけますか。",
      question: "What is the speaker asking?",
      options: ["To cancel the meeting", "To confirm tomorrow's meeting time", "To reschedule the meeting", "To prepare for the meeting"],
      correct: 1,
      romaji: "Ashita no kaigi no jikan wo kakunin shite itadakemasu ka.",
      translation: "Could you confirm the time of tomorrow's meeting?"
    },
    {
      id: "n4_108", type: "Task Comprehension",
      audio: "えいごの メールを チェックして いただけませんか。じしんが ないんです。",
      question: "What does the speaker want help with?",
      options: ["Writing a letter", "Checking an English email", "Translating a document", "Making a phone call"],
      correct: 1,
      romaji: "Eigo no meeru wo chekku shite itadakemasen ka. Jishin ga naindesu.",
      translation: "Could you check my English email? I'm not confident about it."
    },
    // --- Talking about habits ---
    {
      id: "n4_109", type: "Point Comprehension",
      audio: "まいにち にっきを つけるように して います。",
      question: "What does the speaker make an effort to do daily?",
      options: ["Exercise", "Write a diary", "Read the news", "Cook meals"],
      correct: 1,
      romaji: "Mainichi nikki wo tsukeru you ni shite imasu.",
      translation: "I make an effort to keep a diary every day."
    },
    {
      id: "n4_110", type: "Point Comprehension",
      audio: "ねる まえに かならず はを みがきます。それから ほんを すこし よみます。",
      question: "What does the speaker always do before sleeping?",
      options: ["Takes a shower", "Watches TV", "Brushes their teeth", "Checks their phone"],
      correct: 2,
      romaji: "Neru mae ni kanarazu ha wo migakimasu. Sorekara hon wo sukoshi yomimasu.",
      translation: "Before sleeping, I always brush my teeth. Then I read a little."
    },
    // --- Seasons & Events ---
    {
      id: "n4_111", type: "Point Comprehension",
      audio: "にほんの はるは さくらが きれいで、おはなみを する ひとが おおいです。",
      question: "What is popular in Japanese spring?",
      options: ["Skiing", "Cherry blossom viewing", "Swimming", "Hiking"],
      correct: 1,
      romaji: "Nihon no haru wa sakura ga kirei de, ohanami wo suru hito ga ooi desu.",
      translation: "In Japanese spring, the cherry blossoms are beautiful and many people do flower viewing."
    },
    {
      id: "n4_112", type: "Point Comprehension",
      audio: "おしょうがつに は かぞくみんなで おせちりょうりを たべます。",
      question: "What does the family do on New Year's?",
      options: ["Goes to a shrine", "Eats osechi cuisine together", "Exchanges gifts", "Watches fireworks"],
      correct: 1,
      romaji: "Oshougatsu ni wa kazoku minna de osechi ryouri wo tabemasu.",
      translation: "On New Year's, the whole family eats osechi cuisine."
    },
    // --- Technology ---
    {
      id: "n4_113", type: "Point Comprehension",
      audio: "スマホの バッテリーが もう すぐ きれそうです。じゅうでんき ありますか。",
      question: "What is the speaker's problem?",
      options: ["Their phone screen is broken", "Their phone battery is about to die", "They lost their phone", "Their phone has no signal"],
      correct: 1,
      romaji: "Sumaho no batterii ga mou sugu kiresou desu. Juudenki arimasu ka.",
      translation: "My phone battery is about to die. Do you have a charger?"
    },
    {
      id: "n4_114", type: "Point Comprehension",
      audio: "パスワードを わすれて しまって、アカウントに ログインできません。",
      question: "Why can't the speaker log in?",
      options: ["The server is down", "They forgot their password", "Their account was deleted", "The app crashed"],
      correct: 1,
      romaji: "Pasuwaado wo wasurete shimatte, akaunto ni roguin dekimasen.",
      translation: "I forgot my password and can't log in to my account."
    },
    // --- Describing environments ---
    {
      id: "n4_115", type: "Point Comprehension",
      audio: "この こうえんは ひろくて、こどもが あそべる ばしょも あります。",
      question: "What is this park like?",
      options: ["Small with no playground", "Wide with a place for children to play", "Crowded and noisy", "Only for adults"],
      correct: 1,
      romaji: "Kono kouen wa hirokute, kodomo ga asoberu basho mo arimasu.",
      translation: "This park is spacious and also has a place where children can play."
    },
    {
      id: "n4_116", type: "Point Comprehension",
      audio: "この まちには でんしゃの えきが なくて、バスしか ありません。",
      question: "What public transport is available in this town?",
      options: ["Only trains", "Only buses", "Trains and buses", "Neither trains nor buses"],
      correct: 1,
      romaji: "Kono machi ni wa densha no eki ga nakute, basu shika arimasen.",
      translation: "This town has no train station and only has buses."
    },
    // --- Making plans ---
    {
      id: "n4_117", type: "Point Comprehension",
      audio: "こんしゅうの どようびか にちようび、どちらが つごうが いいですか。",
      question: "What is being asked?",
      options: ["Which day to take off", "Whether Saturday or Sunday is more convenient", "What to do this weekend", "Whether to work overtime"],
      correct: 1,
      romaji: "Konshuu no doyoubi ka nichiyoubi, dochira ga tsugou ga ii desu ka.",
      translation: "This Saturday or Sunday, which is more convenient for you?"
    },
    {
      id: "n4_118", type: "Point Comprehension",
      audio: "パーティーは ろくじからですが、じゅんびが あるので さんじに きて ください。",
      question: "What time should the listener arrive?",
      options: ["At 3", "At 4", "At 5", "At 6"],
      correct: 0,
      romaji: "Paatii wa rokuji kara desu ga, junbi ga aru node sanji ni kite kudasai.",
      translation: "The party starts at 6, but please come at 3 because there are preparations."
    },
    // --- Expressing regret ---
    {
      id: "n4_119", type: "Point Comprehension",
      audio: "もっと はやく にほんごの べんきょうを はじめれば よかったです。",
      question: "What does the speaker regret?",
      options: ["Studying too much", "Not starting Japanese study earlier", "Choosing the wrong textbook", "Not going to Japan"],
      correct: 1,
      romaji: "Motto hayaku nihongo no benkyou wo hajimerebba yokatta desu.",
      translation: "I wish I had started studying Japanese earlier."
    },
    {
      id: "n4_120", type: "Point Comprehension",
      audio: "きのう かさを もっていけば よかった。びしょぬれに なって しまいました。",
      question: "What does the speaker regret?",
      options: ["Wearing the wrong shoes", "Not bringing an umbrella yesterday", "Going outside too late", "Forgetting their coat"],
      correct: 1,
      romaji: "Kinou kasa wo motte ikebba yokatta. Bishonure ni natte shimaimashita.",
      translation: "I should have taken an umbrella yesterday. I got soaking wet."
    },
    // --- Gratitude & Apology ---
    {
      id: "n4_121", type: "Quick Response",
      audio: "おいそがしい ところ、すみませんが、すこし おじかんを いただけますか。",
      question: "What is the speaker asking for?",
      options: ["Money", "A little of the listener's time", "A favor for tomorrow", "Directions to a place"],
      correct: 1,
      romaji: "Oisogashii tokoro, sumimasen ga, sukoshi ojikan wo itadakemasu ka.",
      translation: "I'm sorry to bother you when you're busy, but could you spare a little time?"
    },
    {
      id: "n4_122", type: "Quick Response",
      audio: "おかげさまで、しけんに ごうかくする ことが できました。",
      question: "What happened?",
      options: ["They failed the exam", "They passed the exam thanks to help", "They decided not to take the exam", "They will retake the exam"],
      correct: 1,
      romaji: "Okagesama de, shiken ni goukaku suru koto ga dekimashita.",
      translation: "Thanks to your help, I was able to pass the exam."
    },
    // --- Expressing worry ---
    {
      id: "n4_123", type: "Point Comprehension",
      audio: "むすこが なかなか しゅうしょくが きまらなくて、しんぱいしています。",
      question: "What is the speaker worried about?",
      options: ["Their son's grades", "Their son not finding a job", "Their son's health", "Their son moving away"],
      correct: 1,
      romaji: "Musuko ga nakanaka shuushoku ga kimaranakute, shinpai shite imasu.",
      translation: "My son can't seem to find employment, and I'm worried."
    },
    {
      id: "n4_124", type: "Point Comprehension",
      audio: "さいきん たいじゅうが ふえて きたので、ダイエットを はじめようと おもいます。",
      question: "What does the speaker plan to do?",
      options: ["Start exercising", "Start a diet", "See a doctor", "Change their job"],
      correct: 1,
      romaji: "Saikin taijuu ga fuete kita node, daietto wo hajimeyou to omoimasu.",
      translation: "My weight has been increasing lately, so I think I'll start a diet."
    },
    // --- Conversations ---
    {
      id: "n4_125", type: "Point Comprehension",
      audio: "すみません、この きかいの つかいかたが よく わからないんですが。",
      question: "What is the speaker having trouble with?",
      options: ["Finding the machine", "Using the machine", "Buying the machine", "Repairing the machine"],
      correct: 1,
      romaji: "Sumimasen, kono kikai no tsukaikata ga yoku wakaranain desu ga.",
      translation: "Excuse me, I don't really understand how to use this machine."
    },
    {
      id: "n4_126", type: "Point Comprehension",
      audio: "やっと レポートが おわりました。さんにちも かかりました。",
      question: "How long did the report take?",
      options: ["1 day", "2 days", "3 days", "1 week"],
      correct: 2,
      romaji: "Yatto repooto ga owarimashita. Sannichi mo kakarimashita.",
      translation: "I finally finished the report. It took 3 whole days."
    },
    {
      id: "n4_127", type: "Point Comprehension",
      audio: "この えいがの チケットは ネットで かった ほうが やすいですよ。",
      question: "How can you get cheaper movie tickets?",
      options: ["At the theater counter", "By buying online", "By using a coupon", "By going on weekdays"],
      correct: 1,
      romaji: "Kono eiga no chiketto wa netto de katta hou ga yasui desu yo.",
      translation: "It's cheaper to buy this movie's tickets online."
    },
    {
      id: "n4_128", type: "Point Comprehension",
      audio: "でんわばんごうが かわったので、あとで メールで おしらせします。",
      question: "What will the speaker inform by email later?",
      options: ["Their new address", "Their new phone number", "Their schedule change", "Their new email address"],
      correct: 1,
      romaji: "Denwa bangou ga kawatta node, ato de meeru de oshirase shimasu.",
      translation: "My phone number changed, so I'll notify you by email later."
    },
    // --- More complex scenarios ---
    {
      id: "n4_129", type: "Point Comprehension",
      audio: "この くすりは しょくごに いちにち さんかい のんで ください。",
      question: "How should the medicine be taken?",
      options: ["Once a day before meals", "Twice a day with water", "Three times a day after meals", "Once before sleeping"],
      correct: 2,
      romaji: "Kono kusuri wa shokugo ni ichinichi sankai nonde kudasai.",
      translation: "Please take this medicine 3 times a day after meals."
    },
    {
      id: "n4_130", type: "Task Comprehension",
      audio: "もうしわけ ございませんが、きょうは まんせき です。あしたなら あいて おります。",
      question: "What is the situation?",
      options: ["Today is closed", "Today is fully booked but tomorrow is available", "Tomorrow is also full", "They need a reservation"],
      correct: 1,
      romaji: "Moushiwake gozaimasen ga, kyou wa manseki desu. Ashita nara aite orimasu.",
      translation: "We're sorry, but today is fully booked. If it's tomorrow, we have availability."
    },
    {
      id: "n4_131", type: "Point Comprehension",
      audio: "にほんごのうりょくしけんの じゅんびを して いますが、ちょうかいが いちばん むずかしいです。",
      question: "What section does the speaker find hardest?",
      options: ["Reading", "Grammar", "Listening", "Vocabulary"],
      correct: 2,
      romaji: "Nihongo nouryoku shiken no junbi wo shite imasu ga, choukai ga ichiban muzukashii desu.",
      translation: "I'm preparing for the JLPT, but listening is the hardest."
    },
    {
      id: "n4_132", type: "Point Comprehension",
      audio: "おきゃくさまの ごちゅうもんは、しょうしょう おまち ください。じゅっぷんほど かかります。",
      question: "How long will the order take?",
      options: ["About 5 minutes", "About 10 minutes", "About 15 minutes", "About 30 minutes"],
      correct: 1,
      romaji: "Okyakusama no gochuumon wa, shoushou omachi kudasai. Juppun hodo kakarimasu.",
      translation: "Please wait a moment for your order. It will take about 10 minutes."
    },
    // --- Environment & Nature ---
    {
      id: "n4_133", type: "Point Comprehension",
      audio: "さいきん、プラスチックごみを へらす ために、マイバッグを もっていく ひとが ふえました。",
      question: "What trend is increasing?",
      options: ["Using plastic bags", "Bringing your own bag to reduce plastic waste", "Recycling paper", "Using less electricity"],
      correct: 1,
      romaji: "Saikin, purasuchikku gomi wo herasu tame ni, mai baggu wo motte iku hito ga fuemashita.",
      translation: "Recently, more people are bringing their own bags to reduce plastic waste."
    },
    {
      id: "n4_134", type: "Point Comprehension",
      audio: "この かわは むかしは きたなかったですが、いまは きれいに なりました。",
      question: "How has the river changed?",
      options: ["It was clean but got dirty", "It was dirty but is now clean", "It has always been clean", "It dried up"],
      correct: 1,
      romaji: "Kono kawa wa mukashi wa kitanakatta desu ga, ima wa kirei ni narimashita.",
      translation: "This river used to be dirty, but now it has become clean."
    },
    // --- Daily life situations ---
    {
      id: "n4_135", type: "Task Comprehension",
      audio: "この クーポンは らいげつまで つかえますが、どようびと にちようびは つかえません。",
      question: "When can't the coupon be used?",
      options: ["On weekdays", "On Saturday and Sunday", "After 6 PM", "During holidays"],
      correct: 1,
      romaji: "Kono kuupon wa raigetsu made tsukaemasu ga, doyoubi to nichiyoubi wa tsukaemasen.",
      translation: "This coupon can be used until next month, but not on Saturday and Sunday."
    },
    {
      id: "n4_136", type: "Point Comprehension",
      audio: "ちゅうしゃじょうは いっぱい だったので、すこし とおい ところに とめました。",
      question: "Where did they park?",
      options: ["In the parking lot", "A little far away because the lot was full", "In front of the building", "They didn't find parking"],
      correct: 1,
      romaji: "Chuushajou wa ippai datta node, sukoshi tooi tokoro ni tomemashita.",
      translation: "The parking lot was full, so I parked a little far away."
    },
    {
      id: "n4_137", type: "Task Comprehension",
      audio: "この かみに れんらくさきと さんかにんずうを かいて だして ください。",
      question: "What needs to be written on the paper?",
      options: ["Name and age", "Contact info and number of participants", "Address and phone number", "Name and occupation"],
      correct: 1,
      romaji: "Kono kami ni renrakusaki to sanka ninzuu wo kaite dashite kudasai.",
      translation: "Please write your contact information and number of participants on this paper and submit it."
    },
    // --- More daily conversations ---
    {
      id: "n4_138", type: "Quick Response",
      audio: "つぎの やすみに なにか よてい ありますか。",
      question: "What is the speaker asking?",
      options: ["About work schedule", "If the listener has plans for the next holiday", "About past vacation", "About daily routine"],
      correct: 1,
      romaji: "Tsugi no yasumi ni nanika yotei arimasu ka.",
      translation: "Do you have any plans for the next holiday?"
    },
    {
      id: "n4_139", type: "Point Comprehension",
      audio: "すいようびの よるなら あいて いますが、もくようびは ちょっと つごうが わるいです。",
      question: "When is the speaker available?",
      options: ["Tuesday night", "Wednesday night", "Thursday night", "Friday night"],
      correct: 1,
      romaji: "Suiyoubi no yoru nara aite imasu ga, mokuyoubi wa chotto tsugou ga warui desu.",
      translation: "Wednesday night I'm free, but Thursday is a bit inconvenient."
    },
    {
      id: "n4_140", type: "Point Comprehension",
      audio: "テレビを みながら ごはんを たべる のは ぎょうぎが わるいと おもいます。",
      question: "What does the speaker think is bad manners?",
      options: ["Talking while eating", "Eating while watching TV", "Using your phone at the table", "Eating too fast"],
      correct: 1,
      romaji: "Terebi wo mi nagara gohan wo taberu no wa gyougi ga warui to omoimasu.",
      translation: "I think eating while watching TV is bad manners."
    },
    // --- Expressing purpose ---
    {
      id: "n4_141", type: "Point Comprehension",
      audio: "けんこうの ために、まいにち やさいを たくさん たべるように しています。",
      question: "Why does the speaker eat lots of vegetables?",
      options: ["They're on a diet", "For their health", "They're vegetarian", "Vegetables are cheap"],
      correct: 1,
      romaji: "Kenkou no tame ni, mainichi yasai wo takusan taberu you ni shite imasu.",
      translation: "For my health, I make an effort to eat lots of vegetables every day."
    },
    {
      id: "n4_142", type: "Point Comprehension",
      audio: "しけんに ごうかくする ために、まいにち さんじかん べんきょうして います。",
      question: "How much does the speaker study daily?",
      options: ["1 hour", "2 hours", "3 hours", "4 hours"],
      correct: 2,
      romaji: "Shiken ni goukaku suru tame ni, mainichi sanjikan benkyou shite imasu.",
      translation: "To pass the exam, I study 3 hours every day."
    },
    // --- Complex instructions ---
    {
      id: "n4_143", type: "Task Comprehension",
      audio: "まず みぎに まがって、つぎの しんごうを ひだりに まがると、ひだりがわに あります。",
      question: "After turning right, what should you do next?",
      options: ["Go straight", "Turn left at the next traffic light", "Turn right again", "Cross the bridge"],
      correct: 1,
      romaji: "Mazu migi ni magatte, tsugi no shingou wo hidari ni magaru to, hidarigawa ni arimasu.",
      translation: "First turn right, then turn left at the next traffic light, and it will be on the left side."
    },
    {
      id: "n4_144", type: "Task Comprehension",
      audio: "もうしこみは インターネットか、まどぐちで できます。しめきりは じゅうがつ ついたち です。",
      question: "When is the application deadline?",
      options: ["September 1st", "October 1st", "November 1st", "December 1st"],
      correct: 1,
      romaji: "Moushikomi wa intaanetto ka, madoguchi de dekimasu. Shimekiri wa juugatsu tsuitachi desu.",
      translation: "Applications can be made online or at the counter. The deadline is October 1st."
    },
    // --- Culture ---
    {
      id: "n4_145", type: "Point Comprehension",
      audio: "にほんでは いえに はいる まえに くつを ぬぐ しゅうかんが あります。",
      question: "What is the Japanese custom mentioned?",
      options: ["Bowing when greeting", "Taking off shoes before entering a house", "Washing hands before eating", "Bringing a gift when visiting"],
      correct: 1,
      romaji: "Nihon dewa ie ni hairu mae ni kutsu wo nugu shuukan ga arimasu.",
      translation: "In Japan, there is a custom of taking off your shoes before entering a house."
    },
    {
      id: "n4_146", type: "Point Comprehension",
      audio: "にほんの でんしゃは じかんどおりに くるので、とても べんり です。",
      question: "What is said about Japanese trains?",
      options: ["They are very crowded", "They come on time and are very convenient", "They are expensive", "They run 24 hours"],
      correct: 1,
      romaji: "Nihon no densha wa jikan doori ni kuru node, totemo benri desu.",
      translation: "Japanese trains come on time, so they are very convenient."
    },
    // --- Polite conversations ---
    {
      id: "n4_147", type: "Quick Response",
      audio: "おひさしぶりですね。おげんきでしたか。",
      question: "What kind of conversation is this?",
      options: ["Meeting someone for the first time", "Greeting someone you haven't seen in a while", "Saying goodbye", "Apologizing"],
      correct: 1,
      romaji: "Ohisashiburi desu ne. Ogenki deshita ka.",
      translation: "It's been a long time, hasn't it? Have you been well?"
    },
    {
      id: "n4_148", type: "Quick Response",
      audio: "おさきに しつれいします。おつかれさまでした。",
      question: "What is the speaker doing?",
      options: ["Arriving at work", "Leaving work before others", "Starting a meeting", "Greeting a customer"],
      correct: 1,
      romaji: "Osaki ni shitsurei shimasu. Otsukaresama deshita.",
      translation: "Excuse me for leaving ahead of you. Good work today."
    },
    // --- Final questions ---
    {
      id: "n4_149", type: "Point Comprehension",
      audio: "きょうは そうべつかいが あるので、いつもより おそく かえります。",
      question: "Why is the speaker going home late today?",
      options: ["Overtime work", "There's a farewell party", "Traffic is bad", "They have an appointment"],
      correct: 1,
      romaji: "Kyou wa soubetsukai ga aru node, itsumo yori osoku kaerimasu.",
      translation: "There's a farewell party today, so I'll go home later than usual."
    },
    {
      id: "n4_150", type: "Point Comprehension",
      audio: "この しゃしんは わたしが しょうがくせいの とき とった ものです。なつかしいですね。",
      question: "When was the photo taken?",
      options: ["When the speaker was in high school", "When the speaker was in elementary school", "When the speaker was in university", "When the speaker was a child"],
      correct: 1,
      romaji: "Kono shashin wa watashi ga shougakusei no toki totta mono desu. Natsukashii desu ne.",
      translation: "This photo was taken when I was an elementary school student. How nostalgic."
    }
  ]
};
