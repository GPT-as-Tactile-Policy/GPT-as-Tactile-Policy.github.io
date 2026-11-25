# Agent-as-Tactile-Policy (ATP)

Project website: https://gpt-as-tactile-policy.github.io/

The static homepage uses the supplied arXiv manuscript, appendix, supplementary videos, and Search RSI package. No build step is required.

Current homepage:
- Complete ATP method diagram, with full-test-set performance values.
- UniVTAC: 100 seeds/task, 94.63% mean success, all eight task videos.
- ManiFeel: 50 seeds/task, 85.56% mean success, all nine task videos.
- Real: 10 trials/task, all three task videos.
- Four-task tactile ablation table; no redundant single-task bar chart.
- Contact analysis with integrated stage, seek, and fullscreen controls.
- RSI before/after video from the supplied action-synchronized comparison, seed 2104 (327 versus 55 actions; both successful). The historical comparison also changes input image presentation and is not a Skill-only ablation.

All 22 exposed video streams are encoded and verified at 60 fps. Camera motion is interpolated from lower-rate source recordings; tactile observations and annotations retain recorded values. The video gallery reuses the same sixty-fps files. Playback metadata is in assets/video-manifest.json. Original source media remain unmodified and are not used for page playback.

Main files: index.html, homepage.css, homepage.js, site.js, project-data.js, supplied-player.css, supplied-player.js, gallery.html. recordings.html redirects to the complete gallery. Appendix PDF: assets/documents/appendix.pdf. The existing arXiv paper link is retained.

The original repository template documentation and attribution are retained below for provenance; its customization instructions describe the earlier template, not the current homepage.

---

# Academic Project Page Template

> **Update (September 2025)**: This template has been modernized with better design, SEO, and mobile support. For the original version, see the [original-version branch](https://github.com/eliahuhorwitz/Academic-project-page-template/tree/original-version).

A clean, responsive template for academic project pages.


Example project pages built using this template are:
- https://horwitz.ai/probex
- https://vision.huji.ac.il/probegen
- https://horwitz.ai/mother
- https://horwitz.ai/spectral_detuning
- https://vision.huji.ac.il/ladeda
- https://vision.huji.ac.il/dsire
- https://horwitz.ai/podd
- https://dreamix-video-editing.github.io
- https://horwitz.ai/conffusion
- https://horwitz.ai/3d_ads/
- https://vision.huji.ac.il/ssrl_ad
- https://vision.huji.ac.il/deepsim



## Start using the template
To start using the template click on `Use this Template`.

The template uses html for controlling the content and css for controlling the style. 
To edit the websites contents edit the `index.html` file. It contains different HTML "building blocks", use whichever ones you need and comment out the rest.  

**IMPORTANT!** Make sure to replace the `favicon.ico` under `static/images/` with one of your own, otherwise your favicon is going to be a dreambooth image of me.

## What's New

- Modern, clean design with better mobile support
- Improved SEO with proper meta tags and structured data
- Performance improvements (lazy loading, optimized assets)
- More Works dropdown
- Copy button for BibTeX citations
- Better accessibility

## Components

- Teaser video
- Image carousel
- YouTube video embedding
- Video carousel
- PDF poster viewer
- BibTeX citation

## Customization

The HTML file has TODO comments showing what to replace:

- Paper title, authors, institution, conference
- Links (arXiv, GitHub, etc.)
- Abstract and descriptions  
- Videos, images, and PDFs
- Related works in the dropdown
- Meta tags for SEO and social sharing

### Meta Tags
The template includes meta tags for better search engine visibility and social media sharing. These appear in the `<head>` section and help with:
- Google Scholar indexing
- Social media previews (Twitter, Facebook, LinkedIn)
- Search engine optimization

Create a 1200x630px social preview image at `static/images/social_preview.png`.

## Tips

- Compress images with [TinyPNG](https://tinypng.com)
- Use YouTube for large videos (>10MB)  
- Replace the favicon in `static/images/`
- Works with GitHub Pages

## Acknowledgments
Parts of this project page were adopted from the [Nerfies](https://nerfies.github.io/) page.
Project website for GPT-as-Tactile-Policy.

## Website License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.


Browser playback repair: the homepage now reuses the supplied supplementary HTML player markup, multi-sensor canvas layout, transport, and key moments. The RSI comparison and Insert Hole analysis render decoded frames to canvases as well. All exposed videos use H.264 Constrained Baseline, 60 fps, browser-safe color metadata, and fast-start files in assets/videos/browser/. Actual frame-paint counters and sampled pixel ranges were checked at multiple playback positions. The two redundant real-world resource buttons were removed.

Presentation refinement: the method-to-benchmark gap is 32 px on desktop. Mean percentage columns use two decimal places consistently. The RSI comparison uses a cropped 1280×600, 60 fps video without its previous heading/counters or footer text, and no external caption. Before/after Skill summaries appear above the comparison; expandable full source Skills and original Markdown downloads are included.

Approved layout applied: editorial title, full method diagram, independent UniVTAC/ManiFeel/Real sections with task thumbnail switching, expandable complete results, and an RSI video beside before/after Skills. No build step is required; GitHub Pages serves index.html from the repository root.
