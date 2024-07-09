export var farewellPlugin = function(base) {
    base.farewell = function farewellPlugin() {
        console.log('Farewell, Node user!');
    };
    return base;
};
