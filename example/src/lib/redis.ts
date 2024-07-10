import Redis from 'ioredis';

const REDIS_URL = process.env['REDIS_URL'];
if (!REDIS_URL || REDIS_URL === '') {
  throw new Error('REDIS_URL is not set');
}

export const redis = new Redis(REDIS_URL, {
  keyPrefix: 'express-controller-demo::',
});
