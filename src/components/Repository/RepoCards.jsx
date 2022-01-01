import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import "./RepoCards.css"
//import {Link} from 'react-scroll'



function RepoCards({ title, image, desc, stack,link}) {
    return (
        <div className="card">
        
          <Card className="repo__cards" sx={{ boxShadow: 0 }}>
                 <CardMedia
                    className="cardImage"
                    component="img"
                     height="200"
                    image={image}
                    alt="green iguana"
                 />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="heading">
                        <h4>{title}</h4>
                     </Typography>
                     
                    <Typography gutterBottom variant="p" component="div" className="subHeading">
                        {stack}
                    </Typography>
                    
                     
                    <Typography variant="body2" color="text.secondary" className="descContent">
                        <p>{desc}</p>
                    </Typography>
                    </CardContent>

                    <a href={link}><CardActions className="button" >
                        <Button variant="outlined" size="large" endIcon={<MergeTypeIcon />}>Fork</Button>
                    </CardActions></a>

              </Card>
             
              
        </div>
    )
}

export default RepoCards
