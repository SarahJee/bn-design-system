# Reference: the whole BN Component Library

This folder is a reference for building, not code to ship. It shows all 54 components in the Figma library as of 8 October 2026, including the 34 not yet built as Drupal components.

## What's here

| File | What it is |
|---|---|
| `index.html` | A gallery of every component and variant, grouped as Atoms, Molecules and Organisms |
| `components/<Name>/README.md` | One per component: its Figma name and node, props and values, every variant, text layers and the old desktop and mobile names it replaces |
| `components/bundle.js`, `bundle.css`, `lib/` | The renderer behind the gallery (React, from the BN Component Library in Claude). Only the gallery uses it |

## Viewing the gallery

Browsers block it if you open the file directly, so serve the repo root:

```bash
npx serve .
```

Then open `/reference/` in the address it gives you. It uses `../tokens/tokens.css`, so it always shows the current tokens.

## How to use it

- **Building a new Drupal component:** open its README for the props and variants, compare against the gallery and the Figma node, then build it the same way as the components in `components/` (Twig, CSS, `.component.yml`, story).
- **Props:** the READMEs use the Figma property names (`device`, `type`, `state`). Map them to Drupal props the way the existing components do, for example `device` becomes a `size` prop until breakpoints are agreed.
- **Parked components** (Header, Nav Item and Filter Set) are still separate desktop and mobile parts while their structure is decided. Don't build them yet.
- **Two approximated variants:** the desktop Sort Toggle `Selected=Second` and the mobile D&I Sub-header `Has button` were drawn from their nearest variants. Check them against Figma.
- **Font Awesome:** some icons in Figma come from Font Awesome 5, 6 and 7. One version will be chosen before handover. In the gallery they're outlined SVG.

Figma stays the master. If anything here disagrees with Figma, Figma wins.
