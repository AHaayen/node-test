const expect = require('expect');

const utils = require('./utils');


// it = is provided by Mocha. 
it('should add two numbers', () => {
    var res = utils.add(33,11);

    expect(res).toBe(44).toBeA('number');
    // if(res !== 44){
    //     throw new Error(`Expected 44, but got ${res}.`);    
    // }
});


it('should async add two numbers', (done) => {
    utils.asyncAdd(4,3,(sum) => {
        expect(sum).toBe(7).toBeA('number');
        done(); 
        // this tells mocha that we're all done with the 
        // test and can go ahead and process the result
        // letting us know rather it passed or failed. 
    });
});


it('should square a number', () => {
    var res = utils.square(4);

    // Assertion Libraries! 
    expect(res).toBe(16).toBeA('number');


    // if(res !== 16){
    //     throw new Error(`Expected 16, but got ${res}.`)
    // }
});


it('should async square a number', (done) => {
    utils.asyncSquare(5, (res) => {
        expect(res).toBe(25).toBeA('number');
        done();
    });
});


// should verify first and last names are set
// assert it includes firstName and lastName with proper values

it('should verify firstName and lastName ', () => {
    var user = {location: `The Hague`, age: 23};
    var res = utils.setName(user, 'Andres Haayen');

    expect(res).toInclude({
        firstName: 'Andres',
        lastName: 'Haayen'
    })
})






// it('should expect some values', () => {
//     // toBe & toNotBe work great with booleans, strings and numbers
//     // expect(12).toNotBe(1);

//     // but not with arrays or objects! But toEqual can WORK. 

//     // expect({name: 'Andres'}).toEqual({name: 'Andres'});
//     // expect({name: 'Andres'}).toNotEqual({name: 'Andrew'});

//     // expect([2, 3, 4]).toInclude(2);

//     expect({
//         name: 'Andres',
//         age: 23,
//         location: 'The Hague'
//     }).toExclude({ // toInclude
//         age: 25
//     })
// });


