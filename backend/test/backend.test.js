let expect = require ( 'chai' ).expect;
let request = require ( 'request' );

//this test if the response from the server is correct if the method is wrong. THis test triggers a get request. The app uses a post request. The test passes in this format.
describe( 'Status' , function () {
    describe ( 'Search page' , function () {
        it( 'status' , function (done){
            request( 'http://localhost:8080/search/bob/all' ,
                function (error, response, body) {
            expect(response.statusCode).to.equal(404);
        done();
    });
});

// it( 'content' , function (done) {
//     request( 'http://localhost:8080/search/bob/all' ,
//         function (error, response, body) {
//             expect(body).to.equal( 'respond with a resource' );
//         done();
//     });
// });
});
});
