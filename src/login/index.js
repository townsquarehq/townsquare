import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import {Input} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const emails = ['username@gmail.com', 'user02@gmail.com'];


const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

function SimpleDialog(props) {
    const classes = useStyles();
    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = async()=>{

    }

    return (
        <div >
        <Dialog onClose={handleClose} aria-labelledby="form-dialog-title" open={open} fullScreen={fullScreen}>
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <TextField  label="Username" variant="outlined" onChange={(e)=>setUserName((e.target.value))}/>
            <TextField type={"password"} label="Password" variant="outlined" onChange={(e)=>setPassword((e.target.values))}/>
<Button onPress={()=>handleSubmit()}>Login with Moi-Id</Button>
        </Dialog>
        </div>
    );
}



export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(true);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}
