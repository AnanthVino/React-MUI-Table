import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  widgetWrapper: {
    display: "flex",
    minHeight: "100%"
  },
  widgetHeader: {

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  paper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflow: "hidden",
    background: 'linear-gradient(45deg, #6D71EF 30%, #7678d3 90%)',
    border: 0,
    color: 'white'
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  }
}));
