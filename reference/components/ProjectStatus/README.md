# ProjectStatus

An icon and label showing where a project is, from Proposed to Completed.

Figma: **Atoms/Project Status** (node `6:633`), 14 variants.

## Use it

`window.BN.ProjectStatus` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `device` | Device | `Desktop`, `Mobile` |
| `status` | Status | `Completed`, `On-hold`, `Cancelled`, `Proposed`, `Pending`, `Approved`, `In progress` |

Pass `label` to replace the **Completed** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Device=Desktop, Status=Completed
- Device=Desktop, Status=On-hold
- Device=Desktop, Status=Cancelled
- Device=Desktop, Status=Proposed
- Device=Desktop, Status=Pending
- Device=Desktop, Status=Approved
- Device=Desktop, Status=In progress
- Device=Mobile, Status=Completed
- Device=Mobile, Status=On-hold
- Device=Mobile, Status=Cancelled
- Device=Mobile, Status=Proposed
- Device=Mobile, Status=Pending
- Device=Mobile, Status=Approved
- Device=Mobile, Status=In progress

## Notes

- Replaces `DT_ProjectStatus`, `M_ProjectStatus` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
