/* =========================================================================
   PROJECTS.JS — the ONLY file you need to edit to update your portfolio.

   Every project below is a PLACEHOLDER SLOT. Titles, descriptions, and
   creative-approach text are generic placeholders marking where your real
   project information goes — they do not describe or claim any actual
   work. Replace every field with your own project details before publishing.

   Paths are relative to index.html, e.g. "assets/images/project-01.webp"
   means the file lives at /assets/images/project-01.webp next to index.html.

   TOOLS: only pull from your confirmed toolset below. Add/remove per
   project as needed — do not introduce software you don't use.
     Adobe After Effects, Adobe Premiere Pro, Adobe Photoshop,
     Adobe Illustrator, Blender, GeoLayers, VizRT, Canva, 3ds Max,
     ChatGPT, Midjourney, Adobe Firefly, Runway, Kling AI,
     Google Gemini, Google Flow

   If a file path doesn't exist yet, the site fails gracefully:
   - missing thumbnail  -> a styled placeholder is shown instead
   - missing video       -> hover preview / player simply stays on the poster
   So you can wire up real media gradually, project by project.
   ========================================================================= */

/* -------------------------------------------------------------------------
   VIDEO LINKS — "video" me seedha link paste kar sakte ho:
     YouTube   : "https://www.youtube.com/watch?v=XXXXXXXXXXX"  (ya youtu.be/…)
     Shorts    : "https://youtube.com/shorts/XXXXXXXXXXX"       (vertical player)
     Instagram : "https://www.instagram.com/reel/XXXXXXX/"      (vertical player)
     Drive     : "https://drive.google.com/file/d/FILE_ID/view" (sharing: "Anyone with the link")
     Vimeo     : "https://vimeo.com/123456789"
     Local MP4 : "assets/videos/project-02.mp4"
   YouTube/Drive ka thumbnail apne aap aa jata hai — "thumbnail" khaali chhod sakte ho.
   Instagram ke liye thumbnail image dena achha rahega.
   Card dikhane ke liye "title" bharo (jo title "[" se shuru hai wo hide rehta hai).
   ------------------------------------------------------------------------- */

window.PROJECTS = [
  {
  id: 1,
  title: "Marvel Inspired Cinematic Intro",
  category: "Motion Graphics",
  year: "2026",
  role: "Motion Graphics · VFX · Title Design",

  thumbnail: "assets/images/project-01.webp",

  video: "assets/videos/project-01-web.mp4",
  link: "https://www.youtube.com/watch?v=_jRg7JIg3BQ",   // "Watch on YouTube" button   // compressed 720p (2.9 MB). Original: project-01.mp4

  gallery: [],

  additionalVideos: [],

  tools: [
    "After Effects",
    "Premiere Pro",
    "Photoshop"
  ],

  description: "A cinematic logo reveal crafted with dynamic animation, dramatic lighting, typography and powerful transitions to create a high-impact Marvel-style opening sequence.",

  creativeApproach: "Focused on cinematic pacing, dramatic visual transitions and dynamic typography to create an immersive superhero-style opening experience."
},
  {
    id: 2,
    title: "Dr Doom × Shiva Ji Cinematic Intro",
    category: "VFX & AI Motion",
    year: "2026",
    role: "Motion Graphics · VFX · AI-assisted",
    thumbnail: "assets/images/project-02.webp",
    video: "https://www.youtube.com/watch?v=u1zRL20J79I",
    gallery: [],
    additionalVideos: [],
    tools: ["After Effects", "Photoshop", "AI tools"],
    description: "An original fan-made cinematic animation and VFX experiment blending superhero visuals with Indian mythology — Dr. Doom-inspired visuals meet Shiva Ji-inspired storytelling.",
    creativeApproach: "Built with motion graphics, VFX, cinematic lighting, typography and AI-assisted creative workflows to create a powerful, mythic visual experience."
  },
  {
    id: 3,
    title: "Movie Title Animation",
    category: "Title Design",
    year: "2026",
    role: "Motion Graphics · Typography · VFX",
    thumbnail: "assets/images/project-03.webp",
    video: "https://www.youtube.com/watch?v=ogAMplUs_Uo",
    gallery: [],
    additionalVideos: [],
    tools: ["After Effects", "Photoshop"],
    description: "A cinematic movie title reveal for Visual Scape Production — dynamic typography, smooth transitions and dramatic visual effects.",
    creativeApproach: "Focused on a powerful title reveal: textured metallic type, space atmosphere, light and particle effects, timed for a big-screen feel."
  },
  {
    id: 4,
    title: "[Project Title — Social Media Creative]",
    category: "Social Media Creative",
    year: "2026",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-04.webp",
    video: "assets/videos/project-04.mp4",
    gallery: [
      "assets/images/project-04-01.webp",
      "assets/images/project-04-02.webp",
      "assets/images/project-04-03.webp",
      "assets/images/project-04-04.webp"
    ],
    additionalVideos: [
      "assets/videos/project-04-02.mp4"
    ],
    tools: ["Adobe After Effects", "Adobe Premiere Pro", "Canva"],
    description: "[Placeholder — add a description of this social media creative project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 5,
    title: "[Project Title — 3D Motion Graphics]",
    category: "3D Motion Graphics",
    year: "2025",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-05.webp",
    video: "assets/videos/project-05.mp4",
    gallery: [
      "assets/images/project-05-01.webp",
      "assets/images/project-05-02.webp",
      "assets/images/project-05-03.webp"
    ],
    additionalVideos: [
      "assets/videos/project-05-02.mp4",
      "assets/videos/project-05-03.mp4"
    ],
    tools: ["Blender", "3ds Max", "Adobe After Effects"],
    description: "[Placeholder — add a description of this 3D motion graphics project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 6,
    title: "[Project Title — AI Creative]",
    category: "AI Creative",
    year: "2026",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-06.webp",
    video: "assets/videos/project-06.mp4",
    gallery: [
      "assets/images/project-06-01.webp",
      "assets/images/project-06-02.webp",
      "assets/images/project-06-03.webp"
    ],
    additionalVideos: [
      "assets/videos/project-06-02.mp4"
    ],
    tools: ["Midjourney", "Adobe Firefly", "ChatGPT", "Adobe After Effects"],
    description: "[Placeholder — add a description of this AI creative project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 7,
    title: "[Project Title — Brand Animation]",
    category: "Brand Animation",
    year: "2025",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-07.webp",
    video: "assets/videos/project-07.mp4",
    gallery: [
      "assets/images/project-07-01.webp",
      "assets/images/project-07-02.webp"
    ],
    additionalVideos: [
      "assets/videos/project-07-02.mp4",
      "assets/videos/project-07-03.mp4"
    ],
    tools: ["Adobe After Effects", "Adobe Illustrator", "Blender"],
    description: "[Placeholder — add a description of this brand animation project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 8,
    title: "[Project Title — News Graphics]",
    category: "News Graphics",
    year: "2025",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-08.webp",
    video: "assets/videos/project-08.mp4",
    gallery: [
      "assets/images/project-08-01.webp",
      "assets/images/project-08-02.webp",
      "assets/images/project-08-03.webp"
    ],
    additionalVideos: [
      "assets/videos/project-08-02.mp4"
    ],
    tools: ["VizRT", "GeoLayers", "Adobe After Effects", "Adobe Photoshop"],
    description: "[Placeholder — add a description of this news graphics project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 9,
    title: "[Project Title — YouTube Video]",
    category: "YouTube Video",
    year: "2026",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-09.webp",
    video: "assets/videos/project-09.mp4",
    gallery: [
      "assets/images/project-09-01.webp",
      "assets/images/project-09-02.webp"
    ],
    additionalVideos: [
      "assets/videos/project-09-02.mp4",
      "assets/videos/project-09-03.mp4"
    ],
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop"],
    description: "[Placeholder — add a description of this YouTube video project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 10,
    title: "[Project Title — Instagram / Reels]",
    category: "Instagram / Reels",
    year: "2026",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-10.webp",
    video: "assets/videos/project-10.mp4",
    gallery: [
      "assets/images/project-10-01.webp",
      "assets/images/project-10-02.webp",
      "assets/images/project-10-03.webp"
    ],
    additionalVideos: [
      "assets/videos/project-10-02.mp4"
    ],
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "Canva"],
    description: "[Placeholder — add a description of this Instagram / Reels project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 11,
    title: "[Project Title — Explainer Video]",
    category: "Explainer Video",
    year: "2025",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-11.webp",
    video: "assets/videos/project-11.mp4",
    gallery: [
      "assets/images/project-11-01.webp",
      "assets/images/project-11-02.webp"
    ],
    additionalVideos: [
      "assets/videos/project-11-02.mp4",
      "assets/videos/project-11-03.mp4"
    ],
    tools: ["Adobe After Effects", "Adobe Illustrator", "Adobe Premiere Pro"],
    description: "[Placeholder — add a description of this explainer video project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 12,
    title: "[Project Title — Typography Animation]",
    category: "Typography Animation",
    year: "2026",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-12.webp",
    video: "assets/videos/project-12.mp4",
    gallery: [
      "assets/images/project-12-01.webp",
      "assets/images/project-12-02.webp",
      "assets/images/project-12-03.webp"
    ],
    additionalVideos: [
      "assets/videos/project-12-02.mp4"
    ],
    tools: ["Adobe After Effects", "Adobe Illustrator"],
    description: "[Placeholder — add a description of this typography animation project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 13,
    title: "[Project Title — 3D Visualization]",
    category: "3D Visualization",
    year: "2025",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-13.webp",
    video: "assets/videos/project-13.mp4",
    gallery: [
      "assets/images/project-13-01.webp",
      "assets/images/project-13-02.webp",
      "assets/images/project-13-03.webp"
    ],
    additionalVideos: [
      "assets/videos/project-13-02.mp4",
      "assets/videos/project-13-03.mp4"
    ],
    tools: ["Blender", "3ds Max", "Adobe Photoshop"],
    description: "[Placeholder — add a description of this 3D visualization project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 14,
    title: "[Project Title — Graphic Design]",
    category: "Graphic Design",
    year: "2026",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-14.webp",
    video: "assets/videos/project-14.mp4",
    gallery: [
      "assets/images/project-14-01.webp",
      "assets/images/project-14-02.webp",
      "assets/images/project-14-03.webp",
      "assets/images/project-14-04.webp"
    ],
    additionalVideos: [],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
    description: "[Placeholder — add a description of this graphic design project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 15,
    title: "[Project Title — Editorial Motion Graphics]",
    category: "Editorial Motion Graphics",
    year: "2025",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-15.webp",
    video: "assets/videos/project-15.mp4",
    gallery: [
      "assets/images/project-15-01.webp",
      "assets/images/project-15-02.webp"
    ],
    additionalVideos: [
      "assets/videos/project-15-02.mp4"
    ],
    tools: ["Adobe After Effects", "Adobe Photoshop", "Adobe Illustrator"],
    description: "[Placeholder — add a description of this editorial motion graphics project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 16,
    title: "[Project Title — Data Visualization]",
    category: "Data Visualization",
    year: "2026",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-16.webp",
    video: "assets/videos/project-16.mp4",
    gallery: [
      "assets/images/project-16-01.webp",
      "assets/images/project-16-02.webp",
      "assets/images/project-16-03.webp"
    ],
    additionalVideos: [
      "assets/videos/project-16-02.mp4",
      "assets/videos/project-16-03.mp4"
    ],
    tools: ["Adobe After Effects", "GeoLayers", "Adobe Illustrator"],
    description: "[Placeholder — add a description of this data visualization project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 17,
    title: "[Project Title — Show Opener]",
    category: "Show Opener",
    year: "2025",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-17.webp",
    video: "assets/videos/project-17.mp4",
    gallery: [
      "assets/images/project-17-01.webp",
      "assets/images/project-17-02.webp"
    ],
    additionalVideos: [
      "assets/videos/project-17-02.mp4",
      "assets/videos/project-17-03.mp4"
    ],
    tools: ["Adobe After Effects", "Blender", "Adobe Premiere Pro"],
    description: "[Placeholder — add a description of this show opener project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 18,
    title: "[Project Title — Promotional Video]",
    category: "Promotional Video",
    year: "2026",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-18.webp",
    video: "assets/videos/project-18.mp4",
    gallery: [
      "assets/images/project-18-01.webp",
      "assets/images/project-18-02.webp",
      "assets/images/project-18-03.webp"
    ],
    additionalVideos: [
      "assets/videos/project-18-02.mp4"
    ],
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop"],
    description: "[Placeholder — add a description of this promotional video project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 19,
    title: "[Project Title — AI Video Project]",
    category: "AI Video Project",
    year: "2026",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-19.webp",
    video: "assets/videos/project-19.mp4",
    gallery: [
      "assets/images/project-19-01.webp",
      "assets/images/project-19-02.webp"
    ],
    additionalVideos: [
      "assets/videos/project-19-02.mp4",
      "assets/videos/project-19-03.mp4"
    ],
    tools: ["Runway", "Kling AI", "Google Flow", "Google Gemini", "Adobe Premiere Pro"],
    description: "[Placeholder — add a description of this AI video project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  },
  {
    id: 20,
    title: "[Project Title — Creative Direction]",
    category: "Creative Direction",
    year: "2026",
    role: "[Your role on this project]",
    thumbnail: "assets/images/project-20.webp",
    video: "assets/videos/project-20.mp4",
    gallery: [
      "assets/images/project-20-01.webp",
      "assets/images/project-20-02.webp",
      "assets/images/project-20-03.webp",
      "assets/images/project-20-04.webp"
    ],
    additionalVideos: [
      "assets/videos/project-20-02.mp4",
      "assets/videos/project-20-03.mp4"
    ],
    tools: ["Adobe After Effects", "Adobe Premiere Pro", "Blender", "Adobe Photoshop"],
    description: "[Placeholder — add a description of this creative direction project.]",
    creativeApproach: "[Placeholder — describe your creative approach for this project.]"
  }
];
