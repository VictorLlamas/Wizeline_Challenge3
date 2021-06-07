const faker = require('faker');

function randomNumber(userContext, events, done){
    userContext.vars.r_priority = faker.datatype.number({min:1, max:4});
    done();
}

module.exports = { randomNumber }