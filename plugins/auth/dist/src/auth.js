export var authPlugin = function(base) {
    base.withAuth = function authPlugin() {
        console.log('Auth plugin!');
    };
    return base;
};
