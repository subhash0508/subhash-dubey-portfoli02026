/* =========================================================================
   PROJECTS.JS — portfolio ke projects yahan edit karo.

   VIDEO — "video" me link ya file path:
     YouTube   : "https://www.youtube.com/watch?v=XXXXXXXXXXX"
     Shorts    : "https://youtube.com/shorts/XXXXXXXXXXX"   (vertical player)
     Instagram : "https://www.instagram.com/reel/XXXXXXX/"  (vertical player)
     Drive     : "https://drive.google.com/file/d/FILE_ID/view"
     Local MP4 : "assets/videos/project-11.mp4"
   "link"     : (optional) "Watch on YouTube" button ke liye alag link
   "featured" : true = full-width bada card
   "channel"  : "SDMotion Studio" (showreel channel) ya "Storyverse SD" (my channel)
   "thumbnail": khaali ho to YouTube/Drive ka thumbnail apne aap aata hai

   Naya project add karna ho to neeche wala koi block copy karke id badlo.
   ========================================================================= */

window.PROJECTS = [
  {
    id: 1,
    channel: "SDMotion Studio",
    featured: true,
    title: "Marvel Inspired Cinematic Intro",
    category: "Motion & VFX",
    year: "2026",
    role: "Motion Graphics · VFX · Title Design",
    thumbnail: "assets/images/project-01.webp",
    video: "assets/videos/project-01-web.mp4",   // compressed 720p. Original: project-01.mp4
    link: "https://www.youtube.com/watch?v=_jRg7JIg3BQ",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    description: "A cinematic logo reveal crafted with dynamic animation, dramatic lighting, typography and powerful transitions — a high-impact Marvel-style opening sequence.",
    creativeApproach: "Focused on cinematic pacing, dramatic visual transitions and dynamic typography to create an immersive superhero-style opening."
  },
  {
    id: 2,
    channel: "Storyverse SD",
    title: "Ramayan — An Epic AI Short Film",
    category: "AI Film",
    year: "2026",
    role: "AI Filmmaking · Motion Graphics · Edit",
    thumbnail: "assets/images/project-02.webp",
    video: "https://www.youtube.com/watch?v=tQee8MTy2qg",
    tools: ["ChatGPT", "Google Flow", "After Effects", "Premiere Pro"],
    description: "The timeless epic of Ramayan retold through artificial intelligence, cinematic visuals and motion graphics — AI-generated characters, cinematic scenes and professional post-production.",
    creativeApproach: "Script and storyboard first, then AI character design and visual prompts (ChatGPT), AI video generation (Google Flow), compositing and VFX in After Effects, and final edit, music and sound sync in Premiere Pro."
  },
  {
    id: 3,
    channel: "SDMotion Studio",
    title: "Dr Doom × Shiva Ji Cinematic Intro",
    category: "Motion & VFX",
    year: "2026",
    role: "Motion Graphics · VFX · AI-assisted",
    thumbnail: "assets/images/project-03.webp",
    video: "https://www.youtube.com/watch?v=u1zRL20J79I",
    tools: ["After Effects", "Photoshop", "AI tools"],
    description: "An original fan-made cinematic animation and VFX experiment blending superhero visuals with Indian mythology — Dr. Doom-inspired visuals meet Shiva Ji-inspired storytelling.",
    creativeApproach: "Built with motion graphics, VFX, cinematic lighting, typography and AI-assisted workflows to create a powerful, mythic visual experience."
  },
  {
    id: 4,
    channel: "SDMotion Studio",
    title: "Movie Title Animation",
    category: "Motion & VFX",
    year: "2026",
    role: "Motion Graphics · Typography · VFX",
    thumbnail: "assets/images/project-04.webp",
    video: "https://www.youtube.com/watch?v=ogAMplUs_Uo",
    tools: ["After Effects", "Photoshop"],
    description: "A cinematic movie title reveal for Visual Scape Production — dynamic typography, smooth transitions and dramatic visual effects.",
    creativeApproach: "Textured metallic type, space atmosphere, light and particle effects, timed for a big-screen feel."
  },
  {
    id: 5,
    channel: "Storyverse SD",
    title: "Why Yahoo Rejected Google",
    category: "Explainer",
    year: "2026",
    role: "Explainer Video · Motion Graphics · Edit",
    thumbnail: "assets/images/project-05.webp",
    video: "https://www.youtube.com/watch?v=lDiLy5HQ0W4",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    description: "Hindi tech-history explainer: from Larry Page and Sergey Brin's BackRub at Stanford and PageRank to the garage, Andy Bechtolsheim's $100,000 cheque — and why Yahoo never bought Google.",
    creativeApproach: "Story-led explainer with archival-style visuals, on-screen search UI motifs, kinetic typography and clear timeline graphics."
  },
  {
    id: 6,
    channel: "Storyverse SD",
    title: "BRICS Summit 2026: India's Gains",
    category: "Explainer",
    year: "2026",
    role: "News Explainer · Motion Graphics",
    thumbnail: "assets/images/project-06.webp",
    video: "https://www.youtube.com/watch?v=LWvwr9JkWZA",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    description: "Why BRICS Summit 2026 in New Delhi matters for India — trade & investment, energy security, technology and AI — explained in simple Hindi.",
    creativeApproach: "Data-led news explainer with flags, maps, icons and infographic motion to make policy topics easy to follow."
  },
  {
    id: 7,
    channel: "Storyverse SD",
    title: "Nepal Flood: Why No Warning?",
    category: "Explainer",
    year: "2026",
    role: "News Explainer · Map Animation",
    thumbnail: "assets/images/project-07.webp",
    video: "https://www.youtube.com/watch?v=4793VuAwujM",
    tools: ["After Effects", "GeoLayers 3", "Premiere Pro"],
    description: "How the Rasuwa flash flood hit Nepal, why questions were raised about warnings from China, and why river data from Tibet matters for India.",
    creativeApproach: "Map animation and cross-border data visuals explaining satellite monitoring, ground sensors and early-warning systems."
  },
  {
    id: 8,
    channel: "Storyverse SD",
    title: "Asian Games: India's 85 Medals Explained",
    category: "Explainer",
    year: "2026",
    role: "Sports Explainer · Motion Graphics",
    thumbnail: "assets/images/project-08.webp",
    video: "https://www.youtube.com/watch?v=usssKyRfONk",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    description: "India's historic 85-medal haul at the Asian Games — 21 gold, 27 silver, 37 bronze — with the complete winners list across sports.",
    creativeApproach: "Energetic sports graphics, medal-tally data visualisation and athlete cards built for quick, celebratory viewing."
  },
  {
    id: 9,
    channel: "Storyverse SD",
    title: "भारत और Asian Games | इतिहास",
    category: "Explainer",
    year: "2026",
    role: "History Explainer · Motion Graphics",
    thumbnail: "assets/images/project-09.webp",
    video: "https://www.youtube.com/watch?v=g3KPZavBlFI",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    description: "The full story of the Asian Games — how and where they began, India's first participation, key editions, India's performance and the link with the Olympics.",
    creativeApproach: "Timeline-driven explainer mixing archival textures with modern sports graphics."
  },
  {
    id: 10,
    channel: "Storyverse SD",
    title: "Happy Ganesh Chaturthi",
    category: "Social",
    year: "2026",
    role: "Festive Short · Social",
    thumbnail: "assets/images/project-10.webp",
    video: "https://youtube.com/shorts/nQldCFLKOyM",
    tools: [],
    description: "A festive vertical short wishing Happy Ganesh Chaturthi — गणपति बप्पा मोरया!",
    creativeApproach: "Rich festive visuals animated for a vertical, social-first format."
  }
];
