# FooterLink

A single link in the footer.

Figma: **Atoms/Footer Link** (node `711:981`), 2 variants.

## Use it

`window.BN.FooterLink` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |

Pass `label` to replace the **Politics & Economy** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop
- Device=Mobile

## Notes

- Replaces `FooterLink`, `M_FooterLink` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
