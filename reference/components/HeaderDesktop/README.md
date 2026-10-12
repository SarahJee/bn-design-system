# HeaderDesktop

The desktop site header, in public, subscriber and search versions. Parked: still to be merged with the mobile header.

Figma: **Organisms/Header/Desktop** (node `7:592`), 3 variants.

## Use it

`window.BN.HeaderDesktop` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `headerType` | Header Type | `Primary (Public)`, `Subscriber (Logged In)`, `Search` |

Pass `label` to replace the **Home** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Header Type=Primary (Public)
- Header Type=Subscriber (Logged In)
- Header Type=Search

## Notes

- Replaces `DT_Header` from the first build.
- Some text in this component keeps its earlier type values, because its layers have changed since the first build. Re-check it on the next sync.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
