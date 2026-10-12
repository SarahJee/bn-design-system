# SectorBriefingCard

A card linking to a Sector Briefing report.

Figma: **Organisms/Sector Briefing Card** (node `473:965`), 2 variants.

## Use it

`window.BN.SectorBriefingCard` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `destination` | Destination | `Report Overview or Single`, `Single Report` |

Pass `label` to replace the **Tag label** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Destination=Report Overview or Single
- Destination=Single Report

## Notes

- Replaces `CardSectorBriefing` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
