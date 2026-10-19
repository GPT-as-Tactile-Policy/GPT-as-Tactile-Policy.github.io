GPT-as-Tactile-Policy — Website v2
=================================

English academic project website for:
https://github.com/GPT-as-Tactile-Policy/GPT-as-Tactile-Policy.github.io

This version follows the visual direction of PhysicalRSI:
https://mmlab.hk/research/PhysicalRSI
Large serif typography, a cool pale background, fine dividers, and wide
research diagrams. The website layout and placeholder task icons are
original. The overview and Insert Hole keyframes were exported from the
user-supplied PowerPoint. Reference-site research content was not copied.

This folder contains the source for the GitHub Pages project website.

PREVIEW
-------
Open index.html in your browser. No installation or build is needed.
All files work locally; no external framework, font, or analytics is loaded.

FILES
-----
index.html          English research homepage.
gallery.html        Searchable task and recording gallery.
styles.css          Shared responsive design.
project-data.js     Paper information, figures, videos, results, and stages.
site.js             Accessible tabs, data rendering, media, and filters.
assets/favicon.svg  Original project icon.
.nojekyll           GitHub Pages static-site marker.

WHAT IS INCLUDED
----------------
1. Paper title, authors, affiliation, resource links, then the abstract.
2. Method overview from panel A of the supplied PowerPoint. Desktop uses
   the complete framework; phones show its three component regions.
3. Project video section, hidden until a real recording is supplied.
4. Main results for five evaluated UniVTAC tasks and four baselines.
5. Insert Hole case with three selectable probing approaches.
6. Tactile ablation, behavior comparison, and further-analysis slots.
7. Independent video gallery with search and future recording filters.

Overview and contact-adjustment images retain the rendered PowerPoint
content. They are lossless WebP exports. The original PPTX is unchanged.
Task icons and the pending marker-field graphic remain conceptual.
The Insert Hole descriptions follow the manuscript's three
probing sequences; the graphics are not video synchronization or measured
marker fields.

PLACEHOLDERS
------------
Title, authors, affiliation, methods, and numerical results were populated
from the active text of the supplied manuscript. Commented-out drafts were
excluded. The title's subject-verb agreement was corrected to Outperforms.
Results were transcribed, not independently reproduced. The main table
uses five tasks and five methods; all means match their task averages.
Public paper/code links, publication details, additional figures, video footage,
runtime/cost measurements, and BibTeX remain pending.
No video placeholder artwork or decorative play controls are displayed.
Reconcile the website with the final paper when manuscript values change.

ADDING REAL MATERIALS
---------------------
Edit project-data.js. Use relative paths beginning with assets/ for files,
or an HTTPS URL for externally hosted resources.

paper:    Final title, authors, affiliations, verified BibTeX.
links:    Paper, implementation code, and supporting-material URLs.
protocol: Evaluation episodes, input conditions, baseline sources.
figures:  Overview and case-study figure path, alt text, and caption.
videos:   Teaser and Insert Hole MP4, optional poster, caption, speed,
          and English WebVTT captions.
results:  Percentages from 0 to 100, in the existing five-task order.
          Mean is calculated only when all task values are valid, unless
          an explicit verified mean is supplied.
stages:   Probing-approach narrative and optional marker-field image.
tactileAblation: Paired Insert Hole success rates and test count.
recordings: One object per real video. The commented schema in the data
          file lists task, method, outcome, playback speed, and captions.

Create these folders when adding materials, for example:
assets/images/figure1.svg
assets/images/figure2.svg
assets/videos/overview.mp4
assets/videos/insert-hole.mp4
assets/captions/overview.vtt

When adding data, review the corresponding pending labels in the HTML.
Some record-status notices and explanatory placeholder copy are editorial
text and intentionally do not change automatically. Filled resource links,
provided images, videos, and citation controls activate from the data file.

Keyboard: Arrow Left/Right, Home, End navigate the probing approaches.
The gallery's method and outcome filters activate when recordings exist.
Task links open the gallery with the selected task prefilled in search.
No paired-playback claim is made before actual synchronized media exists.

MANUAL GITHUB PAGES UPLOAD
-------------------------
1. Unzip the archive.
2. Upload the CONTENTS of this folder into the selected source folder of
   your repository. index.html must be at that folder's root.
3. Do not upload the ZIP itself as the website, and do not add an extra
   project-site-v2/ nesting layer.
4. Configure Pages to publish from the intended branch and source folder.
5. Confirm the deployed page after GitHub completes its deployment.

The package is intended to replace the earlier website files. Back up
existing repository content first and retain any unrelated files.

This website does not assign a license to the research implementation or
to future paper and video materials.
