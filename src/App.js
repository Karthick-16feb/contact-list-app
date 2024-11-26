import React, { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-3xl p-5 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 animate-pulse mb-5">
          Contact List
        </h1>


        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ContactList contacts={filteredContacts} />
      </div>
    </div>
  );
}

export default App;
