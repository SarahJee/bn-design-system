# Button

The main action buttons: default, download, tertiary, icon and delete.

Figma: **Atoms/Button** (node `7:598`), 17 variants.

## Use it

`window.BN.Button` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `type` | Type | `Default`, `Delete`, `Download`, `Icon`, `Tertiary`, `Previous`, `Next` |
| `state` | State | `Default`, `Hover` |

Pass `label` to replace the **Label** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, Type=Default, State=Default
- Device=Desktop, Type=Delete, State=Default
- Device=Desktop, Type=Delete, State=Hover
- Device=Desktop, Type=Default, State=Hover
- Device=Desktop, Type=Download, State=Default
- Device=Desktop, Type=Download, State=Hover
- Device=Desktop, Type=Icon, State=Default
- Device=Desktop, Type=Icon, State=Hover
- Device=Desktop, Type=Tertiary, State=Default
- Device=Desktop, Type=Tertiary, State=Hover
- Device=Mobile, Type=Default, State=Default
- Device=Mobile, Type=Delete, State=Default
- Device=Mobile, Type=Download, State=Default
- Device=Mobile, Type=Icon, State=Default
- Device=Mobile, Type=Previous, State=Default
- Device=Mobile, Type=Next, State=Default
- Device=Mobile, Type=Tertiary, State=Default

## Notes

- Replaces `DT_Button`, `M_Button` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
