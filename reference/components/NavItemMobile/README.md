# NavItemMobile

The mobile My Profile navigation item. Parked: Nav Item sets still to be merged.

Figma: **Atoms/Nav Item/Mobile** (node `16:597`), 2 variants.

## Use it

`window.BN.NavItemMobile` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `isCurrent` | Is Current | `No`, `Yes` |

Pass `label` to replace the **Home** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Is Current=No
- Is Current=Yes

## Notes

- Replaces `M_NavItemProfile` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
