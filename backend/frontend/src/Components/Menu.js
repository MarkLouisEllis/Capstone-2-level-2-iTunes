import React from 'react';
import {Link,Route } from "react-router-dom";
import {Menu,MenuList,MenuButton,MenuItem} 
from "@reach/menu-button";
import "@reach/menu-button/styles.css";

//The menu component has menu item imported from @reach. To create links the link component from the react-router-dom is used. Each link is embedded within a route.
function Mymenu(){
    return (
        <Menu>
          <MenuButton>
            Menu <span aria-hidden>▾</span>
          </MenuButton>
          <MenuList>
            <Route><MenuItem ><Link to="/searchresults">Search</Link></MenuItem></Route>
            <Route><MenuItem ><Link to="/Favourites">Favourites</Link></MenuItem></Route> 
          </MenuList>
        </Menu>
      );
}

export default Mymenu;