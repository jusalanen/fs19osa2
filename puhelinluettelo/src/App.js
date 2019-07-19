import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter ] = useState('')

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

  const Phonebook = ( {persons} ) => {
    const filtered = persons.filter( person =>
      person.name.toLowerCase().includes(filter.toLowerCase()))
    return <div>
      {filtered.map( person => <div>
      {person.name} {person.number}</div>)}
    </div>
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter with: <input value={filter} 
          onChange={handleFilterChange}/>
      </div>
      <div>
      <h2>Add new name and number</h2>
      <form onSubmit={addNameNumber}>
        <div>name: <input value={newName} 
          onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </div>
      <h2>Numbers</h2>
      <Phonebook persons={persons} />
    </div>
  )

}

export default App