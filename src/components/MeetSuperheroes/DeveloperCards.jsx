import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import "./MeetSuperheroes.css"


function DeveloperCards({id,image,name,design}) {
    return (
        
        <div>
        
            <Card sx={{boxShadow:0}} className="everyCard">
                 <CardMedia
                    className="cardImage"
                    component="img"
                     height="270"
                    image={image}
                    alt="green iguana"
                 />
                  <CardContent>
                      <Typography gutterBottom component="div" className="cardHolderName">
                         <h2>{name}</h2>
                      </Typography>
                      <Typography gutterBottom variant="p" component="div" className="cardDesignation">
                          <p>{design}</p>
                      </Typography>
                  </CardContent>

                  <CardActions className="socialHandles">
                       <a href="/"><GitHubIcon/></a>
                       <a href="/"><LinkedInIcon/></a>
                  </CardActions>
                </Card>
        </div>
        
    )
}

export default DeveloperCards
