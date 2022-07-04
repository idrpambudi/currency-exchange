import { createClient }  from 'redis';

const redisURL = process.env.REDIS_URL || "redis://default:HiyzEfKXqSkNjSM1ajtc@containers-us-west-53.railway.app:7332";

export const setupCache = async () => {
  const client = createClient({url: redisURL});
  await client.connect();
  return client;
}
