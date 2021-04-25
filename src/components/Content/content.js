import React from 'react'
import CardItem from '../Carditem/MediaCard'
import Grid from '@material-ui/core/Grid'

const content = () => {
    return (
        <Grid container spacing={4}>
            <Grid
            item xs={4}
            >
            <CardItem/>
            </Grid>
            <Grid
            item xs={4}
            >
             <CardItem/>   
            </Grid>
            <Grid
            item xs={4}
            >
              <CardItem/>  
            </Grid>

        </Grid>
    )
}

export default content
