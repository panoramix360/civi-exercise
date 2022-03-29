const moment = require('moment')
let messagesDb = []

const createMessage = (id, subject, detail) => {
  return {
    id,
    timestamp: moment().subtract(id, 'hour').toDate().getTime(),
    subject,
    detail
  }
}

exports.createMessageList = () => {
  if (messagesDb.length == 0) {
    messagesDb = Array(5).fill(0).map((_, i) => (
      createMessage(
        i,
        `Assunto ${i}`,
        `Detalhes da mensagem ${i}`
      )
    ))
  }

  return messagesDb
}