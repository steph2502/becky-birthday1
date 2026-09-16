# Becky's Birthday Scrapbook

A warm, playful digital memory book — Polaroids, letters, timeline lore, and a soft landing at the end.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Swap in real memories

All content lives in **`src/data/content.ts`**. Components stay untouched.

1. Drop photos into `public/memories/`
2. Drop videos into `public/videos/`
3. Update entries like:

```ts
{
  id: 'm1',
  image: '/memories/beach-day.jpg',
  title: 'That day we went to...',
  date: 'September 2024',
  year: 2024,
  location: 'Lagos',
  people: ['Sarah', 'Amanda', 'Tolu'],
  memory: 'The story you want Becky to read...',
  caption: 'Optional funny caption',
  annotation: 'handwritten scribble beside the polaroid',
  rotation: -4,
  size: 'lg', // 'sm' | 'md' | 'lg'
  tapeColor: 'pink', // pink | yellow | sage | blue | peach | brown
  doodle: 'heart', // heart | star | arrow | squiggle | sparkle
}
```

Same file also holds:

- `timeline` — years + which memory ids belong to each year
- `videos` — cinematic section
- `friendMessages` — letters / envelopes
- `loveReasons` — sticker reasons
- `quizQuestions` / `quizResults` — the quiz
- `easterEggs` — hidden surprises
- `birthdayMessage` — final photo + letter

Placeholder images are temporary Unsplash photos so the layout works immediately — replace them with Becky's real ones.

## Components

| Component | Role |
|---|---|
| `Hero` | Opening scrapbook cover + enter CTA |
| `PhotoScrapbook` / `MemoryCard` | Scattered Polaroid archives |
| `MemoryModal` | Expanded memory page |
| `Timeline` | Year-by-year lore |
| `VideoCard` / `VideoSection` | Playful video cards + player |
| `FriendMessage` | Openable letters |
| `ReasonsSection` | Love stickers |
| `Quiz` | "How well do you know Becky?" |
| `EasterEgg` | Hidden reveals |
| `BirthdayEnding` | Calm final message |

## Design notes

- Cream paper background, chocolate brown as the anchor accent
- Soft pink, peach, butter yellow, sage, and soft blue/lavender accents
- Hand fonts (`Caveat` / `Patrick Hand`) + readable body (`Source Sans 3`) + display (`Playfair Display`)
- Mobile: scrapbook becomes a touch-friendly stacked layout
