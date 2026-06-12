/**
 * @jest-environment node
 */
jest.mock('../src/services/imagekit', () => ({
  uploadFile: jest.fn(),
}));
jest.mock('../src/models/product.model', () => ({
  create: jest.fn(),
}));

const request = require('supertest');
const app = require('../src/app');
const imagekit = require('../src/services/imagekit');
const Product = require('../src/models/product.model');

beforeEach(() => {
  imagekit.uploadFile.mockResolvedValue({
    url: 'http://img.test/image.jpg',
    thumbnail: 'http://img.test/thumb.jpg',
    fileId: 'abc123',
  });

  Product.create.mockResolvedValue({
    _id: 'prod123',
    title: 'Test Product',
    description: 'desc',
    price: { ammount: 100, currency: 'INR' },
    images: [{ url: 'http://img.test/image.jpg', thumbnail: 'http://img.test/thumb.jpg', id: 'abc123' }],
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

test('POST /api/products uploads image and creates product', async () => {
  const res = await request(app)
    .post('/api/products')
    .field('title', 'Test Product')
    .field('description', 'desc')
    .field('price', '100')
    .attach('image', Buffer.from('fake image content'), 'test.jpg');

  expect(res.status).toBe(201);
  expect(imagekit.uploadFile).toHaveBeenCalled();
  expect(Product.create).toHaveBeenCalledWith(
    expect.objectContaining({
      title: 'Test Product',
      description: 'desc',
      price: { ammount: 100, currency: 'INR' },
      images: expect.any(Array),
    })
  );
  expect(res.body).toHaveProperty('_id', 'prod123');
});
