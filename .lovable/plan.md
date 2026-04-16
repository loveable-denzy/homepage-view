
The user uploaded `Gilroy-Bold.woff2` and wants the headline font changed to Gilroy Bold.

Current state in `src/index.css`:
- A `@font-face` declaration for Gilroy exists but only references `local()` sources (no actual font file). This means Gilroy almost certainly isn't loading and headlines fall back.
- `h1, h2, h3` use `var(--font-display)` which is `'Playfair Display', serif`.
- Tailwind has `font-headline: ['Gilroy', 'sans-serif']` already configured.
- HeroSection's `h1` uses `font-headline` class — but since Gilroy never loads, it falls back to sans-serif.

Plan:

1. **Copy the uploaded font into the project**
   - `lov-copy user-uploads://Gilroy-Bold.woff2 src/assets/fonts/Gilroy-Bold.woff2`

2. **Update `src/index.css`**
   - Replace the `local()`-only `@font-face` with one that loads the actual file via `url('/src/assets/fonts/Gilroy-Bold.woff2') format('woff2')`, keeping `font-weight: 700`, `font-display: swap`.
   - Change `--font-display` from `'Playfair Display', serif` to `'Gilroy', 'Playfair Display', serif` so all headline `h1/h2/h3` (which use `var(--font-display)`) render in Gilroy Bold.
   - Keep DM Sans for body unchanged.

3. **No component changes needed** — HeroSection already uses `font-headline` (Gilroy) and other headings use `var(--font-display)` which will now resolve to Gilroy.

Result: every headline across the site (hero, features, how it works, CTA, footer titles) renders in Gilroy Bold, falling back to Playfair Display only if the file fails to load.
