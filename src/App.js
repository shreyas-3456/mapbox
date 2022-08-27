import "./styles.css";
import React, { useEffect, useState } from "react";

import Map from "./components/Map";
import Search from "./components/Search";
import axios from "axios";

export function App() {
  const [cordinates, setCordinates] = useState([]);

  const getFetch = async (url) => {
    const res = await axios(url);
    setCordinates(res.data.features[0].geometry.coordinates);
  };

  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  const api = `https://api.mapbox.com/geocoding/v5/mapbox.places/${
    search || "Los angles"
  }.json?access_token=${process.env.REACT_APP_TOKEN}`;

  const handleClick = (e) => {
    e.preventDefault();
    setSearch(encodeURIComponent(value));
  };

  useEffect(() => {
    getFetch(api);
  }, [search]);

  return (
    <>
      <Search value={value} setValue={setValue} handleClick={handleClick} />
      <Map cordinates={cordinates} />
    </>
  );
}

export default App;
