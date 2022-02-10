const redis = require('redis');
const {optionsForRedis} = require('./config');

(async () => {
    const client = redis.createClient(optionsForRedis);

    client.on('error', (err) => { console.log('error' + err) });
    client.on('ready', () => { console.log('ready')});
    client.on('connect', () => { console.log('connect') });
    client.on('end', () => { console.log('end') });

    await client.connect();

    console.time('set time');
    for (let i = 0; i < 10; i++) {
        await client.set(i, `set${i}`);
    }
    console.timeEnd('set time');

    console.time('get time');
    for (let i = 0; i < 10; i++) {
        await client.get(i);
    }
    console.timeEnd('get time');

    console.time('del time');
    for (let i = 0; i < 10; i++) {
        await client.del(i);
    }
    console.timeEnd('del time');

    await client.quit();
})();