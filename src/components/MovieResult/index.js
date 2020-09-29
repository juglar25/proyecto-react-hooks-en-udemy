import React from "react";
import {Card, Button, Grid, Typography} from "@material-ui/core";
import style from "../../components/MovieResult/style"
import {withRouter} from "react-router-dom"

const MovieResult = ({Title, Year, Type, imdbID, Poster, history}) => {
    const classes = style();
    const handleSeeMovieClick = () =>{
        history.push(`/movie/${imdbID}`)
    }

    return(
        <Card dataid={imdbID} className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster}/>
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button color="primary" variant="contained" onClick={handleSeeMovieClick}>Ver Más</Button>
                </Grid>
            </Grid>
        </Card>
    )
}

export default withRouter(MovieResult)
