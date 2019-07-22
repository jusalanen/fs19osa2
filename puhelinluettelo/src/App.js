import React, { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  const addNameNumber = (event) => {
    event.preventDefault()
    const names = []
    persons.map( person => names.push(person.name))
    if (names.includes(newName)) {
      window.alert(newName + ' is already included in Phonebook. Give another name')
      setNewName('')
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm addNameNumber = {addNameNumber}
                newName = {newName}
                handleNameChange = {handleNameChange}
                newNumber = {newNumber}
                handleNumberChange = {handleNumberChange} />
      <Phonebook persons={persons} filter={filter} />
    </div>
  )

}

export default App