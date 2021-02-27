import React, { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState(persons)


  const submitHandle = (event) => {
    event.preventDefault();  
    const temp = {
      name: newName,
      number: newNumber
    } 

    if(newName === ''){
      alert("name cannot be blank");
    }else if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNewNumber('');
    } else { 
      setPersons(persons.concat(temp));
      setNewFilter(newFilter.concat(temp));
      setNewName('');
      setNewNumber('');
    }
  }

  const nameChangeHandle = (event) => {
    setNewName(event.target.value)
  }

  const numberChangeHandle = (event) => {
    setNewNumber(event.target.value)
  }

  const filterSearch = (event) => {
    const filteredList = persons.filter((person) => {
      return person.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    });
    setNewFilter(filteredList);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter eventHandler={filterSearch} />
      <h3>Add new</h3>
      <PersonForm submit={submitHandle} values={[newName, newNumber]} change={[nameChangeHandle, numberChangeHandle]} />
      <h3>Numbers</h3>
      <Person list={newFilter} />
    </div>
  )
}

export default App