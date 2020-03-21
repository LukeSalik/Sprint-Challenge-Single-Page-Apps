import React, { useEffect, useState } from "react";
import axios from "axios";
import ChararcterCard from "./CharacterCard.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const [data, setData] = useState([]);
    axios
      .get("https://rickandmortyapi.com/documentation")
      .then(res => setData(res.data.results));
    console.log(data);
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
