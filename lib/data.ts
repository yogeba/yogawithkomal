/* Site-wide constants and structured data sources */

export const SITE = {
  name: "Yoga with Komal",
  tagline: "A space to move with awareness, come back home to yourself.",
  url: "https://yogawithkomal.com",
  description:
    "A somatic, women-friendly approach to movement with Komal. Embodied Hatha-Vinyasa, breath awareness, chanting, and reflection. Group classes, 1:1 sessions, and themed gatherings. Online and offline in Siliguri.",
  baseCity: "Siliguri",
  region: "West Bengal",
  country: "India",
  startsOn: "2026-05-05",
};

export const WA_NUMBER = "917602454213";
export const IG_URL = "https://www.instagram.com/releaseandrealize/";
export const IG_HANDLE = "releaseandrealize";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ----------------- Classes ----------------- */
export type ClassEntry = {
  slug: string;
  name: string;
  tag: string;
  duration: string;
  level: string;
  desc: string;
  good: string[];
  img: string;
  src?: string;
  seoH1?: string;
  seoTitle?: string;
};

export const CLASSES: ClassEntry[] = [
  {
    slug: "slow-flow",
    name: "Slow Flow",
    tag: "Vinyasa",
    duration: "60 min",
    level: "All levels",
    desc: "A gentle, breath-led sequence. We move through familiar shapes slowly enough that you can actually feel them.",
    good: ["yoga for beginners", "stress relief", "mobility"],
    img: "[slow flow · cat-cow · morning light]",
    seoH1: "Slow Flow Yoga",
    seoTitle: "Slow Flow Yoga · Gentle, breath-led Vinyasa",
  },
  {
    slug: "yoga-nidra",
    name: "Yoga Nidra",
    tag: "Restorative",
    duration: "45 min",
    level: "Everyone",
    desc: "A guided rest. You lie down, I talk you toward sleep's edge, and your nervous system does the rest. Profound on tired weeks.",
    good: ["yoga nidra", "insomnia", "deep rest"],
    img: "[nidra · bolster · candle]",
    seoH1: "Yoga Nidra",
    seoTitle: "Yoga Nidra · Guided rest for tired nervous systems",
  },
  {
    slug: "alignment-hatha",
    name: "Alignment Hatha",
    tag: "Hatha",
    duration: "75 min",
    level: "Beginner +",
    desc: "Iyengar-rooted. We hold poses long enough to learn them. Props, precision, and a great deal of patience.",
    good: ["yoga for back pain", "posture", "strength"],
    img: "[trikonasana · block · mirror]",
    seoH1: "Alignment Hatha Yoga",
    seoTitle: "Alignment Hatha Yoga · Iyengar-rooted, props-based",
  },
  {
    slug: "yin-and-breath",
    name: "Yin & Breath",
    tag: "Yin",
    duration: "60 min",
    level: "All levels",
    desc: "Long floor holds paired with pranayama. For the connective tissue, the parasympathetic nervous system, and the parts of you that are tired of trying.",
    good: ["yin yoga", "anxiety", "flexibility"],
    img: "[yin · butterfly · soft window]",
    seoH1: "Yin Yoga & Breathwork",
    seoTitle: "Yin Yoga · Long floor holds, breathwork, and rest",
  },
  {
    slug: "sunrise-1-1",
    name: "Sunrise 1:1",
    tag: "Private",
    duration: "60 min",
    level: "Custom",
    desc: "A class built for you. Your body, your week, your goals. Online or in-studio in Siliguri. Pre-conversation included.",
    good: ["private yoga", "1:1 coaching", "yoga near me"],
    img: "[1:1 · close · adjustments]",
    seoH1: "Private 1:1 Yoga Sessions",
    seoTitle: "Private 1:1 Yoga · Online or in Siliguri",
  },
  {
    slug: "new-moon-circle",
    name: "New Moon Circle",
    tag: "Workshop",
    duration: "90 min",
    level: "Open",
    desc: "Once a month. A long restorative practice, a short reading, tea afterward. Online and free for first-timers.",
    good: ["yoga workshop", "community", "meditation"],
    img: "[circle · mat · tea · siliguri]",
    seoH1: "New Moon Yoga Circle",
    seoTitle: "New Moon Circle · Monthly restorative gathering",
  },
];

/* ----------------- Cities ----------------- */
export type City = {
  slug: string;
  name: string;
  region?: string;
  blurb: string;
  isOnline?: boolean;
};

export const CITIES: City[] = [
  {
    slug: "siliguri",
    name: "Siliguri",
    region: "West Bengal",
    blurb:
      "The home base. Offline classes are held in Siliguri at the heart of North Bengal, with online options for anyone outside.",
  },
  {
    slug: "bagdogra",
    name: "Bagdogra",
    region: "West Bengal",
    blurb:
      "A short drive from Siliguri, Bagdogra is well connected by air. Many students fly in for offline sessions and stay through the week.",
  },
  {
    slug: "jalpaiguri",
    name: "Jalpaiguri",
    region: "West Bengal",
    blurb:
      "Twin city to Siliguri. Practice online from Jalpaiguri or come over for in-studio sessions, the drive is under an hour.",
  },
  {
    slug: "kurseong",
    name: "Kurseong",
    region: "West Bengal",
    blurb:
      "A foothill town between Siliguri and Darjeeling. Online classes work well for the slower pace of life in Kurseong.",
  },
  {
    slug: "mirik",
    name: "Mirik",
    region: "West Bengal",
    blurb:
      "Quiet hill station near Siliguri, ideal for an online practice with mountain views.",
  },
  {
    slug: "kalimpong",
    name: "Kalimpong",
    region: "West Bengal",
    blurb:
      "Hilltown across the Teesta from Darjeeling. Practice live online from Kalimpong with the recording sent the same day.",
  },
  {
    slug: "darjeeling",
    name: "Darjeeling",
    region: "West Bengal",
    blurb:
      "Tea-country hill station. Practice online from Darjeeling, or visit Siliguri for offline classes.",
  },
  {
    slug: "gangtok",
    name: "Gangtok",
    region: "Sikkim",
    blurb:
      "Sikkim's capital, a few hours from Siliguri. Online classes are popular here, with occasional travel for in-person workshops.",
  },
  {
    slug: "pelling",
    name: "Pelling",
    region: "Sikkim",
    blurb:
      "Tucked into the Himalayan foothills, Pelling students join online with a view of the Kanchenjunga at dawn.",
  },
  {
    slug: "namchi",
    name: "Namchi",
    region: "Sikkim",
    blurb:
      "South Sikkim hilltown. Practice live online from Namchi or come over to Siliguri for offline sessions.",
  },
  {
    slug: "cooch-behar",
    name: "Cooch Behar",
    region: "West Bengal",
    blurb:
      "North Bengal town with deep cultural roots. Online classes work well with the recording, and offline visits to Siliguri are a few hours away.",
  },
  {
    slug: "alipurduar",
    name: "Alipurduar",
    region: "West Bengal",
    blurb:
      "Gateway to the Dooars. Practice online from Alipurduar, or come down to Siliguri for offline workshops and 1:1 sessions.",
  },
  {
    slug: "online",
    name: "Online",
    blurb:
      "Live + recorded for replay. Practice from anywhere in India, the UK, the US, or wherever you happen to be this week.",
    isOnline: true,
  },
];

/* ----------------- Standalone SEO landings (slug router) ----------------- */
export type SeoLanding = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intent: "class" | "location" | "longtail";
  classSlug?: string;
  citySlug?: string;
};

export const SEO_LANDINGS: SeoLanding[] = [
  {
    slug: "yoga-for-beginners",
    title: "Yoga for Beginners · Online and in Siliguri",
    h1: "Yoga for beginners",
    description:
      "If you've never touched a mat, start here. Slow, alignment-led classes designed for new bodies. Online live + recorded, or in person in Siliguri.",
    intent: "longtail",
    classSlug: "slow-flow",
  },
  {
    slug: "yoga-nidra",
    title: "Yoga Nidra · Guided rest, online and in person",
    h1: "Yoga Nidra",
    description:
      "Yoga Nidra is a guided practice of deep rest. Forty-five minutes of stillness, profound on tired weeks. Online live + recorded.",
    intent: "class",
    classSlug: "yoga-nidra",
  },
  {
    slug: "yin-yoga",
    title: "Yin Yoga · Long floor holds and breathwork",
    h1: "Yin Yoga",
    description:
      "Yin Yoga, the long, quiet kind. Floor poses held for minutes at a time, paired with pranayama. For tight bodies, anxious minds, and tired nervous systems.",
    intent: "class",
    classSlug: "yin-and-breath",
  },
  {
    slug: "private-yoga-1-1",
    title: "Private 1:1 Yoga Sessions · Online or in Siliguri",
    h1: "Private 1:1 yoga sessions",
    description:
      "A practice built around your body, your week, and your goals. Online or in-studio in Siliguri, with a pre-session conversation included.",
    intent: "class",
    classSlug: "sunrise-1-1",
  },
  {
    slug: "yoga-in-siliguri",
    title: "Yoga in Siliguri · Embodied Hatha-Vinyasa with Komal",
    h1: "Yoga in Siliguri",
    description:
      "Slow, alignment-based yoga in Siliguri with Komal. Group classes, 1:1 sessions, and themed gatherings. Beginners welcome.",
    intent: "location",
    citySlug: "siliguri",
  },
  {
    slug: "online-yoga-india",
    title: "Online Yoga in India · Live + recorded with Komal",
    h1: "Online yoga from India",
    description:
      "Live online yoga classes from India, recorded for replay. Hatha-Vinyasa, Yoga Nidra, Yin & Breath, 1:1 sessions, and monthly New Moon circles.",
    intent: "location",
    citySlug: "online",
  },
  {
    slug: "yoga-near-me-siliguri",
    title: "Yoga near me in Siliguri · Group + private sessions",
    h1: "Yoga near you in Siliguri",
    description:
      "Looking for yoga near you in Siliguri? Group classes, 1:1 sessions, and themed gatherings, taught with awareness, alignment, and breath.",
    intent: "longtail",
    citySlug: "siliguri",
  },
  {
    slug: "hatha-vinyasa-yoga",
    title: "Hatha-Vinyasa Yoga · Slow, alignment-led classes",
    h1: "Hatha-Vinyasa yoga",
    description:
      "Embodied Hatha-Vinyasa yoga: slow flows, alignment cues, breath awareness, and a chant or two. Online and in person in Siliguri.",
    intent: "class",
    classSlug: "slow-flow",
  },
  {
    slug: "yoga-for-anxiety",
    title: "Yoga for Anxiety · Slow, breath-led practice",
    h1: "Yoga for anxiety",
    description:
      "Slow, breath-led yoga for an unsettled nervous system. Yin holds, Nidra rest, and gentle Hatha-Vinyasa. Online or in person in Siliguri.",
    intent: "longtail",
    classSlug: "yin-and-breath",
  },
  {
    slug: "yoga-for-back-pain",
    title: "Yoga for Back Pain · Alignment-led Hatha",
    h1: "Yoga for back pain",
    description:
      "Iyengar-rooted alignment yoga for back pain. Props, precision, and patience. Beginners welcome. Online or in Siliguri.",
    intent: "longtail",
    classSlug: "alignment-hatha",
  },
  {
    slug: "yoga-for-women-siliguri",
    title: "Yoga for Women in Siliguri · Embodied & women-led",
    h1: "Yoga for women in Siliguri",
    description:
      "A women-friendly yoga practice in Siliguri, taught by Komal. Slow, embodied, and rooted in listening to the body. Group classes, 1:1 sessions, and themed gatherings. Online and offline.",
    intent: "longtail",
    citySlug: "siliguri",
  },
  {
    slug: "yoga-for-womens-health",
    title: "Yoga for Women's Health · Cycle, sleep, anxiety",
    h1: "Yoga for women's health",
    description:
      "Slow, somatic yoga that meets the body across the cycle, the year, and the seasons of life. Yin, Nidra, breath, and Hatha. Online or in Siliguri.",
    intent: "longtail",
    classSlug: "yin-and-breath",
  },
  {
    slug: "yoga-for-menstrual-cramps",
    title: "Yoga for Menstrual Cramps · Period pain relief",
    h1: "Yoga for menstrual cramps",
    description:
      "Slow, supported yoga for the days of your cycle that hurt. Yin holds, breathwork, and Yoga Nidra to ease cramps and settle the nervous system. Online or in Siliguri.",
    intent: "longtail",
    classSlug: "yin-and-breath",
  },
  {
    slug: "yoga-for-postpartum-recovery",
    title: "Yoga for Postpartum Recovery · Slow return after birth",
    h1: "Yoga for postpartum recovery",
    description:
      "A patient, listening-led return to the body after birth. 1:1 sessions adapted to your week, with breath, gentle movement, and rest. Online or in Siliguri.",
    intent: "longtail",
    classSlug: "sunrise-1-1",
  },
  {
    slug: "yoga-for-menopause",
    title: "Yoga for Menopause · Perimenopause & beyond",
    h1: "Yoga for menopause",
    description:
      "Yoga across perimenopause and menopause. Slow Hatha for steadier days, Yin for the nights, Nidra for sleep. 1:1 sessions for what's specific to you.",
    intent: "longtail",
    classSlug: "yin-and-breath",
  },
  {
    slug: "yoga-for-pcos",
    title: "Yoga for PCOS · Slow, hormone-friendly practice",
    h1: "Yoga for PCOS",
    description:
      "A slow, sustainable yoga practice that supports women managing PCOS. Hatha, Yin, breathwork, and 1:1 sessions. Online or in Siliguri.",
    intent: "longtail",
    classSlug: "alignment-hatha",
  },
];

/* ----------------- Practice promises (reusable triplet) ----------------- */
/* Pulled out of the hero for now. Drop into another section when wanted. */
export const PRACTICE_PROMISES: { h: string; s: string }[] = [
  {
    h: "Make movement a part of your regime.",
    s: "Show up, gently, sustainably.",
  },
  {
    h: "Build a supportive relationship with your body & mind.",
    s: "Listen rather than override.",
  },
  {
    h: "Cultivate presence & awareness in your everyday life.",
    s: "Beyond the mat, into your day.",
  },
];

/* ----------------- Offerings (pricing tier) ----------------- */
export const OFFERINGS = [
  {
    name: "Group Classes",
    sub: "For structure, consistency & community.",
    bullets: [
      "90 min Hatha-Vinyasa-based flows",
      "Breath awareness & chanting",
      "Weekly integration — alignment & reflection",
    ],
    pricing: [
      { mode: "Online", price: "₹5,000", per: "/ month" },
      { mode: "Offline", price: "₹6,000", per: "/ month" },
    ],
    note: "Live + recorded for replay.",
    img: "[group · circle · flow]",
    src: "/img/announce-may5.jpg",
    waMsg: "Hi Komal, I'm interested in joining a group class.",
  },
  {
    name: "1:1 Sessions",
    sub: "For those who want to move at their own pace.",
    bullets: [
      "Movement to release tension",
      "Breath awareness & guided pranayama",
      "Chanting to create stillness",
      "Reflection on the Yoga Sutras (Samadhi Pada)",
      "Journaling prompts for personal reflection",
    ],
    pricing: [{ mode: "Online & Offline", price: "₹1,000", per: "/ session" }],
    note: "Sessions are tailored to your current needs.",
    img: "[1:1 · close · attention]",
    waMsg: "Hi Komal, I'm interested in booking a 1:1 session.",
  },
  {
    name: "Themed Sessions",
    sub: "Deeper, guided experiences. Periodic.",
    bullets: [
      "Yoga Nidra",
      "Devotional Singing & Chanting",
      "Full Moon & New Moon Gatherings",
      "Movement-based Pranayama",
      "Group Explorations · balance, trust, coordination",
    ],
    pricing: [{ mode: "Periodic", price: "Announced", per: "separately" }],
    note: "Watch Instagram or WhatsApp for the next dates.",
    img: "[circle · candle · gathering]",
    waMsg: "Hi Komal, I'm interested in your themed sessions, please keep me posted on the next one.",
  },
] as const;

/* ----------------- FAQ (used on home and FAQPage JSON-LD) ----------------- */
export const FAQS = [
  {
    q: "I'm new to yoga. Is this for me?",
    a: "Yes. The focus is on how you feel, not how it looks. You'll be guided to move with gentle awareness, at your own pace, no prior experience needed. Beginners are warmly welcome.",
  },
  {
    q: "How is this different from a typical yoga class?",
    a: "This is a somatic, embodied practice. Rather than chasing perfect postures, you're guided to feel, sense, and listen to your body from within. The body leads instead of being controlled. The mat becomes a doorway to the rest of your day.",
  },
  {
    q: "How does booking work?",
    a: "Tap any \"Join via WhatsApp\" button. You'll land in a chat with me, pre-filled with what you're interested in. I'll reply and we'll find the right starting point together.",
  },
  {
    q: "Can I do classes online?",
    a: "Yes. Group classes run online and offline. Online sessions are live + recorded for replay, so you can practice with the group or catch up later in the week. 1:1 sessions are available online and offline.",
  },
  {
    q: "What do I need at home for online classes?",
    a: "A mat, a bit of floor space, and a quiet corner. Some household props help, a cushion, a thick book or two, a belt, but I'll always offer alternatives if you don't have something.",
  },
  {
    q: "What does a 1:1 session include?",
    a: "Sessions are tailored to your current needs. Depending on what's useful for you, we might work with movement to release tension, breath awareness and guided pranayama, chanting to create stillness, reflection on the Yoga Sutras (Samadhi Pada), or journaling prompts for personal reflection.",
  },
  {
    q: "What are themed sessions?",
    a: "Periodic, deeper guided experiences, Yoga Nidra, devotional singing & chanting, full moon and new moon gatherings, movement-based pranayama, and group explorations around balance, trust, and coordination. Dates are announced separately.",
  },
  {
    q: "Where are the offline classes held?",
    a: "Offline classes are in Siliguri. The exact venue and timing go out with your booking confirmation. Online sessions run worldwide.",
  },
  {
    q: "Is this a women-friendly space?",
    a: "Yes. Komal is a woman, and the practice is held with women in mind, though everyone is welcome. The space is small, intentional, and built around listening, no posing, no proving, no pressure. The practice meets you across the cycle, the year, and the seasons of life.",
  },
];
