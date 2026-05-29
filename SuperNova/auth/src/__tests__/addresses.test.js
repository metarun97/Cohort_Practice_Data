process.env.JWT_SECRET = 'testsecret';
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const jwt = require('jsonwebtoken');
const app = require('../app');

describe('Auth - Addresses', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      await collection.deleteMany({});
    }
  });

  test('GET /api/auth/users/me/addresses - empty list', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    const user = await userModel.create({ username: 'addruser1', email: 'addr1@example.com', password: hashed, fullName: { firstName: 'Addr', lastName: 'User' } });

    const token = jwt.sign({ id: user._id, username: user.username, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    const res = await request(app).get('/api/auth/users/me/addresses').set('Cookie', [`token=${token}`]);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.addresses)).toBe(true);
    expect(res.body.addresses.length).toBe(0);
  });

  test('POST /api/auth/users/me/addresses - invalid pincode returns 400', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    const user = await userModel.create({ username: 'addruser2', email: 'addr2@example.com', password: hashed, fullName: { firstName: 'Addr', lastName: 'User' } });

    const token = jwt.sign({ id: user._id, username: user.username, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    const res = await request(app)
      .post('/api/auth/users/me/addresses')
      .set('Cookie', [`token=${token}`])
      .send({ street: 'Main St', city: 'City', pincode: 'abc' });

    expect(res.status).toBe(400);
  });

  test('POST /api/auth/users/me/addresses - invalid phone returns 400', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    const user = await userModel.create({ username: 'addruser3', email: 'addr3@example.com', password: hashed, fullName: { firstName: 'Addr', lastName: 'User' } });

    const token = jwt.sign({ id: user._id, username: user.username, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    const res = await request(app)
      .post('/api/auth/users/me/addresses')
      .set('Cookie', [`token=${token}`])
      .send({ street: 'Main St', city: 'City', pincode: '560001', phone: '123' });

    expect(res.status).toBe(400);
  });

  test('POST /api/auth/users/me/addresses - add address and mark default', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    const user = await userModel.create({ username: 'addruser4', email: 'addr4@example.com', password: hashed, fullName: { firstName: 'Addr', lastName: 'User' } });

    const token = jwt.sign({ id: user._id, username: user.username, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // Add first address as default
    const res1 = await request(app)
      .post('/api/auth/users/me/addresses')
      .set('Cookie', [`token=${token}`])
      .send({
        street: '1st St',
        city: 'City',
        state: 'State',
        country: 'Country',
        pincode: '560001',
        phone: '+919876543210',
        isDefault: true
      });

    expect(res1.status).toBe(201);
    expect(res1.body.address).toHaveProperty('isDefault', true);

    // Add second address as default and ensure first is no longer default
    const res2 = await request(app)
      .post('/api/auth/users/me/addresses')
      .set('Cookie', [`token=${token}`])
      .send({
        street: '2nd St',
        city: 'City2',
        state: 'State2',
        country: 'Country2',
        pincode: '560002',
        phone: '+919876543211',
        isDefault: true
      });

    expect(res2.status).toBe(201);
    const getRes = await request(app).get('/api/auth/users/me/addresses').set('Cookie', [`token=${token}`]);
    expect(getRes.status).toBe(200);
    expect(getRes.body.addresses.length).toBe(2);
    const defaults = getRes.body.addresses.filter(a => a.isDefault);
    expect(defaults.length).toBe(1);
    expect(defaults[0]).toHaveProperty('street', '2nd St');
  });

  test('DELETE /api/auth/users/me/addresses/:addressId - remove address', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash('password123', 10);
    const user = await userModel.create({ username: 'addruser5', email: 'addr5@example.com', password: hashed, fullName: { firstName: 'Addr', lastName: 'User' } });

    const token = jwt.sign({ id: user._id, username: user.username, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    const res1 = await request(app)
      .post('/api/auth/users/me/addresses')
      .set('Cookie', [`token=${token}`])
      .send({
        street: 'Delete St',
        city: 'City',
        pincode: '560003',
        phone: '+919876543212'
      });
    expect(res1.status).toBe(201);
    const addrId = res1.body.address._id;

    const delRes = await request(app).delete(`/api/auth/users/me/addresses/${addrId}`).set('Cookie', [`token=${token}`]);
    expect(delRes.status).toBe(200);
    const getRes = await request(app).get('/api/auth/users/me/addresses').set('Cookie', [`token=${token}`]);
    expect(getRes.status).toBe(200);
    expect(getRes.body.addresses.map(a => a._id).includes(addrId)).toBe(false);
  });

  test('DELETE non-existing address returns 404', async () => {
    const userModel = require('../models/user.model');
    const bcrypt = require('bcryptjs');
    const mongoose = require('mongoose');
    const hashed = await bcrypt.hash('password123', 10);
    const user = await userModel.create({ username: 'addruser6', email: 'addr6@example.com', password: hashed, fullName: { firstName: 'Addr', lastName: 'User' } });

    const token = jwt.sign({ id: user._id, username: user.username, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    const fakeId = new mongoose.Types.ObjectId();
    const delRes = await request(app).delete(`/api/auth/users/me/addresses/${fakeId}`).set('Cookie', [`token=${token}`]);
    expect(delRes.status).toBe(404);
  });

});
