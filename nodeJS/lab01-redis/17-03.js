const redis = require('redis');
const {optionsForRedis} = require('./config');

(async () => {
    const client = redis.createClient(optionsForRedis);

    client.on('error', (err) => { console.log('error' + err) });
    client.on('ready', () => { console.log('ready')});
    client.on('connect', () => { console.log('connect') });
    client.on('end', () => { console.log('end') });

    await client.connect();
    await client.set('count', 0);

    console.time('incr time');
    for (let i = 0; i < 10000; i++) {
        client.incr('count');
    }
    console.timeEnd('incr time');
    console.log(`count after incr: ${await client.get('count')}`);

    console.time('decr time');
    for (let i = 0; i < 10000; i++) {
        client.decr('count');
    }
    console.timeEnd('decr time');
    console.log(`count after decr: ${await client.get('count')}`);

    await client.quit();
})();