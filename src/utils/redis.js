import redis from 'redis'
import config from '../config';

const client = redis.createClient(config.redis);

client.on('connect', function (err) {
  console.log('Client has connected to Redis');
});

client.on('error', function (err) {
  console.log('An error occured ' + err);
});

export default { client };
