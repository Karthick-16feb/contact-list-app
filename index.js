const express = require('express');
const cors = require('cors');
const contacts = require('./contacts.json');

const app = express();
const PORT = 5001;

app.use(cors());

// API to get all contacts
app.get('/contacts', (req, res) => {
    res.json(contacts);
});

// API to get a specific contact by ID
app.get('/contacts/:id', (req, res) => {
    const contact = contacts.find(c => c.id === parseInt(req.params.id));
    if (contact) {
    res.json(contact);
    } else {
    res.status(404).json({ message: 'Contact not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
