import Weather from './Weather'

const Country = (props) => {

  return(
    <div>
      {props.detail.map((res) => {
        return(
        <div key={res.alpha3Code}>
          <h1>{res.name}</h1>
          <p><b>Capital:</b> {res.capital}</p>
          <p><b>Population:</b> {res.population}</p>
          <h2>languages</h2> 
          <ul>
            {res.languages.map((lang) => {
              return <li key={lang.name}>{lang.name}</li>
            })}
          </ul>
          <img alt={res.name + "flag"} src={res.flag} style={{ height: '50%', width: '50%' }} />
          <Weather capital={res.capital}/>
        </div>
        )
      })}
    </div>
  )
}

export default Country;