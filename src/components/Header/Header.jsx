
import React,{useState, useContext} from 'react'
import "./Header.css"
import axios from "axios"
import MenuIcon from '@mui/icons-material/Menu';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

import {Link} from 'react-scroll'
import { myContext } from '../../Context';


function Header() {

  const [showNav, setShowNav] = useState(false);

  const googleLogin = () => {
    window.open("https://opendevcons-backend.herokuapp.com/auth/google" , "_self")
  }
  const Logout = () => {
    axios.get("https://opendevcons-backend.herokuapp.com/auth/logout", ({ withCredentials:true })).then(res => {
      if(res.data==="done"){
        window.location.href = "/";
      }
    })
  }
  const userObject = useContext(myContext);

    return(

        <MDBNavbar className="headerContainer" expand='lg' light >
        
          <MDBContainer fluid  >
          
              <MDBNavbarBrand className="logo" href='#'>
                    <img
                      src='/images/OpenDevCons-logos_black.png'
                      height='70'
                      alt=''
                      loading='lazy'
                    />
                    <h3>OpenDevCons</h3>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                  type='button'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                  onClick={() => setShowNav(!showNav)}
                >
                  <MenuIcon/>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNav}>
                  <MDBNavbarNav>

                      <MDBNavbarItem>
                        <MDBNavbarLink className="header__links" active aria-current='page' href='#'>
                          Home
                        </MDBNavbarLink>
                      </MDBNavbarItem>

                      <MDBNavbarItem>
                        <MDBNavbarLink className="header__links" href='https://github.com/Abh1shekSingh'>
                        <Link to="repoSection">Repositories</Link>
                        </MDBNavbarLink>
                      </MDBNavbarItem>

                      <MDBNavbarItem>
                        <MDBNavbarLink className="header__links" href='#'>
                          <Link to="whyusConatainer">Pricing</Link>
                        </MDBNavbarLink>
                      </MDBNavbarItem>

                      <MDBNavbarItem>
                        <MDBNavbarLink className="header__links" href='#' tabIndex={-1} aria-disabled='true'>
                        <Link to="superheroes__Section">Our Contributers</Link>
                        </MDBNavbarLink>
                      </MDBNavbarItem>

                  </MDBNavbarNav>
                 
                        
                        {
                          userObject ? (
                            <MDBNavbarLink className="header__links" onClick ={Logout} tabIndex={-1} aria-disabled='true'>
                              <span>Logout</span>
                             </MDBNavbarLink>
                          ) : (
                            <MDBNavbarLink className="header__links" onClick ={googleLogin} tabIndex={-1} aria-disabled='true'>
                              <span>Login</span>
                            </MDBNavbarLink>
                          )

                          
                        }
                       
                        <MDBNavbarLink className="header__links" href='https://discord.gg/C9r44YXx' tabIndex={-1} aria-disabled='true'>
                          <span>Discord</span>
                        </MDBNavbarLink>
                      
                </MDBCollapse>

          </MDBContainer>

        </MDBNavbar>
        
    );
    
}

export default Header;
