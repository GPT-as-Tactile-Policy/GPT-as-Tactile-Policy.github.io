GPT-as-Tactile-Policy — Website v2
=================================

English academic project website for:
https://github.com/GPT-as-Tactile-Policy/GPT-as-Tactile-Policy.github.io

This version follows the visual direction of PhysicalRSI:
https://mmlab.hk/research/PhysicalRSI
Large serif typography, a cool pale background, fine dividers, and wide
research diagrams. All website code and conceptual illustrations here are
original. Reference-page text, logos, research results, and media were not copied.

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
1. Centered project identity, paper metadata slots, and resource links.
2. Interactive method overview: expert guidance, multimodal context,
   and action/contact feedback. A vertical diagram is used on phones.
3. Project overview video slot.
4. Main results table and the eight-task UniVTAC suite.
5. Insert Hole case with six selectable stages and a tactile-data slot.
6. Ablations, failure analysis, runtime/cost, and citation slots.
7. Independent video gallery with search and future recording filters.

The method diagram is a conceptual schematic. It is not the final Figure 1.
Task drawings and tactile dots are conceptual, not photographs or measured
sensor data. The Insert Hole tabs are an illustrative narrative outline,
not video synchronization or a measured trajectory.

PLACEHOLDERS
------------
Authors, final paper title, affiliations, publication details, measurements,
success rates, video footage, and BibTeX remain pending as requested.
No measured result has been invented. Null results render as a dash.
Decorative play symbols on empty video slots are not clickable players.
Methods in the comparison table must be checked against the final paper.

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
results:  Percentages from 0 to 100, in the existing eight-task order.
          Mean is calculated only when all task values are valid, unless
          an explicit verified mean is supplied.
stages:   Verified stage narrative, RMS displacement in px, marker image.
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

Keyboard: Arrow Left/Right, Home, End navigate both sets of tabs.
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
