# NotificationTrial

A banner showing how many free trial articles remain.

Figma: **Molecules/Notification/Trial** (node `430:817`), 3 variants.

## Use it

`window.BN.NotificationTrial` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `remaining` | Remaining | `Three`, `Two`, `None` |

Pass `label` to replace the **Text** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Remaining=Three
- Remaining=Two
- Remaining=None

## Notes

- Replaces `DT_NotificationTrial` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
