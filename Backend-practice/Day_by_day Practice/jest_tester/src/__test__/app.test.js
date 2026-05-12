const request = require("supertest");
const app = require("../app");


describe("GET /", () => {
  it("It should return 200 and Hello world", async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Hello world");
  })
})


describe("/POST /api/auth/register", () => {
  it("It should return 201 and retur user with some data", async () => {
    const res = await request(app).post('/api/auth/register').send({
      username: "metarun",
      email: "metannu@yahoo.com",
      password: "123456",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("username","metarun");
    expect(res.body.user).toHaveProperty("email","metannu@yahoo.com");
  })
})

