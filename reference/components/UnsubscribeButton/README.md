# UnsubscribeButton

The Unsubscribe from all emails action.

Figma: **Atoms/Unsubscribe Button/Desktop** (node `203:860`), 2 variants.

## Use it

`window.BN.UnsubscribeButton` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `status` | Status | `Default`, `Hover` |

Pass `label` to replace the **Unsubscribe from all emails** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Status=Default
- Status=Hover

## Notes

- Replaces `DT_Unsubscribe` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
