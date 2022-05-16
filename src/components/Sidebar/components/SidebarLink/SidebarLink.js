import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import classnames from "classnames";

// styles
import useStyles from "./styles";

const SidebarLink = ({
  icon,
  label,
  children,
  isSidebarOpened,
  nested
}) => {
  let classes = useStyles();

  if (!children)
    return (
      <ListItem
        button
        className={classes.link}
        classes={{
          root: classnames(classes.linkRoot, {
            [classes.linkNested]: nested,
          }),
        }}
        disableRipple
      >
        <ListItemIcon
          className={classnames(classes.linkIcon)}
          
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextHidden]: !isSidebarOpened,
            }),
          }}
          primary={label}
        />
      </ListItem>
    );
}

export default SidebarLink;
