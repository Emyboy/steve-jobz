require('dotenv').config()
const { expect } = require('chai');
var chai = require('chai')
    , chaiHttp = require('chai-http');
const app = require('../../app');
const { newUser } = require('./__mock__/user.mock');

chai.use(chaiHttp);



describe('Testing Auth Success', () => {
    
    it('it should return 201 user signed up', (done) => {
        chai.request(app).post(process.env.API_URL + '/user').send({ ...newUser })
            .end((err, res) => {
                console.log('res --', res.body)
                expect(res.status).to.equal(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('first_name');
                expect(res.body).to.have.property('last_name');
                expect(res.body).to.have.property('email');
                expect(res.body).to.have.property('password');
                expect(res.body).to.have.property('role_id');
                expect(res.body).to.have.property('username');
                expect(res.body).to.have.property('avatar_url');
                expect(res.body.first_name).to.equal('emy');
                expect(res.body.last_name).to.equal('kumba');
                expect(res.body.email).to.equal('emy@meetkumba.com');
                expect(res.body.role_id).to.equal(1);
                expect(res.body.isVerified).to.equal(false);
                done();
            })
    });

    it('it should return 400 username already exist', (done) => {
        chai.request(app).post(process.env.API_URL + '/user').send({ ...newUser })
            .end((err, res) => {
                console.log('res --', res.body)
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal('username is aready in use');
                done();
            })
    });

});


describe('Testing auth endpoints for bad requests', () => {

    // Email Vlidation
    it('it should return 400 Invalid email address', (done) => {
        chai.request(app).post(process.env.API_URL + '/user').send({ ...newUser, email: null })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('array');
                expect(res.body[0]).to.have.property('msg');
                expect(res.body[0].msg).to.equal('Invalid email address');
                done();
            })
    });

    it('it should return 400 Email is required', (done) => {
        let user = { ...newUser };
        delete user.email
        chai.request(app).post(process.env.API_URL + '/user').send(user)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('array');
                expect(res.body[0]).to.have.property('msg');
                expect(res.body[0].msg).to.equal('Email is required');
                done();
            })
    });

    it('it should return 400 for unsupprted email address', (done) => {
        chai.request(app).post(process.env.API_URL + '/user').send({ ...newUser, email: 'fake_email' })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('array');
                expect(res.body[0]).to.have.property('msg');
                expect(res.body[0].msg).to.equal('Invalid email address');
                done();
            })
    });

    // password validation
    it('it should return 400 password is required', (done) => {
        let user = { ...newUser };
        delete user.password
        chai.request(app).post(process.env.API_URL + '/user').send(user)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('array');
                expect(res.body[0]).to.have.property('msg');
                expect(res.body[0].msg).to.equal('Password is required');
                done();
            })
    });

    it('it should return 400 Password is too short', (done) => {
        delete newUser.email
        chai.request(app).post(process.env.API_URL + '/user').send({ ...newUser })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('array');
                expect(res.body[0]).to.have.property('msg');
                expect(res.body[0].msg).to.equal('Email is required');
                done();
            });
    });

});






