/* =========================
   Brand
========================= */
const BRAND_NAME = "IFA Learning Hub Tajweed";
const TAGLINE = "Learn with Faith & Precision";
document.title = `${BRAND_NAME} – Quiz App`;

/* =========================
   Chapters data (22)
========================= */
const CHAPTERS = [
 {
  id: 1,
  title: "باب 1: تعارفِ علمِ تجوید",
  title_en: "Chapter 1: Introduction to the Science of Tajwīd",
  title_ru: "Глава 1: Введение в науку о таджвиде",
  questions: [
    {
      question: "تجوید کا لغوی معنی کیا ہے؟",
      question_en: "What is the literal meaning of Tajwīd?",
      question_ru: "Что означает таджвид в буквальном смысле?",
      a: "درست کرنا",
      a_en: "To correct",
      a_ru: "Исправлять",
      b: "دہرانا",
      b_en: "To repeat",
      b_ru: "Повторять",
      c: "سنوارنا",
      c_en: "To beautify or refine",
      c_ru: "Украшать, улучшать",
      d: "تیز پڑھنا",
      d_en: "To read fast",
      d_ru: "Читать быстро",
      correct: "a"
    },
    {
      question: "تجوید کا اصطلاحی معنی کیا ہے؟",
      question_en: "What is the technical definition of Tajwīd?",
      question_ru: "Каково терминологическое определение таджвида?",
      a: "قرآن کو تیزی سے پڑھنا",
      a_en: "To recite the Qur’an quickly",
      a_ru: "Быстро читать Коран",
      b: "قرآن کو قواعد کے ساتھ صحیح مخارج سے ادا کرنا",
      b_en: "To recite the Qur’an correctly using its rules and proper articulation points",
      b_ru: "Читать Коран правильно, соблюдая правила и места произношения",
      c: "قرآن کو ترجمے کے ساتھ پڑھنا",
      c_en: "To recite the Qur’an with translation",
      c_ru: "Читать Коран с переводом",
      d: "قرآن کو حفظ کرنا",
      d_en: "To memorize the Qur’an",
      d_ru: "Заучивать Коран наизусть",
      correct: "b"
    },
    {
      question: "علمِ تجوید کس کے ساتھ خاص ہے؟",
      question_en: "To which book is the science of Tajwīd specifically related?",
      question_ru: "С какой книгой особенно связана наука таджвида?",
      a: "قرآن مجید",
      a_en: "The Holy Qur’an",
      a_ru: "Священный Коран",
      b: "احادیث",
      b_en: "Hadith",
      b_ru: "Хадисы",
      c: "فقہ",
      c_en: "Jurisprudence (Fiqh)",
      c_ru: "Фикх (исламское право)",
      d: "دعا",
      d_en: "Supplication (Duʿāʾ)",
      d_ru: "Мольба (дуа)",
      correct: "a"
    },
    {
      question: "تجوید سیکھنے کا مقصد کیا ہے؟",
      question_en: "What is the purpose of learning Tajwīd?",
      question_ru: "Какова цель изучения таджвида?",
      a: "قرآن کو درست اور خوبصورت انداز میں پڑھنا",
      a_en: "To recite the Qur’an correctly and beautifully",
      a_ru: "Читать Коран правильно и красиво",
      b: "جلدی ختم کرنا",
      b_en: "To finish recitation quickly",
      b_ru: "Быстро закончить чтение",
      c: "الفاظ کم کرنا",
      c_en: "To shorten the words",
      c_ru: "Сокращать слова",
      d: "آواز اونچی کرنا",
      d_en: "To raise the voice",
      d_ru: "Громко читать",
      correct: "a"
    },
    {
      question: "تجوید کے بغیر قرآن پڑھنے کا کیا نقصان ہے؟",
      question_en: "What is the consequence of reciting the Qur’an without Tajwīd?",
      question_ru: "Каков результат чтения Корана без таджвида?",
      a: "کچھ نہیں ہوتا",
      a_en: "Nothing happens",
      a_ru: "Ничего не происходит",
      b: "معنی بدل سکتا ہے",
      b_en: "The meaning may change",
      b_ru: "Смысл может измениться",
      c: "ثواب زیادہ ملتا ہے",
      c_en: "The reward increases",
      c_ru: "Награда увеличивается",
      d: "گناہِ کبیرہ ہے",
      d_en: "It is a major sin",
      d_ru: "Это большой грех",
      correct: "b"
    },
    {
      question: "تجوید سیکھنا کس حکم میں آتا ہے؟",
      question_en: "What is the ruling on learning Tajwīd?",
      question_ru: "Каков шариатский статус изучения таджвида?",
      a: "فرضِ عین",
      a_en: "Individual obligation (farḍ ʿayn)",
      a_ru: "Личная обязанность (фард айн)",
      b: "فرضِ کفایہ",
      b_en: "Collective obligation (farḍ kifāyah)",
      b_ru: "Коллективная обязанность (фард кифая)",
      c: "واجب (تلاوت کی صحت کے لیے)",
      c_en: "Wājib (necessary for correct recitation)",
      c_ru: "Ваджиб (необходимо для правильного чтения)",
      d: "مستحب",
      d_en: "Recommended (mustaḥabb)",
      d_ru: "Желательно (мустахаб)",
      correct: "c"
    },
    {
      question: "تجوید کی بنیادی تعریف کس نے دی ہے؟",
      question_en: "Who provided the fundamental definition of Tajwīd?",
      question_ru: "Кто дал основное определение таджвида?",
      a: "نحوی علماء نے",
      a_en: "Grammatical scholars",
      a_ru: "Грамматисты",
      b: "قراء نے",
      b_en: "Qur’ānic reciters (Qurrāʾ)",
      b_ru: "Чтецы Корана (Курра)",
      c: "محدثین نے",
      c_en: "Hadith scholars (Muḥaddithīn)",
      c_ru: "Учёные хадисов (мухаддисы)",
      d: "فقہاء نے",
      d_en: "Jurists (Fuqahāʾ)",
      d_ru: "Правоведы (фукаха)",
      correct: "b"
    },
    {
      question: "قرآن کو بغیر تجوید کے پڑھنے والے کو کیا کہا جاتا ہے؟",
      question_en: "What is the term for one who recites the Qur’an without Tajwīd?",
      question_ru: "Как называют человека, читающего Коран без таджвида?",
      a: "مجوّد",
      a_en: "Mujawwid (correct reciter)",
      a_ru: "Муджаввид (правильный чтец)",
      b: "لاحن",
      b_en: "Lāḥin (one who errs in recitation)",
      b_ru: "Ляхин (допускающий ошибки в чтении)",
      c: "قاری",
      c_en: "Qārī (reciter)",
      c_ru: "Кари (чтец)",
      d: "مفسر",
      d_en: "Mufassir (commentator)",
      d_ru: "Муфассир (толкователь)",
      correct: "b"
    },
    {
      question: "تجوید کی اہمیت کس حدیث سے ظاہر ہے؟",
      question_en: "Which ḥadīth highlights the importance of Tajwīd?",
      question_ru: "Какой хадис указывает на важность таджвида?",
      a: "زینوا القرآن باصواتکم",
      a_en: "Beautify the Qur’an with your voices",
      a_ru: "Украшайте Коран своими голосами",
      b: "العلم نور",
      b_en: "Knowledge is light",
      b_ru: "Знание — свет",
      c: "من صام رمضان",
      c_en: "Whoever fasts in Ramadan",
      c_ru: "Тот, кто постился в рамадан",
      d: "طلب العلم فریضۃ",
      d_en: "Seeking knowledge is an obligation",
      d_ru: "Стремление к знанию — обязанность",
      correct: "a"
    },
    {
      question: "تجوید کی سب سے بڑی پہچان کیا ہے؟",
      question_en: "What is the main hallmark of Tajwīd?",
      question_ru: "Каков главный признак таджвида?",
      a: "صحیح مخرج سے ادائیگی",
      a_en: "Pronouncing letters from their correct articulation points",
      a_ru: "Произношение букв из их правильных мест артикуляции",
      b: "اونچی آواز",
      b_en: "Loud voice",
      b_ru: "Громкий голос",
      c: "لمبا کھینچنا",
      c_en: "Prolonging the sound excessively",
      c_ru: "Слишком долгое растягивание звуков",
      d: "آہستہ پڑھنا",
      d_en: "Reciting slowly",
      d_ru: "Медленное чтение",
      correct: "a"
    }
  ]
},

  {
  id: 2,
  title: "باب 2: ضروری اصطلاحات",
  title_en: "Chapter 2: Essential Terms",
  title_ru: "Глава 2: Основные термины",
  questions: [
    {
      question: "حروفِ علت کون سے ہیں؟",
      question_en: "Which are the ḥurūf al-‘illah (weak letters)?",
      question_ru: "Какие буквы называются «хуруф аль-илля» (слабые буквы)?",
      a: "ا، و، ی",
      a_en: "Alif, Wāw, Yā’",
      a_ru: "Алиф, Вав, Йа",
      b: "ب، ت، ث",
      b_en: "Bā’, Tā’, Thā’",
      b_ru: "Ба, Та, Саа (ث)",
      c: "ج، ح، خ",
      c_en: "Jīm, Ḥā’, Khā’",
      c_ru: "Джим, Ха, Ха (خ)",
      d: "د، ذ، ر",
      d_en: "Dāl, Dhāl, Rā’",
      d_ru: "Даль, Заль, Ра",
      correct: "a"
    },
    {
      question: "حروفِ صحیحہ کتنے ہیں؟",
      question_en: "How many ḥurūf ṣaḥīḥah (sound consonants) are there?",
      question_ru: "Сколько «хуруф сахиха» (сильных/полноценных согласных) существует?",
      a: "25",
      a_en: "25",
      a_ru: "25",
      b: "7",
      b_en: "7",
      b_ru: "7",
      c: "3",
      c_en: "3",
      c_ru: "3",
      d: "29",
      d_en: "29",
      d_ru: "29",
      correct: "a"
    },
    {
      question: "مد کا لغوی معنی کیا ہے؟",
      question_en: "What is the literal meaning of ‘Madd’?",
      question_ru: "Каково буквальное значение термина «мадд»?",
      a: "کھینچنا",
      a_en: "To lengthen/extend",
      a_ru: "Удлинять, растягивать",
      b: "روکنا",
      b_en: "To stop",
      b_ru: "Останавливать",
      c: "دہرانا",
      c_en: "To repeat",
      c_ru: "Повторять",
      d: "چھپانا",
      d_en: "To hide",
      d_ru: "Прятать",
      correct: "a"
    },
    {
      question: "مد کی کتنی اقسام ہیں؟",
      question_en: "How many main types of Madd are there?",
      question_ru: "Сколько основных видов мадда существует?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "4",
      b_en: "4",
      b_ru: "4",
      c: "6",
      c_en: "6",
      c_ru: "6",
      d: "10",
      d_en: "10",
      d_ru: "10",
      correct: "c"
    },
    {
      question: "ساکن کسے کہتے ہیں؟",
      question_en: "What is a sākin letter?",
      question_ru: "Что такое «сакин» (буква со сукуном)?",
      a: "حرف پر زبر ہو",
      a_en: "A letter with fatḥa",
      a_ru: "Буква с фатхой",
      b: "حرف پر سکون ہو",
      b_en: "A letter with sukūn (no vowel)",
      b_ru: "Буква с сукуном (без гласной)",
      c: "حرف پر پیش ہو",
      c_en: "A letter with ḍamma",
      c_ru: "Буква с даммой",
      d: "حرف پر زیر ہو",
      d_en: "A letter with kasra",
      d_ru: "Буква с касрой",
      correct: "b"
    },
    {
      question: "حرکت کتنی ہوتی ہیں؟",
      question_en: "How many short vowels (harakāt) are there?",
      question_ru: "Сколько кратких гласных (харакатов)?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "3 (زیر، زبر، پیش)",
      b_en: "3 (kasra, fatḥa, ḍamma)",
      b_ru: "3 (касра, фатха, дамма)",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "5",
      d_en: "5",
      d_ru: "5",
      correct: "b"
    },
    {
      question: "تنوین کیا ہے؟",
      question_en: "What is tanwīn?",
      question_ru: "Что такое танвин?",
      a: "دو پیش، دو زیر، دو زبر",
      a_en: "Double ḍamma, double kasra, double fatḥa",
      a_ru: "Две даммы, две касры, две фатхи",
      b: "دو سکون",
      b_en: "Double sukūn",
      b_ru: "Два сукуна",
      c: "دو حرکتیں",
      c_en: "Two vowels (any)",
      c_ru: "Две гласные",
      d: "دو جزم",
      d_en: "Double jazm",
      d_ru: "Двойной джазм",
      correct: "a"
    },
    {
      question: "حروفِ مدّیہ کتنے ہیں؟",
      question_en: "How many ḥurūf al-madd (letters of prolongation) are there?",
      question_ru: "Сколько «букв мадда» (букв долготы) существует?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "3",
      b_en: "3",
      b_ru: "3",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "5",
      d_en: "5",
      d_ru: "5",
      correct: "b"
    },
    {
      question: "تجوید میں “غنہ” کا مطلب کیا ہے؟",
      question_en: "In Tajwīd, what does “ghunnah” mean?",
      question_ru: "Что означает «гунна» в таджвиде?",
      a: "آواز کھینچنا",
      a_en: "To prolong the sound",
      a_ru: "Удлинять звук",
      b: "ناک سے آواز نکالنا",
      b_en: "A nasalized sound (from the nose)",
      b_ru: "Носовой звук (через нос)",
      c: "آواز روکنا",
      c_en: "To stop the sound",
      c_ru: "Останавливать звук",
      d: "زبان دبانا",
      d_en: "To press the tongue",
      d_ru: "Прижимать язык",
      correct: "b"
    },
    {
      question: "قرآن میں سب سے زیادہ استعمال ہونے والی حرکات کون سی ہیں؟",
      question_en: "Which short vowels (harakāt) are most frequently used in the Qur’an?",
      question_ru: "Какие краткие гласные (харакаты) чаще всего встречаются в Коране?",
      a: "زبر اور پیش",
      a_en: "Fatḥa and ḍamma",
      a_ru: "Фатха и дамма",
      b: "زیر اور سکون",
      b_en: "Kasra and sukūn",
      b_ru: "Касра и сукун",
      c: "زیر، زبر، پیش",
      c_en: "Kasra, fatḥa, ḍamma (all three)",
      c_ru: "Касра, фатха, дамма (все три)",
      d: "سب",
      d_en: "All of them equally",
      d_ru: "Все одинаково",
      correct: "c"
    }
  ]
},


  {
  id: 3,
  title: "باب 3: زبان اور دانت",
  title_en: "Chapter 3: The Tongue and Teeth",
  title_ru: "Глава 3: Язык и зубы",
  questions: [
    {
      question: "حروفِ لثویہ کہاں سے ادا ہوتے ہیں؟",
      question_en: "From where are the ‘lathawiyyah’ letters articulated?",
      question_ru: "Откуда произносятся буквы «латавийя»?",
      a: "زبان کی نوک اور دانتوں سے",
      a_en: "From the tip of the tongue and the teeth",
      a_ru: "С кончика языка и зубов",
      b: "گلے سے",
      b_en: "From the throat",
      b_ru: "Из горла",
      c: "ناک سے",
      c_en: "From the nose",
      c_ru: "Из носа",
      d: "ہونٹوں سے",
      d_en: "From the lips",
      d_ru: "Из губ",
      correct: "a"
    },
    {
      question: "حرف “س” کہاں سے ادا ہوتا ہے؟",
      question_en: "From where is the letter ‘س’ (sīn) pronounced?",
      question_ru: "Откуда произносится буква «син» (س)?",
      a: "زبان کی نوک اور دانتوں کے بیچ سے",
      a_en: "Between the tip of the tongue and the teeth",
      a_ru: "Между кончиком языка и зубами",
      b: "حلق سے",
      b_en: "From the throat",
      b_ru: "Из горла",
      c: "ہونٹوں سے",
      c_en: "From the lips",
      c_ru: "Из губ",
      d: "ناک سے",
      d_en: "From the nose",
      d_ru: "Из носа",
      correct: "a"
    },
    {
      question: "“ت” اور “ط” کس مخرج سے نکلتے ہیں؟",
      question_en: "From which makhraj are ‘ت’ and ‘ط’ pronounced?",
      question_ru: "Из какого выхода произносятся буквы «та» и «та» (ط)?",
      a: "زبان کے درمیان سے",
      a_en: "From the middle of the tongue",
      a_ru: "Из середины языка",
      b: "زبان کی نوک اور اوپر کے دانتوں سے",
      b_en: "From the tip of the tongue and the upper teeth",
      b_ru: "С кончика языка и верхних зубов",
      c: "حلق سے",
      c_en: "From the throat",
      c_ru: "Из горла",
      d: "ناک سے",
      d_en: "From the nose",
      d_ru: "Из носа",
      correct: "b"
    },
    {
      question: "“د” اور “ض” کس حصے سے نکلتے ہیں؟",
      question_en: "From which part are ‘د’ and ‘ض’ articulated?",
      question_ru: "Из какой части произносятся буквы «даль» и «дад»?",
      a: "زبان کے کنارے سے",
      a_en: "From the edge of the tongue",
      a_ru: "С края языка",
      b: "زبان کی جڑ سے",
      b_en: "From the root of the tongue",
      b_ru: "Из корня языка",
      c: "ہونٹ سے",
      c_en: "From the lips",
      c_ru: "Из губ",
      d: "ناک سے",
      d_en: "From the nose",
      d_ru: "Из носа",
      correct: "a"
    },
    {
      question: "حروفِ اطباق کون سے ہیں؟",
      question_en: "Which are the ‘itbāq’ letters (letters of elevation)?",
      question_ru: "Какие буквы относятся к «итбак» (смыкающиеся буквы)?",
      a: "ص، ض، ط، ظ",
      a_en: "Ṣād, Ḍād, Ṭā’, Ẓā’",
      a_ru: "Сад, Дад, Та, За (ظ)",
      b: "س، ش، ز",
      b_en: "Sīn, Shīn, Zāy",
      b_ru: "Син, Шин, Зай",
      c: "ب، م، و",
      c_en: "Bā’, Mīm, Wāw",
      c_ru: "Ба, Мим, Вав",
      d: "ن، ل، ر",
      d_en: "Nūn, Lām, Rā’",
      d_ru: "Нун, Лам, Ра",
      correct: "a"
    },
    {
      question: "حروفِ استفال کیا ہیں؟",
      question_en: "What are the ‘istifāl’ letters?",
      question_ru: "Что такое буквы «истифаль»?",
      a: "نیچے کے حروف",
      a_en: "Letters pronounced low or flat (non-elevated)",
      a_ru: "Буквы, произносимые низко (неподъёмные)",
      b: "اونچے حروف",
      b_en: "Elevated letters",
      b_ru: "Поднятые буквы",
      c: "ناک کے حروف",
      c_en: "Nasal letters",
      c_ru: "Носовые буквы",
      d: "مد کے حروف",
      d_en: "Madd letters",
      d_ru: "Буквы мадда",
      correct: "a"
    },
    {
      question: "“ث” کس مخرج سے نکلتا ہے؟",
      question_en: "From which makhraj is ‘ث’ pronounced?",
      question_ru: "Из какого выхода произносится буква «са» (ث)?",
      a: "زبان کی نوک اور اوپر کے دانتوں کے کنارے سے",
      a_en: "From the tip of the tongue touching the edges of the upper teeth",
      a_ru: "Кончиком языка у краёв верхних зубов",
      b: "زبان کی جڑ سے",
      b_en: "From the root of the tongue",
      b_ru: "Из корня языка",
      c: "ناک سے",
      c_en: "From the nose",
      c_ru: "Из носа",
      d: "ہونٹ سے",
      d_en: "From the lips",
      d_ru: "Из губ",
      correct: "a"
    },
    {
      question: "“ذ” کہاں سے ادا ہوتا ہے؟",
      question_en: "From where is the letter ‘ذ’ pronounced?",
      question_ru: "Откуда произносится буква «заль» (ذ)?",
      a: "زبان کی نوک اور اوپر کے دانتوں سے",
      a_en: "From the tip of the tongue and the upper teeth",
      a_ru: "С кончика языка и верхних зубов",
      b: "زبان کی جڑ",
      b_en: "From the root of the tongue",
      b_ru: "Из корня языка",
      c: "ناک",
      c_en: "From the nose",
      c_ru: "Из носа",
      d: "ہونٹ",
      d_en: "From the lips",
      d_ru: "Из губ",
      correct: "a"
    },
    {
      question: "“ظ” کا مخرج کیا ہے؟",
      question_en: "What is the makhraj (exit point) of ‘ظ’?",
      question_ru: "Каково место выхода буквы «за» (ظ)?",
      a: "زبان کی نوک اوپر کے دانتوں سے",
      a_en: "Tip of the tongue against the upper teeth",
      a_ru: "Кончик языка у верхних зубов",
      b: "زبان کے درمیان سے",
      b_en: "From the middle of the tongue",
      b_ru: "Из середины языка",
      c: "ناک",
      c_en: "From the nose",
      c_ru: "Из носа",
      d: "ہونٹ",
      d_en: "From the lips",
      d_ru: "Из губ",
      correct: "a"
    },
    {
      question: "زبان کے مخارج کتنے ہیں؟",
      question_en: "How many makhārij (articulation points) are there for the tongue?",
      question_ru: "Сколько точек выхода у языка?",
      a: "5",
      a_en: "5",
      a_ru: "5",
      b: "3",
      b_en: "3",
      b_ru: "3",
      c: "2",
      c_en: "2",
      c_ru: "2",
      d: "7",
      d_en: "7",
      d_ru: "7",
      correct: "a"
    }
  ]
},

  {
  id: 4,
  title: "باب 4: مخارج الحروف",
  title_en: "Chapter 4: Points of Articulation (Makharij al-Huroof)",
  title_ru: "Глава 4: Места выхода букв (Махаридж аль-хуруф)",
  questions: [
    {
      question: "مخرج کی جمع کیا ہے؟",
      question_en: "What is the plural of 'Makhraj'?",
      question_ru: "Како́е множественное число слова «махрадж»?",
      a: "مخارج",
      a_en: "Makhārij",
      a_ru: "Махаридж",
      b: "مخارجات",
      b_en: "Makhārijāt",
      b_ru: "Махариджат",
      c: "اخراج",
      c_en: "Ikhrāj",
      c_ru: "Ихрадж",
      d: "مخرجون",
      d_en: "Mukhrajūn",
      d_ru: "Мухраджун",
      correct: "a"
    },
    {
      question: "مخارج کی کل تعداد کیا ہے؟",
      question_en: "How many total articulation points (makhārij) are there?",
      question_ru: "Сколько всего точек выхода (махаридж) существует?",
      a: "17",
      a_en: "17",
      a_ru: "17",
      b: "14",
      b_en: "14",
      b_ru: "14",
      c: "10",
      c_en: "10",
      c_ru: "10",
      d: "7",
      d_en: "7",
      d_ru: "7",
      correct: "a"
    },
    {
      question: "مخارج کو بڑے حصوں میں تقسیم کیا گیا ہے:",
      question_en: "Into how many major parts are the makhārij divided?",
      question_ru: "На сколько основных частей делятся махаридж?",
      a: "3",
      a_en: "3",
      a_ru: "3",
      b: "5",
      b_en: "5",
      b_ru: "5",
      c: "7",
      c_en: "7",
      c_ru: "7",
      d: "9",
      d_en: "9",
      d_ru: "9",
      correct: "b"
    },
    {
      question: "حروف حلقیہ کہاں سے نکلتے ہیں؟",
      question_en: "From where are the ḥurūf ḥalqiyyah (throat letters) pronounced?",
      question_ru: "Откуда произносятся горловые буквы (хуруф халкия)?",
      a: "زبان",
      a_en: "From the tongue",
      a_ru: "С языка",
      b: "حلق",
      b_en: "From the throat",
      b_ru: "Из горла",
      c: "ناک",
      c_en: "From the nose",
      c_ru: "Из носа",
      d: "ہونٹ",
      d_en: "From the lips",
      d_ru: "Из губ",
      correct: "b"
    },
    {
      question: "سب سے زیادہ حروف کہاں سے نکلتے ہیں؟",
      question_en: "From which organ do most letters come out?",
      question_ru: "Из какого органа выходит больше всего букв?",
      a: "زبان",
      a_en: "From the tongue",
      a_ru: "Из языка",
      b: "حلق",
      b_en: "From the throat",
      b_ru: "Из горла",
      c: "ناک",
      c_en: "From the nose",
      c_ru: "Из носа",
      d: "ہونٹ",
      d_en: "From the lips",
      d_ru: "Из губ",
      correct: "a"
    },
    {
      question: "مخرج کی پہچان کیسے ہوتی ہے؟",
      question_en: "How is the makhraj of a letter identified?",
      question_ru: "Как определить место выхода буквы (махрадж)?",
      a: "حرف کے ساتھ الف لگانے سے",
      a_en: "By attaching an Alif to the letter",
      a_ru: "Присоединив алиф к букве",
      b: "حرف کو ساکن کر کے آواز سننے سے",
      b_en: "By making the letter sukūn and listening to the sound",
      b_ru: "Сделав букву сакином и послушав звук",
      c: "حرف کو بار بار دہرانے سے",
      c_en: "By repeating the letter several times",
      c_ru: "Повторяя букву несколько раз",
      d: "زبان بند کرنے سے",
      d_en: "By closing the tongue",
      d_ru: "Закрыв язык",
      correct: "b"
    },
    {
      question: "مخارج کے ذریعے کس چیز کی حفاظت ہوتی ہے؟",
      question_en: "What is protected through knowledge of makhārij?",
      question_ru: "Что сохраняется благодаря знанию махаридж?",
      a: "وضو",
      a_en: "Wudu (Ablution)",
      a_ru: "Омовение (вуду)",
      b: "نماز",
      b_en: "Salah (Prayer)",
      b_ru: "Намаз",
      c: "حروف کی صحیح ادائیگی",
      c_en: "Correct pronunciation of letters",
      c_ru: "Правильное произношение букв",
      d: "تجوید کے مستحبات",
      d_en: "Recommended Tajwīd acts",
      d_ru: "Рекомендуемые правила таджвида",
      correct: "c"
    },
    {
      question: "مخارج کی اہمیت کیوں ہے؟",
      question_en: "Why are makhārij important?",
      question_ru: "Почему махаридж имеют большое значение?",
      a: "تجوید سیکھنے کے لیے",
      a_en: "To learn proper Tajwīd",
      a_ru: "Для изучения таджвида",
      b: "نفل نماز کے لیے",
      b_en: "For optional prayers",
      b_ru: "Для добровольных намазов",
      c: "دعا کے لیے",
      c_en: "For supplication",
      c_ru: "Для дуа (мольбы)",
      d: "اذان کے لیے",
      d_en: "For the call to prayer",
      d_ru: "Для азана (призыва к молитве)",
      correct: "a"
    },
    {
      question: "قرآن کے صحیح تلفظ کے لیے کس چیز کی ضرورت ہے؟",
      question_en: "What is needed for correct Qur’anic pronunciation?",
      question_ru: "Что необходимо для правильного произношения Корана?",
      a: "مخارج کی معرفت",
      a_en: "Knowledge of the makhārij",
      a_ru: "Знание махаридж",
      b: "صرف عربی زبان",
      b_en: "Only Arabic language",
      b_ru: "Только знание арабского языка",
      c: "صرف ترجمہ",
      c_en: "Only translation",
      c_ru: "Только перевод",
      d: "صرف آواز اونچی کرنا",
      d_en: "Just raising the voice",
      d_ru: "Просто повышение голоса",
      correct: "a"
    },
    {
      question: "اگر مخرج بدل جائے تو کیا ہوتا ہے؟",
      question_en: "What happens if the makhraj changes?",
      question_ru: "Что происходит, если меняется место выхода буквы?",
      a: "معنی بدل سکتا ہے",
      a_en: "The meaning may change",
      a_ru: "Значение может измениться",
      b: "قرآن لمبا ہو جاتا ہے",
      b_en: "The Qur’an becomes longer",
      b_ru: "Коран становится длиннее",
      c: "تلاوت آسان ہو جاتی ہے",
      c_en: "Recitation becomes easier",
      c_ru: "Чтение становится легче",
      d: "کوئی فرق نہیں پڑتا",
      d_en: "No difference occurs",
      d_ru: "Разницы нет",
      correct: "a"
    }
  ]
},

  {
  id: 5,
  title: "باب 5: حروفِ حلق",
  title_en: "Chapter 5: Throat Letters (Hurūf al-Ḥalq)",
  title_ru: "Глава 5: Горловые буквы (Хуруф аль-Хальк)",
  questions: [
    {
      question: "شفتین کا مخرج کہاں ہے؟",
      question_en: "Where is the makhraj of the lips (shafatayn)?",
      question_ru: "Где находится место выхода губных букв (шафатайин)?",
      a: "ناک",
      a_en: "Nose",
      a_ru: "Нос",
      b: "ہونٹ",
      b_en: "Lips",
      b_ru: "Губы",
      c: "زبان",
      c_en: "Tongue",
      c_ru: "Язык",
      d: "حلق",
      d_en: "Throat",
      d_ru: "Горло",
      correct: "b"
    },
    {
      question: "ب، م، و کس مخرج سے نکلتے ہیں؟",
      question_en: "From which makhraj are the letters ب, م, and و pronounced?",
      question_ru: "Из какого выхода произносятся буквы ب, م и و?",
      a: "ہونٹ",
      a_en: "Lips",
      a_ru: "Губы",
      b: "حلق",
      b_en: "Throat",
      b_ru: "Горло",
      c: "زبان",
      c_en: "Tongue",
      c_ru: "Язык",
      d: "ناک",
      d_en: "Nose",
      d_ru: "Нос",
      correct: "a"
    },
    {
      question: "“ف” کا مخرج کہاں ہے؟",
      question_en: "From where is the letter ‘ف’ pronounced?",
      question_ru: "Откуда произносится буква «фа» (ف)?",
      a: "نچلے ہونٹ اور اوپر کے دانت",
      a_en: "Lower lip and upper teeth",
      a_ru: "Нижняя губа и верхние зубы",
      b: "ناک",
      b_en: "Nose",
      b_ru: "Нос",
      c: "زبان کی نوک",
      c_en: "Tip of the tongue",
      c_ru: "Кончик языка",
      d: "وسط حلق",
      d_en: "Middle of the throat",
      d_ru: "Середина горла",
      correct: "a"
    },
    {
      question: "نون اور میم کی آواز کس کے ذریعے نکلتی ہے؟",
      question_en: "Through which part are the sounds of ‘ن’ and ‘م’ produced?",
      question_ru: "Через какую часть произносятся звуки «нун» и «мим»?",
      a: "ناک",
      a_en: "Nose",
      a_ru: "Нос",
      b: "زبان",
      b_en: "Tongue",
      b_ru: "Язык",
      c: "حلق",
      c_en: "Throat",
      c_ru: "Горло",
      d: "ہونٹ",
      d_en: "Lips",
      d_ru: "Губы",
      correct: "a"
    },
    {
      question: "ق اور ک کہاں سے نکلتے ہیں؟",
      question_en: "From where are the letters ‘ق’ and ‘ک’ articulated?",
      question_ru: "Откуда произносятся буквы «каф» и «каф» (ق, ك)?",
      a: "زبان کی جڑ",
      a_en: "Root of the tongue",
      a_ru: "Корень языка",
      b: "زبان کی نوک",
      b_en: "Tip of the tongue",
      b_ru: "Кончик языка",
      c: "ہونٹ",
      c_en: "Lips",
      c_ru: "Губы",
      d: "ناک",
      d_en: "Nose",
      d_ru: "Нос",
      correct: "a"
    },
    {
      question: "ج، ش، ی کہاں سے نکلتے ہیں؟",
      question_en: "From where are the letters ‘ج’, ‘ش’, and ‘ی’ pronounced?",
      question_ru: "Откуда произносятся буквы «джим», «шин» и «йа»?",
      a: "زبان کے وسط سے",
      a_en: "Middle of the tongue",
      a_ru: "Середина языка",
      b: "زبان کی نوک",
      b_en: "Tip of the tongue",
      b_ru: "Кончик языка",
      c: "ناک",
      c_en: "Nose",
      c_ru: "Нос",
      d: "ہونٹ",
      d_en: "Lips",
      d_ru: "Губы",
      correct: "a"
    },
    {
      question: "لام کہاں سے نکلتا ہے؟",
      question_en: "From where is the letter ‘ل’ pronounced?",
      question_ru: "Откуда произносится буква «лам» (ل)?",
      a: "زبان کے کنارے اور اوپر کے دانتوں سے",
      a_en: "From the sides of the tongue touching the upper teeth",
      a_ru: "С боков языка, касающихся верхних зубов",
      b: "ناک",
      b_en: "Nose",
      b_ru: "Нос",
      c: "زبان کے وسط سے",
      c_en: "Middle of the tongue",
      c_ru: "Середина языка",
      d: "حلق",
      d_en: "Throat",
      d_ru: "Горло",
      correct: "a"
    },
    {
      question: "راء کہاں سے نکلتا ہے؟",
      question_en: "From where is the letter ‘ر’ pronounced?",
      question_ru: "Откуда произносится буква «ра» (ر)?",
      a: "زبان کی نوک",
      a_en: "Tip of the tongue",
      a_ru: "Кончик языка",
      b: "زبان کی جڑ",
      b_en: "Root of the tongue",
      b_ru: "Корень языка",
      c: "ناک",
      c_en: "Nose",
      c_ru: "Нос",
      d: "حلق",
      d_en: "Throat",
      d_ru: "Горло",
      correct: "a"
    },
    {
      question: "ت، د، ط کہاں سے نکلتے ہیں؟",
      question_en: "From where are the letters ‘ت’, ‘د’, and ‘ط’ articulated?",
      question_ru: "Откуда произносятся буквы «та», «даль» и «та» (ط)?",
      a: "زبان کی نوک اور دانت",
      a_en: "Tip of the tongue and the teeth",
      a_ru: "Кончик языка и зубы",
      b: "ناک",
      b_en: "Nose",
      b_ru: "Нос",
      c: "زبان کی جڑ",
      c_en: "Root of the tongue",
      c_ru: "Корень языка",
      d: "حلق",
      d_en: "Throat",
      d_ru: "Горло",
      correct: "a"
    },
    {
      question: "ظ، ذ، ث کہاں سے نکلتے ہیں؟",
      question_en: "From where are the letters ‘ظ’, ‘ذ’, and ‘ث’ articulated?",
      question_ru: "Откуда произносятся буквы «за», «заль» и «са» (ظ, ذ, ث)?",
      a: "زبان کی نوک اور دانتوں کے کنارے سے",
      a_en: "Tip of the tongue and the edges of the teeth",
      a_ru: "Кончик языка и края зубов",
      b: "ناک",
      b_en: "Nose",
      b_ru: "Нос",
      c: "زبان کے وسط سے",
      c_en: "Middle of the tongue",
      c_ru: "Середина языка",
      d: "حلق",
      d_en: "Throat",
      d_ru: "Горло",
      correct: "a"
    }
  ]
},

  {
  id: 6,
  title: "باب 6: ہم مخرج حروف",
  title_en: "Chapter 6: Letters from the Same Point of Articulation (Ḥurūf al-Mutajānisa)",
  title_ru: "Глава 6: Буквы с одинаковым местом выхода (Хуруф аль-Мутажаниса)",
  questions: [
    {
      question: "ہم مخرج حروف کسے کہتے ہیں؟",
      question_en: "What are letters from the same point of articulation?",
      question_ru: "Что такое буквы, произносимые из одного и того же места выхода?",
      a: "وہ حروف جو ایک ہی جگہ سے ادا ہوں",
      a_en: "Letters pronounced from the same place",
      a_ru: "Буквы, произносимые из одного и того же места",
      b: "وہ حروف جو مد ہوں",
      b_en: "Letters of prolongation (madd letters)",
      b_ru: "Буквы растяжения (мадд)",
      c: "وہ حروف جو ناک سے نکلیں",
      c_en: "Letters pronounced through the nose",
      c_ru: "Буквы, произносимые через нос",
      d: "وہ حروف جو دہرائے جائیں",
      d_en: "Letters that are repeated",
      d_ru: "Повторяющиеся буквы",
      correct: "a"
    },
    {
      question: "ق اور ک کس مخرج سے نکلتے ہیں؟",
      question_en: "From which makhraj are the letters ‘ق’ and ‘ک’ pronounced?",
      question_ru: "Из какого выхода произносятся буквы «каф» и «каф» (ق, ك)?",
      a: "زبان کی جڑ",
      a_en: "Root of the tongue",
      a_ru: "Корень языка",
      b: "زبان کی نوک",
      b_en: "Tip of the tongue",
      b_ru: "Кончик языка",
      c: "ناک",
      c_en: "Nose",
      c_ru: "Нос",
      d: "ہونٹ",
      d_en: "Lips",
      d_ru: "Губы",
      correct: "a"
    },
    {
      question: "ج، ش اور ی کہاں سے ادا ہوتے ہیں؟",
      question_en: "From where are the letters ‘ج’, ‘ش’, and ‘ی’ pronounced?",
      question_ru: "Откуда произносятся буквы «джим», «шин» и «йа»?",
      a: "زبان کے وسط سے",
      a_en: "From the middle of the tongue",
      a_ru: "Из середины языка",
      b: "زبان کی نوک",
      b_en: "Tip of the tongue",
      b_ru: "Кончик языка",
      c: "حلق",
      c_en: "Throat",
      c_ru: "Горло",
      d: "ہونٹ",
      d_en: "Lips",
      d_ru: "Губы",
      correct: "a"
    },
    {
      question: "ت، د اور ط کہاں سے نکلتے ہیں؟",
      question_en: "From where are the letters ‘ت’, ‘د’, and ‘ط’ articulated?",
      question_ru: "Откуда произносятся буквы «та», «даль» и «та» (ط)?",
      a: "زبان کی نوک اور اوپر کے دانت",
      a_en: "Tip of the tongue and upper teeth",
      a_ru: "Кончик языка и верхние зубы",
      b: "زبان کی جڑ",
      b_en: "Root of the tongue",
      b_ru: "Корень языка",
      c: "ناک",
      c_en: "Nose",
      c_ru: "Нос",
      d: "حلق",
      d_en: "Throat",
      d_ru: "Горло",
      correct: "a"
    },
    {
      question: "ظ، ذ اور ث کہاں سے نکلتے ہیں؟",
      question_en: "From where are the letters ‘ظ’, ‘ذ’, and ‘ث’ articulated?",
      question_ru: "Откуда произносятся буквы «за», «заль» и «са» (ظ, ذ, ث)?",
      a: "زبان کی نوک اور دانتوں کے کنارے",
      a_en: "Tip of the tongue and edges of the teeth",
      a_ru: "Кончик языка и края зубов",
      b: "زبان کی جڑ",
      b_en: "Root of the tongue",
      b_ru: "Корень языка",
      c: "ناک",
      c_en: "Nose",
      c_ru: "Нос",
      d: "ہونٹ",
      d_en: "Lips",
      d_ru: "Губы",
      correct: "a"
    },
    {
      question: "ص، ز اور س کہاں سے نکلتے ہیں؟",
      question_en: "From where are the letters ‘ص’, ‘ز’, and ‘س’ articulated?",
      question_ru: "Откуда произносятся буквы «сад», «зай» и «син»?",
      a: "زبان کی نوک اور دانتوں کے بیچ سے",
      a_en: "Between the tip of the tongue and the teeth",
      a_ru: "Между кончиком языка и зубами",
      b: "ناک",
      b_en: "Nose",
      b_ru: "Нос",
      c: "حلق",
      c_en: "Throat",
      c_ru: "Горло",
      d: "ہونٹ",
      d_en: "Lips",
      d_ru: "Губы",
      correct: "a"
    },
    {
      question: "ض کہاں سے ادا ہوتا ہے؟",
      question_en: "From where is the letter ‘ض’ pronounced?",
      question_ru: "Откуда произносится буква «дад» (ض)?",
      a: "زبان کے کنارے اور داہنے اوپر کے دانتوں سے",
      a_en: "From the edge of the tongue and the upper right teeth",
      a_ru: "С края языка и верхних правых зубов",
      b: "ناک",
      b_en: "Nose",
      b_ru: "Нос",
      c: "زبان کی جڑ",
      c_en: "Root of the tongue",
      c_ru: "Корень языка",
      d: "ہونٹ",
      d_en: "Lips",
      d_ru: "Губы",
      correct: "a"
    },
    {
      question: "لام کہاں سے نکلتا ہے؟",
      question_en: "From where is the letter ‘ل’ pronounced?",
      question_ru: "Откуда произносится буква «лам» (ل)?",
      a: "زبان کے کنارے اور اوپر کے دانتوں سے",
      a_en: "From the edge of the tongue and the upper teeth",
      a_ru: "С края языка и верхних зубов",
      b: "زبان کی جڑ",
      b_en: "Root of the tongue",
      b_ru: "Корень языка",
      c: "ناک",
      c_en: "Nose",
      c_ru: "Нос",
      d: "ہونٹ",
      d_en: "Lips",
      d_ru: "Губы",
      correct: "a"
    },
    {
      question: "نون کہاں سے نکلتا ہے؟",
      question_en: "From where is the letter ‘ن’ pronounced?",
      question_ru: "Откуда произносится буква «нун» (ن)?",
      a: "زبان کی نوک اور اوپر کے دانتوں کے نیچے سے",
      a_en: "Tip of the tongue under the upper teeth",
      a_ru: "Кончик языка под верхними зубами",
      b: "زبان کی جڑ",
      b_en: "Root of the tongue",
      b_ru: "Корень языка",
      c: "ناک",
      c_en: "Nose",
      c_ru: "Нос",
      d: "حلق",
      d_en: "Throat",
      d_ru: "Горло",
      correct: "a"
    },
    {
      question: "راء کا مخرج کیا ہے؟",
      question_en: "What is the makhraj (exit point) of ‘ر’?",
      question_ru: "Каково место выхода буквы «ра» (ر)?",
      a: "زبان کی نوک",
      a_en: "Tip of the tongue",
      a_ru: "Кончик языка",
      b: "زبان کی جڑ",
      b_en: "Root of the tongue",
      b_ru: "Корень языка",
      c: "ناک",
      c_en: "Nose",
      c_ru: "Нос",
      d: "ہونٹ",
      d_en: "Lips",
      d_ru: "Губы",
      correct: "a"
    }
  ]
},

  // ---- Chapters 7..22 (your current data) ----
  // (kept exactly as you provided)
  {
  id: 7,
  title: "باب 7: حرکات",
  title_en: "Chapter 7: Vowel Signs (Harakāt)",
  title_ru: "Глава 7: Гласные знаки (Харакат)",
  questions: [
    {
      question: "حرکت کتنی ہیں؟",
      question_en: "How many vowel signs (harakāt) are there?",
      question_ru: "Сколько существует гласных знаков (харакатов)?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "3 (زیر، زبر، پیش)",
      b_en: "3 (Kasra, Fatha, Damma)",
      b_ru: "3 (Касра, Фатха, Дамма)",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "5",
      d_en: "5",
      d_ru: "5",
      correct: "b"
    },
    {
      question: "زبر کو اور کیا کہتے ہیں؟",
      question_en: "What is another name for Zabar?",
      question_ru: "Как по-другому называется знак 'забар'?",
      a: "ضمہ",
      a_en: "Ḍamma",
      a_ru: "Дамма",
      b: "فتحہ",
      b_en: "Fatḥa",
      b_ru: "Фатха",
      c: "کسره",
      c_en: "Kasra",
      c_ru: "Касра",
      d: "سکون",
      d_en: "Sukūn",
      d_ru: "Сукун",
      correct: "b"
    },
    {
      question: "زیر کو اور کیا کہا جاتا ہے؟",
      question_en: "What is another name for Zair?",
      question_ru: "Как по-другому называется знак 'зайр'?",
      a: "ضمہ",
      a_en: "Ḍamma",
      a_ru: "Дамма",
      b: "کسره",
      b_en: "Kasra",
      b_ru: "Касра",
      c: "فتحہ",
      c_en: "Fatḥa",
      c_ru: "Фатха",
      d: "جزم",
      d_en: "Jazm",
      d_ru: "Джазм",
      correct: "b"
    },
    {
      question: "پیش کو کیا کہتے ہیں؟",
      question_en: "What is Pesh called?",
      question_ru: "Как называется знак 'пеш'?",
      a: "ضمہ",
      a_en: "Ḍamma",
      a_ru: "Дамма",
      b: "کسره",
      b_en: "Kasra",
      b_ru: "Касра",
      c: "فتحہ",
      c_en: "Fatḥa",
      c_ru: "Фатха",
      d: "سکون",
      d_en: "Sukūn",
      d_ru: "Сукун",
      correct: "a"
    },
    {
      question: "سکون کی علامت کیا ہے؟",
      question_en: "What is the symbol of Sukūn?",
      question_ru: "Какой знак обозначает сукун?",
      a: "ْ",
      a_en: "ْ (small circle above letter)",
      a_ru: "ْ (маленький кружок над буквой)",
      b: "َ",
      b_en: "Fatḥa (Zabar)",
      b_ru: "Фатха (Забар)",
      c: "ِ",
      c_en: "Kasra (Zair)",
      c_ru: "Касра (Зайр)",
      d: "ُ",
      d_en: "Ḍamma (Pesh)",
      d_ru: "Дамма (Пеш)",
      correct: "a"
    },
    {
      question: "تشدید کی علامت کیا ہے؟",
      question_en: "What is the sign of Shaddah?",
      question_ru: "Как обозначается знак 'ташдид'?",
      a: "ّ",
      a_en: "ّ (shaddah symbol)",
      a_ru: "ّ (знак ташдида)",
      b: "ْ",
      b_en: "Sukūn",
      b_ru: "Сукун",
      c: "َ",
      c_en: "Fatḥa (Zabar)",
      c_ru: "Фатха (Забар)",
      d: "ُ",
      d_en: "Ḍamma (Pesh)",
      d_ru: "Дамма (Пеш)",
      correct: "a"
    },
    {
      question: "تنوین کس چیز کو کہتے ہیں؟",
      question_en: "What is Tanwīn?",
      question_ru: "Что такое танвин?",
      a: "دو زیر، دو زبر، دو پیش",
      a_en: "Two Zair, two Zabar, two Pesh",
      a_ru: "Два зайра, два забара, два пеша",
      b: "دو سکون",
      b_en: "Two Sukūns",
      b_ru: "Два сукуна",
      c: "دو تشدید",
      c_en: "Two Shaddahs",
      c_ru: "Два ташдида",
      d: "دو جزم",
      d_en: "Two Jazms",
      d_ru: "Два джазма",
      correct: "a"
    },
    {
      question: "لمبی حرکت کس کو کہا جاتا ہے؟",
      question_en: "What is a long vowel (madd)?",
      question_ru: "Что означает 'долгий гласный' (мадд)?",
      a: "مد",
      a_en: "Madd (elongation)",
      a_ru: "Мадд (удлинение)",
      b: "تشدید",
      b_en: "Shaddah (doubling)",
      b_ru: "Ташдид (удвоение)",
      c: "جزم",
      c_en: "Jazm (pause mark)",
      c_ru: "Джазм",
      d: "تنوین",
      d_en: "Tanwīn (double vowel)",
      d_ru: "Танвин (двойной гласный)",
      correct: "a"
    },
    {
      question: "چھوٹی حرکت کون سی ہے؟",
      question_en: "Which are the short vowels?",
      question_ru: "Какие знаки являются краткими гласными?",
      a: "زیر، زبر، پیش",
      a_en: "Zair, Zabar, Pesh",
      a_ru: "Зайр, Забар, Пеш",
      b: "مد",
      b_en: "Madd (elongation)",
      b_ru: "Мадд (удлинение)",
      c: "تشدید",
      c_en: "Shaddah (doubling)",
      c_ru: "Ташдид (удвоение)",
      d: "تنوین",
      d_en: "Tanwīn (double vowel)",
      d_ru: "Танвин (двойной гласный)",
      correct: "a"
    },
    {
      question: "حرکات سیکھنے کا مقصد کیا ہے؟",
      question_en: "What is the purpose of learning Harakāt?",
      question_ru: "Какова цель изучения харакатов?",
      a: "قرآن کو صحیح تلفظ کے ساتھ پڑھنا",
      a_en: "To recite the Qur’an with correct pronunciation",
      a_ru: "Чтобы читать Коран с правильным произношением",
      b: "آواز اونچی کرنا",
      b_en: "To raise the voice",
      b_ru: "Чтобы повысить голос",
      c: "قرآن جلدی ختم کرنا",
      c_en: "To finish Qur’an quickly",
      c_ru: "Чтобы быстро закончить чтение Корана",
      d: "نماز مختصر کرنا",
      d_en: "To shorten the prayer",
      d_ru: "Чтобы сократить молитву",
      correct: "a"
    }
  ]
},
 {
  id: 8,
  title: "باب 8: نونِ ساکن اور تنوین کے احکام",
  title_en: "Chapter 8: Rules of Noon Sākin and Tanwīn",
  title_ru: "Глава 8: Правила 'Нун Сакен' и 'Танвин'",
  questions: [
    {
      question: "نون ساکن اور تنوین کے کتنے احکام ہیں؟",
      question_en: "How many rules of Noon Sākin and Tanwīn are there?",
      question_ru: "Сколько существует правил 'Нун Сакен' и 'Танвин'?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "4 (اظہار، ادغام، اقلاب، اخفاء)",
      b_en: "4 (Izhar, Idgham, Iqlab, Ikhfa)",
      b_ru: "4 (Изхар, Идгам, Икляб, Ихфа)",
      c: "6",
      c_en: "6",
      c_ru: "6",
      d: "8",
      d_en: "8",
      d_ru: "8",
      correct: "b"
    },
    {
      question: "نون ساکن یا تنوین کے بعد حلقی حرف آئے تو کیا ہوگا؟",
      question_en: "If a throat letter (Halqi) follows Noon Sākin or Tanwīn, what happens?",
      question_ru: "Если после 'Нун Сакен' или 'Танвина' следует горловая буква, что происходит?",
      a: "اخفاء",
      a_en: "Ikhfa (concealment)",
      a_ru: "Ихфа (прикрытие)",
      b: "اظہار",
      b_en: "Izhar (clarity)",
      b_ru: "Изхар (ясное произношение)",
      c: "ادغام",
      c_en: "Idgham (merging)",
      c_ru: "Идгам (слияние)",
      d: "اقلاب",
      d_en: "Iqlab (conversion)",
      d_ru: "Икляб (преобразование)",
      correct: "b"
    },
    {
      question: "اظہار کے کتنے حروف ہیں؟",
      question_en: "How many letters of Izhar are there?",
      question_ru: "Сколько букв относится к правилу 'Изхар'?",
      a: "4",
      a_en: "4",
      a_ru: "4",
      b: "6",
      b_en: "6",
      b_ru: "6",
      c: "8",
      c_en: "8",
      c_ru: "8",
      d: "10",
      d_en: "10",
      d_ru: "10",
      correct: "b"
    },
    {
      question: "اظہار کے حروف کون سے ہیں؟",
      question_en: "Which are the letters of Izhar?",
      question_ru: "Какие буквы относятся к правилу 'Изхар'?",
      a: "ء، ه، ع، ح، غ، خ",
      a_en: "Hamza, Ha, Ain, Ha (soft), Ghayn, Kha",
      a_ru: "Хамза, Ха, Айн, Ха (мягкий), Гайн, Ха",
      b: "ب، پ، ت، ث، ج، چ",
      b_en: "B, P, T, Th, J, Ch",
      b_ru: "Б, П, Т, С, Дж, Ч",
      c: "ق، ک، ل، م، ن، و",
      c_en: "Qaf, Kaf, Lam, Meem, Noon, Waw",
      c_ru: "Каф, Кяф, Лам, Мим, Нун, Вав",
      d: "ص، ض، ط، ظ، ز، س",
      d_en: "Sad, Dad, Ta, Za, Zay, Seen",
      d_ru: "Сад, Дад, Та, За, Зайн, Син",
      correct: "a"
    },
    {
      question: "ادغام کی کتنی قسمیں ہیں؟",
      question_en: "How many types of Idgham are there?",
      question_ru: "Сколько существует видов 'Идгама'?",
      a: "2 (ادغام بغنہ، ادغام بغیر غنہ)",
      a_en: "2 (With ghunnah, Without ghunnah)",
      a_ru: "2 (С гунной, Без гунны)",
      b: "3",
      b_en: "3",
      b_ru: "3",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "6",
      d_en: "6",
      d_ru: "6",
      correct: "a"
    },
    {
      question: "ادغام بغنہ کن حروف کے ساتھ ہوتا ہے؟",
      question_en: "With which letters does Idgham with ghunnah occur?",
      question_ru: "С какими буквами применяется 'Идгам с гунной'?",
      a: "ی، ن، م، و",
      a_en: "Ya, Noon, Meem, Waw",
      a_ru: "Йа, Нун, Мим, Вав",
      b: "ب، ت، ث، ج",
      b_en: "Ba, Ta, Tha, Jim",
      b_ru: "Ба, Та, Са, Джим",
      c: "ص، ض، ط، ظ",
      c_en: "Sad, Dad, Ta, Za",
      c_ru: "Сад, Дад, Та, За",
      d: "ق، ک، ل، م",
      d_en: "Qaf, Kaf, Lam, Meem",
      d_ru: "Каф, Кяф, Лам, Мим",
      correct: "a"
    },
    {
      question: "ادغام بغیر غنہ کن دو حروف کے ساتھ ہوتا ہے؟",
      question_en: "Idgham without ghunnah occurs with which two letters?",
      question_ru: "С какими двумя буквами применяется 'Идгам без гунны'?",
      a: "ل، ر",
      a_en: "Lam, Ra",
      a_ru: "Лам, Ра",
      b: "ق، ک",
      b_en: "Qaf, Kaf",
      b_ru: "Каф, Кяф",
      c: "س، ش",
      c_en: "Seen, Sheen",
      c_ru: "Син, Шин",
      d: "ط، ظ",
      d_en: "Ta, Za",
      d_ru: "Та, За",
      correct: "a"
    },
    {
      question: "اقلاب کس حرف کے ساتھ ہوتا ہے؟",
      question_en: "Iqlab occurs with which letter?",
      question_ru: "С какой буквой применяется 'Икляб'?",
      a: "ب",
      a_en: "Ba",
      a_ru: "Ба",
      b: "م",
      b_en: "Meem",
      b_ru: "Мим",
      c: "و",
      c_en: "Waw",
      c_ru: "Вав",
      d: "ی",
      d_en: "Ya",
      d_ru: "Йа",
      correct: "a"
    },
    {
      question: "اخفاء کے کتنے حروف ہیں؟",
      question_en: "How many letters of Ikhfa are there?",
      question_ru: "Сколько букв относится к правилу 'Ихфа'?",
      a: "10",
      a_en: "10",
      a_ru: "10",
      b: "15",
      b_en: "15",
      b_ru: "15",
      c: "20",
      c_en: "20",
      c_ru: "20",
      d: "25",
      d_en: "25",
      d_ru: "25",
      correct: "b"
    },
    {
      question: "اخفاء میں آواز کہاں سے نکلتی ہے؟",
      question_en: "In Ikhfa, where does the sound come from?",
      question_ru: "При 'Ихфа' откуда выходит звук?",
      a: "ناک",
      a_en: "Nose",
      a_ru: "Нос",
      b: "ہونٹ",
      b_en: "Lips",
      b_ru: "Губы",
      c: "زبان",
      c_en: "Tongue",
      c_ru: "Язык",
      d: "حلق",
      d_en: "Throat",
      d_ru: "Горло",
      correct: "a"
    }
  ]
},

  // (ids 9..22 kept as provided)
  {
  id: 9,
  title: "باب 9: نونِ ساکن اور تنوین کے بعد کے احکام",
  title_en: "Chapter 9: Further Rules After Noon Sākin and Tanwīn",
  title_ru: "Глава 9: Последующие правила после Нун Сакен и Танвин",
  questions: [
    {
      question: "نون ساکن یا تنوین کے بعد اگر 'ر' آئے تو کون سا حکم لاگو ہوگا؟",
      question_en: "If 'Ra' follows Noon Sākin or Tanwīn, which rule applies?",
      question_ru: "Если после 'Нун Сакен' или 'Танвина' идёт 'Ра', какое правило применяется?",
      a: "ادغام بغیر غنہ",
      a_en: "Idgham without Ghunnah",
      a_ru: "Идгам без гунны",
      b: "اخفاء",
      b_en: "Ikhfa (concealment)",
      b_ru: "Ихфа (прикрытие)",
      c: "اظہار",
      c_en: "Izhar (clarity)",
      c_ru: "Изхар (ясное произношение)",
      d: "اقلاب",
      d_en: "Iqlab (conversion)",
      d_ru: "Икляб (преобразование)",
      correct: "a"
    },
    {
      question: "نون ساکن یا تنوین کے بعد اگر 'ل' آئے تو کیا ہوگا؟",
      question_en: "If 'Lam' follows Noon Sākin or Tanwīn, what will happen?",
      question_ru: "Если после 'Нун Сакен' или 'Танвина' идёт 'Лам', что произойдет?",
      a: "ادغام بغیر غنہ",
      a_en: "Idgham without Ghunnah",
      a_ru: "Идгам без гунны",
      b: "ادغام بغنہ",
      b_en: "Idgham with Ghunnah",
      b_ru: "Идгам с гунной",
      c: "اخفاء",
      c_en: "Ikhfa",
      c_ru: "Ихфа",
      d: "اظہار",
      d_en: "Izhar",
      d_ru: "Изхар",
      correct: "a"
    },
    {
      question: "'یرملون' کن کے حروف ہیں؟",
      question_en: "The letters of 'Yarmaloon' belong to which rule?",
      question_ru: "К какому правилу относятся буквы 'Ярмалун'?",
      a: "ادغام",
      a_en: "Idgham (merging)",
      a_ru: "Идгам (слияние)",
      b: "اظہار",
      b_en: "Izhar",
      b_ru: "Изхар",
      c: "اخفاء",
      c_en: "Ikhfa",
      c_ru: "Ихфа",
      d: "اقلاب",
      d_en: "Iqlab",
      d_ru: "Икляб",
      correct: "a"
    },
    {
      question: "اگر نون ساکن یا تنوین کے بعد 'و' آئے تو کیا ہوگا؟",
      question_en: "If 'Waw' follows Noon Sākin or Tanwīn, what happens?",
      question_ru: "Если после 'Нун Сакен' или 'Танвина' идёт 'Вав', что происходит?",
      a: "ادغام بغنہ",
      a_en: "Idgham with Ghunnah",
      a_ru: "Идгам с гунной",
      b: "ادغام بغیر غنہ",
      b_en: "Idgham without Ghunnah",
      b_ru: "Идгам без гунны",
      c: "اظہار",
      c_en: "Izhar",
      c_ru: "Изхар",
      d: "اخفاء",
      d_en: "Ikhfa",
      d_ru: "Ихфа",
      correct: "a"
    },
    {
      question: "اگر نون ساکن یا تنوین کے بعد 'م' آئے تو کیا ہوگا؟",
      question_en: "If 'Meem' follows Noon Sākin or Tanwīn, what happens?",
      question_ru: "Если после 'Нун Сакен' или 'Танвина' идёт 'Мим', что происходит?",
      a: "ادغام بغنہ",
      a_en: "Idgham with Ghunnah",
      a_ru: "Идгам с гунной",
      b: "اظہار",
      b_en: "Izhar",
      b_ru: "Изхар",
      c: "اخفاء",
      c_en: "Ikhfa",
      c_ru: "Ихфа",
      d: "اقلاب",
      d_en: "Iqlab",
      d_ru: "Икляб",
      correct: "a"
    },
    {
      question: "'من یقول' میں نون ساکن کے بعد 'ی' آ رہا ہے، یہاں کیا ہوگا؟",
      question_en: "In 'من یقول', Noon Sākin is followed by 'Ya'. What rule applies?",
      question_ru: "В выражении 'Мин Якуль' после 'Нун Сакен' идёт 'Йа'. Какое правило применяется?",
      a: "ادغام بغنہ",
      a_en: "Idgham with Ghunnah",
      a_ru: "Идгам с гунной",
      b: "اخفاء",
      b_en: "Ikhfa",
      b_ru: "Ихфа",
      c: "اظہار",
      c_en: "Izhar",
      c_ru: "Изхар",
      d: "اقلاب",
      d_en: "Iqlab",
      d_ru: "Икляб",
      correct: "a"
    },
    {
      question: "'من ربھم' میں نون ساکن کے بعد 'ر' ہے، یہاں کیا ہوگا؟",
      question_en: "In 'من ربهم', Noon Sākin is followed by 'Ra'. What happens here?",
      question_ru: "В 'Мин Раббихим' после 'Нун Сакен' идёт 'Ра'. Что происходит здесь?",
      a: "ادغام بغیر غنہ",
      a_en: "Idgham without Ghunnah",
      a_ru: "Идгам без гунны",
      b: "اظہار",
      b_en: "Izhar",
      b_ru: "Изхар",
      c: "اخفاء",
      c_en: "Ikhfa",
      c_ru: "Ихфа",
      d: "اقلاب",
      d_en: "Iqlab",
      d_ru: "Икляб",
      correct: "a"
    },
    {
      question: "'من لدنہ' میں نون ساکن کے بعد 'ل' ہے، یہاں کیا ہوگا؟",
      question_en: "In 'من لدنه', Noon Sākin is followed by 'Lam'. What happens here?",
      question_ru: "В 'Мин Ладунна' после 'Нун Сакен' идёт 'Лам'. Что происходит здесь?",
      a: "ادغام بغیر غنہ",
      a_en: "Idgham without Ghunnah",
      a_ru: "Идгам без гунны",
      b: "ادغام بغنہ",
      b_en: "Idgham with Ghunnah",
      b_ru: "Идгам с гунной",
      c: "اظہار",
      c_en: "Izhar",
      c_ru: "Изхар",
      d: "اخفاء",
      d_en: "Ikhfa",
      d_ru: "Ихфа",
      correct: "a"
    },
    {
      question: "نون ساکن اور تنوین کے بعد حروفِ اخفاء کتنے ہیں؟",
      question_en: "How many letters of Ikhfa occur after Noon Sākin and Tanwīn?",
      question_ru: "Сколько букв 'Ихфа' встречается после 'Нун Сакен' и 'Танвина'?",
      a: "10",
      a_en: "10",
      a_ru: "10",
      b: "15",
      b_en: "15",
      b_ru: "15",
      c: "20",
      c_en: "20",
      c_ru: "20",
      d: "25",
      d_en: "25",
      d_ru: "25",
      correct: "b"
    },
    {
      question: "'من قبل' میں نون ساکن کے بعد 'ق' ہے، یہاں کیا ہوگا؟",
      question_en: "In 'من قبل', Noon Sākin is followed by 'Qaf'. What rule applies here?",
      question_ru: "В 'Мин Кабль' после 'Нун Сакен' идёт 'Каф'. Какое правило применяется?",
      a: "اخفاء",
      a_en: "Ikhfa (concealment)",
      a_ru: "Ихфа (прикрытие)",
      b: "اظہار",
      b_en: "Izhar (clarity)",
      b_ru: "Изхар (ясное произношение)",
      c: "ادغام بغنہ",
      c_en: "Idgham with Ghunnah",
      c_ru: "Идгам с гунной",
      d: "ادغام بغیر غنہ",
      d_en: "Idgham without Ghunnah",
      d_ru: "Идгам без гунны",
      correct: "a"
    }
  ]
},
  {
  id: 10,
  title: "باب 10: میمِ ساکن کے احکام",
  title_en: "Chapter 10: Rules of Meem Sākin",
  title_ru: "Глава 10: Правила Мим Сакен",
  questions: [
    {
      question: "میم ساکن کے کتنے احکام ہیں؟",
      question_en: "How many rules of Meem Sākin are there?",
      question_ru: "Сколько существует правил 'Мим Сакен'?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "3 (اخفاء، ادغام، اظہار)",
      b_en: "3 (Ikhfa, Idgham, Izhar)",
      b_ru: "3 (Ихфа, Идгам, Изхар)",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "5",
      d_en: "5",
      d_ru: "5",
      correct: "b"
    },
    {
      question: "میم ساکن کے بعد 'ب' آئے تو کیا ہوگا؟",
      question_en: "If 'Ba' follows Meem Sākin, what happens?",
      question_ru: "Если после 'Мим Сакен' идёт буква 'Ба', что происходит?",
      a: "اخفاء شفوی",
      a_en: "Ikhfa Shafawi (Labial Concealment)",
      a_ru: "Ихфа Шафави (губное прикрытие)",
      b: "ادغام",
      b_en: "Idgham (Merging)",
      b_ru: "Идгам (слияние)",
      c: "اظہار",
      c_en: "Izhar (Clear Pronunciation)",
      c_ru: "Изхар (ясное произношение)",
      d: "اقلاب",
      d_en: "Iqlab (Conversion)",
      d_ru: "Икляб (преобразование)",
      correct: "a"
    },
    {
      question: "میم ساکن کے بعد 'م' آئے تو کیا ہوگا؟",
      question_en: "If 'Meem' follows Meem Sākin, what happens?",
      question_ru: "Если после 'Мим Сакен' идёт буква 'Мим', что происходит?",
      a: "ادغام",
      a_en: "Idgham (Merging)",
      a_ru: "Идгам (слияние)",
      b: "اظہار",
      b_en: "Izhar",
      b_ru: "Изхар",
      c: "اخفاء",
      c_en: "Ikhfa",
      c_ru: "Ихфа",
      d: "اقلاب",
      d_en: "Iqlab",
      d_ru: "Икляб",
      correct: "a"
    },
    {
      question: "میم ساکن کے بعد باقی تمام حروف آئیں تو کیا ہوگا؟",
      question_en: "If any other letter follows Meem Sākin, what rule applies?",
      question_ru: "Если после 'Мим Сакен' идёт любая другая буква, какое правило применяется?",
      a: "اظہار",
      a_en: "Izhar (Clear Pronunciation)",
      a_ru: "Изхар (ясное произношение)",
      b: "ادغام",
      b_en: "Idgham",
      b_ru: "Идгам",
      c: "اخفاء",
      c_en: "Ikhfa",
      c_ru: "Ихфа",
      d: "اقلاب",
      d_en: "Iqlab",
      d_ru: "Икляб",
      correct: "a"
    },
    {
      question: "'کم بثہ' میں میم ساکن کے بعد 'ب' ہے، یہاں کیا ہوگا؟",
      question_en: "In 'كم بثه', Meem Sākin is followed by 'Ba'. What happens here?",
      question_ru: "В 'Кам Бисса' после 'Мим Сакен' идёт 'Ба'. Что происходит здесь?",
      a: "اخفاء شفوی",
      a_en: "Ikhfa Shafawi (Labial Concealment)",
      a_ru: "Ихфа Шафави (губное прикрытие)",
      b: "ادغام",
      b_en: "Idgham",
      b_ru: "Идгам",
      c: "اظہار",
      c_en: "Izhar",
      c_ru: "Изхар",
      d: "اقلاب",
      d_en: "Iqlab",
      d_ru: "Икляб",
      correct: "a"
    },
    {
      question: "'علیہم ملوماً' میں میم ساکن کے بعد 'م' ہے، یہاں کیا ہوگا؟",
      question_en: "In 'علیہم ملوماً', Meem Sākin is followed by 'Meem'. What happens here?",
      question_ru: "В 'Алайхим Малуман' после 'Мим Сакен' идёт 'Мим'. Что происходит здесь?",
      a: "ادغام",
      a_en: "Idgham (Merging)",
      a_ru: "Идгам (слияние)",
      b: "اخفاء",
      b_en: "Ikhfa",
      b_ru: "Ихфа",
      c: "اظہار",
      c_en: "Izhar",
      c_ru: "Изхар",
      d: "اقلاب",
      d_en: "Iqlab",
      d_ru: "Икляб",
      correct: "a"
    },
    {
      question: "'لہم فیھا' میں میم ساکن کے بعد 'ف' ہے، یہاں کیا ہوگا؟",
      question_en: "In 'لهم فيها', Meem Sākin is followed by 'Fa'. What happens here?",
      question_ru: "В 'Лахум Фиха' после 'Мим Сакен' идёт 'Фа'. Что происходит здесь?",
      a: "اظہار",
      a_en: "Izhar (Clear Pronunciation)",
      a_ru: "Изхар (ясное произношение)",
      b: "ادغام",
      b_en: "Idgham",
      b_ru: "Идгам",
      c: "اخفاء",
      c_en: "Ikhfa",
      c_ru: "Ихфа",
      d: "اقلاب",
      d_en: "Iqlab",
      d_ru: "Икляб",
      correct: "a"
    },
    {
      question: "میم ساکن کے بعد ادغام کو اور کیا کہا جاتا ہے؟",
      question_en: "What is Idgham of Meem Sākin also called?",
      question_ru: "Как ещё называется 'Идгам' после 'Мим Сакен'?",
      a: "ادغام مثلین",
      a_en: "Idgham Mithlayn (Merging of same letters)",
      a_ru: "Идгам Мислайн (слияние одинаковых букв)",
      b: "ادغام بغنہ",
      b_en: "Idgham with Ghunnah",
      b_ru: "Идгам с гунной",
      c: "ادغام بغیر غنہ",
      c_en: "Idgham without Ghunnah",
      c_ru: "Идгам без гунны",
      d: "ادغام کبیر",
      d_en: "Idgham Kabir (Major merging)",
      d_ru: "Идгам Кабир (большое слияние)",
      correct: "a"
    },
    {
      question: "اخفاء شفوی کہاں سے ادا ہوتا ہے؟",
      question_en: "From where is Ikhfa Shafawi pronounced?",
      question_ru: "Откуда произносится 'Ихфа Шафави'?",
      a: "ناک",
      a_en: "Nose",
      a_ru: "Нос",
      b: "حلق",
      b_en: "Throat",
      b_ru: "Горло",
      c: "زبان",
      c_en: "Tongue",
      c_ru: "Язык",
      d: "ہونٹ",
      d_en: "Lips",
      d_ru: "Губы",
      correct: "a"
    },
    {
      question: "میم ساکن کے ساتھ سب سے زیادہ کس حکم کا استعمال ہوتا ہے؟",
      question_en: "Which rule is most common with Meem Sākin?",
      question_ru: "Какое правило чаще всего применяется с 'Мим Сакен'?",
      a: "اظہار",
      a_en: "Izhar (Clear Pronunciation)",
      a_ru: "Изхар (ясное произношение)",
      b: "ادغام",
      b_en: "Idgham",
      b_ru: "Идгам",
      c: "اخفاء",
      c_en: "Ikhfa",
      c_ru: "Ихфа",
      d: "اقلاب",
      d_en: "Iqlab",
      d_ru: "Икляб",
      correct: "a"
    }
  ]
}
,
  {
  id: 11,
  title: "باب 11: مد کے احکام",
  title_en: "Chapter 11: Rules of Madd (Prolongation)",
  title_ru: "Глава 11: Правила Мадд (удлинение)",
  questions: [
    {
      question: "مد کا لغوی معنی کیا ہے؟",
      question_en: "What is the literal meaning of Madd?",
      question_ru: "Что означает 'мадд' в буквальном смысле?",
      a: "روکنا",
      a_en: "To stop",
      a_ru: "Остановить",
      b: "کھینچنا",
      b_en: "To stretch or lengthen",
      b_ru: "Растягивать, удлинять",
      c: "دہرانا",
      c_en: "To repeat",
      c_ru: "Повторять",
      d: "توڑنا",
      d_en: "To break",
      d_ru: "Ломать",
      correct: "b"
    },
    {
      question: "مد کی کتنی بڑی اقسام ہیں؟",
      question_en: "How many main types of Madd are there?",
      question_ru: "Сколько основных видов мадда существует?",
      a: "2 (مد اصلی، مد فرعی)",
      a_en: "2 (Madd Asli – Natural, Madd Far‘i – Secondary)",
      a_ru: "2 (Мадд Аслы — естественный, Мадд Фаръи — вторичный)",
      b: "3",
      b_en: "3",
      b_ru: "3",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "6",
      d_en: "6",
      d_ru: "6",
      correct: "a"
    },
    {
      question: "مد اصلی کو اور کیا کہتے ہیں؟",
      question_en: "What is another name for Madd Asli?",
      question_ru: "Какое другое название имеет Мадд Аслы?",
      a: "مد لازم",
      a_en: "Madd Lazim (Compulsory Madd)",
      a_ru: "Мадд Лязим (обязательное удлинение)",
      b: "مد طبیعی",
      b_en: "Madd Tabi‘i (Natural Madd)",
      b_ru: "Мадд Табии (естественное удлинение)",
      c: "مد عارض",
      c_en: "Madd A‘rid",
      c_ru: "Мадд А'рид",
      d: "مد منفصل",
      d_en: "Madd Munfasil",
      d_ru: "Мадд Муфасиль",
      correct: "b"
    },
    {
      question: "مد اصلی کی مقدار کتنی ہے؟",
      question_en: "What is the duration of Madd Asli?",
      question_ru: "Какова длительность мадд аслы?",
      a: "1 حرکت",
      a_en: "1 harakah (beat)",
      a_ru: "1 харака",
      b: "2 حرکت",
      b_en: "2 harakah (beats)",
      b_ru: "2 хараки (доли)",
      c: "4 حرکت",
      c_en: "4 harakah",
      c_ru: "4 хараки",
      d: "6 حرکت",
      d_en: "6 harakah",
      d_ru: "6 харак",
      correct: "b"
    },
    {
      question: "مد فرعی کی مقدار کتنی ہوسکتی ہے؟",
      question_en: "What is the possible length of Madd Far‘i?",
      question_ru: "Какова возможная длина мадд фаръи?",
      a: "2 حرکت",
      a_en: "2 harakah",
      a_ru: "2 хараки",
      b: "4 یا 6 حرکت",
      b_en: "4 or 6 harakah",
      b_ru: "4 или 6 харак",
      c: "3 حرکت",
      c_en: "3 harakah",
      c_ru: "3 хараки",
      d: "5 حرکت",
      d_en: "5 harakah",
      d_ru: "5 харак",
      correct: "b"
    },
    {
      question: "مد لازم کب ہوتا ہے؟",
      question_en: "When does Madd Lazim occur?",
      question_ru: "Когда возникает мадд лязим?",
      a: "جب حرف کے بعد سکون اصلی ہو",
      a_en: "When a letter with sukoon follows a madd letter permanently",
      a_ru: "Когда после буквы мадд следует буква с сукуном постоянно",
      b: "جب تنوین ہو",
      b_en: "When there is tanween",
      b_ru: "Когда есть танвин",
      c: "جب تشدید ہو",
      c_en: "When there is shaddah",
      c_ru: "Когда есть шадда",
      d: "جب زیر ہو",
      d_en: "When there is kasra",
      d_ru: "Когда есть касра",
      correct: "a"
    },
    {
      question: "مد عارض للسکون کب ہوتا ہے؟",
      question_en: "When does Madd ‘Aarid lil-Sukoon occur?",
      question_ru: "Когда возникает мадд аарид лиль-сукун?",
      a: "وقف کی صورت میں",
      a_en: "When stopping at the end of a word (pause)",
      a_ru: "При остановке в конце слова (пауза)",
      b: "وصل کی صورت میں",
      b_en: "When continuing recitation",
      b_ru: "При продолжении чтения",
      c: "تنوین کی صورت میں",
      c_en: "When there is tanween",
      c_ru: "Когда есть танвин",
      d: "تشدید کی صورت میں",
      d_en: "When there is shaddah",
      d_ru: "Когда есть шадда",
      correct: "a"
    },
    {
      question: "مد منفصل کب ہوتا ہے؟",
      question_en: "When does Madd Munfasil occur?",
      question_ru: "Когда возникает мадд муфасиль?",
      a: "جب مد کے بعد ہمزه دوسرے لفظ میں آئے",
      a_en: "When a madd letter is followed by hamzah in the next word",
      a_ru: "Когда после буквы мадд следует хамза в следующем слове",
      b: "جب مد کے بعد سکون ہو",
      b_en: "When a madd letter is followed by sukoon",
      b_ru: "Когда после мадд следует сукун",
      c: "جب مد کے بعد تشدید ہو",
      c_en: "When a madd letter is followed by shaddah",
      c_ru: "Когда после мадд следует шадда",
      d: "جب مد کے بعد نون ہو",
      d_en: "When a madd letter is followed by noon",
      d_ru: "Когда после мадд следует нун",
      correct: "a"
    },
    {
      question: "مد متصل کب ہوتا ہے؟",
      question_en: "When does Madd Muttasil occur?",
      question_ru: "Когда возникает мадд муттасиль?",
      a: "جب مد کے بعد ہمزه ایک ہی لفظ میں آئے",
      a_en: "When a madd letter is followed by hamzah in the same word",
      a_ru: "Когда хамза следует после мадд в одном слове",
      b: "جب مد کے بعد سکون ہو",
      b_en: "When a madd letter is followed by sukoon",
      b_ru: "Когда мадд следует за сукуном",
      c: "جب مد کے بعد میم ہو",
      c_en: "When a madd letter is followed by meem",
      c_ru: "Когда мадд следует за мимом",
      d: "جب مد کے بعد نون ہو",
      d_en: "When a madd letter is followed by noon",
      d_ru: "Когда мадд следует за нуном",
      correct: "a"
    },
    {
      question: "سب سے لمبا مد کون سا ہے؟",
      question_en: "Which is the longest type of Madd?",
      question_ru: "Какой вид мадда самый длинный?",
      a: "مد لازم",
      a_en: "Madd Lazim (Compulsory Madd)",
      a_ru: "Мадд Лязим (обязательное удлинение)",
      b: "مد طبیعی",
      b_en: "Madd Tabi‘i (Natural Madd)",
      b_ru: "Мадд Табии (естественное удлинение)",
      c: "مد عارض",
      c_en: "Madd ‘Aarid",
      c_ru: "Мадд А'рид",
      d: "مد منفصل",
      d_en: "Madd Munfasil",
      d_ru: "Мадд Муфасиль",
      correct: "a"
    }
  ]
},
  {
  id: 12,
  title: "باب 12: مد اور اس کے اقسام",
  title_en: "Chapter 12: Madd and Its Types",
  title_ru: "Глава 12: Протяжение (Мадд) и его виды",
  questions: [
    {
      question: "مد کا لغوی معنی کیا ہے؟",
      question_en: "What is the literal meaning of 'Madd'?",
      question_ru: "Каково буквальное значение слова «мадд»?",
      a: "روکنا",
      a_en: "To stop",
      a_ru: "Остановить",
      b: "کھینچنا",
      b_en: "To stretch or lengthen",
      b_ru: "Растягивать, удлинять",
      c: "دہرانا",
      c_en: "To repeat",
      c_ru: "Повторять",
      d: "توڑنا",
      d_en: "To break",
      d_ru: "Ломать",
      correct: "b"
    },
    {
      question: "مد کی کتنی بڑی اقسام ہیں؟",
      question_en: "How many main types of Madd are there?",
      question_ru: "Сколько основных видов мадд существует?",
      a: "2 (مد اصلی، مد فرعی)",
      a_en: "2 (Original Madd and Secondary Madd)",
      a_ru: "2 (основной мадд и вторичный мадд)",
      b: "3",
      b_en: "3",
      b_ru: "3",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "6",
      d_en: "6",
      d_ru: "6",
      correct: "a"
    },
    {
      question: "مد اصلی کو اور کیا کہتے ہیں؟",
      question_en: "What is another name for 'Madd Asli'?",
      question_ru: "Как по-другому называется 'мадд асли'?",
      a: "مد لازم",
      a_en: "Madd Lazim",
      a_ru: "Мадд Лазим",
      b: "مد طبیعی",
      b_en: "Madd Tabee’i (Natural Madd)",
      b_ru: "Мадд Таби'и (естественное удлинение)",
      c: "مد عارض",
      c_en: "Madd 'Aarid",
      c_ru: "Мадд А’рид",
      d: "مد منفصل",
      d_en: "Madd Munfasil",
      d_ru: "Мадд Муфасиль",
      correct: "b"
    },
    {
      question: "مد اصلی کی مقدار کتنی ہے؟",
      question_en: "What is the length of Madd Asli?",
      question_ru: "Какова длина мадд асли?",
      a: "1 حرکت",
      a_en: "1 Harakah",
      a_ru: "1 харакат",
      b: "2 حرکت",
      b_en: "2 Harakah",
      b_ru: "2 хараката",
      c: "4 حرکت",
      c_en: "4 Harakah",
      c_ru: "4 хараката",
      d: "6 حرکت",
      d_en: "6 Harakah",
      d_ru: "6 харакатов",
      correct: "b"
    },
    {
      question: "مد فرعی کی مقدار کتنی ہوسکتی ہے؟",
      question_en: "What can be the length of Madd Far‘i?",
      question_ru: "Какова может быть длина мадд фар’и?",
      a: "2 حرکت",
      a_en: "2 Harakah",
      a_ru: "2 хараката",
      b: "4 یا 6 حرکت",
      b_en: "4 or 6 Harakah",
      b_ru: "4 или 6 харакатов",
      c: "3 حرکت",
      c_en: "3 Harakah",
      c_ru: "3 хараката",
      d: "5 حرکت",
      d_en: "5 Harakah",
      d_ru: "5 харакатов",
      correct: "b"
    },
    {
      question: "مد لازم کب ہوتا ہے؟",
      question_en: "When does Madd Lazim occur?",
      question_ru: "Когда происходит мадд лазим?",
      a: "جب حرف کے بعد سکون اصلی ہو",
      a_en: "When a permanent sukoon follows a letter",
      a_ru: "Когда после буквы следует постоянный сукун",
      b: "جب تنوین ہو",
      b_en: "When there is tanween",
      b_ru: "Когда есть танвин",
      c: "جب تشدید ہو",
      c_en: "When there is shaddah",
      c_ru: "Когда есть шадда",
      d: "جب زیر ہو",
      d_en: "When there is kasrah",
      d_ru: "Когда есть касра",
      correct: "a"
    },
    {
      question: "مد عارض للسکون کب ہوتا ہے؟",
      question_en: "When does Madd ‘Aarid lissukoon occur?",
      question_ru: "Когда происходит мадд а’рид лиссукун?",
      a: "وقف کی صورت میں",
      a_en: "When stopping at the end of recitation",
      a_ru: "Когда делается остановка при чтении (вакф)",
      b: "وصل کی صورت میں",
      b_en: "When continuing recitation",
      b_ru: "Когда чтение продолжается",
      c: "تنوین کی صورت میں",
      c_en: "When there is tanween",
      c_ru: "Когда есть танвин",
      d: "تشدید کی صورت میں",
      d_en: "When there is shaddah",
      d_ru: "Когда есть шадда",
      correct: "a"
    },
    {
      question: "مد منفصل کب ہوتا ہے؟",
      question_en: "When does Madd Munfasil occur?",
      question_ru: "Когда происходит мадд муфасиль?",
      a: "جب مد کے بعد ہمزه دوسرے لفظ میں آئے",
      a_en: "When a hamzah appears in the next word after Madd",
      a_ru: "Когда хамза появляется в следующем слове после мадд",
      b: "جب مد کے بعد سکون ہو",
      b_en: "When there is sukoon after Madd",
      b_ru: "Когда после мадд стоит сукун",
      c: "جب مد کے بعد تشدید ہو",
      c_en: "When there is shaddah after Madd",
      c_ru: "Когда после мадд есть шадда",
      d: "جب مد کے بعد نون ہو",
      d_en: "When there is noon after Madd",
      d_ru: "Когда после мадд есть нун",
      correct: "a"
    },
    {
      question: "مد متصل کب ہوتا ہے؟",
      question_en: "When does Madd Muttasil occur?",
      question_ru: "Когда происходит мадд муттасиль?",
      a: "جب مد کے بعد ہمزه ایک ہی لفظ میں آئے",
      a_en: "When a hamzah follows Madd in the same word",
      a_ru: "Когда хамза следует за мадд в одном слове",
      b: "جب مد کے بعد سکون ہو",
      b_en: "When there is sukoon after Madd",
      b_ru: "Когда после мадд стоит сукун",
      c: "جب مد کے بعد میم ہو",
      c_en: "When there is meem after Madd",
      c_ru: "Когда после мадд стоит мим",
      d: "جب مد کے بعد نون ہو",
      d_en: "When there is noon after Madd",
      d_ru: "Когда после мадд стоит нун",
      correct: "a"
    },
    {
      question: "سب سے لمبا مد کون سا ہے؟",
      question_en: "Which Madd is the longest?",
      question_ru: "Какой мадд является самым длинным?",
      a: "مد لازم",
      a_en: "Madd Lazim",
      a_ru: "Мадд Лазим",
      b: "مد طبیعی",
      b_en: "Madd Tabee’i",
      b_ru: "Мадд Таби'и",
      c: "مد عارض",
      c_en: "Madd 'Aarid",
      c_ru: "Мадд А’рид",
      d: "مد منفصل",
      d_en: "Madd Munfasil",
      d_ru: "Мадд Муфасиль",
      correct: "a"
    }
  ]
},
  {
  id: 13,
  title: "باب 13 (حصہ 1): حروف کے اقسام",
  title_en: "Chapter 13 (Part 1): Types and Qualities of Letters",
  title_ru: "Глава 13 (Часть 1): Виды и качества букв",
  questions: [
    {
      question: "حروف کی کل کتنی اقسام ہیں؟",
      question_en: "How many main types of letters are there?",
      question_ru: "Сколько основных видов букв существует?",
      a: "5",
      a_en: "5",
      a_ru: "5",
      b: "3 (مہموسہ، مجہوره، شده)",
      b_en: "3 (Whispered, Voiced, Strong)",
      b_ru: "3 (шепчущие, звонкие, сильные)",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "6",
      d_en: "6",
      d_ru: "6",
      correct: "b"
    },
    {
      question: "مہموسہ حروف کتنے ہیں؟",
      question_en: "How many whispered (Mahmoosah) letters are there?",
      question_ru: "Сколько букв 'Махмуса' (шепчущих)?",
      a: "8",
      a_en: "8",
      a_ru: "8",
      b: "10",
      b_en: "10",
      b_ru: "10",
      c: "12",
      c_en: "12",
      c_ru: "12",
      d: "14",
      d_en: "14",
      d_ru: "14",
      correct: "b"
    },
    {
      question: "مہموسہ حروف کون سے ہیں؟",
      question_en: "Which are the Mahmoosah (whispered) letters?",
      question_ru: "Какие буквы относятся к 'Махмуса' (шепчущим)?",
      a: "فحثه شخص سكت",
      a_en: "ف, ح, ث, هـ, ش, خ, ص, س, ك, ت",
      a_ru: "Ф, Ха, Са, Ха, Шин, Ха, Сад, Син, Каф, Та",
      b: "نمل یرع",
      b_en: "ن, م, ل, ی, ر, ع",
      b_ru: "Нун, Мим, Лам, Йа, Ра, Айн",
      c: "قد طب مجد",
      c_en: "ق, د, ط, ب, م, ج, د",
      c_ru: "Каф, Дал, Та, Ба, Мим, Джим, Дал",
      d: "خص ضغط قظ",
      d_en: "خ, ص, ض, غ, ط, ق, ظ",
      d_ru: "Ха, Сад, Дад, Гайн, Та, Каф, За",
      correct: "a"
    },
    {
      question: "مجہوره حروف کتنے ہیں؟",
      question_en: "How many voiced (Majhoorah) letters are there?",
      question_ru: "Сколько букв 'Маджхура' (звонких)?",
      a: "10",
      a_en: "10",
      a_ru: "10",
      b: "19",
      b_en: "19",
      b_ru: "19",
      c: "15",
      c_en: "15",
      c_ru: "15",
      d: "20",
      d_en: "20",
      d_ru: "20",
      correct: "b"
    },
    {
      question: "مجہوره حروف کی علامت کیا ہے؟",
      question_en: "What is the sign of Majhoorah letters?",
      question_ru: "Какой признак у букв 'Маджхура'?",
      a: "ان میں آواز زیادہ ہو",
      a_en: "They have a strong voice sound",
      a_ru: "В них сильный голосовой звук",
      b: "سانس زیادہ نکلے",
      b_en: "They release more breath",
      b_ru: "Выходит больше дыхания",
      c: "آواز ختم ہو",
      c_en: "Sound stops completely",
      c_ru: "Звук полностью прекращается",
      d: "ناک سے آواز نکلے",
      d_en: "Sound comes from the nose",
      d_ru: "Звук выходит через нос",
      correct: "a"
    },
    {
      question: "شده حروف کتنے ہیں؟",
      question_en: "How many Shaddah (strong) letters are there?",
      question_ru: "Сколько букв 'Шадда' (сильных)?",
      a: "5",
      a_en: "5",
      a_ru: "5",
      b: "8",
      b_en: "8",
      b_ru: "8",
      c: "7",
      c_en: "7",
      c_ru: "7",
      d: "10",
      d_en: "10",
      d_ru: "10",
      correct: "b"
    },
    {
      question: "شده حروف کون سے ہیں؟",
      question_en: "Which are the Shaddah (strong) letters?",
      question_ru: "Какие буквы относятся к 'Шадда' (сильным)?",
      a: "أجد قط بكت",
      a_en: "أ, ج, د, ق, ط, ب, ك, ت",
      a_ru: "Алиф, Джим, Дал, Каф, Та, Ба, Каф, Та",
      b: "فحثه شخص سكت",
      b_en: "ف, ح, ث, هـ, ش, خ, ص, س, ك, ت",
      b_ru: "Ф, Ха, Са, Ха, Шин, Ха, Сад, Син, Каф, Та",
      c: "خص ضغط قظ",
      c_en: "خ, ص, ض, غ, ط, ق, ظ",
      c_ru: "Ха, Сад, Дад, Гайн, Та, Каф, За",
      d: "نمل یرع",
      d_en: "ن, م, ل, ی, ر, ع",
      d_ru: "Нун, Мим, Лам, Йа, Ра, Айн",
      correct: "a"
    },
    {
      question: "شده حروف کی خصوصیت کیا ہے؟",
      question_en: "What is the characteristic of Shaddah letters?",
      question_ru: "Какова особенность букв 'Шадда'?",
      a: "آواز پر زور دینا",
      a_en: "Strong pressure on the sound",
      a_ru: "Сильное давление на звук",
      b: "سانس کھینچنا",
      b_en: "Drawing breath",
      b_ru: "Вдыхание воздуха",
      c: "ناک سے نکالنا",
      c_en: "Sound comes from nose",
      c_ru: "Звук выходит через нос",
      d: "ہونٹ بند کرنا",
      d_en: "Closing lips",
      d_ru: "Смыкание губ",
      correct: "a"
    },
    {
      question: "مہموسہ حروف میں کیا پایا جاتا ہے؟",
      question_en: "What is found in Mahmoosah letters?",
      question_ru: "Что присутствует в буквах 'Махмуса'?",
      a: "زور",
      a_en: "Force",
      a_ru: "Сила",
      b: "سرسراہٹ",
      b_en: "Whispering sound",
      b_ru: "Шипящий звук",
      c: "ناک کی آواز",
      c_en: "Nasal sound",
      c_ru: "Назальный звук",
      d: "حلق",
      d_en: "Throat sound",
      d_ru: "Гортанный звук",
      correct: "b"
    },
    {
      question: "مجہوره حروف میں کیا پایا جاتا ہے؟",
      question_en: "What is found in Majhoorah letters?",
      question_ru: "Что присутствует в буквах 'Маджхура'?",
      a: "زور",
      a_en: "Force",
      a_ru: "Сила",
      b: "آواز کا بہاؤ",
      b_en: "Flow of sound",
      b_ru: "Плавное течение звука",
      c: "ناک کی آواز",
      c_en: "Nasal sound",
      c_ru: "Назальный звук",
      d: "سرسراہٹ",
      d_en: "Whisper",
      d_ru: "Шепот",
      correct: "b"
    }
  ]
},
  {
  id: 14,
  title: "باب 14 (حصہ 2): حروف کے اقسام (حصہ 2)",
  title_en: "Chapter 14 (Part 2): Types of Letters – Part 2",
  title_ru: "Глава 14 (Часть 2): Виды букв – часть 2",
  questions: [
    {
      question: "رِخوَہ حروف کتنے ہیں؟",
      question_en: "How many Rikhwah letters are there?",
      question_ru: "Сколько букв Рихва существует?",
      a: "9",
      a_en: "9",
      a_ru: "9",
      b: "11",
      b_en: "11",
      b_ru: "11",
      c: "16",
      c_en: "16",
      c_ru: "16",
      d: "18",
      d_en: "18",
      d_ru: "18",
      correct: "c"
    },
    {
      question: "رِخوَہ حروف کون سے ہیں؟",
      question_en: "Which are the Rikhwah letters?",
      question_ru: "Какие буквы относятся к Рихва?",
      a: "فَثَخَصَ ضَغَظَ كَمْ سَحَفَص",
      a_en: "ف, ث, خ, ص, ض, غ, ظ, ك, م, س, ح, ف, ص",
      a_ru: "Фа, Са, Ха, Сад, Дад, Гайн, За, Каф, Мим, Син, Ха, Фа, Сад",
      b: "نمل یرع",
      b_en: "ن, م, ل, ی, ر, ع",
      b_ru: "Нун, Мим, Лам, Йа, Ра, Айн",
      c: "أجد قط بكت",
      c_en: "أ, ج, د, ق, ط, ب, ك, ت",
      c_ru: "Алиф, Джим, Дал, Каф, Та, Ба, Каф, Та",
      d: "فحثه شخص سكت",
      d_en: "ف, ح, ث, هـ, ش, خ, ص, س, ك, ت",
      d_ru: "Ф, Ха, Са, Ха, Шин, Ха, Сад, Син, Каф, Та",
      correct: "a"
    },
    {
      question: "شَدَّہ حروف کتنے ہیں؟",
      question_en: "How many Shaddah letters are there?",
      question_ru: "Сколько букв Шадда существует?",
      a: "5",
      a_en: "5",
      a_ru: "5",
      b: "8",
      b_en: "8",
      b_ru: "8",
      c: "10",
      c_en: "10",
      c_ru: "10",
      d: "12",
      d_en: "12",
      d_ru: "12",
      correct: "b"
    },
    {
      question: "شَدَّہ حروف کی علامت کیا ہے؟",
      question_en: "What is the sign of Shaddah letters?",
      question_ru: "Какой признак букв Шадда?",
      a: "ان میں آواز رُک جاتی ہے",
      a_en: "The sound stops within them",
      a_ru: "Звук в них прерывается",
      b: "آواز بہتی ہے",
      b_en: "The sound flows",
      b_ru: "Звук течёт",
      c: "سانس زیادہ نکلتا ہے",
      c_en: "More breath is released",
      c_ru: "Выходит больше воздуха",
      d: "ناک سے آواز آتی ہے",
      d_en: "Sound comes from the nose",
      d_ru: "Звук выходит через нос",
      correct: "a"
    },
    {
      question: "بَینَ الرِخوَہ وَالشِّدَّہ حروف کتنے ہیں؟",
      question_en: "How many letters are between Rikhwah and Shiddah (intermediate)?",
      question_ru: "Сколько букв находятся между Рихва и Шидда (средние)?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "5",
      b_en: "5",
      b_ru: "5",
      c: "8",
      c_en: "8",
      c_ru: "8",
      d: "10",
      d_en: "10",
      d_ru: "10",
      correct: "b"
    },
    {
      question: "بَینَ الرِخوَہ وَالشِّدَّہ حروف کون سے ہیں؟",
      question_en: "Which letters are between Rikhwah and Shiddah?",
      question_ru: "Какие буквы находятся между Рихва и Шидда?",
      a: "لن عمر",
      a_en: "ل, ن, ع, م, ر",
      a_ru: "Лам, Нун, Айн, Мим, Ра",
      b: "فحثه شخص سكت",
      b_en: "ف, ح, ث, هـ, ش, خ, ص, س, ك, ت",
      b_ru: "Ф, Ха, Са, Ха, Шин, Ха, Сад, Син, Каф, Та",
      c: "خص ضغط قظ",
      c_en: "خ, ص, ض, غ, ط, ق, ظ",
      c_ru: "Ха, Сад, Дад, Гайн, Та, Каф, За",
      d: "أجد قط بكت",
      d_en: "أ, ج, د, ق, ط, ب, ك, ت",
      d_ru: "Алиф, Джим, Дал, Каф, Та, Ба, Каф, Та",
      correct: "a"
    },
    {
      question: "اِطباق حروف کتنے ہیں؟",
      question_en: "How many Itbaaq (closed) letters are there?",
      question_ru: "Сколько букв Итбак (закрытых)?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "4",
      b_en: "4",
      b_ru: "4",
      c: "6",
      c_en: "6",
      c_ru: "6",
      d: "8",
      d_en: "8",
      d_ru: "8",
      correct: "b"
    },
    {
      question: "اِطباق حروف کون سے ہیں؟",
      question_en: "Which are the Itbaaq (closed) letters?",
      question_ru: "Какие буквы относятся к Итбак (закрытым)?",
      a: "ص، ض، ط، ظ",
      a_en: "ص, ض, ط, ظ",
      a_ru: "Сад, Дад, Та, За",
      b: "س، ز، ش، خ",
      b_en: "س, ز, ش, خ",
      b_ru: "Син, Зай, Шин, Ха",
      c: "ن، م، ل، ر",
      c_en: "ن, م, ل, ر",
      c_ru: "Нун, Мим, Лам, Ра",
      d: "ق، ک، و، ی",
      d_en: "ق, ك, و, ي",
      d_ru: "Каф, Каф, Вав, Йа",
      correct: "a"
    },
    {
      question: "اِستِفال حروف کتنے ہیں؟",
      question_en: "How many Istifal (lowered) letters are there?",
      question_ru: "Сколько букв Истифаль (пониженных)?",
      a: "7",
      a_en: "7",
      a_ru: "7",
      b: "24",
      b_en: "24",
      b_ru: "24",
      c: "14",
      c_en: "14",
      c_ru: "14",
      d: "17",
      d_en: "17",
      d_ru: "17",
      correct: "b"
    },
    {
      question: "اِستِعلاء حروف کتنے ہیں؟",
      question_en: "How many Isti‘laa (elevated) letters are there?",
      question_ru: "Сколько букв Исти‘лаа (возвышенных)?",
      a: "7",
      a_en: "7",
      a_ru: "7",
      b: "10",
      b_en: "10",
      b_ru: "10",
      c: "12",
      c_en: "12",
      c_ru: "12",
      d: "14",
      d_en: "14",
      d_ru: "14",
      correct: "a"
    }
  ]
},
  {
  id: 15,
  title: "باب 15: وقف اور اس کے احکام",
  title_en: "Chapter 15: Waqf (Pausing) and Its Rules",
  title_ru: "Глава 15: Вакф (остановка) и её правила",
  questions: [
    {
      question: "وقف کا لغوی معنی کیا ہے؟",
      question_en: "What is the literal meaning of Waqf?",
      question_ru: "Что означает слово «Вакф» буквально?",
      a: "رک جانا",
      a_en: "To stop",
      a_ru: "Остановиться",
      b: "پڑھنا",
      b_en: "To read",
      b_ru: "Читать",
      c: "چلنا",
      c_en: "To walk",
      c_ru: "Идти",
      d: "بولنا",
      d_en: "To speak",
      d_ru: "Говорить",
      correct: "a"
    },
    {
      question: "وقف کی کتنی اقسام ہیں؟",
      question_en: "How many types of Waqf are there?",
      question_ru: "Сколько видов Вакфа существует?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "3",
      b_en: "3",
      b_ru: "3",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "5",
      d_en: "5",
      d_ru: "5",
      correct: "c"
    },
    {
      question: "وقف تام کب ہوتا ہے؟",
      question_en: "When does Waqf Taam occur?",
      question_ru: "Когда используется Вакф Таам (полная остановка)?",
      a: "جہاں بات مکمل ہو جائے",
      a_en: "Where the statement is completely finished",
      a_ru: "Когда смысл полностью завершён",
      b: "جہاں سانس ٹوٹے",
      b_en: "Where the breath breaks",
      b_ru: "Когда прерывается дыхание",
      c: "جہاں جملہ ادھورا رہ جائے",
      c_en: "Where the sentence remains incomplete",
      c_ru: "Когда предложение остаётся незаконченным",
      d: "جہاں تشدید ہو",
      d_en: "Where there is shaddah",
      d_ru: "Где есть шадда",
      correct: "a"
    },
    {
      question: "وقف کافی کب ہوتا ہے؟",
      question_en: "When does Waqf Kaafi occur?",
      question_ru: "Когда используется Вакф Каафи (достаточная остановка)?",
      a: "جہاں بات جزوی مکمل ہو",
      a_en: "Where the meaning is partially complete",
      a_ru: "Когда смысл частично завершён",
      b: "جہاں سانس رک جائے",
      b_en: "Where the breath stops",
      b_ru: "Когда останавливается дыхание",
      c: "جہاں مفہوم ختم ہو",
      c_en: "Where the meaning ends",
      c_ru: "Когда смысл заканчивается",
      d: "جہاں لفظ ختم ہو",
      d_en: "Where the word ends",
      d_ru: "Когда слово заканчивается",
      correct: "a"
    },
    {
      question: "وقف حسن کب ہوتا ہے؟",
      question_en: "When does Waqf Hasan occur?",
      question_ru: "Когда используется Вакф Хасан (хорошая остановка)?",
      a: "جہاں بات مکمل ہو لیکن تعلق ہو",
      a_en: "Where the sentence completes but has some connection to what follows",
      a_ru: "Когда предложение завершено, но связано со следующим",
      b: "جہاں کوئی ربط نہ ہو",
      b_en: "Where there is no connection",
      b_ru: "Где нет связи",
      c: "جہاں لفظ بدل جائے",
      c_en: "Where the word changes",
      c_ru: "Где слово меняется",
      d: "جہاں نون ساکن ہو",
      d_en: "Where there is Noon Saakin",
      d_ru: "Где есть Нун Сакин",
      correct: "a"
    },
    {
      question: "وقف قبیح کب ہوتا ہے؟",
      question_en: "When does Waqf Qabeeh occur?",
      question_ru: "Когда используется Вакф Кабиh (плохая остановка)?",
      a: "جہاں بات ادھوری رہ جائے",
      a_en: "Where the meaning remains incomplete",
      a_ru: "Когда смысл остаётся незаконченным",
      b: "جہاں سانس رک جائے",
      b_en: "Where the breath stops",
      b_ru: "Когда останавливается дыхание",
      c: "جہاں معنی واضح ہو",
      c_en: "Where the meaning is clear",
      c_ru: "Где смысл ясен",
      d: "جہاں مفہوم مکمل ہو",
      d_en: "Where the meaning completes",
      d_ru: "Где смысл завершён",
      correct: "a"
    },
    {
      question: "قرآن پڑھنے میں زیادہ بہتر وقف کون سا ہے؟",
      question_en: "Which type of Waqf is best during Qur’an recitation?",
      question_ru: "Какой вид Вакфа лучший при чтении Корана?",
      a: "وقف تام",
      a_en: "Waqf Taam (complete stop)",
      a_ru: "Вакф Таам (полная остановка)",
      b: "وقف حسن",
      b_en: "Waqf Hasan (good stop)",
      b_ru: "Вакф Хасан (хорошая остановка)",
      c: "وقف قبیح",
      c_en: "Waqf Qabeeh (bad stop)",
      c_ru: "Вакф Кабиh (плохая остановка)",
      d: "وقف کافی",
      d_en: "Waqf Kaafi (sufficient stop)",
      d_ru: "Вакф Каафи (достаточная остановка)",
      correct: "a"
    },
    {
      question: "وقف کے وقت سب سے اہم چیز کیا ہے؟",
      question_en: "What is the most important thing to observe during Waqf?",
      question_ru: "Что самое важное при выполнении Вакфа?",
      a: "تجوید کی ادائیگی",
      a_en: "Proper application of Tajweed",
      a_ru: "Правильное применение таджвида",
      b: "سانس روکنا",
      b_en: "Holding the breath",
      b_ru: "Задержка дыхания",
      c: "آواز اونچی کرنا",
      c_en: "Raising the voice",
      c_ru: "Повышение голоса",
      d: "حرف بدلنا",
      d_en: "Changing the letter",
      d_ru: "Изменение буквы",
      correct: "a"
    },
    {
      question: "وقف نہ کرنے سے کیا ہوتا ہے؟",
      question_en: "What happens if Waqf is not observed?",
      question_ru: "Что происходит, если не делать Вакф?",
      a: "معنی بدل سکتا ہے",
      a_en: "The meaning may change",
      a_ru: "Смысл может измениться",
      b: "آواز بہتر ہو جاتی ہے",
      b_en: "The voice improves",
      b_ru: "Голос улучшается",
      c: "قراءت لمبی ہو جاتی ہے",
      c_en: "The recitation becomes longer",
      c_ru: "Чтение становится длиннее",
      d: "تلاوت آسان ہو جاتی ہے",
      d_en: "The recitation becomes easier",
      d_ru: "Чтение становится легче",
      correct: "a"
    },
    {
      question: "وقف کے ساتھ قرآن پڑھنے میں کیا سہولت ہوتی ہے؟",
      question_en: "What is the benefit of reading the Qur’an with proper Waqf?",
      question_ru: "Какое преимущество правильного Вакфа при чтении Корана?",
      a: "مفہوم سمجھنا آسان ہوتا ہے",
      a_en: "It becomes easier to understand the meaning",
      a_ru: "Становится легче понять смысл",
      b: "تلاوت رک جاتی ہے",
      b_en: "Recitation stops",
      b_ru: "Чтение прекращается",
      c: "آیات کم ہو جاتی ہیں",
      c_en: "The verses decrease",
      c_ru: "Аяты сокращаются",
      d: "الفاظ بدل جاتے ہیں",
      d_en: "The words change",
      d_ru: "Слова меняются",
      correct: "a"
    }
  ]
},
  {
  id: 16,
  title: "باب 16: علاماتِ وقف",
  title_en: "Chapter 16: Pause Marks (Signs of Waqf)",
  title_ru: "Глава 16: Знаки остановки (Вакф)",
  questions: [
    {
      question: "قرآن میں 'م' کی علامت کا کیا مطلب ہے؟",
      question_en: "What does the symbol 'م' mean in the Qur’an?",
      question_ru: "Что означает знак 'م' в Коране?",
      a: "جائز وقف",
      a_en: "Permissible pause",
      a_ru: "Допустительная остановка",
      b: "ضروری وقف",
      b_en: "Mandatory pause",
      b_ru: "Обязательная остановка",
      c: "بہتر نہ رکنا",
      c_en: "Better not to pause",
      c_ru: "Лучше не останавливаться",
      d: "اختیاری وقف",
      d_en: "Optional pause",
      d_ru: "Произвольная остановка",
      correct: "b"
    },
    {
      question: "قرآن میں 'ط' کی علامت کا کیا مطلب ہے؟",
      question_en: "What does the symbol 'ط' mean in the Qur’an?",
      question_ru: "Что означает знак 'ط' в Коране?",
      a: "مطلق وقف",
      a_en: "Absolute stop",
      a_ru: "Полная остановка",
      b: "قبیح وقف",
      b_en: "Bad stop",
      b_ru: "Плохая остановка",
      c: "لازم وقف",
      c_en: "Necessary stop",
      c_ru: "Необходимая остановка",
      d: "حسن وقف",
      d_en: "Good stop",
      d_ru: "Хорошая остановка",
      correct: "a"
    },
    {
      question: "قرآن میں 'ج' کی علامت کا کیا مطلب ہے؟",
      question_en: "What does the symbol 'ج' mean in the Qur’an?",
      question_ru: "Что означает знак 'ج' в Коране?",
      a: "جائز وقف",
      a_en: "Permissible pause",
      a_ru: "Допустительная остановка",
      b: "لازم وقف",
      b_en: "Necessary pause",
      b_ru: "Обязательная остановка",
      c: "مطلق وقف",
      c_en: "Absolute pause",
      c_ru: "Полная остановка",
      d: "اختیاری وقف",
      d_en: "Optional pause",
      d_ru: "Произвольная остановка",
      correct: "a"
    },
    {
      question: "قرآن میں 'ز' کی علامت کا کیا مطلب ہے؟",
      question_en: "What does the symbol 'ز' mean in the Qur’an?",
      question_ru: "Что означает знак 'ز' в Коране?",
      a: "بہتر نہ رکنا",
      a_en: "Better not to stop",
      a_ru: "Лучше не останавливаться",
      b: "رکنا ضروری ہے",
      b_en: "Must stop",
      b_ru: "Необходимо остановиться",
      c: "رکنا جائز ہے",
      c_en: "Permissible to stop",
      c_ru: "Можно остановиться",
      d: "رکنا قبیح ہے",
      d_en: "Bad to stop",
      d_ru: "Плохая остановка",
      correct: "a"
    },
    {
      question: "قرآن میں 'صلی' کی علامت کا کیا مطلب ہے؟",
      question_en: "What does the symbol 'صلی' mean in the Qur’an?",
      question_ru: "Что означает знак 'صلی' в Коране?",
      a: "بہتر نہ رکنا",
      a_en: "Better not to stop",
      a_ru: "Лучше не останавливаться",
      b: "رکنا ضروری ہے",
      b_en: "Must stop",
      b_ru: "Необходимо остановиться",
      c: "رکنا واجب ہے",
      c_en: "Stopping is obligatory",
      c_ru: "Остановка обязательна",
      d: "رکنا قبیح ہے",
      d_en: "Stopping is disliked",
      d_ru: "Остановка нежелательна",
      correct: "a"
    },
    {
      question: "قرآن میں 'قف' کی علامت کس لیے ہے؟",
      question_en: "What does the symbol 'قف' indicate in the Qur’an?",
      question_ru: "Что означает знак 'قف' в Коране?",
      a: "رکنے کا اشارہ",
      a_en: "Indicates to stop",
      a_ru: "Указывает на остановку",
      b: "نہ رکنے کا اشارہ",
      b_en: "Indicates not to stop",
      b_ru: "Указывает не останавливаться",
      c: "تکرار کا اشارہ",
      c_en: "Indicates repetition",
      c_ru: "Указывает на повторение",
      d: "وصل کا اشارہ",
      d_en: "Indicates continuation",
      d_ru: "Указывает на продолжение",
      correct: "a"
    },
    {
      question: "'قلی' کی علامت کا کیا مطلب ہے؟",
      question_en: "What does the symbol 'قلی' mean in the Qur’an?",
      question_ru: "Что означает знак 'قلی' в Коране?",
      a: "رکنا بہتر ہے",
      a_en: "Better to stop",
      a_ru: "Лучше остановиться",
      b: "نہ رکنا بہتر ہے",
      b_en: "Better not to stop",
      b_ru: "Лучше не останавливаться",
      c: "رکنا ضروری ہے",
      c_en: "Necessary to stop",
      c_ru: "Необходимо остановиться",
      d: "رکنا قبیح ہے",
      d_en: "Bad to stop",
      d_ru: "Плохая остановка",
      correct: "a"
    },
    {
      question: "'س' کی علامت کیا ظاہر کرتی ہے؟",
      question_en: "What does the symbol 'س' indicate in the Qur’an?",
      question_ru: "Что означает знак 'س' в Коране?",
      a: "سجدہ تلاوت",
      a_en: "Sajdah Tilawat (prostration verse)",
      a_ru: "Саджда Тилява (аят земного поклона)",
      b: "ساکن حرف",
      b_en: "Silent letter",
      b_ru: "Беззвучная буква",
      c: "سکون",
      c_en: "Sukoon mark",
      c_ru: "Знак сукуна",
      d: "وقف لازم",
      d_en: "Compulsory pause",
      d_ru: "Обязательная остановка",
      correct: "a"
    },
    {
      question: "'ک' کی علامت کا کیا مطلب ہے؟",
      question_en: "What does the symbol 'ک' mean in the Qur’an?",
      question_ru: "Что означает знак 'ک' в Коране?",
      a: "جیسے پہلے وقف کیا ویسے ہی کرنا",
      a_en: "Stop the same way as before",
      a_ru: "Останавливаться так же, как раньше",
      b: "رکنا لازمی",
      b_en: "Mandatory to stop",
      b_ru: "Обязательно остановиться",
      c: "رکنا مکروہ",
      c_en: "Stopping is disliked",
      c_ru: "Остановка нежелательна",
      d: "رکنا جائز نہیں",
      d_en: "Not allowed to stop",
      d_ru: "Остановка запрещена",
      correct: "a"
    },
    {
      question: "علاماتِ وقف کی معرفت کا فائدہ کیا ہے؟",
      question_en: "What is the benefit of understanding the pause marks (signs of waqf)?",
      question_ru: "Какова польза от знания знаков остановки (Вакф)?",
      a: "قرآن کو درست طور پر سمجھنا",
      a_en: "To understand the Qur’an correctly",
      a_ru: "Правильное понимание Корана",
      b: "تلاوت میں جلدی کرنا",
      b_en: "To recite faster",
      b_ru: "Читать быстрее",
      c: "آیات بدلنا",
      c_en: "To change the verses",
      c_ru: "Менять аяты",
      d: "رک رک کر پڑھنا مشکل بنانا",
      d_en: "To make pausing difficult",
      d_ru: "Делать остановки трудными",
      correct: "a"
    }
  ]
},
  {
  id: 17,
  title: "باب 17: لحن (تلاوت میں غلطیاں)",
  title_en: "Chapter 17: Lahn (Mistakes in Recitation)",
  title_ru: "Глава 17: Лахн (ошибки в чтении)",
  questions: [
    {
      question: "لحن کا لغوی معنی کیا ہے؟",
      question_en: "What is the literal meaning of Lahn?",
      question_ru: "Что означает слово «Лахн» буквально?",
      a: "غلطی کرنا",
      a_en: "To make a mistake",
      a_ru: "Совершить ошибку",
      b: "درست پڑھنا",
      b_en: "To read correctly",
      b_ru: "Читать правильно",
      c: "کھینچنا",
      c_en: "To stretch",
      c_ru: "Растягивать",
      d: "سمجھنا",
      d_en: "To understand",
      d_ru: "Понимать",
      correct: "a"
    },
    {
      question: "لحن کی کتنی اقسام ہیں؟",
      question_en: "How many types of Lahn are there?",
      question_ru: "Сколько существует видов Лахна?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "3",
      b_en: "3",
      b_ru: "3",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "5",
      d_en: "5",
      d_ru: "5",
      correct: "a"
    },
    {
      question: "لحن جلی کس کو کہتے ہیں؟",
      question_en: "What is Lahn Jali?",
      question_ru: "Что такое Лахн Джали?",
      a: "واضح اور ظاہر غلطی",
      a_en: "A clear and apparent mistake",
      a_ru: "Явная и очевидная ошибка",
      b: "پوشیدہ غلطی",
      b_en: "A hidden mistake",
      b_ru: "Скрытая ошибка",
      c: "کمزور آواز",
      c_en: "Weak voice",
      c_ru: "Слабый голос",
      d: "غنہ زیادہ کرنا",
      d_en: "Excessive nasal sound",
      d_ru: "Чрезмерный назальный звук",
      correct: "a"
    },
    {
      question: "لحن خفی کس کو کہتے ہیں؟",
      question_en: "What is Lahn Khafi?",
      question_ru: "Что такое Лахн Хафи?",
      a: "پوشیدہ غلطی",
      a_en: "A hidden mistake",
      a_ru: "Скрытая ошибка",
      b: "ظاہر غلطی",
      b_en: "Apparent mistake",
      b_ru: "Очевидная ошибка",
      c: "رک رک کر پڑھنا",
      c_en: "Reading with pauses",
      c_ru: "Чтение с паузами",
      d: "آواز اونچی کرنا",
      d_en: "Raising the voice",
      d_ru: "Повышение голоса",
      correct: "a"
    },
    {
      question: "لحن جلی کا حکم کیا ہے؟",
      question_en: "What is the ruling on Lahn Jali?",
      question_ru: "Каков закон относительно Лахн Джали?",
      a: "گناہِ کبیرہ",
      a_en: "A major sin",
      a_ru: "Тяжкий грех",
      b: "مکروہ",
      b_en: "Disliked",
      b_ru: "Нежелательный",
      c: "مباح",
      c_en: "Permissible",
      c_ru: "Допустимый",
      d: "مستحب",
      d_en: "Recommended",
      d_ru: "Желательный",
      correct: "a"
    },
    {
      question: "لحن خفی کا حکم کیا ہے؟",
      question_en: "What is the ruling on Lahn Khafi?",
      question_ru: "Каков закон относительно Лахн Хафи?",
      a: "مکروہ",
      a_en: "Disliked (Makruh)",
      a_ru: "Нежелательный (Макрух)",
      b: "حرام",
      b_en: "Forbidden (Haram)",
      b_ru: "Запрещённый (Харам)",
      c: "مباح",
      c_en: "Permissible (Mubah)",
      c_ru: "Допустимый (Мубах)",
      d: "فرض",
      d_en: "Obligatory (Fard)",
      d_ru: "Обязательный (Фард)",
      correct: "a"
    },
    {
      question: "اگر لحن جلی ہو جائے تو کیا ہوتا ہے؟",
      question_en: "What happens if Lahn Jali occurs?",
      question_ru: "Что происходит, если совершается Лахн Джали?",
      a: "معنی بدل جاتا ہے",
      a_en: "The meaning changes",
      a_ru: "Меняется смысл",
      b: "آواز بہتر ہو جاتی ہے",
      b_en: "The voice improves",
      b_ru: "Голос становится лучше",
      c: "تجوید بڑھ جاتی ہے",
      c_en: "Tajweed increases",
      c_ru: "Таджвид усиливается",
      d: "کوئی اثر نہیں ہوتا",
      d_en: "No effect",
      d_ru: "Без эффекта",
      correct: "a"
    },
    {
      question: "لحن خفی کی مثال کیا ہے؟",
      question_en: "What is an example of Lahn Khafi?",
      question_ru: "Каков пример Лахн Хафи?",
      a: "غنہ کم یا زیادہ کرنا",
      a_en: "Making ghunnah too short or too long",
      a_ru: "Слишком короткое или длинное произнесение гунны",
      b: "آواز اونچی کرنا",
      b_en: "Raising the voice",
      b_ru: "Повышение голоса",
      c: "آیت کو چھوڑ دینا",
      c_en: "Skipping a verse",
      c_ru: "Пропустить аят",
      d: "رکنے کی جگہ بدل دینا",
      d_en: "Changing the stopping place",
      d_ru: "Изменить место остановки",
      correct: "a"
    },
    {
      question: "قاری کو لحن سے بچنے کے لیے کیا کرنا چاہیے؟",
      question_en: "What should a reciter do to avoid Lahn (mistakes)?",
      question_ru: "Что должен делать чтец, чтобы избежать ошибок (Лахн)?",
      a: "تجوید کے قواعد سیکھنے چاہییں",
      a_en: "Learn the rules of Tajweed",
      a_ru: "Изучать правила таджвида",
      b: "جلدی پڑھنا",
      b_en: "Read quickly",
      b_ru: "Читать быстро",
      c: "آواز بدلنا",
      c_en: "Change the voice tone",
      c_ru: "Менять тон голоса",
      d: "آیات چھوٹی پڑھنا",
      d_en: "Read short verses",
      d_ru: "Читать короткие аяты",
      correct: "a"
    },
    {
      question: "لحن سے بچنے کا سب سے بڑا فائدہ کیا ہے؟",
      question_en: "What is the greatest benefit of avoiding Lahn?",
      question_ru: "Какова главная польза избегания ошибок (Лахн)?",
      a: "قرآن صحیح تلفظ کے ساتھ پڑھا جاتا ہے",
      a_en: "The Qur’an is recited with correct pronunciation",
      a_ru: "Коран читается с правильным произношением",
      b: "قراءت لمبی ہو جاتی ہے",
      b_en: "The recitation becomes longer",
      b_ru: "Чтение становится длиннее",
      c: "تلاوت رک جاتی ہے",
      c_en: "Recitation stops",
      c_ru: "Чтение прекращается",
      d: "معنی بدل جاتا ہے",
      d_en: "The meaning changes",
      d_ru: "Меняется смысл",
      correct: "a"
    }
  ]
},
  {
  id: 18,
  title: "باب 18: دہرانے کی اہمیت",
  title_en: "Chapter 18: Importance of Repetition",
  title_ru: "Глава 18: Важность повторения",
  questions: [
    {
      question: "دہرانے کا مقصد کیا ہے؟",
      question_en: "What is the purpose of repetition?",
      question_ru: "Какова цель повторения?",
      a: "سبق مضبوط کرنا",
      a_en: "To strengthen the lesson",
      a_ru: "Чтобы укрепить выученное",
      b: "نیا سبق یاد کرنا",
      b_en: "To memorize a new lesson",
      b_ru: "Чтобы выучить новый урок",
      c: "آواز اونچی کرنا",
      c_en: "To raise the voice",
      c_ru: "Чтобы повысить голос",
      d: "نیا مخرج سیکھنا",
      d_en: "To learn a new articulation point",
      d_ru: "Чтобы изучить новое место произношения",
      correct: "a"
    },
    {
      question: "قرآن کی تعلیم میں دہرانے کی اہمیت کیا ہے؟",
      question_en: "What is the importance of repetition in learning the Qur’an?",
      question_ru: "Каково значение повторения при изучении Корана?",
      a: "سبق پختہ ہوتا ہے",
      a_en: "It strengthens the lesson",
      a_ru: "Это укрепляет урок",
      b: "وقت ضائع ہوتا ہے",
      b_en: "It wastes time",
      b_ru: "Это тратит время впустую",
      c: "نئی آیت بھول جاتی ہے",
      c_en: "The new verse is forgotten",
      c_ru: "Новый аят забывается",
      d: "غلطی بڑھتی ہے",
      d_en: "Mistakes increase",
      d_ru: "Ошибок становится больше",
      correct: "a"
    },
    {
      question: "دہرانے سے طالبِ علم کو کیا فائدہ ہوتا ہے؟",
      question_en: "What benefit does a student gain from repetition?",
      question_ru: "Какую пользу получает ученик от повторения?",
      a: "یادداشت مضبوط ہوتی ہے",
      a_en: "Memory becomes stronger",
      a_ru: "Память становится крепче",
      b: "سبق کمزور ہو جاتا ہے",
      b_en: "The lesson becomes weak",
      b_ru: "Урок становится слабее",
      c: "تلفظ خراب ہوتا ہے",
      c_en: "Pronunciation worsens",
      c_ru: "Произношение ухудшается",
      d: "قرآن بھول جاتا ہے",
      d_en: "The Qur’an is forgotten",
      d_ru: "Коран забывается",
      correct: "a"
    },
    {
      question: "دہرانے کے بغیر علم کا کیا نقصان ہے؟",
      question_en: "What is the harm of not revising or repeating knowledge?",
      question_ru: "Каков вред от отсутствия повторения знаний?",
      a: "بھول جاتا ہے",
      a_en: "It is forgotten",
      a_ru: "Забывается",
      b: "آسان ہو جاتا ہے",
      b_en: "It becomes easier",
      b_ru: "Становится легче",
      c: "تلفظ بہتر ہو جاتا ہے",
      c_en: "Pronunciation improves",
      c_ru: "Произношение улучшается",
      d: "معنی واضح ہوتے ہیں",
      d_en: "The meanings become clearer",
      d_ru: "Смысл становится яснее",
      correct: "a"
    },
    {
      question: "قرآن دہرانے کا سب سے اچھا وقت کون سا ہے؟",
      question_en: "What is the best time to revise the Qur’an?",
      question_ru: "Какое лучшее время для повторения Корана?",
      a: "فجر کے بعد",
      a_en: "After Fajr (dawn prayer)",
      a_ru: "После Фаджра (утренней молитвы)",
      b: "ظہر کے بعد",
      b_en: "After Dhuhr",
      b_ru: "После Зухра",
      c: "مغرب کے بعد",
      c_en: "After Maghrib",
      c_ru: "После Магриба",
      d: "رات کے آخر میں",
      d_en: "At the end of the night",
      d_ru: "В конце ночи",
      correct: "a"
    },
    {
      question: "دہرانے کے دوران سب سے زیادہ کس چیز کا خیال رکھنا چاہیے؟",
      question_en: "What must be observed most carefully during repetition?",
      question_ru: "На что следует особенно обращать внимание при повторении?",
      a: "صحیح تجوید",
      a_en: "Proper Tajweed",
      a_ru: "Правильное чтение (таджвид)",
      b: "تیز پڑھنا",
      b_en: "Reading fast",
      b_ru: "Читать быстро",
      c: "آیت بدلنا",
      c_en: "Changing the verse",
      c_ru: "Менять аят",
      d: "آواز اونچی کرنا",
      d_en: "Raising the voice",
      d_ru: "Повышать голос",
      correct: "a"
    },
    {
      question: "دہرانے کی سب سے بڑی عادت کس کو فائدہ دیتی ہے؟",
      question_en: "Who benefits most from the habit of repetition?",
      question_ru: "Кому больше всего приносит пользу привычка повторять?",
      a: "قاری کو",
      a_en: "The reciter",
      a_ru: "Чтецу (Кари)",
      b: "سامع کو",
      b_en: "The listener",
      b_ru: "Слушателю",
      c: "امام کو",
      c_en: "The imam",
      c_ru: "Имаму",
      d: "مقتدی کو",
      d_en: "The follower",
      d_ru: "Мааму",
      correct: "a"
    },
    {
      question: "دہرانے کے بغیر سبق کیا ہو جاتا ہے؟",
      question_en: "What happens to a lesson without repetition?",
      question_ru: "Что происходит с уроком без повторения?",
      a: "بھول جاتا ہے",
      a_en: "It is forgotten",
      a_ru: "Он забывается",
      b: "پختہ ہو جاتا ہے",
      b_en: "It becomes strong",
      b_ru: "Он укрепляется",
      c: "آسان ہو جاتا ہے",
      c_en: "It becomes easier",
      c_ru: "Он становится проще",
      d: "تیز پڑھا جاتا ہے",
      d_en: "It is read faster",
      d_ru: "Он читается быстрее",
      correct: "a"
    },
    {
      question: "دہرانا قرآن کے ساتھ کس عبادت کے برابر ہے؟",
      question_en: "Repetition of the Qur’an is equal to which act of worship?",
      question_ru: "Повторение Корана приравнивается к какому поклонению?",
      a: "ذکر",
      a_en: "Dhikr (Remembrance of Allah)",
      a_ru: "Зикр (поминание Аллаха)",
      b: "دعا",
      b_en: "Supplication (Dua)",
      b_ru: "Мольба (Дуа)",
      c: "روزہ",
      c_en: "Fasting",
      c_ru: "Пост",
      d: "حج",
      d_en: "Hajj (Pilgrimage)",
      d_ru: "Хадж",
      correct: "a"
    },
    {
      question: "دہرانے کی عادت قاری کے اندر کون سی صفت پیدا کرتی ہے؟",
      question_en: "What quality does repetition develop in a reciter?",
      question_ru: "Какое качество развивает повторение у чтеца?",
      a: "استقامت",
      a_en: "Consistency",
      a_ru: "Постоянство",
      b: "سستی",
      b_en: "Laziness",
      b_ru: "Лень",
      c: "غفلت",
      c_en: "Negligence",
      c_ru: "Беспечность",
      d: "کمزوری",
      d_en: "Weakness",
      d_ru: "Слабость",
      correct: "a"
    }
  ]
},
  {
  id: 19,
  title: "باب 19: اقامت اور ادغام",
  title_en: "Chapter 19: Correct Pronunciation and Idghaam",
  title_ru: "Глава 19: Правильное произношение и Идгам",
  questions: [
    {
      question: "اقامت کا مطلب کیا ہے؟",
      question_en: "What does 'Iqāmat' mean?",
      question_ru: "Что означает «Икамат»?",
      a: "درست ادا کرنا",
      a_en: "To pronounce correctly",
      a_ru: "Правильно произносить",
      b: "آواز اونچی کرنا",
      b_en: "To raise the voice",
      b_ru: "Повышать голос",
      c: "جلدی پڑھنا",
      c_en: "To read quickly",
      c_ru: "Читать быстро",
      d: "مد کو لمبا کرنا",
      d_en: "To elongate the Madd",
      d_ru: "Удлинять мадд",
      correct: "a"
    },
    {
      question: "ادغام کا لغوی معنی کیا ہے؟",
      question_en: "What is the literal meaning of Idghaam?",
      question_ru: "Что буквально означает «Идгам»?",
      a: "داخل کرنا",
      a_en: "To insert or merge",
      a_ru: "Вставлять или сливать",
      b: "نکالنا",
      b_en: "To remove",
      b_ru: "Удалять",
      c: "کھینچنا",
      c_en: "To stretch",
      c_ru: "Растягивать",
      d: "روکنا",
      d_en: "To stop",
      d_ru: "Останавливаться",
      correct: "a"
    },
    {
      question: "تجوید میں ادغام کس کو کہتے ہیں؟",
      question_en: "What is Idghaam in Tajweed?",
      question_ru: "Что такое Идгам в таджвиде?",
      a: "ایک حرف کو دوسرے میں داخل کرنا",
      a_en: "To merge one letter into another",
      a_ru: "Слияние одной буквы с другой",
      b: "حرف کو الگ الگ پڑھنا",
      b_en: "To pronounce letters separately",
      b_ru: "Произносить буквы отдельно",
      c: "آواز روکنا",
      c_en: "To stop the sound",
      c_ru: "Останавливать звук",
      d: "حرکت بدلنا",
      d_en: "To change the vowel sign",
      d_ru: "Менять харакат (гласную)",
      correct: "a"
    },
    {
      question: "ادغام کی کتنی قسمیں ہیں؟",
      question_en: "How many types of Idghaam are there?",
      question_ru: "Сколько существует видов Идгама?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "3",
      b_en: "3",
      b_ru: "3",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "5",
      d_en: "5",
      d_ru: "5",
      correct: "a"
    },
    {
      question: "ادغام بغنہ کن حروف کے ساتھ ہوتا ہے؟",
      question_en: "With which letters does Idghaam with Ghunnah occur?",
      question_ru: "С какими буквами происходит Идгам с гунной (с носовым звуком)?",
      a: "ی، ن، م، و",
      a_en: "Ya, Noon, Meem, Waw",
      a_ru: "Йа, Нун, Мим, Уау",
      b: "ل، ر",
      b_en: "Lam, Ra",
      b_ru: "Лам, Ра",
      c: "ب، ت",
      c_en: "Ba, Ta",
      c_ru: "Ба, Та",
      d: "ق، ک",
      d_en: "Qaf, Kaf",
      d_ru: "Каф, Кяф",
      correct: "a"
    },
    {
      question: "ادغام بغیر غنہ کن دو حروف کے ساتھ ہوتا ہے؟",
      question_en: "With which two letters does Idghaam without Ghunnah occur?",
      question_ru: "С какими двумя буквами происходит Идгам без гунны?",
      a: "ل، ر",
      a_en: "Lam, Ra",
      a_ru: "Лам, Ра",
      b: "ن، م",
      b_en: "Noon, Meem",
      b_ru: "Нун, Мим",
      c: "و، ی",
      c_en: "Waw, Ya",
      c_ru: "Уау, Йа",
      d: "ق، ک",
      d_en: "Qaf, Kaf",
      d_ru: "Каф, Кяф",
      correct: "a"
    },
    {
      question: "'من یقول' میں کون سا حکم ہوگا؟",
      question_en: "What rule applies in 'من یقول'?",
      question_ru: "Какое правило применяется в «мин якуль»?",
      a: "ادغام بغنہ",
      a_en: "Idghaam with Ghunnah",
      a_ru: "Идгам с гунной",
      b: "اخفاء",
      b_en: "Ikhfaa (concealment)",
      b_ru: "Ихфа (скрытие)",
      c: "اظہار",
      c_en: "Izhaar (clarity)",
      c_ru: "Изхар (ясность)",
      d: "اقلاب",
      d_en: "Iqlab (conversion)",
      d_ru: "Икляб (преобразование)",
      correct: "a"
    },
    {
      question: "'من ربھم' میں کون سا حکم ہوگا؟",
      question_en: "What rule applies in 'من ربھم'?",
      question_ru: "Какое правило применяется в «мин раббихим»?",
      a: "ادغام بغیر غنہ",
      a_en: "Idghaam without Ghunnah",
      a_ru: "Идгам без гунны",
      b: "ادغام بغنہ",
      b_en: "Idghaam with Ghunnah",
      b_ru: "Идгам с гунной",
      c: "اخفاء",
      c_en: "Ikhfaa",
      c_ru: "Ихфа",
      d: "اظہار",
      d_en: "Izhaar",
      d_ru: "Изхар",
      correct: "a"
    },
    {
      question: "ادغام کے بغیر تلاوت کرنے سے کیا نقصان ہوتا ہے؟",
      question_en: "What is the drawback of reciting without applying Idghaam?",
      question_ru: "В чем вред чтения без применения Идгама?",
      a: "معنی بدل سکتا ہے",
      a_en: "The meaning may change",
      a_ru: "Смысл может измениться",
      b: "آواز اونچی ہو جاتی ہے",
      b_en: "The voice becomes louder",
      b_ru: "Голос становится громче",
      c: "آیت مختصر ہو جاتی ہے",
      c_en: "The verse becomes shorter",
      c_ru: "Аят становится короче",
      d: "تجوید ختم ہو جاتی ہے",
      d_en: "Tajweed is lost",
      d_ru: "Таджвид теряется",
      correct: "a"
    },
    {
      question: "ادغام کی اصل حکمت کیا ہے؟",
      question_en: "What is the wisdom behind Idghaam?",
      question_ru: "Какова мудрость Идгама?",
      a: "تلاوت کو آسان بنانا",
      a_en: "To make recitation easier",
      a_ru: "Чтобы облегчить чтение",
      b: "آواز اونچی کرنا",
      b_en: "To make the voice louder",
      b_ru: "Чтобы повысить голос",
      c: "حرکات ختم کرنا",
      c_en: "To remove vowel sounds",
      c_ru: "Чтобы убрать гласные",
      d: "مخرج بدلنا",
      d_en: "To change articulation points",
      d_ru: "Чтобы изменить место произношения",
      correct: "a"
    }
  ]
},
  {
  id: 20,
  title: "باب 20: تنوین (حصہ 1)",
  title_en: "Chapter 20: Tanween (Part 1)",
  title_ru: "Глава 20: Танвин (Часть 1)",
  questions: [
    {
      question: "تنوین کیا ہے؟",
      question_en: "What is Tanween?",
      question_ru: "Что такое Танвин?",
      a: "دو زیر، دو زبر، دو پیش",
      a_en: "Two kasra, two fatha, or two damma",
      a_ru: "Две касры, две фатхи или две даммы",
      b: "دو سکون",
      b_en: "Two sukoons",
      b_ru: "Два сукуна",
      c: "دو تشدید",
      c_en: "Two shaddas",
      c_ru: "Две ташдиды",
      d: "دو جزم",
      d_en: "Two jazm signs",
      d_ru: "Два джазма",
      correct: "a"
    },
    {
      question: "تنوین کس چیز پر آتی ہے؟",
      question_en: "On which type of word does Tanween appear?",
      question_ru: "На каком типе слов ставится Танвин?",
      a: "اسم پر",
      a_en: "On nouns",
      a_ru: "На существительных",
      b: "فعل پر",
      b_en: "On verbs",
      b_ru: "На глаголах",
      c: "حرف پر",
      c_en: "On particles",
      c_ru: "На служебных словах",
      d: "ضمیر پر",
      d_en: "On pronouns",
      d_ru: "На местоимениях",
      correct: "a"
    },
    {
      question: "تنوین کی ادائیگی کس طرح ہوتی ہے؟",
      question_en: "How is Tanween pronounced?",
      question_ru: "Как произносится Танвин?",
      a: "نون کی آواز کے ساتھ",
      a_en: "With the sound of Noon (ن)",
      a_ru: "С произношением звука «Нун»",
      b: "میم کی آواز کے ساتھ",
      b_en: "With the sound of Meem (م)",
      b_ru: "С произношением звука «Мим»",
      c: "لام کی آواز کے ساتھ",
      c_en: "With the sound of Lam (ل)",
      c_ru: "С произношением звука «Лам»",
      d: "غنہ کے بغیر",
      d_en: "Without nasal sound",
      d_ru: "Без назального звука",
      correct: "a"
    },
    {
      question: "تنوین کا ظاہری نقش کیا ہے؟",
      question_en: "What is the visible form of Tanween?",
      question_ru: "Как выглядит Танвин визуально?",
      a: "دو حرکات",
      a_en: "Two vowel marks (diacritics)",
      a_ru: "Два огласовочных знака",
      b: "ایک سکون",
      b_en: "One sukoon",
      b_ru: "Один сукун",
      c: "ایک تشدید",
      c_en: "One shaddah",
      c_ru: "Один ташдид",
      d: "دو جزم",
      d_en: "Two jazm signs",
      d_ru: "Два джазма",
      correct: "a"
    },
    {
      question: "تنوین زیادہ تر کہاں آتی ہے؟",
      question_en: "Where does Tanween mostly occur?",
      question_ru: "Где чаще всего встречается Танвин?",
      a: "اسم نکرہ پر",
      a_en: "On indefinite nouns",
      a_ru: "На неопределённых существительных",
      b: "اسم معرفہ پر",
      b_en: "On definite nouns",
      b_ru: "На определённых существительных",
      c: "فعل ماضی پر",
      c_en: "On past tense verbs",
      c_ru: "На глаголах прошедшего времени",
      d: "حرف جر پر",
      d_en: "On prepositions",
      d_ru: "На предлогах",
      correct: "a"
    },
    {
      question: "تنوین کا تلفظ کس کی طرح ہوتا ہے؟",
      question_en: "Tanween is pronounced like which letter?",
      question_ru: "Танвин произносится как какая буква?",
      a: "نون ساکن",
      a_en: "Like Noon Saakin",
      a_ru: "Как Нун Саккин",
      b: "میم ساکن",
      b_en: "Like Meem Saakin",
      b_ru: "Как Мим Саккин",
      c: "لام ساکن",
      c_en: "Like Lam Saakin",
      c_ru: "Как Лам Саккин",
      d: "واو ساکن",
      d_en: "Like Waw Saakin",
      d_ru: "Как Уау Саккин",
      correct: "a"
    },
    {
      question: "تنوین کے کتنے احکام ہیں؟",
      question_en: "How many rules apply to Tanween?",
      question_ru: "Сколько правил относится к Танвину?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "4",
      b_en: "4",
      b_ru: "4",
      c: "5",
      c_en: "5",
      c_ru: "5",
      d: "6",
      d_en: "6",
      d_ru: "6",
      correct: "b"
    },
    {
      question: "'کتابٌ' میں کون سی تنوین ہے؟",
      question_en: "Which Tanween appears in 'كِتَابٌ'?",
      question_ru: "Какой вид Танвина используется в «Китабун»?",
      a: "دو پیش",
      a_en: "Two Dammah (ٌ)",
      a_ru: "Две даммы (ٌ)",
      b: "دو زیر",
      b_en: "Two Kasra (ٍ)",
      b_ru: "Две касры (ٍ)",
      c: "دو زبر",
      c_en: "Two Fatha (ً)",
      c_ru: "Две фатхи (ً)",
      d: "سکون",
      d_en: "Sukoon (ْ)",
      d_ru: "Сукун (ْ)",
      correct: "a"
    },
    {
      question: "'علیماً' میں کون سی تنوین ہے؟",
      question_en: "Which Tanween appears in 'عَلِيمًا'?",
      question_ru: "Какой вид Танвина используется в «Алимaн»?",
      a: "دو زبر",
      a_en: "Two Fatha (ً)",
      a_ru: "Две фатхи (ً)",
      b: "دو زیر",
      b_en: "Two Kasra (ٍ)",
      b_ru: "Две касры (ٍ)",
      c: "دو پیش",
      c_en: "Two Dammah (ٌ)",
      c_ru: "Две даммы (ٌ)",
      d: "تشدید",
      d_en: "Shaddah (ّ)",
      d_ru: "Ташдид (ّ)",
      correct: "a"
    },
    {
      question: "'رحیمٍ' میں کون سی تنوین ہے؟",
      question_en: "Which Tanween appears in 'رَحِيمٍ'?",
      question_ru: "Какой вид Танвина используется в «Рахимин»?",
      a: "دو زیر",
      a_en: "Two Kasra (ٍ)",
      a_ru: "Две касры (ٍ)",
      b: "دو پیش",
      b_en: "Two Dammah (ٌ)",
      b_ru: "Две даммы (ٌ)",
      c: "دو زبر",
      c_en: "Two Fatha (ً)",
      c_ru: "Две фатхи (ً)",
      d: "سکون",
      d_en: "Sukoon (ْ)",
      d_ru: "Сукун (ْ)",
      correct: "a"
    }
  ]
},
  {
  id: 21,
  title: "باب 21: تنوین (حصہ 2)",
  title_en: "Chapter 21: Tanween (Part 2)",
  title_ru: "Глава 21: Танвин (Часть 2)",
  questions: [
    {
      question: "تنوین کے بعد اگر حلقی حروف آئیں تو کیا حکم ہوگا؟",
      question_en: "If a throat letter (Halqi letter) comes after Tanween, what rule applies?",
      question_ru: "Если после Танвина идёт горловая буква (Халкы), какое правило применяется?",
      a: "اظہار",
      a_en: "Izhaar (clarity)",
      a_ru: "Изхар (ясное произношение)",
      b: "اخفاء",
      b_en: "Ikhfaa (concealment)",
      b_ru: "Ихфа (скрытие)",
      c: "ادغام",
      c_en: "Idghaam (merging)",
      c_ru: "Идгам (слияние)",
      d: "اقلاب",
      d_en: "Iqlab (conversion)",
      d_ru: "Икляб (преобразование)",
      correct: "a"
    },
    {
      question: "تنوین کے بعد اگر ی، ن، م، و آئیں تو کیا حکم ہوگا؟",
      question_en: "If Ya, Noon, Meem, or Waw comes after Tanween, what rule applies?",
      question_ru: "Если после Танвина идут буквы Йа, Нун, Мим или Уау, какое правило применяется?",
      a: "ادغام بغنہ",
      a_en: "Idghaam with Ghunnah",
      a_ru: "Идгам с гунной (с носовым звуком)",
      b: "ادغام بغیر غنہ",
      b_en: "Idghaam without Ghunnah",
      b_ru: "Идгам без гунны",
      c: "اخفاء",
      c_en: "Ikhfaa (concealment)",
      c_ru: "Ихфа (скрытие)",
      d: "اظہار",
      d_en: "Izhaar (clarity)",
      d_ru: "Изхар (ясность)",
      correct: "a"
    },
    {
      question: "تنوین کے بعد اگر ل یا ر آئے تو کیا ہوگا؟",
      question_en: "If Lam or Ra comes after Tanween, what rule applies?",
      question_ru: "Если после Танвина идёт Лам или Ра, какое правило применяется?",
      a: "ادغام بغیر غنہ",
      a_en: "Idghaam without Ghunnah",
      a_ru: "Идгам без гунны",
      b: "ادغام بغنہ",
      b_en: "Idghaam with Ghunnah",
      b_ru: "Идгам с гунной",
      c: "اخفاء",
      c_en: "Ikhfaa (concealment)",
      c_ru: "Ихфа (скрытие)",
      d: "اظہار",
      d_en: "Izhaar (clarity)",
      d_ru: "Изхар (ясность)",
      correct: "a"
    },
    {
      question: "تنوین کے بعد اگر 'ب' آئے تو کیا ہوگا؟",
      question_en: "If the letter 'Ba' (ب) comes after Tanween, what rule applies?",
      question_ru: "Если после Танвина идёт буква Ба (ب), какое правило применяется?",
      a: "اقلاب",
      a_en: "Iqlab (conversion)",
      a_ru: "Икляб (преобразование)",
      b: "اظہار",
      b_en: "Izhaar (clarity)",
      b_ru: "Изхар (ясность)",
      c: "ادغام",
      c_en: "Idghaam (merging)",
      c_ru: "Идгам (слияние)",
      d: "اخفاء",
      d_en: "Ikhfaa (concealment)",
      d_ru: "Ихфа (скрытие)",
      correct: "a"
    },
    {
      question: "تنوین کے بعد اگر باقی پندرہ حروف آئیں تو کیا ہوگا؟",
      question_en: "If any of the remaining fifteen letters follow Tanween, what rule applies?",
      question_ru: "Если после Танвина идут остальные пятнадцать букв, какое правило применяется?",
      a: "اخفاء",
      a_en: "Ikhfaa (concealment)",
      a_ru: "Ихфа (скрытие)",
      b: "اظہار",
      b_en: "Izhaar (clarity)",
      b_ru: "Изхар (ясность)",
      c: "ادغام بغیر غنہ",
      c_en: "Idghaam without Ghunnah",
      c_ru: "Идгам без гунны",
      d: "ادغام بغنہ",
      d_en: "Idghaam with Ghunnah",
      d_ru: "Идгам с гунной",
      correct: "a"
    },
    {
      question: "اخفاء میں کتنے حروف شامل ہیں؟",
      question_en: "How many letters are included in Ikhfaa?",
      question_ru: "Сколько букв входят в правило Ихфа?",
      a: "10",
      a_en: "10",
      a_ru: "10",
      b: "15",
      b_en: "15",
      b_ru: "15",
      c: "20",
      c_en: "20",
      c_ru: "20",
      d: "25",
      d_en: "25",
      d_ru: "25",
      correct: "b"
    },
    {
      question: "ادغام بغیر غنہ کتنے حروف پر ہوتا ہے؟",
      question_en: "How many letters have Idghaam without Ghunnah?",
      question_ru: "Для скольких букв применяется Идгам без гунны?",
      a: "2",
      a_en: "2",
      a_ru: "2",
      b: "3",
      b_en: "3",
      b_ru: "3",
      c: "4",
      c_en: "4",
      c_ru: "4",
      d: "6",
      d_en: "6",
      d_ru: "6",
      correct: "a"
    },
    {
      question: "ادغام بغنہ کتنے حروف پر ہوتا ہے؟",
      question_en: "How many letters have Idghaam with Ghunnah?",
      question_ru: "Для скольких букв применяется Идгам с гунной?",
      a: "4",
      a_en: "4",
      a_ru: "4",
      b: "2",
      b_en: "2",
      b_ru: "2",
      c: "6",
      c_en: "6",
      c_ru: "6",
      d: "8",
      d_en: "8",
      d_ru: "8",
      correct: "a"
    },
    {
      question: "اظہار کتنے حروف پر ہوتا ہے؟",
      question_en: "How many letters apply to Izhaar?",
      question_ru: "Для скольких букв применяется правило Изхар?",
      a: "6",
      a_en: "6",
      a_ru: "6",
      b: "8",
      b_en: "8",
      b_ru: "8",
      c: "10",
      c_en: "10",
      c_ru: "10",
      d: "12",
      d_en: "12",
      d_ru: "12",
      correct: "a"
    },
    {
      question: "اقلاب صرف کس حرف کے ساتھ ہوتا ہے؟",
      question_en: "Iqlab occurs only with which letter?",
      question_ru: "Икляб применяется только с какой буквой?",
      a: "ب",
      a_en: "Ba (ب)",
      a_ru: "Ба (ب)",
      b: "م",
      b_en: "Meem (م)",
      b_ru: "Мим (م)",
      c: "ن",
      c_en: "Noon (ن)",
      c_ru: "Нун (ن)",
      d: "ی",
      d_en: "Ya (ی)",
      d_ru: "Йа (ی)",
      correct: "a"
    }
  ]
},
  {
  id: 22,
  title: "باب 22: معلوماتِ قرآن",
  title_en: "Chapter 22: Information about the Qur’an",
  title_ru: "Глава 22: Сведения о Коране",
  questions: [
    {
      question: "قرآنِ مجید کی کل سورتیں کتنی ہیں؟",
      question_en: "How many Surahs are there in the Holy Qur’an?",
      question_ru: "Сколько сур в Священном Коране?",
      a: "100",
      a_en: "100",
      a_ru: "100",
      b: "114",
      b_en: "114",
      b_ru: "114",
      c: "120",
      c_en: "120",
      c_ru: "120",
      d: "99",
      d_en: "99",
      d_ru: "99",
      correct: "b"
    },
    {
      question: "قرآن کی سب سے بڑی سورت کون سی ہے؟",
      question_en: "Which is the largest Surah in the Qur’an?",
      question_ru: "Какая сура самая длинная в Коране?",
      a: "سورۃ البقرہ",
      a_en: "Surah Al-Baqarah",
      a_ru: "Сура Аль-Бакара",
      b: "سورۃ آل عمران",
      b_en: "Surah Aal-e-Imran",
      b_ru: "Сура Аль Имран",
      c: "سورۃ النساء",
      c_en: "Surah An-Nisa",
      c_ru: "Сура Ан-Ниса",
      d: "سورۃ المائدہ",
      d_en: "Surah Al-Ma’idah",
      d_ru: "Сура Аль-Маида",
      correct: "a"
    },
    {
      question: "قرآن کی سب سے چھوٹی سورت کون سی ہے؟",
      question_en: "Which is the shortest Surah in the Qur’an?",
      question_ru: "Какая сура самая короткая в Коране?",
      a: "سورۃ الکوثر",
      a_en: "Surah Al-Kawthar",
      a_ru: "Сура Аль-Каусар",
      b: "سورۃ العصر",
      b_en: "Surah Al-Asr",
      b_ru: "Сура Аль-Аср",
      c: "سورۃ الفلق",
      c_en: "Surah Al-Falaq",
      c_ru: "Сура Аль-Фалак",
      d: "سورۃ الاخلاص",
      d_en: "Surah Al-Ikhlas",
      d_ru: "Сура Аль-Ихляс",
      correct: "a"
    },
    {
      question: "قرآن کے کل پارے کتنے ہیں؟",
      question_en: "How many parts (Juz) are there in the Qur’an?",
      question_ru: "Сколько частей (джузов) в Коране?",
      a: "20",
      a_en: "20",
      a_ru: "20",
      b: "30",
      b_en: "30",
      b_ru: "30",
      c: "60",
      c_en: "60",
      c_ru: "60",
      d: "10",
      d_en: "10",
      d_ru: "10",
      correct: "b"
    },
    {
      question: "قرآن کے کل رکوعات کتنے ہیں؟",
      question_en: "How many Rukoo (sections) are there in the Qur’an?",
      question_ru: "Сколько рукʹу (разделов) в Коране?",
      a: "400",
      a_en: "400",
      a_ru: "400",
      b: "540",
      b_en: "540",
      b_ru: "540",
      c: "600",
      c_en: "600",
      c_ru: "600",
      d: "700",
      d_en: "700",
      d_ru: "700",
      correct: "b"
    },
    {
      question: "قرآنِ مجید کی پہلی نازل ہونے والی آیت کون سی ہے؟",
      question_en: "Which was the first verse revealed in the Qur’an?",
      question_ru: "Каят был ниспослан первым в Коране?",
      a: "اِقْرَأْ بِاسْمِ رَبِّكَ",
      a_en: "Iqra' bismi rabbika (Read in the name of your Lord)",
      a_ru: "«Читай во имя Господа твоего» (Икра бисми раббика)",
      b: "اَلْحَمْدُ لِلّٰہِ",
      b_en: "Alhamdu lillahi",
      b_ru: "Альхамду лиллях",
      c: "قُلْ هُوَ اللّٰهُ أَحَدٌ",
      c_en: "Qul huwa Allahu Ahad",
      c_ru: "Скажи: Он — Аллах, Един",
      d: "الم",
      d_en: "Alif Laam Meem",
      d_ru: "Алиф Лам Мим",
      correct: "a"
    },
    {
      question: "قرآن کی سب سے آخری نازل ہونے والی آیت کون سی ہے؟",
      question_en: "Which was the last verse revealed in the Qur’an?",
      question_ru: "Каят был ниспослан последним в Коране?",
      a: "وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللّٰهِ",
      a_en: "Fear the Day when you will be returned to Allah",
      a_ru: "Бойтесь Дня, когда вы будете возвращены к Аллаху",
      b: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ",
      b_en: "This day I have perfected your religion for you",
      b_ru: "Сегодня Я завершил для вас вашу религию",
      c: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      c_en: "Say: I seek refuge with the Lord of mankind",
      c_ru: "Скажи: Прибегаю к Господу людей",
      d: "قُلْ هُوَ اللّٰهُ أَحَدٌ",
      d_en: "Say: He is Allah, One",
      d_ru: "Скажи: Он — Аллах, Един",
      correct: "a"
    },
    {
      question: "قرآنِ مجید کس زبان میں نازل ہوا؟",
      question_en: "In which language was the Qur’an revealed?",
      question_ru: "На каком языке был ниспослан Коран?",
      a: "عربی",
      a_en: "Arabic",
      a_ru: "Арабский",
      b: "فارسی",
      b_en: "Persian",
      b_ru: "Персидский",
      c: "عبرانی",
      c_en: "Hebrew",
      c_ru: "Иврит",
      d: "اردو",
      d_en: "Urdu",
      d_ru: "Урду",
      correct: "a"
    },
    {
      question: "قرآن کس پیغمبر پر نازل ہوا؟",
      question_en: "Upon which Prophet was the Qur’an revealed?",
      question_ru: "Какому пророку был ниспослан Коран?",
      a: "حضرت موسیٰ علیہ السلام",
      a_en: "Prophet Musa (Moses)",
      a_ru: "Пророку Мусе (Моисею)",
      b: "حضرت عیسیٰ علیہ السلام",
      b_en: "Prophet Isa (Jesus)",
      b_ru: "Пророку Исе (Иисусу)",
      c: "حضرت محمد ﷺ",
      c_en: "Prophet Muhammad (peace be upon him)",
      c_ru: "Пророку Мухаммаду (мир ему)",
      d: "حضرت ابراہیم علیہ السلام",
      d_en: "Prophet Ibrahim (Abraham)",
      d_ru: "Пророку Ибрахиму (Аврааму)",
      correct: "c"
    },
    {
      question: "قرآنِ مجید نازل ہونے میں کتنے سال لگے؟",
      question_en: "How many years did the revelation of the Qur’an take?",
      question_ru: "Сколько лет длилось ниспослание Корана?",
      a: "10",
      a_en: "10",
      a_ru: "10",
      b: "23",
      b_en: "23",
      b_ru: "23",
      c: "25",
      c_en: "25",
      c_ru: "25",
      d: "30",
      d_en: "30",
      d_ru: "30",
      correct: "b"
    }
  ]
},
];

/* ---------- SAFETY: de-dupe any accidental duplicate IDs ---------- */
(() => {
  const seen = new Set();
  for (let i = CHAPTERS.length - 1; i >= 0; i--) {
    const id = CHAPTERS[i].id;
    if (seen.has(id)) CHAPTERS.splice(i, 1);
    else seen.add(id);
  }
})();

/* =========================
   QUIZ SHELL (used to restore quiz after result screen)
========================= */
const QUIZ_SHELL_HTML = `
  <div class="timer-container">
    <button id="btnBackChapters" class="back-btn">Back to Chapters</button>
    <h2 id="timer">15</h2>
    <div id="qCounter" class="q-counter">Q 1 / 10</div>
  </div>

  <div class="question-area">
    <h1 id="question">Question Text Goes Here</h1>
  </div>

  <div class="answers-grid">
    <button class="answer-btn" id="a" onclick="selectAnswer('a')">
      <span class="shape">▲</span>
      <span class="text" id="a_text">Answer A</span>
    </button>
    <button class="answer-btn" id="b" onclick="selectAnswer('b')">
      <span class="shape">◆</span>
      <span class="text" id="b_text">Answer B</span>
    </button>
    <button class="answer-btn" id="c" onclick="selectAnswer('c')">
      <span class="shape">●</span>
      <span class="text" id="c_text">Answer C</span>
    </button>
    <button class="answer-btn" id="d" onclick="selectAnswer('d')">
      <span class="shape">■</span>
      <span class="text" id="d_text">Answer D</span>
    </button>
  </div>
`;

/* =========================
   DOM cache (initial)
========================= */
let questionEl = document.getElementById('question');
let a_text = document.getElementById('a_text');
let b_text = document.getElementById('b_text');
let c_text = document.getElementById('c_text');
let d_text = document.getElementById('d_text');
let answerButtons = document.querySelectorAll('.answer-btn');
const quizContainer = document.getElementById('quiz-container');

const timerEl = document.getElementById('timer');
const homeEl = document.getElementById('home');
const chaptersGridEl = document.getElementById('chaptersGrid');
const mockBtn = document.getElementById('mockBtn');
/* --- Dynamic top spacing: measure fixed bars and add safe margin --- */
function adjustTopSpacing(){
  const header = document.querySelector('.app-header');
  const quote  = document.querySelector('.quote-box');
  const h = (header?.offsetHeight || 0) + (quote?.offsetHeight || 0) + 18;
  document.documentElement.style.setProperty('--fixed-top', `${Math.max(100, h)}px`);
}
window.addEventListener('load', adjustTopSpacing);
window.addEventListener('resize', adjustTopSpacing);

/* header controls can be destroyed/recreated */
let qCounterEl = null;
let backBtnEl  = null;

/* (re)cache quiz inner DOM after restoring shell */
function recacheQuizDom(){
  questionEl = document.getElementById('question');
  a_text = document.getElementById('a_text');
  b_text = document.getElementById('b_text');
  c_text = document.getElementById('c_text');
  d_text = document.getElementById('d_text');
  answerButtons = document.querySelectorAll('.answer-btn');
}

/* (re)cache header controls + wire events safely */
function recacheHeaderControls() {
  qCounterEl = document.getElementById('qCounter');
  backBtnEl  = document.getElementById('btnBackChapters');

  if (backBtnEl && !backBtnEl._wired) {
    backBtnEl.addEventListener('click', () => {
      clearInterval(timer);
      showHome();
    });
    backBtnEl._wired = true;
  }

  if (qCounterEl) qCounterEl.style.display = 'none';
  if (backBtnEl)  backBtnEl.style.display  = 'none';
}

/* restore quiz shell if result screen replaced it */
function restoreQuizShellIfNeeded(){
  if (!document.getElementById('question')) {
    quizContainer.innerHTML = QUIZ_SHELL_HTML;
    recacheQuizDom();
    recacheHeaderControls();
  }
}

/* =========================
   i18n (language switch)
========================= */
const I18N = {
  en: { mcqs:'MCQs', choose:'Choose a Chapter', mock:'Final Mock Test', back:'Back to Chapters', brand:'IFA Learning Hub Tajweed', tag:'Learn with Faith & Precision' },
  ur: { mcqs:'MCQs', choose:'چیپٹر منتخب کریں', mock:'فائنل موک ٹیسٹ', back:'چیپٹرز پر واپس', brand:'IFA Learning Hub Tajweed', tag:'Learn with Faith & Precision' },
  ru: { mcqs:'Тестов', choose:'Выберите главу', mock:'Итоговый тест', back:'Назад к главам', brand:'IFA Learning Hub Tajweed', tag:'Учись с верой и точностью' }
};

let currentLang = localStorage.getItem('appLang') || 'ur';
function t(key){ return (I18N[currentLang]?.[key]) || I18N.en[key] || key; }
function pick(q, key){
  const k = `${key}_${currentLang}`;
  return (q[k] && q[k].trim()) ? q[k] : q[key];
}

function setLang(lang){
  currentLang = (['en','ur','ru'].includes(lang) ? lang : 'ur');
  localStorage.setItem('appLang', currentLang);

  const rtlUI = currentLang === 'ur';
  document.body.dir = rtlUI ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', rtlUI);
  document.body.classList.remove('lang-en','lang-ur','lang-ru');
  document.body.classList.add(`lang-${currentLang}`);

  document.querySelector('.brand-name')?.replaceChildren(document.createTextNode(t('brand')));
  document.querySelector('.tagline')?.replaceChildren(document.createTextNode(t('tag')));
  document.querySelector('.home-title')?.replaceChildren(document.createTextNode(t('choose')));
  if (mockBtn) mockBtn.innerText = t('mock');
  if (backBtnEl) backBtnEl.innerText = t('back');

  buildChaptersGrid();

  if (quizContainer && quizContainer.style.display !== 'none' && quizData.length){
    loadQuiz();
  }
}
document.querySelectorAll('#langSwitcher [data-lang]').forEach(btn=>{
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

/* =========================
   State
========================= */
const timeLimit = 15;
let timeLeft = timeLimit;
let timer;
let currentQuiz = 0;
let score = 0;
let answerSelected = false;

let quizData = [];            // active questions
let currentChapterTitle = ""; // results header
let lastMode = null;          // 'chapter' | 'mock'
let lastChapterId = null;     // number | null

/* =========================
   Helpers
========================= */
function isRTL(text){ return /[\u0600-\u06FF]/.test(text); }
function applyDirectionForQuestion(qText){
  const rtl = isRTL(qText);
  document.body.dir = rtl ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', rtl);
}
function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function resetQuizState(){
  clearInterval(timer);
  timeLeft = timeLimit;
  currentQuiz = 0;
  score = 0;
  answerSelected = false;
}

/* =========================
   Home / Chapters screen
========================= */
function buildChaptersGrid(){
  if (!chaptersGridEl) return;
  chaptersGridEl.innerHTML = "";
  CHAPTERS.forEach(ch => {
    const card = document.createElement('button');
    card.className = 'chapter-card';
    const title = ch[`title_${currentLang}`] || ch.title;
    card.innerHTML = `
      <h3 class="chapter-title" dir="auto">${title}</h3>
      <div class="chapter-meta">10 ${t('mcqs')}</div>
    `;
    card.addEventListener('click', () => startChapter(ch.id));
    chaptersGridEl.appendChild(card);
  });
}

function showHome(){
  clearInterval(timer);
  if (!homeEl) return;
  homeEl.classList.remove('hidden');
  quizContainer.style.display = 'none';

  const rtlUI = currentLang === 'ur';
  document.body.dir = rtlUI ? 'rtl' : 'ltr';
  document.body.classList.remove('rtl');
  if (rtlUI) document.body.classList.add('rtl');

  if (backBtnEl) backBtnEl.style.display = 'none';
  if (qCounterEl) qCounterEl.style.display = 'none';
}

function showQuiz(){
  if (homeEl) homeEl.classList.add('hidden');
  quizContainer.style.display = 'flex';
  if (qCounterEl) qCounterEl.style.display = 'block';
  if (backBtnEl)  backBtnEl.style.display  = 'inline-block';
}

/* =========================
   Start chapter / mock
========================= */
function getChapterQuestions(id){
  const chapter = CHAPTERS.find(c => c.id === id);
  return chapter ? chapter.questions : [];
}

function startChapter(chapterId){
  restoreQuizShellIfNeeded();
  const ch = CHAPTERS.find(c => c.id === chapterId);
  quizData = shuffle([...getChapterQuestions(chapterId)]);
  currentChapterTitle = (ch && (ch[`title_${currentLang}`] || ch.title)) || "Chapter";
  lastMode = 'chapter';
  lastChapterId = chapterId;
  resetQuizState();
  showQuiz();
  loadQuiz();
}

function startMock(){
  restoreQuizShellIfNeeded();
  const all = CHAPTERS.flatMap(c => c.questions);
  quizData = shuffle([...all]).slice(0, 20);
  currentChapterTitle = t('mock');
  lastMode = 'mock';
  lastChapterId = null;
  resetQuizState();
  showQuiz();
  loadQuiz();
}

/* restart same mode/chapter (reshuffle each time) */
function restartCurrentQuiz(){
  if (lastMode === 'chapter' && lastChapterId != null){
    startChapter(lastChapterId);
  } else {
    startMock();
  }
}

/* =========================
   Timer
========================= */
function startTimer(){
  timeLeft = timeLimit;
  document.getElementById('timer').innerText = timeLeft; // recached after restore
  document.getElementById('timer').style.color = 'white';

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerText = timeLeft;
    if (timeLeft <= 5) document.getElementById('timer').style.color = '#BE1E4E';
    if (timeLeft <= 0){
      clearInterval(timer);
      if (!answerSelected) selectAnswer(null);
    }
  }, 1000);
}

/* =========================
   Quiz flow
========================= */
function loadQuiz(){
  clearInterval(timer);
  startTimer();

  answerButtons.forEach(btn => {
    btn.classList.remove('correct', 'incorrect', 'disabled');
    btn.style.opacity = '1';
  });
  answerSelected = false;

  const currentQuizData = quizData[currentQuiz];
  if (!currentQuizData){ endQuiz(); return; }

  if (qCounterEl) qCounterEl.textContent = `Q ${currentQuiz + 1} / ${quizData.length}`;

  const qText = pick(currentQuizData, 'question');
  applyDirectionForQuestion(qText);

  questionEl.innerText = qText;
  a_text.innerText = pick(currentQuizData, 'a');
  b_text.innerText = pick(currentQuizData, 'b');
  c_text.innerText = pick(currentQuizData, 'c');
  d_text.innerText = pick(currentQuizData, 'd');
}

function selectAnswer(selectedOption){
  if (answerSelected) return;
  answerSelected = true;
  clearInterval(timer);

  const currentQuizData = quizData[currentQuiz];
  const correctId = currentQuizData.correct;

  if (selectedOption === null){
    document.getElementById(correctId).classList.add('correct');
  }

  answerButtons.forEach(button => {
    const isSelected = button.id === selectedOption;
    const isCorrect  = button.id === correctId;

    button.classList.add('disabled');

    if (selectedOption !== null && isSelected){
      if (isCorrect){
        button.classList.add('correct');
        score++;
      } else {
        button.classList.add('incorrect');
      }
    }

    if (isCorrect){
      button.classList.add('correct');
      button.style.opacity = '1';
    } else if (!isSelected){
      button.style.opacity = '0.5';
    }
  });

  setTimeout(() => {
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else endQuiz();
  }, 2000);
}

function endQuiz(){
  if (qCounterEl) qCounterEl.style.display = 'none';
  if (backBtnEl)  backBtnEl.style.display  = 'inline-block';

  quizContainer.innerHTML = `
    <div class="result-box">
      <h2>${currentChapterTitle}</h2>
      <p>Quiz Finished!</p>
      <p>You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>.</p>
      <div style="display:flex; gap:10px; justify-content:center; margin-top:14px;">
        <button id="btnPlayAgain" class="play-again-btn">Play Again</button>
        <button id="btnBackHome" class="play-again-btn" style="background:#0E7D2E;">${t('back')}</button>
      </div>
    </div>
  `;

  // wire result buttons
  const btnAgain = document.getElementById('btnPlayAgain');
  const btnHome  = document.getElementById('btnBackHome');
  if (btnAgain && !btnAgain._wired) {
    btnAgain.addEventListener('click', () => {
      restoreQuizShellIfNeeded();
      restartCurrentQuiz();
    });
    btnAgain._wired = true;
  }
  if (btnHome && !btnHome._wired) {
    btnHome.addEventListener('click', () => {
      clearInterval(timer);
      showHome();
    });
    btnHome._wired = true;
  }
}

/* =========================
   Boot
========================= */
if (chaptersGridEl){
  setLang(currentLang);
  recacheHeaderControls();
  buildChaptersGrid();
  if (mockBtn) mockBtn.addEventListener('click', startMock);
  showHome();
} else {
  setLang(currentLang);
  recacheHeaderControls();
  startChapter(1);
}
