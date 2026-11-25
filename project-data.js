window.PROJECT_DATA = {
  "paper": {
    "title": "Refining Physical Understanding Through Contact: Agents as Tactile Policies for Robotic Manipulation",
    "authors": "Ziyong Wang, Yupei Lin, Runxuan Huang, Liang Lin, Dongyu Zhang, Guangrun Wang†",
    "affiliations": "Sun Yat-sen University, X-Era AI Lab, The Hong Kong Polytechnic University",
    "abstract": "General-purpose multimodal models have shown promise as direct robot action policies, yet whether they grasp the physics underlying real-world interactions and can apply that understanding to guide action remains underexplored. In contact-rich manipulation, an agent must understand how contact constrains object motion to determine why an action fails and how to adjust it. We present Agent-as-Tactile-Policy (ATP), which enables a frozen general-purpose multimodal model to directly generate actions from visual and tactile observations and interaction history. Expert demonstrations provide task knowledge and initial physical beliefs about action effects, but these beliefs still need to be tested through the agent's own interactions. Through Contact-Guided Recursive Self-Improvement (RSI), ATP writes and executes code to explore alternative actions and test and refine these beliefs based on the resulting physical responses. Without additional robotics-specific pretraining or per-task policy fine-tuning, ATP achieves state-of-the-art performance on the UniVTAC and ManiFeel simulation benchmarks and outperforms fine-tuned baselines in real-world manipulation. Our results show that tactile interaction helps test and refine physical understanding, leading to more effective contact-rich manipulation.",
    "bibtex": "",
    "emails": [
      "wangzy369@mail2.sysu.edu.cn",
      "donny.zhang@cpce-polyu.edu.hk",
      "wanggrun@gmail.com"
    ]
  },
  "links": {
    "paper": "https://arxiv.org/pdf/2610.28457",
    "code": "",
    "materials": "assets/documents/appendix.pdf"
  },
  "protocol": {
    "episodes": "UniVTAC: 100 seeds per task · ManiFeel: 50 seeds per task · Real: 10 trials per task",
    "inputs": "Task-specific visual, tactile, and proprioceptive inputs",
    "sources": "Baseline protocols follow the manuscript and original sources"
  },
  "figures": {
    "overview": {
      "src": "assets/images/method-overview-full.webp",
      "alt": "ATP overview: expert-derived Task Skills and ICL, Contact-Guided RSI, online control, and results on UniVTAC and ManiFeel.",
      "caption": "Expert demonstrations initialize task knowledge and physical beliefs. Contact-Guided RSI refines those beliefs before the task context is frozen for test-time control."
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
      "src": "assets/videos/browser/insert-hole-analysis.mp4",
      "poster": "assets/images/insert-hole-analysis-poster.webp",
      "caption": "",
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
      "name": "ATP (Ours)"
    }
  ],
  "results": [],
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
  "recordings": [],
  "stages": [],
  "policy": {
    "model": "GPT-6-Astra",
    "reasoning": "xhigh",
    "developmentCases": 5,
    "maxRSIRounds": 4,
    "iclClips": 12,
    "evaluation": {
      "UniVTAC": 100,
      "ManiFeel": 50,
      "Real": 10
    }
  },
  "tactileAblation": {
    "task": "Insert Hole",
    "withTouch": 95,
    "withoutTouch": 25,
    "episodes": 20,
    "icl": false
  },
  "stageLabel": "Approach",
  "probeChapters": [
    {
      "step": 0,
      "end": 19,
      "title": "Approach",
      "summary": "Approach the opening under low load.",
      "time": 4.9999997019767764e-05,
      "label": "01 Approach"
    },
    {
      "step": 20,
      "end": 52,
      "title": "Near-vertical tests",
      "summary": "Probe, detect loading, then retract.",
      "time": 3.00244999999553,
      "label": "02 Near-vertical tests"
    },
    {
      "step": 53,
      "end": 139,
      "title": "Leftward search",
      "summary": "Rock left and retest; entry remains uncertain.",
      "time": 9.30029999999702,
      "label": "03 Leftward search"
    },
    {
      "step": 140,
      "end": 157,
      "title": "Centering test",
      "summary": "Recenter the tip; repeated loading prompts withdrawal.",
      "time": 21.00685000000149,
      "label": "04 Centering test"
    },
    {
      "step": 158,
      "end": 190,
      "title": "Reverse the tilt",
      "summary": "Unload and explore the opposite inclination.",
      "time": 24.80610000000149,
      "label": "05 Reverse the tilt"
    },
    {
      "step": 191,
      "end": 218,
      "title": "Rightward entry",
      "summary": "The tube advances with small local marker changes.",
      "time": 29.10025,
      "label": "06 Rightward entry"
    },
    {
      "step": 219,
      "end": 230,
      "title": "Unload and realign",
      "summary": "New loading prompts retraction and correction.",
      "time": 34.90689999999851,
      "label": "07 Unload and realign"
    },
    {
      "step": 231,
      "end": 253,
      "title": "Resume and verify",
      "summary": "Retest, check settling, and continue to success.",
      "time": 38.10354999999702,
      "label": "08 Resume and verify"
    }
  ]
};
