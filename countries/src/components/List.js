import React, { useState } from 'react'
import axios from "axios"
import Country from './Country'

const List = (props) => {
  const [showCountry, setShowCountry] = useState(false)
  const [filterCountry, setFilterCountry] = useState([])

  const clickHandle = (code) => {
    axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
    .then((res) => {
      if(res.data){
        setShowCountry(true);
        setFilterCountry(filterCountry.concat(res.data));
      }
    })
  }

  return(
    !showCountry ? props.list.map((country) => {
      return(
         <ul style={{listStyle: "none"}} key={country.alpha3Code}>
          <li>{country.name} <button onClick={() => clickHandle(country.alpha3Code)}>Show</button></li>
        </ul> 
      )
    }) : <Country detail={filterCountry} />
  )
}

export default List