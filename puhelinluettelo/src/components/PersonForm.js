import React from 'react'

const PersonForm = (props) => {
  const addNameNumber = props.addNameNumber
  const newName = props.newName
  const handleNameChange = props.handleNameChange
  const newNumber= props.newNumber
  const handleNumberChange = props.handleNumberChange

  return (
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
  )
}

export default PersonForm