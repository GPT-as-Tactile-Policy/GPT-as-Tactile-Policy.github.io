/* Manuscript data and figures exported from the supplied PowerPoint.
   Result columns follow the five-task order below.
   Public paper links, recordings, and publication metadata remain pending. */
window.PROJECT_DATA = {
  "paper": {
    "title": "GPT-6-Astra Understands Touch and Outperforms Vision–Tactile–Language–Action Models",
    "authors": "Ziyong Wang, Yupei Lin, Runxuan Huang, Liang Lin, Dongyu Zhang†, Guangrun Wang†",
    "affiliations": "Sun Yat-sen University, X-Era AI Lab",
    "abstract": "General-purpose multimodal models have shown promise as direct robot action policies, but their physical understanding remains underexplored. Taking contact-rich manipulation as a typical setting, we investigate the physical understanding of these models and their ability to use this understanding to guide subsequent control actions. Contact-rich manipulation requires interpreting tactile feedback and adjusting actions after obstruction. Existing learned tactile policies acquire these capabilities through specialized pretraining and per-task optimization, with substantial data and training costs. We present GPT-as-Tactile-Policy, which summarizes expert demonstrations into task guidance and tactile references for contact assessment and corrective action. GPT-6-Astra combines this context with multimodal observations and interaction history to generate control commands and adjust actions through contact feedback. Without additional robotics-specific pretraining or per-task policy fine-tuning, our method achieves 93.8% mean success across five UniVTAC tasks. Overall performance is comparable to state-of-the-art policies, with higher success on selected tasks. On Insert Hole, tactile feedback improves success from 31% to 99%. Execution analysis further demonstrates contact-guided probing and correction, supporting manipulation progress through explicit expert experience and online feedback.",
    "bibtex": ""
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
      "src": "assets/images/contact-adjustment.webp",
      "alt": "Contact-guided adjustment on Insert Hole: failed insertion, pose adjustment, and successful insertion, with bilateral tactile observations below the corresponding scene keyframes.",
      "caption": "Contact-guided adjustment on Insert Hole. Scene keyframes and bilateral tactile observations show a failed attempt, adjustment, and successful insertion."
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
      "src": "",
      "poster": "",
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
  "recordings": [],
  "stages": [
    {
      "label": "Near-vertical",
      "title": "Probe, then retract.",
      "description": "The near-vertical probing sequence is followed by retraction and reduced marker displacement. The response supports ending the current attempt and reconsidering the local approach direction.",
      "rms": null,
      "markerSrc": "",
      "markerAlt": ""
    },
    {
      "label": "Leftward",
      "title": "Relieve contact and realign.",
      "description": "The leftward attempt follows a similar probe–withdraw pattern. Withdrawal accompanies reduced marker displacement, relieving local deformation before the policy revises its approach.",
      "rms": null,
      "markerSrc": "",
      "markerAlt": ""
    },
    {
      "label": "Rightward",
      "title": "Retain the direction and advance.",
      "description": "The rightward probe produces smaller marker displacement, followed by continued advancement. Contact changes and subsequent motion jointly support retaining an approach that permits insertion.",
      "rms": null,
      "markerSrc": "",
      "markerAlt": ""
    }
  ],
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
  "stageLabel": "Approach"
};
