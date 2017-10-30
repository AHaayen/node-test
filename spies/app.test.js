const expect = require('expect');

const rewire = require('rewire');

var app = rewire('./app'); // rewire loads ur file through require


describe('App', () =>  {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andres', 23);
        expect(spy).toHaveBeenCalledWith('Andres', 23);
    });

    it('should call saveUser with user object', () => {
        var email = 'andreshaayen@gmail.com';
        var password = '123acv';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});