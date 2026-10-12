# Tag

A small label for category, sponsored and Sector Briefing content.

Figma: **Atoms/Tag** (node `247:771`), 6 variants.

## Use it

`window.BN.Tag` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `type` | Type | `Category`, `Sector Briefing`, `Sponsored` |

Pass `label` to replace the **Tag label** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, Type=Category
- Device=Desktop, Type=Sector Briefing
- Device=Desktop, Type=Sponsored
- Device=Mobile, Type=Category
- Device=Mobile, Type=Sponsored
- Device=Mobile, Type=Sector Briefing

## Notes

- Replaces `DT_Tag`, `M_Tag` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
