export var validationMiddleware = function(executeFn) {
    return {
        executeFn: executeFn
    };
};
