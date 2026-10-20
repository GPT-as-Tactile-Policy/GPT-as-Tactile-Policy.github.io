window.PROJECT_DATA = {
  "paper": {
    "title": "GPT-6-Astra Understands Touch and Outperforms Vision–Tactile–Language–Action Models",
    "authors": "Ziyong Wang, Yupei Lin, Runxuan Huang, Liang Lin, Dongyu Zhang†, Guangrun Wang†",
    "affiliations": "Sun Yat-sen University, X-Era AI Lab, The Hong Kong Polytechnic University",
    "abstract": "General-purpose multimodal models have shown promise as direct robot action policies, but their physical understanding remains underexplored. Taking contact-rich manipulation as a typical setting, we investigate the physical understanding of these models and their ability to use this understanding to guide subsequent control actions. Contact-rich manipulation requires interpreting tactile feedback and adjusting actions after obstruction. Existing learned tactile policies acquire these capabilities through specialized pretraining and per-task optimization, with substantial data and training costs. We present GPT-as-Tactile-Policy, which summarizes expert demonstrations into task guidance and tactile references for contact assessment and corrective action. GPT-6-Astra combines this context with multimodal observations and interaction history to generate control commands and adjust actions through contact feedback. Without additional robotics-specific pretraining or per-task policy fine-tuning, our method achieves 93.8% mean success across five UniVTAC tasks. Overall performance is comparable to state-of-the-art policies, with higher success on selected tasks. On Insert Hole, tactile feedback improves success from 31% to 99%. Execution analysis further demonstrates contact-guided probing and correction, supporting manipulation progress through explicit expert experience and online feedback.",
    "bibtex": "",
    "emails": [
      "wangzy369@mail2.sysu.edu.cn",
      "donny.zhang@cpce-polyu.edu.hk",
      "wanggrun@gmail.com"
    ]
  },
  "links": {
    "paper": "",
    "code": "",
    "materials": ""
  },
  "protocol": {
    "episodes": "100 fixed episodes per task · 500 total",
    "inputs": "Scene + wrist vision, proprioception, bilateral touch",
    "sources": "Baseline values follow the manuscript comparison table"
  },
  "figures": {
    "overview": {
      "src": "assets/images/method-overview.webp",
      "alt": "GPT-as-Tactile-Policy framework: scene and wrist RGB, bilateral touch, indentation and marker motion; expert demonstrations and episode context feed GPT-6-Astra; pose, gripper, and step targets are executed through inverse kinematics, and new observations return to the policy.",
      "caption": "Sensing and representation, policy context, and action execution."
    },
    "caseStudy": {
      "src": "",
      "alt": "",
      "caption": ""
    },
    "tactileComparison": {
      "src": "",
      "alt": "",
      "caption": ""
    }
  },
  "videos": {
    "teaser": {
      "src": "",
      "poster": "",
      "caption": "",
      "speed": "",
      "captions": ""
    },
    "insertHole": {
      "src": "assets/videos/insert-hole-1000029-analysis-v2.webm",
      "poster": "",
      "caption": "Complete episode 1000029 · 254 observations · Review playback with key-step holds.",
      "speed": "",
      "captions": ""
    }
  },
  "methods": [
    {
      "id": "act-univtac",
      "name": "ACT + UniVTAC Encoder"
    },
    {
      "id": "pi05",
      "name": "π₀.₅"
    },
    {
      "id": "n0-vtla",
      "name": "N₀-VTLA"
    },
    {
      "id": "n0-twam",
      "name": "N₀-TWAM"
    },
    {
      "id": "ours",
      "name": "GPT-as-Tactile-Policy (Ours)"
    }
  ],
  "results": [
    {
      "method": "act-univtac",
      "values": [
        24,
        29,
        99,
        71,
        46
      ],
      "mean": 53.8
    },
    {
      "method": "pi05",
      "values": [
        25,
        6,
        49,
        100,
        35
      ],
      "mean": 43
    },
    {
      "method": "n0-vtla",
      "values": [
        95,
        88,
        100,
        99,
        99
      ],
      "mean": 96.2
    },
    {
      "method": "n0-twam",
      "values": [
        99,
        93,
        94,
        58,
        79
      ],
      "mean": 84.6
    },
    {
      "method": "ours",
      "values": [
        99,
        95,
        98,
        93,
        84
      ],
      "mean": 93.8
    }
  ],
  "tasks": [
    {
      "id": "insert-hole",
      "name": "Insert Hole",
      "category": "Geometric alignment",
      "description": "Probe local contact conditions, refine alignment, and advance after a blocked descent.",
      "icon": "hole",
      "color": "#dfece6",
      "keywords": "insertion insert hole tube probe alignment"
    },
    {
      "id": "lift-can",
      "name": "Lift Can",
      "category": "Grasped-object manipulation",
      "description": "Manipulate and lift a grasped object using visual–tactile observations.",
      "icon": "can",
      "color": "#f0eee2",
      "keywords": "can lift grasp"
    },
    {
      "id": "grasp-classify",
      "name": "Grasp Classify",
      "category": "Tactile classification",
      "description": "Refine the object position near the target region to complete placement.",
      "icon": "shapes",
      "color": "#edf0e0",
      "keywords": "grasp classify classification shapes"
    },
    {
      "id": "lift-bottle",
      "name": "Lift Bottle",
      "category": "Grasped-object manipulation",
      "description": "Establish a grasp, lift and reorient the bottle, and release it in a stable pose.",
      "icon": "bottle",
      "color": "#e9f0e2",
      "keywords": "grasp lift bottle"
    },
    {
      "id": "pull-out-key",
      "name": "Pull-out Key",
      "category": "Constrained motion",
      "description": "Follow a test pull with an angle adjustment, outward motion, and extraction.",
      "icon": "key",
      "color": "#e6eeea",
      "keywords": "key pull extraction"
    }
  ],
  "recordings": [
    {
      "task": "insert-hole",
      "method": "ours",
      "src": "assets/videos/insert-hole-success.mp4",
      "poster": "",
      "outcome": "success",
      "speed": "",
      "seed": 1000009,
      "title": "Insert Hole",
      "caption": "Successful simulation episode. Scene replay from the supplied recording.",
      "captions": "",
      "notesUrl": "",
      "thumbnail": "assets/images/video-posters/insert-hole.webp"
    },
    {
      "task": "lift-can",
      "method": "ours",
      "src": "assets/videos/lift-can-success.mp4",
      "poster": "",
      "outcome": "success",
      "speed": "",
      "seed": 1000000,
      "title": "Lift Can",
      "caption": "Successful simulation episode.",
      "captions": ""
    },
    {
      "task": "grasp-classify",
      "method": "ours",
      "src": "assets/videos/grasp-classify-success.mp4",
      "poster": "",
      "outcome": "success",
      "speed": "",
      "seed": 1000018,
      "title": "Grasp Classify",
      "caption": "Successful simulation episode. Scene replay from the supplied recording.",
      "captions": "",
      "notesUrl": "",
      "thumbnail": "assets/images/video-posters/grasp-classify.webp"
    },
    {
      "task": "lift-bottle",
      "method": "ours",
      "src": "assets/videos/lift-bottle-success.mp4",
      "poster": "",
      "outcome": "success",
      "speed": "",
      "seed": 1000004,
      "title": "Lift Bottle",
      "caption": "Successful simulation episode. Scene replay from the supplied recording.",
      "captions": "",
      "notesUrl": "",
      "thumbnail": "assets/images/video-posters/lift-bottle.webp"
    },
    {
      "task": "pull-out-key",
      "method": "ours",
      "src": "assets/videos/pull-out-key-success.mp4",
      "poster": "",
      "outcome": "success",
      "speed": "",
      "seed": 1000000,
      "title": "Pull-out Key",
      "caption": "Successful simulation episode. Scene replay from the supplied recording.",
      "captions": "",
      "notesUrl": "",
      "thumbnail": "assets/images/video-posters/pull-out-key.webp"
    }
  ],
  "stages": [],
  "policy": {
    "model": "GPT-6-Astra",
    "reasoning": "xhigh",
    "constructionEpisodes": 40,
    "validationEpisodes": 10,
    "episodesPerTask": 100
  },
  "tactileAblation": {
    "task": "Insert Hole",
    "withTouch": 99,
    "withoutTouch": 31,
    "episodes": 100
  },
  "stageLabel": "Approach",
  "probeChapters": [
    {
      "step": 0,
      "end": 19,
      "title": "Approach",
      "summary": "Approach the opening under low load.",
      "time": 9.999999403953553e-05,
      "label": "01 Approach"
    },
    {
      "step": 20,
      "end": 52,
      "title": "Near-vertical tests",
      "summary": "Probe, detect loading, then retract.",
      "time": 6.00489999999106,
      "label": "02 Near-vertical tests"
    },
    {
      "step": 53,
      "end": 139,
      "title": "Leftward search",
      "summary": "Rock left and retest; entry remains uncertain.",
      "time": 18.60059999999404,
      "label": "03 Leftward search"
    },
    {
      "step": 140,
      "end": 157,
      "title": "Centering test",
      "summary": "Recenter the tip; repeated loading prompts withdrawal.",
      "time": 42.01370000000298,
      "label": "04 Centering test"
    },
    {
      "step": 158,
      "end": 190,
      "title": "Reverse the tilt",
      "summary": "Unload and explore the opposite inclination.",
      "time": 49.61220000000298,
      "label": "05 Reverse the tilt"
    },
    {
      "step": 191,
      "end": 218,
      "title": "Rightward entry",
      "summary": "The tube advances with small local marker changes.",
      "time": 58.2005,
      "label": "06 Rightward entry"
    },
    {
      "step": 219,
      "end": 230,
      "title": "Unload and realign",
      "summary": "New loading prompts retraction and correction.",
      "time": 69.81379999999702,
      "label": "07 Unload and realign"
    },
    {
      "step": 231,
      "end": 253,
      "title": "Resume and verify",
      "summary": "Retest, check settling, and continue to success.",
      "time": 76.20709999999404,
      "label": "08 Resume and verify"
    }
  ]
};
