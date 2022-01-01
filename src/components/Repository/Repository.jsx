import React from 'react'
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import {repos} from "./AllRepo"
import RepoCards from "./RepoCards"

import Bounce from 'react-reveal/Bounce';

import "./Repository.css"
function Repository() {

   
    return (
        <div className="repoSection">
            <div className="repo__Heading">
            <Bounce cascade>
                <h1>Our Ready To Fork Repository</h1>
                </Bounce>
            </div>

            <div className="repo__text">
                 <p>Learn by practicing your development skills on <br/>
                    these amazing repositories.</p>
            </div>

            <div className="Repo__Cards">
            
            <Container>
                <Grid container spacing={4} >
                    {repos.map(repo => (
                      
                             <Grid item xs={12} md={6} lg ={4}>
                               <RepoCards 
                                 title={repo.title} 
                                 image ={repo.image}
                                 desc = {repo.desc}
                                 stack ={repo.stack}
                                 link = {repo.link}
                               />
                             </Grid>
                          
                    ))}
            
                </Grid>
            </Container>
        
            </div>

        </div>
    )
}

export default Repository
