import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  link: {
    textDecoration: "none",
    "&:hover, &:focus": {
      backgroundColor: 'blue',
    }
  },
  linkNested: {
    paddingLeft: 0,
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    color: "#fff",
    transition: theme.transitions.create("color"),
    width: 24,
    display: "flex",
    justifyContent: "center",
    "&:hover, &:focus": {
      color: "#fff",
    }
  },
  linkText: {
    padding: 0,
    color: '#fff',
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 16,
    "&:hover, &:focus": {
      color: "#fff",
    }
  },
  linkTextHidden: {
    opacity: 0,
  }
}));
