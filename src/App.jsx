import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './App.css';

//importing my API Key 
const apiKey = import.meta.env.VITE_API_KEY;
//import apiKey from './config.js';

//App components
import Nav from './components/Nav';
import Search from './components/Search';
import PhotoList from './components/PhotoList';
import NotFound from "./components/NotFound";


//Main App
function App() {

  //useState Hooks
 const [photo, setPhotos] = useState([]);
 const [query, setQuery] = useState("");
 const [loading, setLoading] = useState(false);

 const location = useLocation();
 let navigate = useNavigate();


 // Using axios to fetch date from flickr API, changed URL to template literal to embed the value of the quer into the URL using interpolation, added query to the dependency array so the data can be fetched each time the query state changes

 const fetchData = (query) => {
  setLoading(true); 
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      //handle success
      setPhotos(response.data.photos.photo);
      setLoading(false);
    })
    .catch(error => {
      // handle error
      console.log("Error fetching and parsing data",error);
    }), [query];

 }

 // Allowing search component to update query state & call the fetchData  function and pass it the query entered by the user. Utilized navigate to create the path that would be inserted into the URL

 const handleQueryChange = (searchText) => {
  setQuery(searchText); 
  navigate(`search/${searchText}`);
}

// we are using the useEffect hook to fetch data from the API when the component mounts & uselocation hook here to return the current location of the url the `pathname` of the specific link the user clicks is returned as a string, "substring(1)" method removes the forward slash from the pathname. else If includes when the user inputs a value into the search componenet, The path will change to what the user inputed

 useEffect(() => {
  let path = location.pathname.substring(1);

  if (path === "tropical") {
    fetchData("tropical");
  } if (path === "waterfalls") {
    fetchData("waterfalls"); 
  } if (path === "beaches") {
    fetchData("beaches");
  } else if (path.includes("search/")) {
      path = location.pathname.substring(8);
    } fetchData(path); 
 }, [location]);
 



  return (
    <div className="container">

      {/*This passes the handleQueryChange functon to the Search component and invokes it whenever the changeQuery prop is called */}
      
      <Search changeQuery={handleQueryChange} />

      {/*Navigation component*/}

      <Nav />

      {/**Used a ternary statement, inside the parentheses I set the condition to  loading, if the loading state is true or while the photos are loading, a paragraph will be rendered displaying "loading". If the loading state is false the routes will be rendered */}
      {
        (loading)
        ? <p>Loading...</p>
        : <Routes>

            {/* home route will be redirected to tropical path, added "replace" to navigate through history stack */}

            <Route path="/" element={<Navigate replace to="/tropical" />} /> 

            {/* Tropical, waterfalls and beaches are 3 static routes; These render the PhotoList component including the search query. Added a route at the end for 404 Error when a page cannot be found.*/}

            <Route path="/tropical" element={<PhotoList data={photo} />} />
            <Route path="/waterfalls" element={<PhotoList data={photo} />} />
            <Route path="/beaches" element={<PhotoList data={photo} />} />
            <Route path="/search/:query" element={<PhotoList data={photo} />} />
            <Route path= "*" element={<NotFound />} />
           </Routes>
           

        
        }

    </div>
  );
}

export default App;
