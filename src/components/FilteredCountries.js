import React from 'react'

const FilteredCountries = (props) => {
  const countries = []
  countries.concat(props.countries)
  const filter = props.filter
  const filtered = countries.filter( person =>
    person.name.toLowerCase().includes(filter.toLowerCase()))
  if (filtered.length > 10) {
    return <div>
      Too many matches. Specify another filter.
    </div>
  } else if (filtered.length > 1 && filtered.length <= 10) {
    return <div>
      {filtered.map( country => <div key={country.name}>
      {country.name}</div>)}
    </div>
  } else if (filtered.length === 1) {
    const country = filtered[0]
    const languages = []
    const flagUri = country.flag
    languages.concat(country.languages)
    return <div>
      <h2>{country.name}</h2>
      <div>capital: {country.capital}</div>
      <div>population: {country.population}</div>
      <h3>languages</h3>
      <ul>
      {languages.map( language => <li key={language.name}>
      {language.name}</li>)}
      </ul>
      <image src={flagUri} />
    </div>
  }
  
}

export default FilteredCountries