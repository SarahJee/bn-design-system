# TextArea

A multi-line text input.

Figma: **Atoms/Text Area/Desktop** (node `322:1046`), 3 variants.

## Use it

`window.BN.TextArea` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `state` | State | `Filled`, `Active/Focus`, `Default` |

Pass `label` to replace the **Entered Text** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- State=Filled
- State=Active/Focus
- State=Default

## Notes

- Replaces `DT_FormTextArea` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
