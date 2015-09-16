/**
 * Created by Answer1215 on 9/16/2015.
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _srcScriptsHelloworld = require('../src/scripts/helloworld');

var _srcScriptsHelloworld2 = _interopRequireDefault(_srcScriptsHelloworld);

describe('helloWorld', function () {
    describe('#init()', function () {
        it('should return a string hello world', function () {
            _assert2['default'].equal(_srcScriptsHelloworld2['default'].init(), 'hello world');
        });
    });

    describe('#returnEven()', function () {
        it('should return a even number', function () {
            _assert2['default'].equal(_srcScriptsHelloworld2['default'].returnEven() % 2, 0);
        });
    });
});

//# sourceMappingURL=hellowrold-test-compiled.js.map