import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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

 useEffect(() => {
    fetchData("tropics");

 }, []);
 



  return (
    <div className="container">

      {/*This passes the handleQueryChange functon to the Search component and invokes it whenever the changeQuery prop is called */}
      
      <Search changeQuery={handleQueryChange} />

      {/*Navigation component  */}

      <Nav />
      <Routes>

          <Route path="/" element={<Navigate to="tropics" />} />
          <Route path="/tropics" element={<PhotoList data={photo} />} />
          <Route path="/waterfalls" element={<PhotoList data={photo} />} />
          <Route path="/beaches" element={<PhotoList data={photo} />} />
          <Route path="/search/:query" element={<PhotoList data={photo} />} />

      </Routes>
    </div>
  );
}

export default App;
