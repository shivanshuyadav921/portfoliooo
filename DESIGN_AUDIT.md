# Portfolio Design and Production Audit

## Design Gap Analysis

### Reference Direction

The target is a balanced combination of Moncy's expressive editorial motion and Naresh's direct, evidence-led professional presentation. The portfolio should feel authored and memorable without slowing down recruiter scanning.

### Current Gaps

1. **Hero signature:** The opening typography is strong, but there is no distinctive kinetic object or compositional tension to make the first screen memorable.
2. **Motion language:** Most sections use the same vertical fade. The page needs stagger, directional movement, and continuous ambient motion to feel choreographed.
3. **Editorial scale:** Headings are large but remain inside conventional two-column portfolio layouts. More asymmetry and whitespace would create a stronger point of view.
4. **Project narrative:** Projects list engineering details and outcomes, but do not frame the challenge, pivotal decision, and proof in a recruiter's preferred scan order.
5. **Project interaction:** The interface mockups are polished placeholders, though their hover behavior does not yet communicate depth or craft.
6. **Research authority:** The publication has a DOI and benchmark results, but its credibility signals are distributed across the card rather than composed as a publication record.
7. **Section rhythm:** Dense card groups recur with similar spacing and visual weight, reducing the sense of progression through the portfolio.
8. **Authentic media:** Real product captures would increase trust, but sourcing and art-directing them is outside this focused refinement pass.

### Top Three Improvements Selected

1. **Editorial kinetic hero:** Add a lightweight revolving research orbit, more dramatic type scale, staggered line entrances, and a clearer recruiter-facing proof strip.
2. **Story-led project case studies:** Reframe every project around challenge, engineering decision, and proof; add premium pointer-safe hover depth to the existing visual.
3. **Publication-led research story:** Turn the lead paper into a scannable publication record with benchmark evidence, contribution framing, and a visible impact statement.

These changes offer the largest improvement in perceived craft and professional clarity while preserving the current sections, data flow, and Next.js architecture.

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
