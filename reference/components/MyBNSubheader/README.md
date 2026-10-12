# MyBNSubheader

The MyBN page header with greeting and navigation.

Figma: **Organisms/MyBN Sub-header** (node `711:989`), 2 variants.

## Use it

`window.BN.MyBNSubheader` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |

Pass `label` to replace the **H1** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop
- Device=Mobile

## Notes

- Replaces `DT_MyBNSubHeader`, `M_MyBNSubHeader` from the first build.
- Some text in this component keeps its earlier type values, because its layers have changed since the first build. Re-check it on the next sync.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
