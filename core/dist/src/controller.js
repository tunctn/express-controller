function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
export var Controller = /*#__PURE__*/ function() {
    "use strict";
    function Controller() {
        _class_call_check(this, Controller);
    }
    _create_class(Controller, [
        {
            key: "build",
            value: function build() {
                console.log('Controller!');
            }
        },
        {
            key: "extend",
            value: function extend(plugins) {
                var _this = this;
                plugins.forEach(function(plugin) {
                    plugin(_this);
                });
                return this;
            }
        }
    ]);
    return Controller;
}();
