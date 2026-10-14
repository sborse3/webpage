# Résumé and research profile

The polished résumé is available in `public/Shubhankar_Borse_Resume.docx`
(editable) and `public/Shubhankar_Borse_Resume.pdf` (distribution copy).
The uploaded `shubhankar_borse_2026_short.docx` is preserved and used directly as
the formatting template: Times New Roman, red section labels, gold dates, the
centered header, photo, QR code, contact icons, margins, and indented body layout.
The résumé is allowed to run beyond two pages.

The owner has since edited `public/Shubhankar_Borse_Resume.docx` directly; that
file is the current résumé source. Those edits include the revised Qualcomm
titles, location, project descriptions and summary. Reconcile them with the
generator and shared webpage data before regenerating the Word file. The work
authorization line, **U.S. Permanent Resident (Green Card holder) · No sponsorship
required**, was added directly below the contact links, preserving all other
Word content. Refresh the PDF from this Word file to retain the latest edits.
The four job entries in `constants.ts` now match the latest Word résumé's job
titles, Qualcomm location, role scopes and all 11 achievement bullets. The
webpage header also reads its employer and location from this metadata. Other
manual résumé changes still need reconciliation before using the generator.

Employer, location and dates share one line for Qualcomm and KLA. Spacing
separates employers and roles, all at the same 11-point body size, with regular
round bullets for achievements. Employers align at the left edge of the body;
role headings and scope lines are indented 0.20 inches, with achievement bullets
nested beneath them. A narrower body gutter reduces left whitespace.
Experience wording is shortened to keep the three-page layout readable.
Education follows both publication groups in the résumé and the publication
section on the webpage.

## Content and verification — 14 October 2026

- Career dates, original job titles, project contributions, education and awards
  come from the uploaded résumé and existing webpage. The three Qualcomm levels
  distinguish project ownership, cross-domain research, and research direction
  and commercialization. Qualcomm AI Research is the employer heading, with
  separate Staff, Senior and Deep Learning Researcher subsections. The latest
  job titles are **Staff AI Researcher**, **Sr. AI Researcher**, and **Deep Learning
  Researcher**; the personal header still uses **Staff AI Research Scientist**.
- **120+ patent filings and 13+ grants** are the owner's updated figures, supplied
  on 14 October 2026. These are portfolio totals, not a count of the selected
  public records in the website's patent list. Filings are not represented as
  distinct invention families. Individual statuses were not inferred from the
  updated aggregate grant count.
- Reviewing and committee dates were supplied by the owner: NeurIPS 2022–2026,
  CVPR 2022–2026, ICLR 2025–2026, AAAI committee 2024–2026, WACV 2022–2025, and
  multiple journals. Journal titles and review counts were not invented.
- The existing citation graph is a stored snapshot, not a newly verified live
  citation count. The résumé summary and webpage overview use the owner's
  updated approximate count, **~1,000 citations**.
- The header links to the personal webpage in place of Papers with Code.
  Awards use individual bullets, with the original gray text and gold dates.

## Publication sources

The [Google Scholar profile, sorted by date](https://scholar.google.com/citations?user=ZsgWCyMAAAAJ&hl=en&sortby=pubdate&pagesize=100)
was read through [a public text mirror](https://r.jina.ai/https://scholar.google.com/citations?user=ZsgWCyMAAAAJ&hl=en&sortby=pubdate&pagesize=100)
after direct requests returned HTTP 429. Paper metadata was cross-checked with
arXiv and conference records. Patent entries and duplicate versions in Scholar
were not counted as additional papers.

| Update | Source |
| --- | --- |
| Added HiPhy to website and résumé; labeled arXiv preprint (2026) | https://arxiv.org/abs/2610.02197 |
| Added MADI to website and résumé; labeled arXiv preprint (2025) | https://arxiv.org/abs/2507.13401 |
| Added omitted 4D Panoptic Segmentation paper to website | https://openaccess.thecvf.com/content/ICCV2023/html/Zhu_4D_Panoptic_Segmentation_as_Invariant_and_Equivariant_Field_Prediction_ICCV_2023_paper.html |
| Added Rapid Switching and Multi-Adapter Fusion as a separate workshop paper | https://arxiv.org/abs/2407.16712 |
| Corrected Sparse High Rank Adapters' NeurIPS paper link | https://arxiv.org/abs/2406.13175 |
| Verified Ar2Can's CVPR 2026 status and author order | https://arxiv.org/abs/2511.22690 |
| Used official title for Resolving the Identity Crisis (DisCo), CVPR 2026 | https://arxiv.org/abs/2510.01399 |
| Identified MultiHuman-Testbench's NeurIPS Datasets & Benchmarks track | https://arxiv.org/abs/2506.20879 |
| Corrected X3KD author order and recognized equal contribution | https://arxiv.org/html/2303.02203 |
| Recognized PosSAM equal contribution; used public preprint status | https://arxiv.org/html/2403.09620v1 |
| Updated Personalized OVSS to its conference title | https://openaccess.thecvf.com/content/ICCV2025/html/Park_Understanding_Personal_Concept_in_Open-Vocabulary_Semantic_Segmentation_ICCV_2025_paper.html |
| Linked SubZero and used public preprint status | https://arxiv.org/abs/2502.19673 |
| Added current public filing: generalized zero-shot content-style composition | https://patents.google.com/patent/US20260154856A1/en |
| Added current public filing: adaptive confidence thresholding | https://patents.google.com/patent/US20260154933A1/en |

The résumé lists all 14 first- and co-first-author papers before four selected
co-authored papers: HiPhy, MADI, Zero-Shot Adaptation of Parameter-Efficient
Fine-Tuning, and LoRA-X. Co-first authorship is identified explicitly. All paper
titles are linked to Google Scholar with visible blue underlining. The webpage
retains the broader publication record, with both paper and Scholar links.

Scholar citation URLs were taken from the profile listing above: 31 distinct
publication entries were matched by title, with conference/preprint duplicates
disambiguated. X-Align has no separate entry in that listing; its link uses an
exact-title Scholar search, rather than the X-Align++ journal entry. All 18 résumé
papers and all 32 webpage publications have Scholar links.

## Rebuilding

The generator reads `constants.ts`, keeping experience, education, patent totals,
awards and reviewing dates shared between the webpage and résumé. Publication
selection and template-based assembly live in `scripts/build_resume.py`.

```sh
npm install
python3 -m pip install -r scripts/requirements-resume.txt
python3 scripts/build_resume.py
libreoffice --headless --convert-to pdf --outdir public public/Shubhankar_Borse_Resume.docx
npm run build
```

Use Times New Roman for the original appearance. Keep the uploaded template in
the repository root. Review PDF pagination after substantial content changes,
because Word and LibreOffice can paginate differently.
Website changes and downloadable files are local until the repository is deployed.
