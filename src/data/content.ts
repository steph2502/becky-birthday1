import type {
  CrosswordPuzzle,
  EasterEgg,
  FriendMessage,
  LoveReason,
  Memory,
  QuizQuestion,
  QuizResult,
  ScrambleWord,
  TimelineYear,
  VideoMemory,
} from '../types'

/**
 * Swap image paths / URLs here when you have Becky's real photos.
 * Put files in /public/memories/ and reference them like "/memories/beach-2024.jpg"
 */

export const memories: Memory[] = [
  {
    id: 'm-baby',
    image: '/memories/star-day-one.png',
    title: 'Little SHEO! \u2728',
    date: 'The very beginning',
    year: 2005,
    people: ['Becky'],
    memory:
      "She's always been a star since day one. Pearl necklace, flower clip, those eyes — and somehow every day since has just been Becky being Becky.",
    caption: 'A star from the jump \u2728',
    annotation: 'day one',
    rotation: -4,
    size: 'md',
    tapeColor: 'pink',
    doodle: 'star',
    inArchives: false,
  },
  {
    id: 'm-sheeo',
    image: '/memories/little-sheeo.png',
    title: 'Still that sparkle',
    date: 'Same energy',
    year: 2005,
    people: ['Becky'],
    memory:
      "What a nice day it's been being Becky — from tiny SheEO vibes to the whole scrapbook. Same sparkle. Same soft chaos. Same her.",
    caption: 'How nice a day it has been being Becky \uD83D\uDE0D',
    annotation: 'always her',
    rotation: 3,
    size: 'md',
    tapeColor: 'yellow',
    doodle: 'sparkle',
    inArchives: false,
  },
  {
    id: 'm-sideeye',
    image: '/memories/baby-side-eye.png',
    title: 'The unbothered stare \uD83D\uDE10\uD83D\uDE02',
    date: 'Toddler era',
    year: 2005,
    people: ['Becky'],
    memory:
      "Pink singlet, tiny earrings, and a face that says 'I have heard enough for today.' The side-eye was fully developed before she could even spell it.",
    caption: 'Madam attitude since birth \uD83D\uDC80\uD83D\uDE02',
    annotation: 'not in the mood',
    rotation: -7,
    size: 'md',
    tapeColor: 'sage',
    doodle: 'squiggle',
    inArchives: false,
  },
  {
    id: 'm-daddysgirl',
    image: '/memories/daddys-girl.png',
    title: "Daddy's girl \uD83E\uDD7A\uD83E\uDDE1",
    date: 'Baby Becky files',
    year: 2005,
    people: ['Becky', 'Dad'],
    memory:
      'Flower clips everywhere, matching pink energy, and a suspicious little frown. Somebody clearly interrupted her nap for this photoshoot.',
    caption: 'Original owner of the pout \uD83D\uDE2C\uD83C\uDF38',
    annotation: 'protected always',
    rotation: 5,
    size: 'md',
    tapeColor: 'peach',
    doodle: 'heart',
    inArchives: false,
  },
  {
    id: 'm1',
    image: '/memories/studio-portrait.jpg',
    title: 'CEO Theokallia \u2728',
    date: 'Portrait day',
    year: 2026,
    people: ['Becky'],
    memory:
      'Maroon sweater, gold hoop, that calm almost-smile — Becky looking like she walked straight out of a daydream and into the scrapbook.',
    caption: 'Main character energy, quietly.',
    annotation: 'stunning',
    rotation: -6,
    size: 'lg',
    tapeColor: 'brown',
    doodle: 'heart',
  },
  {
    id: 'm2',
    image: '/memories/campus-smile.png',
    title: 'Omo tan \uD83D\uDD25\u2764\uFE0F',
    date: 'That smile though',
    year: 2023,
    location: 'Somewhere that already felt like home',
    people: ['Becky'],
    memory:
      'Cream top, navy skirt, gold jewelry, and a smile that somehow makes the whole building look warmer. Classic Becky.',
    caption: 'Professional soft-launch of joy.',
    annotation: 'this smile!!',
    rotation: 4,
    size: 'lg',
    tapeColor: 'sage',
    doodle: 'star',
  },
  {
    id: 'm3',
    image: '/memories/sunny-day.png',
    title: 'Sunkissed opor \uD83D\uDE02',
    date: 'Sunday JPEGs',
    year: 2024,
    location: 'Outside, under a ridiculous blue sky',
    people: ['Becky'],
    memory:
      'Floral skirt, white top, sunny day — and Becky looking like the plot twist everyone hoped for. A photo that just feels happy.',
    caption: 'Weather report: pure Becky.',
    annotation: 'golden hour-ish',
    rotation: -3,
    size: 'md',
    tapeColor: 'yellow',
    doodle: 'sparkle',
  },
  {
    id: 'm4',
    image: '/memories/chapel-celebration.png',
    title: 'Agba stepper \uD83D\uDE02',
    date: 'Thanksgiving Sunday',
    year: 2025,
    location: 'Covenant University Chapel',
    people: ['Becky', 'the whole vibe'],
    memory:
      'Red robe, shekere in hand, Bantu knots shining — Becky in full celebration energy. The kind of night you can still hear in a photo.',
    caption: 'Please do not ask us to stay still.',
    annotation: 'iconic',
    rotation: 5,
    size: 'lg',
    tapeColor: 'peach',
    doodle: 'arrow',
  },
]

export const archiveMemories = memories.filter((m) => m.inArchives !== false)

export const timeline: TimelineYear[] = [
  {
    year: 2005,
    label: 'Becky, Back Then',
    story:
      "She's always been a star since day one.",
    memoryIds: ['m-baby', 'm-sheeo', 'm-sideeye', 'm-daddysgirl'],
  },
]

export const videos: VideoMemory[] = [
  {
    id: 'v1',
    title: 'Kingdom financier \uD83D\uDCB0\u2728',
    caption: 'The world is not ready for this greatness \uD83D\uDE0D\uD83D\uDD25',
    thumbnail: '/memories/studio-portrait.jpg',
    videoUrl: '/videos/conversation-stirrer.mp4',
    rotation: -3,
  },
  {
    id: 'v2',
    title: 'Please do not ask what was happening here',
    caption: 'Context has been permanently misplaced \uD83D\uDE02',
    thumbnail: '/memories/sunny-day.png',
    videoUrl: '/videos/dont-ask.mp4',
    rotation: 4,
  },
  {
    id: 'v3',
    title: 'Becky Lasore AAT certified clock eetttt \uD83D\uDE0D\uD83D\uDE0D',
    caption: 'AAT certified. Clock eetttt \uD83C\uDF89',
    thumbnail: '/memories/campus-smile.png',
    videoUrl: '/videos/aat-certified.mp4',
    rotation: -6,
  },
  {
    id: 'v4',
    title: 'Becky the influencer \uD83D\uDE0D\uD83D\uDE0D',
    caption: 'Check her out on YouTube and Instagram \uD83D\uDCF1\u2728',
    thumbnail: '/memories/campus-smile.png',
    videoUrl: '/videos/influencer.mp4',
    rotation: 2,
  },
]

export const lettersVideo = {
  videoUrl: 'https://youtu.be/A4Dp-9b8yHM',
  title: 'Happy Birthday, Becky \uD83C\uDF89',
  caption: '',
}

export const friendMessages: FriendMessage[] = [
  { id: 'msg1', from: 'Sam \uD83E\uDE77', message: '', style: 'envelope', rotation: -11, color: 'pink' },
  { id: 'msg2', from: 'Feyi', message: '', style: 'envelope', rotation: 7, color: 'yellow' },
  { id: 'msg3', from: 'Ifemide', message: '', style: 'envelope', rotation: -6, color: 'sage' },
  { id: 'msg4', from: 'Olurin', message: '', style: 'envelope', rotation: 9, color: 'blue' },
  { id: 'msg5', from: 'Derin', message: '', style: 'envelope', rotation: -8, color: 'peach' },
  { id: 'msg6', from: 'Jesunifemi', message: '', style: 'envelope', rotation: 5, color: 'cream' },
  { id: 'msg7', from: 'Oyinkan', message: '', style: 'envelope', rotation: -4, color: 'pink' },
  { id: 'msg8', from: 'Oyebowale', message: '', style: 'envelope', rotation: 8, color: 'yellow' },
  { id: 'msg9', from: 'Soretire', message: '', style: 'envelope', rotation: -9, color: 'sage' },
  { id: 'msg10', from: 'Tiolu', message: '', style: 'envelope', rotation: 6, color: 'blue' },
  { id: 'msg11', from: 'Stephanie', message: '', style: 'envelope', rotation: -5, color: 'peach' },
  { id: 'msg12', from: 'Blossom', message: '', style: 'envelope', rotation: 10, color: 'pink' },
  { id: 'msg13', from: 'Favour', message: '', style: 'envelope', rotation: -7, color: 'cream' },
  { id: 'msg14', from: 'Nathaniel', message: '', style: 'envelope', rotation: 4, color: 'yellow' },
  { id: 'msg15', from: 'Tise', message: '', style: 'envelope', rotation: -10, color: 'sage' },
]

export const loveReasons: LoveReason[] = [
  { id: 'r1', text: 'Her laugh', rotation: -8, color: 'pink', shape: 'sticker' },
  { id: 'r2', text: 'Her kindness', rotation: 4, color: 'sage', shape: 'ticket' },
  { id: 'r3', text: 'How she somehow makes everything fun', rotation: -3, color: 'yellow', shape: 'blob' },
  { id: 'r4', text: 'Her random messages', rotation: 6, color: 'peach', shape: 'tag' },
  { id: 'r5', text: 'Her ability to make people feel loved', rotation: -5, color: 'blue', shape: 'sticker' },
  { id: 'r6', text: 'The way she remembers the little things', rotation: 2, color: 'brown', shape: 'ticket' },
  { id: 'r7', text: 'Her soft heart + chaotic energy combo', rotation: -6, color: 'pink', shape: 'blob' },
  { id: 'r8', text: 'How safe it feels to be yourself around her', rotation: 7, color: 'sage', shape: 'tag' },
]

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'In a group plan, what role is Becky most likely to end up with?',
    options: [
      'The organiser / planner — or the secretary drafting the reports',
      'The one who shows up an hour late',
      'The quiet one in the corner',
      'The one who cancels at the last minute',
    ],
    correctIndex: 0,
    funFact:
      "Correct. If it's an event she's planning it, and if it's a meeting she's the one writing the reports and drafting the proposals.",
  },
  {
    id: 'q2',
    question: 'Which of these is a certified Becky catchphrase?',
    options: [
      '"Oh my Goodness"',
      '"Do you know that..."',
      '"Hi hi"',
      'All three, obviously',
    ],
    correctIndex: 3,
    funFact: 'Trick question. The shocked "Oh my Goodness" is elite, but "Hi hi" is the signature.',
  },
  {
    id: 'q3',
    question: 'What does Becky always somehow end up doing?',
    options: [
      "Taking random pictures and videos of whatever she's involved in",
      'Falling asleep halfway through',
      'Complaining about the music',
      'Disappearing without saying goodbye',
    ],
    correctIndex: 0,
    funFact: 'The camera roll never lies. Everything gets documented.',
  },
  {
    id: 'q4',
    question: "What's Becky's comfort food?",
    options: [
      'Amala and ewedu with gbegiri and kpomo',
      'Jollof rice and chicken',
      'Pizza and ice cream',
      'Indomie and egg',
    ],
    correctIndex: 0,
    funFact: 'Best enjoyed with friends around — or in front of a movie.',
  },
  {
    id: 'q5',
    question: 'What would Becky most likely do in mild chaos?',
    options: [
      'Get a little tense, talk faster than usual, and overthink it',
      'Go completely silent',
      'Laugh and add to the chaos',
      'Walk out immediately',
    ],
    correctIndex: 0,
    funFact: 'The slightly-faster talking is her built-in alarm system.',
  },
]

export const quizResults: QuizResult[] = [
  {
    minScore: 0,
    title: 'Honorary Becky Historian (in training)',
    message: 'Cute attempt. Come back after studying the archives a little harder.',
  },
  {
    minScore: 2,
    title: 'Certified Friend of Becky',
    message: 'You know her well enough to get the jokes — and that is elite status.',
  },
  {
    minScore: 4,
    title: 'Becky Lore Expert',
    message: 'Impressive. You have clearly been paying attention. She is lucky to have you.',
  },
  {
    minScore: 5,
    title: 'Soul-level Becky Scholar',
    message: 'Perfect score. You do not just know Becky — you get Becky. Go celebrate her.',
  },
]

/**
 * Mini crossword. Letters must agree wherever two entries cross:
 * AMALA / HIHI / EWEDU all cross the word MOVIE running down column 1.
 */
export const crossword: CrosswordPuzzle = {
  rows: 5,
  cols: 6,
  entries: [
    {
      id: 'c1',
      number: 1,
      answer: 'AMALA',
      clue: 'The base of her comfort food order (5)',
      row: 0,
      col: 0,
      direction: 'across',
    },
    {
      id: 'c2',
      number: 2,
      answer: 'MOVIE',
      clue: "What she'd happily eat in front of (5)",
      row: 0,
      col: 1,
      direction: 'down',
    },
    {
      id: 'c3',
      number: 3,
      answer: 'HIHI',
      clue: 'Her signature greeting, twice over (4)',
      row: 3,
      col: 0,
      direction: 'across',
    },
    {
      id: 'c4',
      number: 4,
      answer: 'EWEDU',
      clue: 'Goes with the amala, no debate (5)',
      row: 4,
      col: 1,
      direction: 'across',
    },
  ],
}

export const scrambleWords: ScrambleWord[] = [
  {
    id: 's1',
    scrambled: 'MOKPO',
    answer: 'KPOMO',
    hint: 'The chewy one that completes the plate',
  },
  {
    id: 's2',
    scrambled: 'GIRIGBE',
    answer: 'GBEGIRI',
    hint: 'The bean soup in the combo',
  },
  {
    id: 's3',
    scrambled: 'NELPRAN',
    answer: 'PLANNER',
    hint: 'The role she always ends up with in a group plan',
  },
  {
    id: 's4',
    scrambled: 'SOALPROP',
    answer: 'PROPOSAL',
    hint: 'What she drafts when the setting turns official',
  },
]

export const easterEggs: EasterEgg[] = [
  {
    id: 'egg1',
    type: 'star',
    label: '*',
    revealTitle: 'Hidden polaroid unlocked',
    revealContent: 'A secret soft memory: the time Becky said something tiny that made someone feel hugely seen.',
    revealImage: '/memories/star-day-one.png',
    position: { top: '18%', right: '8%' },
  },
  {
    id: 'egg2',
    type: 'doodle',
    label: '~',
    revealTitle: 'Inside joke vault',
    revealContent: 'If you know, you know. If you do not know — ask Becky. Or do not. Some lore is sacred.',
    position: { top: '62%', left: '6%' },
  },
  {
    id: 'egg3',
    type: 'button',
    label: "don't click me",
    revealTitle: 'You clicked it.',
    revealContent: 'Of course you did. Becky would have clicked it too. Soft chaos solidarity.',
    position: { bottom: '12%', right: '10%' },
  },
  {
    id: 'egg4',
    type: 'secret',
    label: 'psst',
    revealTitle: 'Secret birthday note',
    revealContent: 'Between us: this site exists because people love you in specific, ridiculous, beautiful ways.',
    position: { top: '40%', left: '4%' },
  },
]

export const birthdayMessage = {
  photo: '/memories/studio-portrait.jpg',
  lines: [
    'Becky,',
    "These are only a few of the memories we've made with you.",
    "There are so many more that couldn't fit into this little corner of the internet.",
    'Thank you for the laughs, the conversations, the random moments, the memories, and for simply being someone worth celebrating.',
    "You are loved. You are appreciated. And we're really glad you're here.",
    'Happy Birthday, Becky.',
    "Here's to everything we've experienced — and everything that's still to come.",
  ],
  closing: 'Happy Birthday, Becky',
}

export const getMemoryById = (id: string) => memories.find((m) => m.id === id)
