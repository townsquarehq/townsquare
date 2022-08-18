import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                {/* Hero unit */}

                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        <div>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Vote on the proposal
                            </Typography>
                            <br/>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="proposal-title" label="Fix the pothole at 6th cross" variant="outlined"/>
                                <TextField id="proposal-title" label="SJRC Road nalli pothole ide. Fix maadi!" multiline rows={5}
                                           variant="outlined"/>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Place your vote</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1">
                                        <FormControlLabel value="yay" control={<Radio/>} label=" ✅ yay"/>
                                        <FormControlLabel value="nay" control={<Radio/>} label=" ❌ nay"/>
                                    </RadioGroup>
                                    <Button variant="contained" color="primary">
                                        SUBMIT
                                    </Button>
                                </FormControl>

                            </form>

                        </div>

                    </Grid>
                </Container>
            </main>
            {/*/!* Footer *!/*/}
            {/*<footer className={classes.footer}>*/}
            {/*    <Typography variant="h6" align="center" gutterBottom>*/}
            {/*        Footer*/}
            {/*    </Typography>*/}
            {/*    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">*/}
            {/*        Something here to give the footer a purpose!*/}
            {/*    </Typography>*/}
            {/*    <Copyright />*/}
            {/*</footer>*/}
            {/*/!* End footer *!/*/}
        </React.Fragment>
    );
}