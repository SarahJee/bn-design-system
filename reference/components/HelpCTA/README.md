# HelpCTA

A call to action pointing readers to help or support.

Figma: **Molecules/Help CTA** (node `711:992`), 2 variants.

## Use it

`window.BN.HelpCTA` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |

Pass `label` to replace the **Navigating project data?** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop
- Device=Mobile

## Notes

- Replaces `DT_HelpCTA`, `M_HelpCTA` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
