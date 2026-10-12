# FollowButton

Follow and unfollow for organisations, people, lists and projects, in standard and table sizes.

Figma: **Molecules/Follow Button** (node `6:575`), 10 variants.

## Use it

`window.BN.FollowButton` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `context` | Context | `Default`, `Table` |
| `status` | Status | `Default`, `Hover`, `Following` |

Pass `label` to replace the **label** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, Context=Default, Status=Default
- Device=Desktop, Context=Default, Status=Hover
- Device=Desktop, Context=Default, Status=Following
- Device=Desktop, Context=Table, Status=Hover
- Device=Desktop, Context=Table, Status=Default
- Device=Desktop, Context=Table, Status=Following
- Device=Mobile, Context=Default, Status=Default
- Device=Mobile, Context=Default, Status=Following
- Device=Mobile, Context=Table, Status=Default
- Device=Mobile, Context=Table, Status=Following

## Notes

- Replaces `DT_Follow`, `DT_TableFollow`, `MFollow`, `M_TableFollow` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
