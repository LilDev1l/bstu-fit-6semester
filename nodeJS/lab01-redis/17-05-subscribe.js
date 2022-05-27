const redis = require('redis');
const {optionsForRedis} = require('./config');

(async () => {
    const client = redis.createClient(optionsForRedis);
    await client.connect();

    client.pSubscribe('channel*', (message, channel) => { console.log('sub channel: ' + channel + ': ' + message) });

    setTimeout(() => {
        client.unsubscribe();
        client.quit();
    }, 10_000);
})();

