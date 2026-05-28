// Provide a test-friendly in-memory Redis fallback to avoid using
// production Redis when running tests (NODE_ENV === 'test').
const createMockRedis = () => {
  const store = new Map();
  return {
    set: (key, value, ...args) => {
      // Support signature: set(key, value, 'EX', seconds) or 'PX'
      store.set(key, value);
      if (args.length >= 2 && (args[0] === 'EX' || args[0] === 'PX')) {
        const seconds = args[0] === 'EX' ? Number(args[1]) : Number(args[1]) / 1000;
        const t = setTimeout(() => store.delete(key), seconds * 1000);
        if (t && typeof t.unref === 'function') t.unref();
      }
      return Promise.resolve('OK');
    },
    get: (key) => Promise.resolve(store.has(key) ? store.get(key) : null),
    del: (key) => {
      const existed = store.delete(key) ? 1 : 0;
      return Promise.resolve(existed);
    },
    on: () => {},
    quit: () => Promise.resolve(),
  };
};

let redisClient;

if (process.env.NODE_ENV === 'test' || process.env.USE_REDIS_MOCK === 'true') {
  // Use in-memory mock during tests to avoid external connections
  redisClient = createMockRedis();
} else {
  // Try to create a real Redis client if available
  try {
    const { Redis } = require('ioredis');
    redisClient = new Redis({
      host: process.env.HOST,
      port: process.env.PORT,
      password: process.env.PASSWORD,
    });
    redisClient.on('connect', () => {
      console.log('Connected to Redis successfully.');
    });
  } catch (err) {
    console.warn('ioredis not available; falling back to in-memory mock for Redis.', err && err.message);
    redisClient = createMockRedis();
  }
}

module.exports = redisClient;
