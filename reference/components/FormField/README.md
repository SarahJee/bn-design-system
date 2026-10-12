# FormField

A labelled form field with help text, in default, active, filled and select states.

Figma: **Molecules/Form Field** (node `309:797`), 8 variants.

## Use it

`window.BN.FormField` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `state` | State | `Default`, `Filled`, `Select`, `Active` |

Pass `label` to replace the **Label** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, State=Default
- Device=Desktop, State=Filled
- Device=Desktop, State=Select
- Device=Desktop, State=Active
- Device=Mobile, State=Default
- Device=Mobile, State=Filled
- Device=Mobile, State=Select
- Device=Mobile, State=Active

## Notes

- Replaces `DT_FormFields`, `M_FormFields` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
