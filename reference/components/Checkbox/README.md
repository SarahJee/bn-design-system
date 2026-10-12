# Checkbox

A checkbox with a terms label, optionally required.

Figma: **Atoms/Checkbox/Desktop** (node `360:800`), 4 variants.

## Use it

`window.BN.Checkbox` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `status` | Status | `Default`, `Checked` |
| `required` | Required | `Yes`, `No` |

Pass `label` to replace the **Text** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Status=Default, Required=Yes
- Status=Default, Required=No
- Status=Checked, Required=Yes
- Status=Checked, Required=No

## Notes

- Replaces `DT_FormCheckboxTerms` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
