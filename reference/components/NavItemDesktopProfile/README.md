# NavItemDesktopProfile

The My Profile navigation item. Parked: Nav Item sets still to be merged.

Figma: **Atoms/Nav Item/Desktop (Profile)** (node `7:622`), 2 variants.

## Use it

`window.BN.NavItemDesktopProfile` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `isActive` | Is active | `No`, `Yes` |

Pass `label` to replace the **Home** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Is active=No
- Is active=Yes

## Notes

- Replaces `DT_NavItemProfile` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
