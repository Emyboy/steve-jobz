const app = require('../../app')
const { expect } = require('chai')
var chai = require('chai')
    , chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Post Endpoints', () => {

    it('should create a new post', () => {
        console.log('URL --', process.env.API_URL + '/users')
        chai.request(app).get(process.env.API_URL + '/users')
            .end((err, res) => {
                console.log('logged out status code --', res.status)
                expect(res.status).to.equal(404);
            })
    });

})


// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//         expect(true).toBe(true)
//     })
// })
