# BN Design System

Business News design tokens and components, built as Drupal **single directory components** (SDC) with a Storybook to browse them. Everything here comes from the **BN Component Library** in Figma: colours, type, spacing, radii, icons and the measurements of each component.

This release has the core set of 18 components, built for Drupal. The other 34 components in the Figma library (headers, cards, accordions, footer and so on) are in `reference/` as a visual and props reference, ready to build once this set has been reviewed.

**Last synced with Figma: 30 October 2026.** See [What changed on 30 October](#what-changed-on-30-october).

## Quick start

You need Node 18 or later.

```bash
npm install
npm run storybook        # opens http://localhost:6006
npm run build-storybook  # static build in storybook-static/
```

## What's in the repo

| Folder | What it holds |
|---|---|
| `tokens/tokens.css` | Every Figma variable as a CSS custom property, the type scale as tokens and classes (`.bn-text-body-r`, `.bn-text-heading-h1` and so on), and the Defence Economy brand |
| `tokens/tokens.json` | The same tokens as data, with usage notes and contrast ratios, per brand |
| `css/base.css` | Shared styles: icon sizing, `.bn-visually-hidden`, and the focus ring |
| `components/<name>/` | One folder per component: `.twig`, `.css`, `.component.yml` (props schema) and `.stories.js` |
| `icons/` | The icon set as standalone SVGs (also built into `components/icon/icon.twig`) |
| `bn_design_system.info.yml`, `.libraries.yml` | Makes the repo a Drupal theme |
| `reference/` | The whole Figma library (54 components) as a browsable gallery with a README per component. A reference for building, not code to ship. See `reference/README.md` |

## Using it in Drupal

Drupal 10.3 or later (SDC is in core). Two ways in:

**1. As a base theme (recommended).** Put this repo at `web/themes/custom/bn_design_system`, then in the site's own theme:

```yaml
# mytheme.info.yml
base theme: bn_design_system
```

The global library (Google Fonts, tokens, base CSS) loads automatically, and each component's CSS loads only when the component is used.

**2. Copy into an existing theme.** Copy `components/`, `tokens/` and `css/` across, add the global library to that theme, and replace `bn_design_system:` with the theme's machine name in the Twig files.

Then render components from any template:

```twig
{% include 'bn_design_system:button' with {
  label: 'Save changes',
  variant: 'primary',
  button_type: 'submit',
} only %}

{{ include('bn_design_system:follow-button', { following: true, target: node.label }, with_context = false) }}
```

Every prop is listed in the component's `.component.yml`, and you can try them live in Storybook's Controls panel.

**JavaScript.** Components only render state. The follow button, icon button, subscribe toggle and tag filter render `aria-pressed` / `aria-checked` from a prop. Your Drupal behaviour toggles that attribute (and saves the change), and the CSS follows it.

## Tokens

Use the `bn-` tokens. They match the Figma variables one to one (`bn/brand/primary` → `--bn-brand-primary`, `bn/type/body-r/size` → `--bn-text-body-r-size`).

- **Colour:** `--bn-brand-…`, `--bn-fonts-…`, `--bn-bg-…`, `--bn-system-…`. New on 30 October: `--bn-bg-canvas` (page background) and `--bn-content-money`, `-infra`, `-tech`, `-work` and `-policy` (Defence Economy content categories).
- **Radius:** `--bn-radius-sm` (4px) for buttons, inputs and controls, and `--bn-radius-full` (999px) for pills and circles.
- **Spacing:** a 4px scale, `--bn-space-xs` (4) to `--bn-space-xl` (32). Gaps that were 10px in Figma now use `--bn-space-sm` (8px).
- **Typefaces:** by role, not by name. `--bn-font-heading`, `--bn-font-primary` (body) and `--bn-font-editorial`. Each brand fills them differently.
- **Type:** one set of 32 styles. Use the class (`.bn-text-body-r`) or its tokens (`--bn-text-body-r-size`, `-line-height`, `-weight`, `-letter-spacing`, `-font`). Desktop values are the default; mobile values take over below 768px.

```css
.my-thing {
  color: var(--bn-fonts-body);
  padding: var(--bn-space-md);
  border-radius: var(--bn-radius-sm);
  font: var(--bn-text-body-r-weight) var(--bn-text-body-r-size)/var(--bn-text-body-r-line-height) var(--bn-text-body-r-font);
}
```

### Brands

Business News is the default. For Defence Economy, add `data-brand="defence-economy"` to `<html>` (or any container). Its colours and type then apply to everything inside, with no other changes. Orion uses Business News values until its brand is defined. In Storybook, use the **Brand** menu in the toolbar.

Defence Economy's values are exploratory. Where it has no style of its own yet (Badge, Labels, Display headings, Blockquote, Body/R Medium and Italic), it uses Business News sizes. Its brand primary, and so its default button, is the Money gold (`--bn-brand-primary` points at `--bn-content-money`). It has no bright, dark or accent colours yet, so those are Business News values.

Contrast to watch (also noted in `tokens.json`):

- `bn-brand-primary` text on `bn-bg-grey` is 4.35:1, under the 4.5:1 minimum for small text.
- `bn-system-green-deco` (2.49:1) and `bn-system-yellow` (2.17:1) are for icons and marks only, never text.
- Defence Economy: `bn-content-money` (3.99:1) and `bn-content-infra` (4.31:1) are under 4.5:1 as small text on `bn-bg-grey`. Fine on the canvas.

## Icons

`{% include 'bn_design_system:icon' with { name: 'plus', size: 16 } only %}`

`size` is the icon's height in px. Single-colour icons use `currentColor`, so they take the text colour of their parent. The project status icons keep their own colours. All 26 names are listed in `icon.component.yml` and shown in Storybook under Foundations / Icon.

Some icons in Figma are Font Awesome 6 Pro glyphs (`share`, `checkmark`, `close`). They're included here as outlined SVG, so the site doesn't need the Font Awesome licence or font for these components.

## Components and their Figma sources

| Component | Figma (now) | Figma (before 8 October) |
|---|---|---|
| `button` | Atoms/Button | DT_Button, M_Button |
| `action-link` | Atoms/Action Link | DT_Button Action, M_Button Action |
| `follow-button` | Molecules/Follow Button | DT_Follow, M Follow, DT_Table-Follow, M_Table-Follow |
| `icon-button` | Atoms/Icon Button | DT_Bookmark, DT_Share, M_Bookmark + Share |
| `control` | Atoms/Control | Control |
| `subscribe-toggle` | Molecules/Subscribe Toggle/Desktop | DT_SliderToggle |
| `unsubscribe-button` | Atoms/Unsubscribe Button/Desktop | DT_Unsubscribe |
| `form-field` | Molecules/Form Field, Atoms/Text Input/Desktop, Atoms/Text Area/Desktop, Atoms/Select/Desktop | DT_Form/Fields, M_Form/Fields, DT_Form/Text Field, DT_Form/Text Area, DT_Form / Option |
| `checkbox` | Atoms/Checkbox/Desktop | DT_Form/Checkbox Terms |
| `radio` | Atoms/Radio/Desktop | DT_Form/Radio |
| `search` | Molecules/Search/Desktop | DT_Search |
| `tag` | Atoms/Tag | DT_Tag, M_Tag |
| `tag-filter` | Atoms/Tag Filter | DT_Tag Filter, M_Tag Filter |
| `sort-toggle` | Molecules/Sort Toggle | DT_Toggle (Sort), M_Toggle |
| `project-status` | Atoms/Project Status | DT_Project Status, M_Project Status |
| `divider` | Atoms/Divider | Divider |
| `notification` | Molecules/Notification/Positive | DT_Notification (Positive) |
| `icon` | Icon/System, Icon/FA, Icon/Project Status | Icon/System, Icon/FA, Icon/Project Status |

Hover states in Figma are separate variants. In code they're CSS `:hover`. Desktop and mobile versions that only differ in size are one component with a `size` prop.

## What changed on 30 October

Typography is now tokenised in Figma, and the library holds more than one brand.

- **One set of type styles.** Figma's 62 desktop (`DT`) and mobile (`M`) styles are now 32, each with its own desktop and mobile values. In CSS, the `.DT-…` and `.M-…` classes are replaced by `.bn-text-…` classes and `--bn-text-…` tokens. No component used the old classes.
- **Brands.** A Brand collection in Figma (Business News, Defence Economy, Orion) holds colours and typefaces. In CSS, that's the `data-brand` attribute. See [Brands](#brands).
- **Typeface roles.** `--font-barlow` and `--font-playfair` are replaced by `--bn-font-heading`, `--bn-font-primary` and `--bn-font-editorial`. Every component now uses `--bn-font-primary`. The old two names stay in `tokens.css` only for the compiled reference gallery; don't use them.
- **Fonts.** The Google Fonts link (Drupal library and Storybook) now also loads Public Sans and Source Serif 4 for Defence Economy, and Playfair Display Regular for Blockquote.
- **Corrections to match the CSS that was already agreed:** Body/XL desktop line height 1.45, mobile 1.5; h3 (Article) mobile 24px; Body/L and Body/XL links SemiBold.
- **Mobile Body/XS is 12px** (was 10px), for readability.
- **New styles:** `heading-h1-display`, `heading-h3-display` and `blockquote`.
- **New colour tokens:** `--bn-bg-canvas` and five `--bn-content-…` tokens.

### Not changed yet

- **Component text sizes are still set in px** in each component's CSS, not from the type tokens. Most match the scale, but a few don't (11px, 13px and 17px). Until components use the type tokens, switching brand changes their colour and typeface but not their size.
- **Breakpoint.** The type tokens switch to mobile values below 768px (UIkit's medium breakpoint). Components still use a `size` prop for mobile (see Decisions to review, point 8). Worth aligning the two.

## What changed on 8 October

The Figma library was cleaned up. This repo now matches it.

- **Atomic names.** Every Figma component is now `Atoms/…`, `Molecules/…` or `Organisms/…`. The table above maps each Drupal component to its new and old Figma names.
- **Desktop and mobile merged.** Most components are now one Figma component with a `Device` property (Desktop or Mobile), not two. This matches the `size` prop here.
- **Tokens bound.** Spacing, corners and colours in Figma now use the `bn-` variables. In this repo, every 4px and pill corner now uses `--bn-radius-sm` or `--bn-radius-full`. Nothing looks different.
- **New tokens:** `--bn-radius-full` and the new type classes listed under Tokens.
- **Colour styles retired.** The 24 `--style-…` tokens are removed. No component used them.
- **Variant names tidied.** For example `Status=In progress` (was Construction) and `Selected=First / Second` on Sort Toggle.

## Still to build

These are in Figma and in `reference/`, but not yet built as Drupal components. Open `reference/index.html` to see them, and read `reference/components/<Name>/README.md` for their props and variants.

- **Atoms:** Date Cell, Footer Link, List Link, Page Counter, Published Time, Nav Item (four parts, parked)
- **Molecules:** Accordion Item, Address Fields, Company Tree, Filter Dropdown, Help CTA, Locked Content, Notification/Trial, Pagination, Radio Group, Search Tabs
- **Organisms:** Accordion Set, D&I Navigation, D&I Sub-header, Filter Set (three parts, parked), Footer, Header (desktop and mobile, parked), MyBN Navigation, MyBN Sub-header, News Card, Primary Navigation, Sector Briefing Card, Utility Bar

"Parked" means the structure is still being decided in Figma, so hold off building those.

## Decisions to review

These go beyond what the Figma file defines, or interpret it. Each is easy to change.

1. **Focus ring.** Figma has no focus state. Every control gets a 2px `bn-brand-primary` outline, 2px clear of it (`css/base.css`). Form inputs use their Figma Active/Focus border instead.
2. **Hover on mobile-only buttons.** `previous` and `next` (from M_Button) use the same grey hover as the other light buttons.
3. **Follow hover.** The Figma Hover variant has a 0px gap and placeholder text. The code keeps the 16px gap so the label doesn't jump.
4. **Control** has no hover state in Figma, so it has none here.
5. **Project status** `in-progress` matches the Figma variant `Status=In progress` (renamed from `Status=Construction` on 8 October).
6. **Radio dot** is drawn in CSS: a 16px `bn-brand-primary` circle, the same as the Font Awesome glyph in Figma.
7. **Search width** defaults to Figma's 523.66px and shrinks to fit narrower containers.
8. **Breakpoints.** Figma has separate desktop and mobile components but no breakpoint values, so mobile sizes are a `size` prop, not a media query. Once the breakpoints are agreed, they can switch automatically.
9. **Sort toggle** uses radio inputs, so it works without JavaScript inside a form.

## Keeping it in step with Figma

Figma stays the master for design. When a token or component changes there, update `tokens/` and the affected component in a pull request, and note the Figma change in the description.
