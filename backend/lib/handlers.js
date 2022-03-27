const messages = require('./messages')

exports.messages = (req, res) => res.status(200).json(messages.createMessageList())

exports.notFound = (req, res) => res.status(404).send()

/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.status(500).send()
/* eslint-enable no-unused-vars */