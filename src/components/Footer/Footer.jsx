import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from 'react-scroll'
import Grid from "@material-ui/core/Grid"

function Footer() {
        const googleLogin = () => {
             window.open("https://opendevcons-backend.herokuapp.com/auth/google" , "_self")
         }

    return (
        <div className="Footer__Section">
            <div className="Footer__Content">

            <Grid container className="footer__grid">
                <Grid item>
                    <div className="Footer__Company">
                        <h1>OpenDevCons</h1>
                    </div>
                    <div className="Subheading__tagline">
                        <a href="mailto: abhinav210702@gmail.com"><p>abhinav210702@gmail.com</p></a>
                        <p>07814243284</p>
                    </div>

                    <div className="social">
                            <div className="github">
                                <a href="http://www.github.com/Abh1shekSingh"><GitHubIcon/></a>
                            </div>
                            <div className="linked">
                                <a href="https://www.linkedin.com/in/abhishek-764a791bb/"><LinkedInIcon/></a>
                            </div>
                            <div className="mail">
                               <a href="mailto:abhinav210702@gmail.com"> <MailIcon/></a>
                            </div>
                    </div>
                </Grid>

                <Grid item>
                    <div className="another__heading">
                        <h2>Company</h2>
                    </div>
                    <div className="footer__links">
                        <ul>
                            <Link to="repoSection"><li>Repositories</li></Link>
                            <Link to="whyusConatainer"><li>Our Program</li></Link>
                            <Link to="whyusConatainer"><li>Whyus</li></Link>
                            <Link to="/"><li onClick={googleLogin}>Join us</li></Link>
                        </ul>
                    </div>
                </Grid>

                <Grid item>
                    <div className="more">
                        <div className="more__heading">
                            <h2>More</h2>
                        </div>

                        <div className="footer__links">
                        <ul>
                            <a href="https://rzp.io/l/cvPjBWA0"><li>Buy me Coffee</li></a>
                            <a href="https://discord.gg/C9r44YXx"><li>Join Discord</li></a>
                            
                        </ul>
                    </div>
                    </div>
                </Grid>

                <Grid item>
                    <div className="image">
                       <img src="/images/footer.png" alt="footer_image"/>
                    </div>
                </Grid>
            </Grid>
                    

                   
            </div>
        </div>
    )
}

export default Footer
