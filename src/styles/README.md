# Styles System

This project uses **four CSS files** with clear separation of concerns:

## 1) `variables.css` — Design Tokens ONLY
- **Typography:** font family, sizes (`--fs-*`), line-height, weights
- **Colors:** text, backgrounds, borders, brand + hover, status colors
- **Spacing:** `--space-*` scale
- **Radii & Shadows:** `--radius-*`, `--shadow-*`
- **Component tokens:** button & badge tokens (`--btn-*`, `--badge-*`)
- ❌ No layout values (container widths) here.

## 2) `base.css` — Global Element Styles
- Minimal reset
- Body, headings, paragraphs, small text
- Links (anchor elements), media rules, hr
- No classes, no layout. Pure element-level baseline.

## 3) `components.css` — Reusable UI Parts
- **Buttons:** `.btn`, optional `.btn--ghost`
- **Badges:** `.badge`, modifiers `.badge--success|warning|error`
- **Cards:** `.card`
- **Links (utility):** `.link`
- **Text utilities:** `.muted`

> These classes use design tokens from `variables.css`. Do not hard-code colors here.

## 4) `layout.css` — Page Layout Utilities
- **Container:** `.container` (centered content, max-width 960px)
- **Flow:** `.row` (flex row), `.stack` (vertical gap)
- **Splits:** `.split` for 2-column layouts (e.g., Help TOC + Content), plus `.sticky` helper for the left column.
- ✅ Layout-specific values (like container widths) live here, not in `variables.css`.

---

## Import Order (keep this)
In `src/main.js`:

```js
import './styles/variables.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'