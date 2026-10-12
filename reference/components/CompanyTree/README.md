# CompanyTree

A node in a company relationship tree: the primary organisation, a connected organisation or a connected person.

Figma: **Molecules/Company Tree** (node `703:1089`), 3 variants.

## Use it

`window.BN.CompanyTree` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `type` | Type | `Connected Org`, `Connected Person`, `Primary Org` |

Pass `label` to replace the **PIHA** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Type=Connected Org
- Type=Connected Person
- Type=Primary Org

## Notes

- Replaces `CompanySub`, `Person`, `CompanyPrimary` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
