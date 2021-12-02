import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { uuid } from 'uuidv4';

function App() {
  const [contacts,setContacts] = useState([]);
  const addContactHandler = (contact) =>{
    setContacts([...contacts,{id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    localStorage.setItem('peska', JSON.stringify(contacts));
  },[contacts])

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem('peska'));
    if (retriveContacts) setContacts(retriveContacts)
  },[])

  return (
    <div className="ui container" >
      <Header/>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
