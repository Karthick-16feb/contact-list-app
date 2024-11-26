import React from 'react';

const ContactList = ({ contacts }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map(contact => (
            <div
            key={contact.id}
            className="p-5 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
            >
            <h3 className="text-xl font-semibold text-gray-800">{contact.name}</h3>
            <p className="text-gray-600">Email: {contact.email}</p>
            <p className="text-gray-600">Phone: {contact.phone}</p>
            </div>
        ))}
        </div>
    );
};

export default ContactList;
