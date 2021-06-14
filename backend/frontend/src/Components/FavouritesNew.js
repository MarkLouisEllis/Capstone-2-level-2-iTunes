
import React , { Component ,useState }from 'react';
import Table from 'react-bootstrap/Table';

    

const FavouritesList = () => {
    //const [favList,setFavList] = useState([]);
    // function delFav(trackId) {
    //     const newFavList = favList.filter((data)=> data.trackId !== trackId);
    // favList.splice(0);
    // setFavList(newFavList);
    // localStorage.favourites = JSON.stringify(favList);
    // };
    let favList = [];
    favList.push(localStorage.getItem("favourites"));
    favList = JSON.parse(favList);

    function delFav() {
        for(let i in favList){
        favList.splice(i,1);
        localStorage.favourites = JSON.stringify(favList);
    }}

    
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
              {favList.map((data =>(
                <tr key = {data.trackId}>
                  <td>{data}</td>
                  
                  <td><button type='button' onClick={() => delFav(data.trackId)}>Remove</button></td>    
                </tr> 
                )))}
              </tbody>
              
            </Table>  
    </div>
  )
};

export default FavouritesList;


// const [favArray,setFavArray] = useState([]);

//   const addFav = () =>{
//     setFavArray(favArray.push(searchResult[0]));
//     JSON.stringify(favArray);
//     console.log(favArray);
//   }