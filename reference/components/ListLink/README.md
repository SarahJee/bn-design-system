# ListLink

A link to a list, with an updated badge when it has new data.

Figma: **Atoms/List Link** (node `68:660`), 4 variants.

## Use it

`window.BN.ListLink` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `status` | Status | `Updated`, `Default` |

Pass `label` to replace the **Accountants** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, Status=Updated
- Device=Desktop, Status=Default
- Device=Mobile, Status=Updated
- Device=Mobile, Status=Default

## Notes

- Replaces `DT_ListLInk`, `ListLInk` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
