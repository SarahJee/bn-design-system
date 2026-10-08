# BN Design System

Business News design tokens and components, built as Drupal **single directory components** (SDC) with a Storybook to browse them. Everything here comes from the **BN Component Library** in Figma: colours, type, spacing, radii, icons and the measurements of each component.

This is the first release: the core set of 18 components. The rest of the Figma library (headers, cards, accordions, footer and so on) will follow once this set has been reviewed.

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
| `tokens/tokens.css` | Every Figma variable and colour style as a CSS custom property, plus the type scale as classes (`.DT-Body-R`, `.M-Heading-h1` and so on) |
| `tokens/tokens.json` | The same tokens as data, with usage notes and contrast ratios |
| `css/base.css` | Shared styles: icon sizing, `.bn-visually-hidden`, and the focus ring |
| `components/<name>/` | One folder per component: `.twig`, `.css`, `.component.yml` (props schema) and `.stories.js` |
| `icons/` | The icon set as standalone SVGs (also built into `components/icon/icon.twig`) |
| `bn_design_system.info.yml`, `.libraries.yml` | Makes the repo a Drupal theme |

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

Use the `bn-` tokens. They match the Figma variables one to one (`bn/brand/primary` → `--bn-brand-primary`). The `--style-…` tokens are the file's older colour styles, kept for reference; don't use them in new work.

```css
.my-thing {
  color: var(--bn-fonts-body);
  padding: var(--bn-space-md);
  border-radius: var(--bn-radius-sm);
}
```

Contrast to watch (also noted in `tokens.json`):

- `bn-brand-primary` text on `bn-bg-grey` is 4.35:1, under the 4.5:1 minimum for small text.
- `bn-system-green-deco` (2.49:1) and `bn-system-yellow` (2.17:1) are for icons and marks only, never text.

## Icons

`{% include 'bn_design_system:icon' with { name: 'plus', size: 16 } only %}`

`size` is the icon's height in px. Single-colour icons use `currentColor`, so they take the text colour of their parent. The project status icons keep their own colours. All 26 names are listed in `icon.component.yml` and shown in Storybook under Foundations / Icon.

Some icons in Figma are Font Awesome 6 Pro glyphs (`share`, `checkmark`, `close`). They're included here as outlined SVG, so the site doesn't need the Font Awesome licence or font for these components.

## Components and their Figma sources

| Component | Figma |
|---|---|
| `button` | DT_Button, M_Button |
| `action-link` | DT_Button Action, M_Button Action |
| `follow-button` | DT_Follow, M Follow, DT_Table-Follow, M_Table-Follow |
| `icon-button` | DT_Bookmark, DT_Share, M_Bookmark + Share |
| `control` | Control |
| `subscribe-toggle` | DT_SliderToggle |
| `unsubscribe-button` | DT_Unsubscribe |
| `form-field` | DT_Form/Fields, M_Form/Fields, DT_Form/Text Field, DT_Form/Text Area, DT_Form / Option |
| `checkbox` | DT_Form/Checkbox Terms |
| `radio` | DT_Form/Radio |
| `search` | DT_Search |
| `tag` | DT_Tag, M_Tag |
| `tag-filter` | DT_Tag Filter, M_Tag Filter |
| `sort-toggle` | DT_Toggle (Sort), M_Toggle |
| `project-status` | DT_Project Status, M_Project Status |
| `divider` | Divider |
| `notification` | DT_Notification (Positive) |
| `icon` | Icon/System, Icon/FA, Icon/Project Status |

Hover states in Figma are separate variants. In code they're CSS `:hover`. Desktop and mobile versions that only differ in size are one component with a `size` prop.

## Decisions to review

These go beyond what the Figma file defines, or interpret it. Each is easy to change.

1. **Focus ring.** Figma has no focus state. Every control gets a 2px `bn-brand-primary` outline, 2px clear of it (`css/base.css`). Form inputs use their Figma Active/Focus border instead.
2. **Hover on mobile-only buttons.** `previous` and `next` (from M_Button) use the same grey hover as the other light buttons.
3. **Follow hover.** The Figma Hover variant has a 0px gap and placeholder text. The code keeps the 16px gap so the label doesn't jump.
4. **Control** has no hover state in Figma, so it has none here.
5. **Project status** `in-progress` is the Figma variant named `Status=Construction` (its label reads "In progress").
6. **Radio dot** is drawn in CSS: a 16px `bn-brand-primary` circle, the same as the Font Awesome glyph in Figma.
7. **Search width** defaults to Figma's 523.66px and shrinks to fit narrower containers.
8. **Breakpoints.** Figma has separate desktop and mobile components but no breakpoint values, so mobile sizes are a `size` prop, not a media query. Once the breakpoints are agreed, they can switch automatically.
9. **Sort toggle** uses radio inputs, so it works without JavaScript inside a form.

## Keeping it in step with Figma

Figma stays the master for design. When a token or component changes there, update `tokens/` and the affected component in a pull request, and note the Figma change in the description.
