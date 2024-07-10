export var redisMiddleware = function(executeFn) {
    return {
        executeFn: executeFn
    };
};
