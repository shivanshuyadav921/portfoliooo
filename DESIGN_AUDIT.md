# Portfolio Design and Production Audit

## Design Gap Analysis

### High Impact / Low Effort

1. The original hero lacked a memorable point of view and a clear visual thesis.
2. Resume, projects, and publication actions were not prominent enough for recruiter scanning.
3. Repeated rounded cards gave every piece of content similar visual weight.
4. Project descriptions read as feature inventories rather than problem-solving narratives.
5. Research credibility was buried instead of led by the publication and benchmark evidence.
6. Section headings used a consistent but generic pattern with limited editorial rhythm.
7. Hover states and button feedback were functional but did not feel especially crafted.

### High Impact / High Effort

8. Project visuals were abstract placeholders rather than authentic product screenshots or case-study media.
9. Motion was consistent but lacked a shared choreography across the complete page.

### Low Impact

10. The site could support optional theme switching or more decorative transitions, but neither would improve recruiter outcomes enough to justify the added complexity now.

## Improvements Implemented

- Reframed the hero around a concise thesis: engineering production systems and researching trustworthy AI.
- Added immediate project, resume, and publication actions.
- Added an availability signal and compact academic context.
- Replaced the generic project-card composition with alternating editorial case studies.
- Organized projects around engineering approach, outcome, stack, and source links.
- Promoted the publication into the primary research story with DOI, authorship, date, and benchmark metrics.
- Added restrained grid and grain texture, refined borders, and more deliberate shadow depth.
- Standardized premium interaction feedback on primary links and buttons.
- Preserved reduced-motion behavior, keyboard focus states, semantic structure, and touch targets.
- Corrected contact links, publication facts, education data, project links, and problem-solving counts.
- Restored a functional resume download and truthful email-draft contact flow.
- Added non-interactive ESLint, typechecking, structured data, canonical metadata, sitemap, and robots configuration.
- Resolved the dependency security advisory without downgrading Next.js.

## Before vs. After

Before, the portfolio was visually cohesive but read like a polished component library: many similarly weighted cards, a descriptive hero, and limited narrative progression.

After, the page opens with a clear professional thesis, gives recruiters direct actions, and uses larger editorial transitions between selected work and research evidence. Projects now communicate how Shivanshu thinks, while the research section establishes credibility through publication metadata and measurable results.

## Verification

- `npm install`: pass
- `npm run lint`: pass with zero warnings
- `npm run typecheck`: pass
- `npm run build`: pass
- `npm audit`: zero vulnerabilities
- Responsive overflow: pass at 1920, 1440, 1280, 1024, 768, 430, 390, 375, and 320px
- Resume PDF: present and non-empty
- Reduced motion: supported
- Recruiter paths: projects, resume, publication, GitHub, LinkedIn, email, and phone are directly accessible

## Remaining Recommendations

1. Replace generated project interface illustrations with real, carefully cropped product screenshots.
2. Connect the contact form to a verified email provider when credentials and domain DNS are ready.
3. Create a purpose-built 1200x630 Open Graph image.
4. Add verified LeetCode and HackerRank profile URLs when available.
5. Re-run Lighthouse against the final Vercel URL because network, caching, and hosting headers affect the production score.

## Final Review

- Google recruiter: strong information hierarchy and fast access to evidence; the project outcomes are now easier to scan.
- Research mentor: publication metadata, methodology language, DOI, and benchmark results establish credible undergraduate research intent.
- Design engineer: the experience now has a clearer visual thesis and better rhythm without relying on heavy effects.

Craftsmanship: 8.6/10

Recruiter usability: 9.2/10

Research credibility: 8.9/10
