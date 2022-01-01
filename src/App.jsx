import React from 'react'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Repository from "./components/Repository/Repository"
import Whyus from "./components/DealSection/Whyus"
import MeetSuperheroes from "./components/MeetSuperheroes/MeetSuperheroes"
import Footer from "./components/Footer/Footer"
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
    
    return (
        
        <div>
        <Router>
            <Route path="/"  >
                <Header/>
                <Hero/>
                <Repository/>
                <Whyus/>
                <MeetSuperheroes/>
                <Footer/>
            </Route>

        </Router>
        </div>
        
    )
}

export default App
