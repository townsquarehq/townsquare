import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import {Redirect} from 'react-router-dom';

export default function MultiActionAreaCard() {
    const [redirectToCommunity, setRedirectToCommunity] = React.useState(false);
    const [redirectToCreate, setRedirectToCreate] = React.useState(false);
    return (
        <div style={{display: "flex", justifyContent : "space-between", padding: "0px 151px"}}>
            {redirectToCommunity && <Redirect to="/community/560002" /> }
            <Card style={{width: "350px"}} onClick={ () => setRedirectToCommunity(true) }>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Chowdiah_Memorial_Hall.jpg/800px-Chowdiah_Memorial_Hall.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            560002
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            All things Corporation Building, and SJR Road.
                            BESCOM, BWSSB, BBMP, and BDA
                            <br/>
                            <br/>
                            <br/>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Join
                    </Button>
                </CardActions>
            </Card>

            <Card style={{width: "350px"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Chowdiah_Memorial_Hall.jpg/800px-Chowdiah_Memorial_Hall.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            560003
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            All things Malleshwaram, Palace Guttahalli, Swimming Pool Extn, Venkatarangapura, and Vyalikaval Extn.
                            BESCOM, BWSSB, BBMP, and BDA
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Join
                    </Button>
                </CardActions>
            </Card>

            <Card style={{width: "350px"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://seanheritage.com/wp-content/uploads/2016/06/Red_and_blue_pill.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Don't see your pincode?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Create a new group if your area's pincode is not available in the forum.
                            <br/>
                            <br/>
                            <br/>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {redirectToCreate && <Redirect to="/newcommunity" /> }
                    <Button size="small" color="primary" onClick={ () => setRedirectToCreate(true) }>
                        CREATE NEW GROUP
                    </Button>
                </CardActions>
            </Card>
        </div>


    );
}
