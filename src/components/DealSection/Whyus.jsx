import React from 'react'
import "./Whyus.css"
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import PaymentIcon from '@mui/icons-material/Payment';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Bounce from 'react-reveal/Bounce';

import Pulse from 'react-reveal/Pulse';
function Whyus() {
    return (
        <div className="whyusConatainer">
        
            
            <div className="whyus__Heading">
                <Bounce cascade>
                    <h1>Why us</h1>
                </Bounce>
            </div>
            <div className="whyus__subHeading">
                <p>Amazing Developers are built with discipline, Consistency and regular practice.<br/> Which our Platform helps them to achieve</p>
            </div>
            <div className="Pay__Card">
                <Card className="inner__Pay__Card" sx={{ boxShadow: 10 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div" className="card__heading">
                            <h3>Pay What You Want</h3>
                        </Typography>
                        <Typography gutterBottom variant="p" component="div" className="card__subheading">
                            <p>Our Aim is to Carve an Amazing Developer out of You <br/>at cost of your choice </p> 
                        </Typography>
                        <Typography gutterBottom variant="h1" component="div" className="currency__icon">
                            <h2>₹</h2>
                        </Typography>
                        <CardActions className="button">
                        <Pulse>
                            <a href="https://rzp.io/l/cvPjBWA0"><Button variant="outlined" size="large" endIcon={<PaymentIcon />}>Pay Any Amount</Button></a>
                        </Pulse>
                        </CardActions>
                    </CardContent>
                </Card>

            </div>

            <div className="whyus__other__cards">
                <div className="firstCard">
                    <div className="firstcardImage">
                        <img src="/images/confidence.jpg" alt ="confidence pic" />
                    </div>
                    <div className="cardContent">
                        <div className="heading">
                            <h2>Boost In Confidence</h2>
                            <p>You will See the Boost in confidence in yourself after solving regularly</p>
                            
                            
                        </div>
                    </div>
                </div>

                <div className="secondCard">
                    <div className="secondcardImage">
                        <img src="/images/dev.png" alt ="dev pic" />
                    </div>
                    <div className="cardContent">
                        <div className="heading">
                            <h2>Ultimate Development</h2>
                            <p>You will the ultimate grow in your devlopement skills and will appreciate us </p>
                        </div>
                    </div>
                </div>
            </div>

            

            
        </div>
    )
}

export default Whyus
