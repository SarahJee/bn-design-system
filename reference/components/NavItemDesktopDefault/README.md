# NavItemDesktopDefault

A desktop navigation item for the primary, utility and MyBN menus. Parked: Nav Item sets still to be merged.

Figma: **Atoms/Nav Item/Desktop (Default)** (node `1:1814`), 16 variants.

## Use it

`window.BN.NavItemDesktopDefault` renders the Figma design variant by variant. Choose a variant with the props below. Values match the Figma property values letter for letter.

| Prop | Figma property | Values (first is the default) |
|---|---|---|
| `isCurrent` | Is Current | `Yes`, `No` |
| `hasSubnav` | Has Subnav | `Yes - Inactive`, `Yes - Active`, `No` |
| `location` | Location | `Primary`, `Utility`, `Secondary/MyBN` |
| `hasNotification` | Has Notification | `No`, `Yes` |

Pass `label` to replace the **Subnav** text, or `texts` keyed by layer name to replace any other copy.

## Variants

- Is Current=Yes, Has Subnav=Yes - Inactive, Location=Primary, Has Notification=No
- Is Current=Yes, Has Subnav=Yes - Active, Location=Primary, Has Notification=No
- Is Current=No, Has Subnav=Yes - Inactive, Location=Primary, Has Notification=No
- Is Current=Yes, Has Subnav=No, Location=Primary, Has Notification=No
- Is Current=No, Has Subnav=No, Location=Primary, Has Notification=No
- Is Current=No, Has Subnav=No, Location=Utility, Has Notification=No
- Is Current=Yes, Has Subnav=No, Location=Utility, Has Notification=No
- Is Current=No, Has Subnav=No, Location=Utility, Has Notification=Yes
- Is Current=Yes, Has Subnav=No, Location=Utility, Has Notification=Yes
- Is Current=Yes, Has Subnav=No, Location=Secondary/MyBN, Has Notification=No
- Is Current=Yes, Has Subnav=No, Location=Secondary/MyBN, Has Notification=Yes
- Is Current=Yes, Has Subnav=Yes - Active, Location=Secondary/MyBN, Has Notification=No
- Is Current=Yes, Has Subnav=Yes - Inactive, Location=Secondary/MyBN, Has Notification=No
- Is Current=No, Has Subnav=No, Location=Secondary/MyBN, Has Notification=No
- Is Current=No, Has Subnav=No, Location=Secondary/MyBN, Has Notification=Yes
- Is Current=No, Has Subnav=Yes - Inactive, Location=Secondary/MyBN, Has Notification=No

## Notes

- Replaces `DT_NavItem` from the first build.
- Colours, spacing and corners use the `bn-` tokens wherever Figma binds a variable. Text uses the values of its Figma text style.
