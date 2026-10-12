# HeaderMobile

The mobile site header with menu, logo and search. Parked: still to be merged with the desktop header.

Figma: **Organisms/Header/Mobile** (node `15:408`), 1 variant.

## Use it

`window.BN.HeaderMobile` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

It has no variant props.

Pass `label` to replace the **MyBN** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Mobile

## Notes

- Replaces `M_Header` from the first build.
- Some text in this component keeps its earlier type values, because its layers have changed since the first build. Re-check it on the next sync.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
