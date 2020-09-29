import React, {useState} from 'react';
import {Container, Typography, Card, Grid, TextField, Button} from '@material-ui/core'
import styles from './style'
import MovieIcon from "../../icons/MovieIcon";

export default ({history}) => {
    const [searchText, setSearchText] = useState('')
    const classes = styles()
    const handleSearchTextChange = event => {
        setSearchText(event.target.value)
    }

    const handleSearchTextClick = event => {
        history.push(`/results?movieName="${searchText}"`)
    }
    const handleCleanTextClick = event => {
        setSearchText('')
    }

    return(
        <Container  className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.tittleGridContainer}>
                <Grid>
                    <Typography className={classes.title}>Bienvenido!</Typography>
                </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon} />
                    </Grid>
                </Grid>
                <TextField
                value={searchText}
                placeholder="Buscar..."
                onChange={handleSearchTextChange}
                className={classes.textFieldSearch}/>
                <Grid className={classes.buttonsContainer}>
                    <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant="contained" color="primary" size="large" className={classes.searchButton} onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>


            </Card>
        </Container>
    )


}