import React from 'react'
import Person from './Person'

const FilteredPersons = (props) => {
  const persons = props.persons
  const filter = props.filter
  const filtered = persons.filter( person =>
    person.name.toLowerCase().includes(filter.toLowerCase()))
  return <div>
    {filtered.map( person => <div>
    <Person person={person} /></div>)}
  </div>
}

export default FilteredPersons