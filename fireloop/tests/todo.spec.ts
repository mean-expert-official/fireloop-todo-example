var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Todo unit tests:', () => {
    it('Should create a Todo instance', (done: Function) => {
        api.post('/todos').send({
            text: 'test',
            dueAt: 'Thu Dec 22 2016 12:59:23 GMT-0600 (CST)'
        }).expect(200, done);
    });
});
