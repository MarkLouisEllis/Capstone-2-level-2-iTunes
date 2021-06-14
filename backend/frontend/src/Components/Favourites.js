
import React , { Component ,useState }from 'react';
import Table from 'react-bootstrap/Table';

const FavouritesList = () => {
    
    let favList = [];
    //Populate favList array with the objects stored in local storage. The objects are are converted with JSON.parse function to strings to be able to be displayed in the browser.
    favList.push(localStorage.getItem("favourites"));
    favList = JSON.parse(favList);

    //A simple function that removes the specified item in the favourites list using a for loop to loop through the list.
    function delFav(index) {
        if (index !== -1) {
            favList.splice(index, 1);
            document.location.reload()
            localStorage.favourites = JSON.stringify(favList); 
    }}
    
  //As favList ispopulated and converted in the code above the list is displayed using a map method to iterate through the list ad populate the table with the content.
  return (
    <div>
      <h1 id ="header"><center>Favourites</center></h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Track Name</th>
                        <th></th>
                    </tr>
              </thead>
              
              <tbody >
                {favList.map((data,index) =>(
                    <tr key = {index}>
                        <td >{data}</td>
                        <td><button type='button' onClick={() => delFav(index)}>Remove</button></td>    
                    </tr> 
                ))}
              </tbody>
            </Table>  
    </div>
  )
};

export default FavouritesList;
