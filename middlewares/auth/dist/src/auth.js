export var authMiddleware = function(executeFn) {
    return {
        executeFn: executeFn
    };
};
