export var redisPlugin = function(base) {
    base.withRedis = function redisPlugin() {
        console.log('Redis Plugin!');
    };
    return base;
};
