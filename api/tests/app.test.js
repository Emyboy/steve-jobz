const chaiHTTP = require('chai-http')
const chai = require('chai')
const { expect } = require('chai')
const app = require('../../app');

chai.use(chaiHTTP);


describe('Testing express application', () => {

    it('Should return 200 status code', (done) => {
        chai.request(app).get(process.env.API_URL).end((err, res) => {
            expect(res.status).to.equal(200);
            done()
        });
    });

});

