# IconButton

Round bookmark and share buttons.

Figma: **Atoms/Icon Button** (node `2:705`), 8 variants.

## Use it

`window.BN.IconButton` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `icon` | Icon | `Bookmark`, `Share` |
| `status` | Status | `Default`, `Active` |

## Variants

- Device=Desktop, Icon=Bookmark, Status=Default
- Device=Desktop, Icon=Bookmark, Status=Active
- Device=Desktop, Icon=Share, Status=Default
- Device=Desktop, Icon=Share, Status=Active
- Device=Mobile, Icon=Bookmark, Status=Default
- Device=Mobile, Icon=Bookmark, Status=Active
- Device=Mobile, Icon=Share, Status=Default
- Device=Mobile, Icon=Share, Status=Active

## Notes

- Replaces `DT_Bookmark`, `DT_Share`, `M_BookmarkShare` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
