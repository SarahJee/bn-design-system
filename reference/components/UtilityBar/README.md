# UtilityBar

The thin dark bar above the header, with Advertise, MyBN and log in or out.

Figma: **Organisms/Utility Bar** (node `711:991`), 2 variants.

## Use it

`window.BN.UtilityBar` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |

Pass `label` to replace the **Home** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop
- Device=Mobile

## Notes

- Replaces `DT_Utility`, `M_Utility` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
