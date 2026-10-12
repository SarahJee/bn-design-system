# NavItemDesktopDI

A Data & Insights navigation item. Parked: Nav Item sets still to be merged.

Figma: **Atoms/Nav Item/Desktop (D&I)** (node `1:1854`), 2 variants.

## Use it

`window.BN.NavItemDesktopDI` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `isCurrent` | Is Current | `Yes`, `No` |

Pass `label` to replace the **Data & Insights** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Is Current=Yes
- Is Current=No

## Notes

- Replaces `DT_NavItemDI` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
