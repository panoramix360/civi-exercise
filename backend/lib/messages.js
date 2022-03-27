const createMessage = (id, subject, detail) => {
  return {
    id,
    timestamp: new Date(),
    subject,
    detail
  }
}

exports.createMessageList = () => {
  return Array(5).fill(0).map((_, i) => (
    createMessage(
      i,
      `Assunto ${i}`,
      `Detalhes da mensagem ${i}`
    )
  ))
}