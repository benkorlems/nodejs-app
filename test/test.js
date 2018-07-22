//apiTest.js
const request = require('supertest');
const app = require('../app.js');

//==================== user API test ====================

/**
 * Testing get all user endpoint
 */
describe('GET /', function () {
    it('respond with Hello, World', function (done) {
        request(app)
            .get('/')
            .expect("Hello, World", done);
    });
});
