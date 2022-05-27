const {StatusCodes} = require('http-status-codes');
const contactService = require('../services/contactService');

function getAll(req, res) {
    const contacts = contactService.getAll();

    res.status(StatusCodes.OK).json(contacts);
}

function add(req, res) {
    const newParamContact = req.body;

    const newContact = contactService.add(newParamContact);
    res.status(StatusCodes.CREATED).json(newContact);
}

function update(req, res) {
    const {idContact} = req.params;
    const updParamContact = req.body;

    const updContact = contactService.update(+idContact, updParamContact);
    res.status(StatusCodes.OK).json(updContact);
}

function deleteOne(req, res) {
    const {idContact} = req.params;

    contactService.deleteOne(+idContact);
    res.status(StatusCodes.NO_CONTENT).json();
}

module.exports = {
    getAll,
    add,
    update,
    deleteOne
};