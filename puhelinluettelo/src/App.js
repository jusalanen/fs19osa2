import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const names = []
    persons.map( person => names.push(person.name))
    if (names.includes(newName)) {
      window.alert(newName + ' is already added to phonebook. Give another name')
      setNewName('')
    } else {
      const personObject = {
        name: newName
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const Phonebook = ( {persons} ) => {
    return <div>
      {persons.map( person => <div>
      {person.name} </div>)}
    </div>
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName} 
          onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Phonebook persons={persons} />
    </div>
  )

}

export default App