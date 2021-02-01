import React, { useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Table13319 } from '../../containers/CNC/Table13319';

// import * as common from '@bgroves/common';

/*
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));
*/
/*
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});
*/
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function View13319(params) {
  //  const { Push, total, SetAppError } = params;
  useEffect(() => {
    // if (total === 0) {
    //   SetAppError(
    //     'No records for that date range.',
    //     errorType.DATE,
    //     errorSeverity.LOW,
    //   );
    //   common.log('View200206=>No records, before push()');
    //   Push('/');
    // }
  });
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      <Box p={1} bgcolor="grey.300">
        <div className={classes.root}>
          <Typography variant="h6" align="center" gutterBottom>
            CNC part counters
          </Typography>
          <Typography variant="body1" gutterBottom>
            These part counters are CNC common variables that have been
            programmed to increment by G-Code and are being updated
            continuously. Zero values may mean the CNC has been turned off or
            there is a network error preventing access to the CNC.
          </Typography>
        </div>
      </Box>
      <Box>
        <Table13319 />
      </Box>
    </Box>
  );
}

/*
export default function Dashboard({ isAuthenticated, isAdmin, Push }) {
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    if (!isAuthenticated) {
      Push("/login");
    }
  });
*/
