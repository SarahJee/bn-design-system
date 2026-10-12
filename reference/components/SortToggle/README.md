# SortToggle

A two-option toggle for sorting results, such as Date and Relevance.

Figma: **Molecules/Sort Toggle** (node `715:1008`), 4 variants.

## Use it

`window.BN.SortToggle` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `selected` | Selected | `First`, `Second` |
| `device` | Device | `Desktop`, `Mobile` |

Pass `label` to replace the **Pretext** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Selected=First, Device=Desktop
- Selected=Second, Device=Desktop
- Selected=First, Device=Mobile
- Selected=Second, Device=Mobile

## Notes

- Replaces `DT_ToggleSort`, `M_Toggle` from the first build.
- The desktop **Selected=Second** variant is built from Selected=First with the active side swapped. Check it against Figma.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
