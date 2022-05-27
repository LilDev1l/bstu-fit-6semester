const redis = require('redis');
const {optionsForRedis} = require('./config');

(async () => {
    const client = redis.createClient(optionsForRedis);

    client.on('error', (err) => { console.log('error' + err) });
    client.on('ready', () => { console.log('ready')});
    client.on('connect', () => { console.log('connect') });
    client.on('end', () => { console.log('end') });

    await client.connect();

    await client.set('test', JSON.stringify({test: 'test'}));

    console.log(await client.get('test'));

    await client.quit();
})();