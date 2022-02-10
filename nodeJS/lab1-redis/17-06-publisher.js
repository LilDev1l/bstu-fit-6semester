const redis = require('redis');
const {optionsForRedis} = require('./config');

(async () => {
    const client = redis.createClient(optionsForRedis);
    await client.connect();

    client.publish('channel-01', 'from pub-client message 1');
    client.publish('channel-01', 'from pub-client message 2');

    setTimeout(() => { client.publish('channel-01', 'from pub-client message 3') }, 1000);
    setTimeout(() => { client.publish('channel-01', 'from pub-client message 4') }, 2000);
    setTimeout(() => { client.publish('channel-01', 'from pub-client message 5') }, 3000);
    setTimeout(() => { client.publish('channel-01', 'from pub-client message 6') }, 4000);

    setTimeout(() => client.quit(), 6000);
})();