# TagFilter

A removable filter pill.

Figma: **Atoms/Tag Filter** (node `13:596`), 4 variants.

## Use it

`window.BN.TagFilter` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `active` | Active | `Yes`, `No` |

Pass `label` to replace the **Label** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, Active=Yes
- Device=Desktop, Active=No
- Device=Mobile, Active=No
- Device=Mobile, Active=Yes

## Notes

- Replaces `DT_TagFilter`, `M_TagFilter` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
