# AddressFields

A group of fields for a street address.

Figma: **Molecules/Address Fields** (node `711:982`), 2 variants.

## Use it

`window.BN.AddressFields` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |

Pass `label` to replace the **Label** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop
- Device=Mobile

## Notes

- Replaces `DT_FormAddress`, `M_FormAddress` from the first build.
- Some text in this component keeps its earlier type values, because its layers have changed since the first build. Re-check it on the next sync.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
