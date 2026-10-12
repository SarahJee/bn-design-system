# NewsCard

The news article card in all its layouts: default, small, featured, hero, event, podcast and more.

Figma: **Organisms/News Card** (node `166:136`), 20 variants.

## Use it

`window.BN.NewsCard` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `type` | Type | `Default`, `Small`, `Podcast`, `Event`, `Featured`, `Hero SB Archive`, `Hero`, `Hero Home`, `Highlight`, `Hero SB` |
| `device` | Device | `Desktop`, `Mobile`, `News` |
| `isSponsored` | Is sponsored | `No`, `Yes` |

Pass `label` to replace the **Tag label** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Type=Default, Device=Desktop, Is sponsored=No
- Type=Default, Device=Desktop, Is sponsored=Yes
- Type=Small, Device=Desktop, Is sponsored=No
- Type=Podcast, Device=Desktop, Is sponsored=No
- Type=Event, Device=Desktop, Is sponsored=No
- Type=Event, Device=Desktop, Is sponsored=Yes
- Type=Featured, Device=Desktop, Is sponsored=No
- Type=Featured, Device=Desktop, Is sponsored=Yes
- Type=Hero SB Archive, Device=Desktop, Is sponsored=No
- Type=Default, Device=Mobile, Is sponsored=No
- Type=Event, Device=Mobile, Is sponsored=No
- Type=Featured, Device=Mobile, Is sponsored=No
- Type=Hero SB Archive, Device=Mobile, Is sponsored=No
- Type=Hero, Device=Mobile, Is sponsored=No
- Type=Small, Device=Mobile, Is sponsored=No
- Type=Podcast, Device=Mobile, Is sponsored=No
- Type=Hero Home, Device=Desktop, Is sponsored=No
- Type=Hero Home, Device=Desktop, Is sponsored=Yes
- Type=Highlight, Device=Desktop, Is sponsored=Yes
- Type=Hero SB, Device=News, Is sponsored=No

## Notes

- Replaces `CardsNews` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
