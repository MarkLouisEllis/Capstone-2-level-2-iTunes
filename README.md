Please read this file.

This readme contain information to both the backend and frontend systems of this application as well as general information. 

General:
This is an application created using express and React. The front end has been created using create-react-app.

THe purpsose of this app is to serve as a search ebgine to search the iTunes library. A user can search for any content and content type that they desire and are able to store their favourite content
in a favourites list.
The user will be able to remove content from their favourites list.

How to use the app:
Navigate to either the Seaerch engine or the favourites via the Menu drop down.

1.Simply type the term(artist name,song,book etc.) into the search bar.
2.Select the media type of the content that you want to be displayed.
3.Within the search results table 10 search items will be displayed.
4.To add an item to your favourites list click the "add" button that is found next to each result.
5.The Item's name will appear in the Favourites table located in the favourites tab.
6.To remove an intem from your favourites table click the "remove" button.

**note**
If the favourites tab does not update, refresh the page and the changes will take effect.

------------This next section explains how a user can install,test and run the app from their local machine.-----------

1.Copy the project folder to desired location on your local machine.

2.Backend:
2.1 To install and start this application navigate to project directory in your command line.
2.2 cd backend
2.3 npm install (install dependencies and node modules)
2.4 npm start ( will run the backend system of the application)

3.Frontend:

3.1 To install and run this application navigate to project directory in your command line.
3.2 cd frontend
3.3 npm install (install dependencies and node modules)
**note**
Be sure that the backend code is also running.
3. npm start ( will run the frontend system of the application)

App will run at : "http://localhost:3000/"

-----------Testing the app-------------

Backend:
To test this app with postman follow these steps

Starting up:
-Open postman
-navigate to my workspaces and select 'new'. Select Requests block

Get request instuctions:

-select get from the dropdown
-Enter "http://localhost:8080/search/' into the 'enter reqeust url' tab
-add term and type after search. ie  "search/yourterm/yourtype
**note** 
here is a list of valid types : 
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
-Click on the send button

A response will be shown

To run written tests for the application

1.run npm start
2.in new cmd line cd backend
3.npm test

**note**
The written test for this app can be found in the following directory "backend/test/users.test.js"

Frontend:

To test this code:
1. cd frontend
2. npm test

**note**
The written test for this app can be found in the following directory "backend/frontend/src/app.test.js"

--------------------Security measures--------------------
This app is secured by helmut.
No API keys were are used to run this application.

-------------------Link to deplyed app-------------------


