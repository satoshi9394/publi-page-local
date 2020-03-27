import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        width: 200,
        position: 'relative',
        background: "#f1f1f1",
        '&:hover': {
            position: 'absolute',
            background: "#f00",
            width: '80%',
            height: 250,
            zIndex: 100,
            top: '0px',
            left: '0px'
        }

    },
    media: {
        height: 0,
        paddingTop: '20.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    position: {
    }
}));

export default function SmallCard(props) {
    const classes = useStyles();

    return (
        <Card
            className={classes.root}
            style={{
                left: props.info.styles.left + 'px',
                top: props.info.styles.top + 'px',
                backgroundColor: props.info.styles.backgroundColor,
            }}>
            <CardContent
                action={
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                }>
                <Typography variant='body2'>
                    {props.info.titulo}
                </Typography>
                <Typography variant='body2'>
                    {props.info.telefono}
                </Typography>
                <Link href={props.info.url}>
                    {props.info.url ?
                        props.info.url.split('.')[1] + '.' + props.info.url.split('.')[2]
                        : ''}
                </Link>
            </CardContent>
        </Card>
    );
}
