const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;


describe('Server', () => {
    
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });

    describe('GET /user', () => {
        it('should return my list of names', (done) =>{
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Andres',
                        age: 23
                    });
                })
                .end(done);
        });
    });
});







/*
test your applications with assertion = expect, 
then something like .toInclude, toBe, toNotBe, toBeA etc

GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

start with 'it' , its the only way to make a new test.

*/