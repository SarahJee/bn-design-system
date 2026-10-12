# SubscribeToggle

A switch for subscribing to an email newsletter.

Figma: **Molecules/Subscribe Toggle/Desktop** (node `5:366`), 2 variants.

## Use it

`window.BN.SubscribeToggle` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `subscribed` | Subscribed | `Yes`, `No` |

Pass `label` to replace the **Subscribed** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Subscribed=Yes
- Subscribed=No

## Notes

- Replaces `DT_SliderToggle` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
