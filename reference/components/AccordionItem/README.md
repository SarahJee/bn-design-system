# AccordionItem

An expandable section, in default, home, project and footer types.

Figma: **Molecules/Accordion Item** (node `60:662`), 13 variants.

## Use it

`window.BN.AccordionItem` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `type` | Type | `Default`, `Home`, `Project`, `Footer` |
| `state` | State | `Closed`, `Open`, `Open List`, `Open Shares` |

Pass `label` to replace the **Accordion Title** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, Type=Default, State=Closed
- Device=Desktop, Type=Default, State=Open
- Device=Desktop, Type=Home, State=Closed
- Device=Desktop, Type=Home, State=Open List
- Device=Desktop, Type=Home, State=Open Shares
- Device=Desktop, Type=Project, State=Closed
- Device=Desktop, Type=Project, State=Open
- Device=Mobile, Type=Default, State=Closed
- Device=Mobile, Type=Default, State=Open
- Device=Mobile, Type=Project, State=Closed
- Device=Mobile, Type=Project, State=Open
- Device=Mobile, Type=Footer, State=Closed
- Device=Mobile, Type=Footer, State=Open

## Notes

- Replaces `DT_Accordion_Default`, `DT_Accordion_Home`, `DT_Accordion_Project`, `M_Accordion_Default`, `M_Accordion_Project`, `AccordionFooter` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
