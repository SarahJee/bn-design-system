# PublishedTime

The published time on a card, with a Last 24 hours highlight.

Figma: **Atoms/Published Time** (node `82:714`), 8 variants.

## Use it

`window.BN.PublishedTime` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `last24Hr` | Last 24 hr | `Yes`, `No` |
| `placement` | Placement | `Bottom-Right`, `Top-Left` |

Pass `label` to replace the **1 HOUR AGO** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, Last 24 hr=Yes, Placement=Bottom-Right
- Device=Desktop, Last 24 hr=No, Placement=Bottom-Right
- Device=Desktop, Last 24 hr=No, Placement=Top-Left
- Device=Desktop, Last 24 hr=Yes, Placement=Top-Left
- Device=Mobile, Last 24 hr=Yes, Placement=Bottom-Right
- Device=Mobile, Last 24 hr=Yes, Placement=Top-Left
- Device=Mobile, Last 24 hr=No, Placement=Bottom-Right
- Device=Mobile, Last 24 hr=No, Placement=Top-Left

## Notes

- Replaces `DT_ArticlePublished`, `M_ArticlePublished` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
