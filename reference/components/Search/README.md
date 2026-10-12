# Search

The search input with its button.

Figma: **Molecules/Search/Desktop** (node `29:484`), 2 variants.

## Use it

`window.BN.Search` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `active` | Active | `No`, `Yes` |

Pass `label` to replace the **Prompt Text** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Active=No
- Active=Yes

## Notes

- Replaces `DT_Search` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
