import Redis from 'ioredis';


export  function createRedisInstance( ) {
    const url = process.env.REDIS_URL as string
    let client = new Redis(url);
    client.on("error", function(err) {
        throw err;
      });
    return client
}