import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from "./components/Countries"


function App() {
  const [country, setCountries] = useState([])
  const [searchList, setSearchList ] = useState([])
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      setCountries(response.data);
    })
  }, [])

  const filterSearch = (event) => {
    setShowAll(false)
    const filteredList = country.filter((person) => {
      return person.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    });
    setSearchList(filteredList)
  }

  const newFilter = showAll ? country : searchList

  return (
    <div>
      <div>
        Search: <input onChange={filterSearch} />
      </div>
      {newFilter.length > 10 ? <p>too many matches, specify another filter</p> : <Countries list={newFilter} />}
      {newFilter.length === 0 ? <p>Not Found</p> : <span/>}
    </div>
  );
}

export default App;
