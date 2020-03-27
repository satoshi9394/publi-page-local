import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '',
        position: 'absolute',
        background: "#f1f1f1",
        '&:hover': {
            position: 'absolute',
            background: "#f00",
            width: 350,
            height: 200,
            zIndex: 100,
            top: '100px',
            left: '100px'
        }
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}
            style={{
                left: props.info.styles.left + 'px',
                top: props.info.styles.top + 'px',
                backgroundColor: props.info.styles.backgroundColor,
            }}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.info.titulo}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.info.telefono}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Link href={props.info.url}>
                        {props.info.url ?
                            props.info.url.split('.')[1] + '.' + props.info.url.split('.')[2]
                            : ''}
                    </Link>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image="https://sifu.unileversolutions.com/image/es-MX/recipe-topvisual/2/1260-709/sopa-de-pasta-50425569.jpg"
                title="Live from space album cover"
            />
        </Card>
    );
}
