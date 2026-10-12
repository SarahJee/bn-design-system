# PageCounter

The numbered page buttons inside Pagination.

Figma: **Atoms/Page Counter** (node `6:416`), 2 variants.

## Use it

`window.BN.PageCounter` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `page` | Page | `2`, `1` |

Pass `label` to replace the **Previous** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Page=2
- Page=1

## Notes

- Replaces `PaginationCounters` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
