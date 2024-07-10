function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
export var Controller = /*#__PURE__*/ function() {
    "use strict";
    function Controller() {
        _class_call_check(this, Controller);
        _define_property(this, "_middlewares", []);
    }
    _create_class(Controller, [
        {
            key: "extend",
            value: function extend(middleware) {
                this._middlewares.push(middleware);
                return Object.assign(new Controller(), this);
            }
        },
        {
            key: "build",
            value: function build(executeFn) {
                var _this = this;
                return function() {
                    var _ref = _async_to_generator(function(req, res, next) {
                        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, middleware, err;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        6,
                                        7,
                                        8
                                    ]);
                                    _iterator = _this._middlewares[Symbol.iterator]();
                                    _state.label = 2;
                                case 2:
                                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                        3,
                                        5
                                    ];
                                    middleware = _step.value;
                                    return [
                                        4,
                                        middleware.executeFn({
                                            req: req,
                                            res: res,
                                            next: next
                                        })
                                    ];
                                case 3:
                                    _state.sent();
                                    _state.label = 4;
                                case 4:
                                    _iteratorNormalCompletion = true;
                                    return [
                                        3,
                                        2
                                    ];
                                case 5:
                                    return [
                                        3,
                                        8
                                    ];
                                case 6:
                                    err = _state.sent();
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                    return [
                                        3,
                                        8
                                    ];
                                case 7:
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                    return [
                                        7
                                    ];
                                case 8:
                                    return [
                                        4,
                                        executeFn({
                                            req: req,
                                            res: res,
                                            next: next
                                        })
                                    ];
                                case 9:
                                    _state.sent();
                                    try {} catch (err) {
                                        return [
                                            2,
                                            res.status(500).json({
                                                message: err.message
                                            })
                                        ];
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(req, res, next) {
                        return _ref.apply(this, arguments);
                    };
                }();
            }
        }
    ]);
    return Controller;
}();
