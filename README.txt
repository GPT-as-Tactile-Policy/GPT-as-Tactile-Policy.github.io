GPT-as-Tactile-Policy — English project website
==============================================

This is a standalone, buildless website prepared for:
https://github.com/GPT-as-Tactile-Policy/GPT-as-Tactile-Policy.github.io

The package has not been uploaded or deployed to that repository.
No remote repository content was available for inspection.

QUICK PREVIEW
------------
Open index.html in a browser. The site has no external font, framework,
analytics, or package dependencies. Relative assets work offline.

FILES
-----
index.html           Research homepage.
gallery.html         Searchable task/recording gallery.
styles.css           Shared desktop and mobile layouts.
project-data.js      Paper metadata, resources, results, media and stages.
site.js              Rendering, filters, stage tabs, mobile navigation.
assets/favicon.svg   Original vector website icon.
.nojekyll            Static GitHub Pages marker.

PLACEHOLDER POLICY
------------------
No quantitative result, author identity, success outcome, recorded video,
or publication metadata has been invented. All result cells start as null
and render as a dash, not zero. Figures and videos have labelled slots.
The gripper and task drawings are conceptual vector illustrations.
The case-study tabs present a narrative outline, not synchronized evidence.

ADDING MATERIALS
----------------
Edit project-data.js with a plain-text/code editor:

1. paper: title, authors, affiliations and the verified BibTeX entry.
2. links: paper, implementation code and supporting-material URLs.
   Empty URLs stay visibly unavailable instead of becoming broken links.
3. protocol: episode counts, input conditions and baseline provenance.
4. figures: add a web-ready SVG/PNG/WebP path, alt text and a caption.
5. videos: add MP4 paths, optional posters, captions and playback speeds.
6. results: values follow the eight tasks in their existing order.
   Use numbers from 0 to 100. The mean is computed only when all eight
   values are available, unless an explicit verified mean is supplied.
7. recordings: add real task/method/outcome/media entries using the
   commented format in project-data.js. No recordings are present yet.
8. stages: update the descriptions, measured RMS and marker images.
9. Before final release, review the editorial text and pending labels
   in both HTML pages so they match the final paper and material status.

Suggested future paths (create these folders when needed):
assets/images/figure1.svg
assets/images/figure2.svg
assets/videos/overview.mp4
assets/videos/insert-hole.mp4
assets/captions/overview.vtt

Keep task order and the results-table header in sync if adding tasks.
The current results table includes example comparison METHOD NAMES only;
verify the final method list against the paper before entering data.
For paired playback, export a synchronized comparison video or implement
a dedicated paired player when the actual recording format is known.

GITHUB PAGES
------------
Upload the CONTENTS of this folder to the chosen source folder of the
repository, with index.html at the root of that folder. Do not upload
the ZIP as the website and do not nest everything under project-site/.
Configure GitHub Pages to publish from the selected branch and /(root).
The user-facing Chinese upload guide is provided separately.

See official instructions:
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

This package does not include a license for the research implementation
or promise a license for future paper/video materials.
