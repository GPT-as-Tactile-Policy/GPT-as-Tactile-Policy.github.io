/* Edit this file to add verified paper information, results and media.
   Empty strings and null values are intentional placeholders, not results.
   Paths are relative to the website root. No build step is required. */
window.PROJECT_DATA = {
  paper: { title: "", authors: "", affiliations: "", bibtex: "" },
  links: { paper: "", code: "", materials: "" },
  protocol: { episodes: "", inputs: "", sources: "" },
  figures: {
    overview: { src: "", alt: "", caption: "" },
    caseStudy: { src: "", alt: "", caption: "" }
  },
  videos: {
    teaser: { src: "", poster: "", caption: "", speed: "", captions: "" },
    insertHole: { src: "", poster: "", caption: "", speed: "", captions: "" }
  },
  methods: [
    { id: "ours", name: "GPT-as-Tactile-Policy" },
    { id: "act-univtac", name: "ACT + UniVTAC Encoder" },
    { id: "vital", name: "VITaL" }
  ],
  // Values follow the order of tasks below. Use verified percentages (0–100).
  // mean may stay null: it is calculated only when all eight values are present.
  results: [
    { method: "ours", values: [null,null,null,null,null,null,null,null], mean: null },
    { method: "act-univtac", values: [null,null,null,null,null,null,null,null], mean: null },
    { method: "vital", values: [null,null,null,null,null,null,null,null], mean: null }
  ],
  tasks: [
    { id: "lift-bottle", name: "Lift Bottle", category: "Pose & grasping", description: "Grasping and lifting with contact feedback.", icon: "bottle", color: "#e9f0e2", keywords: "grasp lift bottle" },
    { id: "pull-out-key", name: "Pull-out Key", category: "Contact interaction", description: "Extraction under contact constraints.", icon: "key", color: "#e6eeea", keywords: "key pull extraction" },
    { id: "lift-can", name: "Lift Can", category: "Pose & grasping", description: "Object lifting and gripper–object interaction.", icon: "can", color: "#f0eee2", keywords: "can lift grasp" },
    { id: "put-bottle-in-shelf", name: "Put Bottle in Shelf", category: "Pose & placement", description: "Placement with changing spatial constraints.", icon: "shelf", color: "#e7eee4", keywords: "bottle put shelf placement" },
    { id: "insert-hole", name: "Insert Hole", category: "Constrained insertion", description: "Local probing, alignment, and insertion.", icon: "hole", color: "#dfece6", keywords: "insertion insert hole tube probe alignment" },
    { id: "insert-hdmi", name: "Insert HDMI", category: "Constrained insertion", description: "Connector alignment and contact adjustment.", icon: "connector", color: "#ecebe1", keywords: "insertion insert hdmi connector alignment" },
    { id: "insert-tube", name: "Insert Tube", category: "Constrained insertion", description: "Tube insertion with tactile observations.", icon: "tube", color: "#e5eeeb", keywords: "insertion insert tube alignment" },
    { id: "grasp-classify", name: "Grasp Classify", category: "Shape perception", description: "Contact observations for shape classification.", icon: "shapes", color: "#edf0e0", keywords: "grasp classify classification shapes" }
  ],
  // Add one object per real recording. Leave empty until recordings are ready.
  // Example format (replace every field with real metadata):
  // { task: "insert-hole", method: "ours", src: "assets/videos/filename.mp4",
  //   poster: "assets/images/filename.jpg", outcome: "success", speed: "1×",
  //   title: "Insert Hole — episode ID", caption: "Recorded views and conditions.",
  //   captions: "assets/captions/filename.vtt", notesUrl: "" }
  recordings: [],
  stages: [
    { label: "Local adjustment", title: "Establish a candidate alignment.", description: "The execution record will connect the initial local adjustment with the following probe and observed contact response.", rms: null, markerSrc: "", markerAlt: "" },
    { label: "Equal-depth probe", title: "Probe the current contact condition.", description: "The scene, executed probe depth, and bilateral marker increments will be shown together to make the contact response inspectable.", rms: null, markerSrc: "", markerAlt: "" },
    { label: "Feedback comparison", title: "Compare candidate local adjustments.", description: "Matched-depth probe measurements will be presented alongside their corresponding contact observations and actions.", rms: null, markerSrc: "", markerAlt: "" },
    { label: "Retraction", title: "Relate feedback to the next correction.", description: "The recorded retraction and return motion will be aligned with the preceding probe response.", rms: null, markerSrc: "", markerAlt: "" },
    { label: "Continuous refinement", title: "Continue refining the insertion pose.", description: "Subsequent advances, contact changes, and local corrections will be presented in execution order.", rms: null, markerSrc: "", markerAlt: "" },
    { label: "Insertion", title: "Inspect the final execution outcome.", description: "The final insertion view and the environment's recorded success result will be added with the complete trajectory.", rms: null, markerSrc: "", markerAlt: "" }
  ]
};
