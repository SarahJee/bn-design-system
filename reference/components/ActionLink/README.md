# ActionLink

Underlined text actions with an icon, such as Clear filters, Show more and Add to Calendar.

Figma: **Atoms/Action Link** (node `25:440`), 18 variants.

## Use it

`window.BN.ActionLink` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `type` | Type | `Revert`, `Show more`, `Delete`, `Go back`, `Add to Cal`, `View All` |
| `status` | Status | `Default`, `Hover` |

Pass `label` to replace the **Label** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, Type=Revert, Status=Default
- Device=Desktop, Type=Show more, Status=Default
- Device=Desktop, Type=Delete, Status=Default
- Device=Desktop, Type=Go back, Status=Default
- Device=Desktop, Type=Add to Cal, Status=Default
- Device=Desktop, Type=View All, Status=Default
- Device=Desktop, Type=Revert, Status=Hover
- Device=Desktop, Type=Delete, Status=Hover
- Device=Desktop, Type=Go back, Status=Hover
- Device=Desktop, Type=Show more, Status=Hover
- Device=Desktop, Type=View All, Status=Hover
- Device=Desktop, Type=Add to Cal, Status=Hover
- Device=Mobile, Type=Revert, Status=Default
- Device=Mobile, Type=Show more, Status=Default
- Device=Mobile, Type=Delete, Status=Default
- Device=Mobile, Type=Go back, Status=Default
- Device=Mobile, Type=Add to Cal, Status=Default
- Device=Mobile, Type=View All, Status=Default

## Notes

- Replaces `DT_ButtonAction`, `M_ButtonAction` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
