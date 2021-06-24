require('dotenv').config()
const { expect } = require('chai');
var chai = require('chai')
    , chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

describe('Post Endpoints', () => {

    it('should create a new post', (done) => {
        console.log('URL --', process.env.API_URL + '/users')
        chai.request(app).get(process.env.API_URL + '/users')
            .end((err, res) => {
                console.log('logged out status code --', res.body)
                // expect(res.status).to.equal(404);
                done();
            })
    });

})
