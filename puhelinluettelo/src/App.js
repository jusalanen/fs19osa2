import React, { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')


  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then( response => {
        console.log('promise fulfilled')
        console.log(response)
        setPersons(response)
      })
  }
  
  useEffect(hook, [])

  const addNameNumber = (event) => {
    event.preventDefault()
    const names = []
    persons.map( person => names.push(person.name) )
    if (names.includes(newName)) {  
      persons.forEach((person) => {
        if (person.name === newName) {
          if (window.confirm(newName + ' is already included in Phonebook. Replace the old number with a new one ?')) {
            const changedPerson = {
              name: person.name,
              number: newNumber,
              id: person.id
            }
            personService
            .update(person.id, changedPerson)
            .then( (response) => {
              console.log(response)
              personService.getAll()
              .then( response => {
                setPersons(response)
              })
            })
          }
        }
      })
      setNewName('')
      setNewNumber('')
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then( response => {
          setPersons(persons.concat(response))
        })     
      setNewName('')
      setNewNumber('')
    }
  }

  const handleDelete = (personId) => {
    personService
      .remove(personId)
      .then( () => {
        personService.getAll()
        .then( response => {
          setPersons(response)
        })
      })
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
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm addNameNumber = {addNameNumber}
                newName = {newName}
                handleNameChange = {handleNameChange}
                newNumber = {newNumber}
                handleNumberChange = {handleNumberChange} />
      <Phonebook persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  )

}

export default App