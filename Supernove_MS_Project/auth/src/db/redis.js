// Required items:-
const { Redis } = require("ioredis");

// During tests we avoid creating a real Redis connection to prevent
// network I/O and background timers that keep Jest from exiting.
if (process.env.NODE_ENV === "test") {
  const noopAsync = async () => {};
  const dummy = {
    set: noopAsync,
    get: async () => null,
    del: noopAsync,
    quit: noopAsync,
    disconnect: noopAsync,
    on: () => {},
  };

  module.exports = dummy;
} else {
  // Redis required environmental variables:-
  const redis = new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
  });

  // Setup connection to redis:-
  redis.on("connect", () => {
    console.log("Connecteded to Redis.");
  });

  module.exports = redis;
}
