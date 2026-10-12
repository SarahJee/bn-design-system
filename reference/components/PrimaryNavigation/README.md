# PrimaryNavigation

The main site navigation bar.

Figma: **Organisms/Primary Navigation** (node `711:990`), 2 variants.

## Use it

`window.BN.PrimaryNavigation` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |

Pass `label` to replace the **Home** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop
- Device=Mobile

## Notes

- Replaces `DT_NavPrimary`, `M_Nav` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
