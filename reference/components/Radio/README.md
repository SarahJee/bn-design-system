# Radio

A single radio button.

Figma: **Atoms/Radio/Desktop** (node `365:1012`), 2 variants.

## Use it

`window.BN.Radio` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `status` | Status | `Selected`, `Default` |

Pass `label` to replace the **Text** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Status=Selected
- Status=Default

## Notes

- Replaces `DT_FormRadio` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
