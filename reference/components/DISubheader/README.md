# DISubheader

The Data & Insights page header: kicker, title and optional subtext, logos, follow or button.

Figma: **Organisms/D&I Sub-header** (node `55:669`), 10 variants.

## Use it

`window.BN.DISubheader` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `type` | Type | `Sponsor Logos`, `Subtext`, `Date + Follow`, `Has button`, `Survey` |

Pass `label` to replace the **DATA & INSIGHTS** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, Type=Sponsor Logos
- Device=Desktop, Type=Subtext
- Device=Desktop, Type=Date + Follow
- Device=Desktop, Type=Has button
- Device=Desktop, Type=Survey
- Device=Mobile, Type=Sponsor Logos
- Device=Mobile, Type=Subtext
- Device=Mobile, Type=Has button
- Device=Mobile, Type=Date + Follow
- Device=Mobile, Type=Survey

## Notes

- Replaces `DT_DISubHeader`, `M_DISubHeader` from the first build.
- The mobile **Has button** variant is built from mobile Subtext plus the button. Check it against Figma.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
