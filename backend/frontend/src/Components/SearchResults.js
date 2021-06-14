import React , { Component ,useState }from 'react';
import Table from 'react-bootstrap/Table';

//Construct empty array favArray that will be populated by user defined items.
const favArray = [];
const SearchResults = ({ searchResult }) => {
   
  //When the add button is clicked the trackname of that item is added to the favArray. The array is converted to a JOSN object which is stored in local storage to be used in the 
  //Favourites Component.

  //!!!!!!!Please note!!!!!!!!!
  // When a user removes an item from the favourites and does a new search the favourites tab is reloaded as well.This happens becuase the local storage array is recreated when the page reloads.
  // I could not get the remove and add function to completely work together at this stage. 
  
  const addFav = (trackName) =>{
    favArray.push(trackName);
    localStorage.favourites= JSON.stringify(favArray);
    }
    
  //As searchResult array is populated by the fetch method in the searchFunc component  the list of results 
  //is displayed using a map method to iterate through the list ad populate the table with the content.
  return (
    
    <div>
      <h1 id ="header"><center>Search results</center></h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Kind</th>
              <th>Artist Name</th>
              <th>Track Name</th>
              <th>ID</th>
              <th>Add to favourites</th>
            </tr>
          </thead>
              
          <tbody  >
            {searchResult.map((item,trackId) =>(
              <tr id={JSON.stringify(item.trackId)}  key={item.trackId}  >
                <td>{item.kind}</td>
                <td>{item.artistName}<br/><img src={item.artworkUrl100}  alt ={item.artistName}/></td>
                <td>{item.trackName}</td>
                <td>{item.trackId}</td>
                <td><button onClick={() => addFav(item.trackName)}>Add</button></td> 
              </tr> 
              ))}
            </tbody>   
        </Table>     
    </div>
  )
};

export default SearchResults;

