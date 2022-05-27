const redis = require('redis');
const {optionsForRedis} = require('./config');

(async () => {
    const client = redis.createClient(optionsForRedis);

    client.on('error', (err) => { console.log('error' + err) });
    client.on('ready', () => { console.log('ready')});
    client.on('connect', () => { console.log('connect') });
    client.on('end', () => { console.log('end') });

    await client.connect();

    console.time('hSet time');
    for (let i = 0; i < 10000; i++) {
        client.hSet('key', i, JSON.stringify({id: i, val: `val-${i}`}));
    }
    console.timeEnd('hSet time');

    console.time('hGet time');
    for (let i = 0; i < 10000; i++) {
        client.hGet('key', i);
    }
    console.timeEnd('hGet time');

    console.log(`example: ${await client.hGet('key', 1)}`);
    await client.quit();
})();