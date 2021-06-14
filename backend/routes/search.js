const express = require('express');
const router = express.Router();

var axios = require('axios');

/* I am using the post request with the axios method to access the itunes search library. The method used to insert a user defined search request is explained in the comments
fof each variable.  */
router.post('/', function(req, res, next) {
    //require the base url that is used in server.js. The replace function will replace any values after 'search/'
    const minusSearch = req.baseUrl.replace('/search/', '');

    // minusSearch.split will split the string that a user enters a url into an array call params
    const params = minusSearch.split('/');

    // params values can be assigned to two new variables which will be insterted into the axios.get('url')

    const term = params[0];
    const searchmedia = params[1];

    axios.get(`https://itunes.apple.com/search?term=${term}&media=${searchmedia}&limit=10`)
        .then((response) => {
         response.data.results.map((data) => data.kind );
         return response.data.results;
    }).then((response) => {
        res.json(response);
        
    }).catch((error) => console.error(error));
});

module.exports = router;


