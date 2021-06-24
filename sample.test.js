const request = require('supertest')
const app = require('./app')
describe('Post Endpoints', () => {
    it('should create a new post', async (done) => {
        const url = process.env.REACT_APP_API_URL + '/user';
        console.log('URL ---', url);
        const res = await request(app).get('/user');
        expect(res.statusCode).toBe(200);
        done();
    })
})


// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//         expect(true).toBe(true)
//     })
// })
