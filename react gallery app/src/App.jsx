import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './App.css';

//importing my API Key 
import apiKey from './config.js';

//App components
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoList from './components/PhotoList';


//Main App
function App() {

  //useState Hooks
 const [photo, setPhotos] = useState([]);
 const [query, setQuery] = useState("");

 const location = useLocation();

 // Using axios to fetch date from flickr API 

 const fetchData = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      //handle success
      setPhotos(response.data.photos.photo);
    })
    .catch(error => {
      // handle error
      console.log("Error fetching and parsing data",error);
    }), [query];

 }

 // Allowing search component to update query state & call the fetchData  function and pass it the query entered by the user

 const handleQueryChange = (searchText) => {
  setQuery(searchText); 
  fetchData(searchText);
}

// we are using the useEffect hook to fetch data from the API when the component mounts & uselocation hook here to return the current location of the url the `pathname` of the specific link the user clicks is returned as a string, "substring(1)" method removes the forward slash from the pathname. 

 useEffect(() => {
  const path = location.pathname.substring(1);

    if (path === "tropical") {
      fetchData("tropical");
    } if (path === "waterfalls") {
      fetchData("waterfalls"); 
    } else if (path === "beaches") {
      fetchData("beaches");
    } 
 }, [location]);
 



  return (
    <div className="container">

      {/*This passes the handleQueryChange functon to the Search component and invokes it whenever the changeQuery prop is called */}
      
      <Search changeQuery={handleQueryChange} />

      {/*Navigation component*/}

      <Nav />
        <Routes>

            {/* home route will be redirected to tropica path */}

            <Route path="/" element={<Navigate to="/tropical" />} /> 

            {/* Tropical, waterfalls and beaches are 3 static routes; These render the PhotoList component including the search query.*/}

            <Route path="/tropical" element={<PhotoList data={photo} />} />
            <Route path="/waterfalls" element={<PhotoList data={photo} />} />
            <Route path="/beaches" element={<PhotoList data={photo} />} />
            <Route path="/search/:query" element={<PhotoList data={photo} />} />

        </Routes>
    </div>
  );
}

export default App;
