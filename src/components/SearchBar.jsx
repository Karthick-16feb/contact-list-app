import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="mb-4">
        <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
    );
};

export default SearchBar;
