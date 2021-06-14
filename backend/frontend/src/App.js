import React, { Component } from 'react';
import SearchResults from './Components/SearchFunc';
import './mycss.css';
import { Container } from 'react-bootstrap';
import { contentSecurityPolicy } from 'helmet';
import FavouritesList from './Components/Favourites';
import Mymenu from './Components/Menu';
import { BrowserRouter,Route} from "react-router-dom";


//searchFunc and FavouritesNew components are imported and displayed.

class App extends Component {
        constructor(props) {
            super(props);
            this.state = {   
            };
        }

    render() {
        return (
            <BrowserRouter>
            <div className = " app">        
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"    
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossOrigin="anonymous"/> 
            <Container>
                <Mymenu/>
                <h1><center>iTUNES Search Engine</center></h1>
                <Route exact={true} path="/searchresults" component={SearchResults}/>
                <Route exact={true} path="/favourites" component={FavouritesList} />
            </Container>
            </div>
            </BrowserRouter>
    );
}}

    export default App;


