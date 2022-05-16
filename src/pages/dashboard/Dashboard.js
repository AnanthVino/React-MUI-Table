import React from "react";
import { Grid } from "@material-ui/core";
import { Box, Typography, Select, FormControl, InputLabel, TextField, Button } from '@mui/material';
import useStyles from "./styles";
import Widget from "../../components/Widget/Widget";
import LogTable from './components/Table/Table';

const Dashboard = () => {
  var classes = useStyles();

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget>
            <Box sx={{ p: 4 }}>
            <Box flex={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'Center' }}>
              <Box sx={{ minWidth: 200}}>
                <Typography sx={{ fontFamily: 'heebo, sans-serif', fontWeight: 400, textAlign: 'right'}}>
                  Select the microservice
                </Typography>
              </Box>
              <Box sx={{ minWidth: 200, ml: 4}}>
                <FormControl sx={{ width: 400 }} size="small">
                  <InputLabel id="Microservice" sx={{fontFamily: 'heebo, sans-serif', fontWeight: 200, color: 'white'}}>Microservice</InputLabel>
                  <Select fullWidth
                    labelId="microservice-label"
                    id="microservice"
                    label="microservices"
                    InputLabelProps={{
                      className: classes.label,
                    }}
                    InputProps={{
                      className: classes.input
                    }}
                  >
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box flex={1} sx={{ display: 'flex', mt: 3, alignItems: 'center', justifyContent: 'Center' }}>
              <Box sx={{ minWidth: 200}}>
                <Typography sx={{ fontFamily: 'heebo, sans-serif', fontWeight: 400, textAlign: 'right'}}>
                  Select the log
                </Typography>
              </Box>
              <Box sx={{ minWidth: 200, ml: 4}}>
                <FormControl sx={{ width: 400, borderColor: '#fff' }} size="small">
                  <InputLabel id="Microservice" sx={{fontFamily: 'heebo, sans-serif', fontWeight: 200, color: 'white'}}>Log</InputLabel>
                  <Select fullWidth
                    labelId="microservice-label"
                    id="microservice"
                    label="microservice"
                    InputLabelProps={{
                      className: classes.label,
                    }}
                    InputProps={{
                      className: classes.input
                    }}
                  >
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box flex={1} sx={{ display: 'flex', mt: 3, alignItems: 'center', justifyContent: 'Center' }}>
              <Box sx={{ minWidth: 200}}>
                <Typography sx={{ fontFamily: 'heebo, sans-serif', fontWeight: 400, textAlign: 'right'}}>
                  Search the text
                </Typography>
              </Box>
              <Box sx={{ minWidth: 400, ml: 4}}>
                <TextField 
                  fullWidth
                  id="search-log"
                  // className={classes.searchLog}
                  label="Search the text"
                  variant="outlined"
                  size="small"
                  sx={{color: '#fff', borderColor: '#fff !important'}}
                  InputProps={{
                    className: classes.input,
                    endAdornment: (
                      <Button variant="outlined" size="small" sx={{height: 25, textTransform: 'lowercase', borderColor: '#fff !important', color: '#fff'}}>Search</Button>
                    )
                  }}
                  InputLabelProps={{
                    className: classes.label,
                  }}
                />
              </Box>
            </Box>
            </Box>
          </Widget>
        </Grid>
        
        <Grid item xs={12}>
          <Widget>
            <LogTable />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
