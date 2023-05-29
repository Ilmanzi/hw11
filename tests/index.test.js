const request = require('supertest');

const app = require('../index');

describe('GET /todo', () => {
  it('should return 200 ok', () => {
    request(app)
    .get('/todo')
    .expect('Content-Type','application/json; charset=utf-8')
    .expect(200)
  })
})

describe('GET /todo/id', () => {
  it('should return 200 ok', () => {
    request(app)
    .get('/todo/4')
    .expect('Content-Type','application/json; charset=utf-8')
    .expect(200)
  })
})

describe('/todo/add', () => {
  it('should return 201 ok', () => {
    request(app)
    .post('/todo/add')
    .send({name: "Lorem"})
    .expect('Content-Type','application/json; charset=utf-8')
    .expect(201)
  })
})

describe('/todo/update/:id', () => {
  it('should return 203 ok', () => {
    request(app)
    .put('/todo/update/4')
    .send({name: "Lorem"})
    .expect('Content-Type','application/json; charset=utf-8')
    .expect(203)
  })
})

describe('/todo/del/:id', () => {
  it('should return 204 ok', () => {
    request(app)
    .delete('/todo/del/4')
    .expect(204)
  })
})
