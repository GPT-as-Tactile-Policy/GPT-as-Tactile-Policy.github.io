GPT-as-Tactile-Policy — Website v2
=================================

Standalone English academic project website:
https://gpt-as-tactile-policy.github.io/

PREVIEW
-------
Open index.html. No installation or build is required. All assets are local;
no external framework, font, or analytics is loaded.

CURRENT STRUCTURE
-----------------
1. Project title, authors, affiliation, and resource links.
2. Abstract.
3. Method overview from panel A of the supplied PowerPoint, with a full
   desktop framework and three component crops for mobile screens.
4. Experiments: five-task results table and one task suite. Each task occurs
   once in this suite. Insert Hole, Grasp Classify, Lift Bottle, and Pull-out
   Key have playable success recordings, alongside Lift Can.
5. Tactile ablation and the manuscript's qualitative behavior comparison.
6. Resources and citation placeholder.

The independent gallery contains the same five supplied recordings with
search and filters. Only the five manuscript tasks may be displayed.
The dedicated Insert Hole analysis uses the supplied episode 1000029. It
contains all 254 observations and the public reasons from 63 decisions.
Matched marker fields distinguish PPT probe references from decision
increments and original-reference RMS. Gain is fixed at 3x. See the local
review package for calculations and provenance.

SOURCES AND PENDING MATERIAL
---------------------------
Title, authors, affiliation, method, results, and ablation values follow the
active supplied manuscript. Results were transcribed, not reproduced.
The main table retains five tasks, five methods, and the reported averages.
The five H.264 task recordings retain the supplied bytes and timing, including
scene, close-up, and tactile views at 3:1. No autoplay or speed claim is used.
Raw observations, prompts, and execution logs are not included.
Paper/code links, verified BibTeX, publication details, further figures,
and runtime/cost measurements remain pending.

EDITING
-------
index.html          Homepage structure and static narrative.
gallery.html        Searchable recording gallery.
project-data.js     Paper metadata, figures, results, and recordings.
site.js             Task cards, media controls, table, and filters.
styles.css          Shared responsive design.
assets/             Supplied public media and original site icon.
.nojekyll           GitHub Pages static-site marker.

Use assets/ paths for local media. Keep data.tasks aligned with the five
manuscript tasks and data.recordings limited to those task IDs. Adding a
recording connects it to its task card and the gallery. Do not activate the
dedicated case study using an unrelated episode. After changing CSS or JS,
update their content-hash query parameters in both HTML entry points.

The visual direction references PhysicalRSI, with original site layout and
icons. The framework is exported from the supplied PowerPoint. Reference
site research content was not copied. The original repository template
attribution and license are retained in README.md.

GITHUB PAGES
------------
Publish this folder's contents at the repository root, including .nojekyll.
Do not upload the ZIP itself or add a project-site-v2/ nesting directory.
Confirm the deployed page after the Pages deployment succeeds.

Current contact-analysis revision: eight descriptive phases cover approach, near-vertical tests, leftward search, centering, tilt reversal, rightward entry, unloading/realignment, and resumed entry. The v2 WebM replay holds the last decision evidence during each action. Detailed public reasons are collapsed and opening them pauses playback. In particular step 219 shows renewed loading, while step 222 shows reverse displacement during unloading. The older PPT-reference analysis is retained only as a previous revision.
