import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { CategoryContext } from '../../../App';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});



const Body = (props) => {
    const classes = useStyles();
    const containerStyle = {
        margin: "20px 10px",
        width: "60%"
    }
    const linkStyle = {
        textDecoration: "none"
    }
    const {title, body, id} = props.post;
    return (
        <Container>
            <Card style={containerStyle} className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
        </Typography>
                    
                    <Typography variant="body2" component="p">
                        {body}
          <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link style={linkStyle} to={"posts/"+id}>
                        <Button size="small" variant="contained" color="primary"> See More </Button>
                    </Link>
                </CardActions>
            </Card>
        </Container>
    );
};

export default Body;