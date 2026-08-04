const request = require("supertest");
const app = require("../src/app");

jest.mock("../src/db/redis", () => ({
  set: jest.fn(),
}));

const redis = require("../src/db/redis");

describe("GET /api/auth/logout", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should logout user successfully", async () => {
    redis.set.mockResolvedValue("OK");

    const res = await request(app)
      .get("/api/auth/logout")
      .set("Cookie", ["token=test-token"]);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User logout successfully.");
  });

  it("should blacklist the token in redis", async () => {
    redis.set.mockResolvedValue("OK");

    await request(app)
      .get("/api/auth/logout")
      .set("Cookie", ["token=test-token"]);

    expect(redis.set).toHaveBeenCalledWith(
      "Blacklist:test-token",
      "true",
      "EX",
      24 * 60 * 60
    );
  });

  it("should return 500 if redis throws an error", async () => {
    redis.set.mockRejectedValue(new Error("Redis Error"));

    const res = await request(app)
      .get("/api/auth/logout")
      .set("Cookie", ["token=test-token"]);

    expect(res.statusCode).toBe(500);
    expect(res.body.message).toBe("Redis Error");
  });
});
