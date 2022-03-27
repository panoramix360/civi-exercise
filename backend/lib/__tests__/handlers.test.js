const handlers = require('../handlers')
const messages = require('../messages')

test('messages are returned', () => {
  const req = {}
  const res = { status: jest.fn(), json: jest.fn() }

  handlers.messages(req, res)
  expect(res.status.mock.calls.length).toBe(1)
  expect(res.status.mock.calls[0][0]).toBe(200)

  expect(res.json.mock.calls.length).toBe(1)
  expect(res.json.mock.calls[0][0].length).toBe(5)
})

test('404 handler resource', () => {
  const req = {}
  const res = { status: jest.fn(), send: jest.fn() }

  handlers.notFound(req, res)
  expect(res.status.mock.calls.length).toBe(1)
  expect(res.status.mock.calls[0][0]).toBe(404)

  expect(res.send.mock.calls.length).toBe(1)
})

test('500 handler resource', () => {
  const error = new Error('some error')
  const req = {}
  const res = { status: jest.fn(), send: jest.fn() }
  const next = jest.fn()

  handlers.serverError(error, req, res, next)
  expect(res.status.mock.calls.length).toBe(1)
  expect(res.status.mock.calls[0][0]).toBe(500)

  expect(res.send.mock.calls.length).toBe(1)
})