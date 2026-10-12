# Footer

The site footer with link columns, logo and social links.

Figma: **Organisms/Footer** (node `711:987`), 2 variants.

## Use it

`window.BN.Footer` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |

Pass `label` to replace the **News** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop
- Device=Mobile

## Notes

- Replaces `Footer`, `M_Footer` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
