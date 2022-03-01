let {contacts} = require('../contacts.json');

function getAll() {
    return contacts;
}

function getOne(idContact) {
    return contacts.find(c => c.id === idContact);
}

function add(newParamContact) {
    const nextId = contacts[contacts.length - 1].id + 1;
    const newContact = {id: nextId, ...newParamContact}
    contacts.push(newContact);
    return newContact;
}

function update(idContact, updContact) {
    const contact = contacts.find(c => c.id === idContact);
    contact.fullName = updContact.fullName;
    contact.phoneNumber = updContact.phoneNumber;

    return contact;
}

function deleteOne(idContact) {
    contacts = contacts.filter(c => c.id !== idContact);
}

module.exports = {
    getAll,
    getOne,
    add,
    update,
    deleteOne
}