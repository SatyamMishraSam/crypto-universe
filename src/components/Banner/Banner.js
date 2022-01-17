import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(()=>({
    banner:{
        // backgroundImage:"url(./block.jpg)"
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent:"space-arround",
    },
    tagLine:{
        display:"flex",
        height:"40%",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center"
    }
}))

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagLine}>
                    <Typography variant='h2' 
                        style={{
                            fontWeight:"bold",
                            marginBottom:15,
                            fontFamily:"Montserrat",
                        }}
                    >
                    CRYPTO UNIVERSE
                    </Typography>
                    
                    <Typography variant='subtitle2'
                        style={{
                            color:'gold',
                            
                            textTransform:"capitalize",
                            fontFamily:"Montserrat"
                        }}         
                    >
                        Get all information regarding cryptoCurrency using crypto universe
                    </Typography>
                </div>
                <Carousel/>
            </Container>
        </div>
    )
}

export default Banner