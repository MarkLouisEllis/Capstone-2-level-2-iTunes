import React from 'react';
import ResultsArray from './SearchResults';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchFunc extends React.Component {
        constructor(props) {
            super(props);
            this.handleSearch = this.handleSearch.bind(this);
            this.handleResult = this.handleResult.bind(this);
            this.handleClick = this.handleClick.bind(this);
            this.handleSearchMediaChange = this.handleSearchMediaChange.bind(this);
    
            this.state = {
                searchResult: [],
                inputVal : '',
                mediaVal: 'all',
                error: null
            };
        }

        //event handlers for the user input,select and search button
        //This updates the the state of the input field named inputVal to the user input 
        handleSearch(event) {
            this.setState({inputVal:event.target.value});
        }
        //this triggers the handleResult function when a users clicks on the search button
        handleClick(event){
            this.handleResult(event);
        }
        //This updates the the state of the select menu named mediaVal to the user selected media type 
        handleSearchMediaChange(event){
            this.setState({ mediaVal: event.target.value });
         }

        //display search result requested by acquiring inputVal and mediaVal's current state. This is used in the fetch method that calls the backend post request to acquire searchresults.
        //The results are stored in an array named searchResult. This array state is used in the SearchResults component which displays the results.
        handleResult(event) {
            const {inputVal, mediaVal} = this.state;
            if(this.state.inputVal === ''){
                alert('please enter a search term')
            }
            event.preventDefault();
            fetch(`/search/${inputVal}/${mediaVal}`, {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({inputVal:this.state.inputVal, mediaVal:this.state.mediaVal}) 
                    })
                .then(res => res.json())
                .then(
                    (info) => {
                        console.log(info);
                        this.setState({searchResult: info}); 
                    })
                .catch(error =>{
                    this.setState(error);
                    console.log(error);
                })
                }
   
    render() {
        //create array of mediaTypes to be used in the select field
        const mediaTypes = [
            'all',
            'movie',
            'podcast',
            'music',
            'musicVideo',
            'audiobook',
            'shortFilm',
            'tvShow',
            'software',
            'ebook',
        ];
        
        //the mediaOptions var is a options menu which is populated by the map function which itterates through the mediaTypes array. 
        const mediaOptions = mediaTypes.map(media => (
			<option value={media} label={media} key={media} />   
		));

        let searchResult = this.state.searchResult;
                    return (
                    <div className = " app">
                        <link
                            rel="stylesheet"
                            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                            crossorigin="anonymous"/>
                    
                        <Form id="formName" onSubmit={this.handleClick}>
                                <Form.Group>
                                    <Form.Label></Form.Label>
                                    <h5>Enter content:</h5>
                                    <Form.Control type="text" placeholder = 'search...' inputVal={this.state.inputVal} onKeyPress ={this.handleSearch} />
                                    <h5>Select media type:</h5>
                                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom onChange={this.handleSearchMediaChange} >
                                        {mediaOptions}
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="dark" type="submit">Search</Button>    
                        </Form>

                        <ResultsArray searchResult={this.state.searchResult}/>
                    
                    </div>
                );
        }
}

export default SearchFunc;

