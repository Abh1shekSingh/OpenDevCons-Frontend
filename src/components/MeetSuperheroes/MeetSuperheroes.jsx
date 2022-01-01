import React from 'react'
import "./MeetSuperheroes.css"
import {cons} from "./AllSuperheroes"
import DeveloperCards from "./DeveloperCards"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
//import { Carousel } from 'react-responsive-carousel';
import Bounce from 'react-reveal/Bounce';
function MeetSuperheroes() {
    return (
        <div className="superheroes__Section">
           <div className="Heading__Section">
           <Bounce cascade>
              <h1>Meet Our Superheroes</h1>
              </Bounce>
           </div>

           <div clssName="contributer__profile">
           <Container>
          
                <Grid container spacing={4} >
                    
                    {cons.map(con => (
                        
                        <Grid item xs={12} md={6} lg ={4}>
                            
                            <DeveloperCards 
                               name={con.name} 
                               image ={con.image}
                               design = {con.design}
                               
                            />
                           
                        </Grid>
                        
                    ))}
            
                </Grid>
              
            </Container>
           </div>
        </div>
    )
}

export default MeetSuperheroes
