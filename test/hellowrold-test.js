/**
 * Created by Answer1215 on 9/16/2015.
 */

import asset from 'assert';
import helloWorld from '../src/scripts/helloworld';

describe('helloWorld', () => {
    describe('#init()', () => {
        it('should return a string hello world', () => {
            asset.equal(helloWorld.init(), 'hello world');
        });
    });

    describe('#returnEven()', () => {
        it('should return a even number', () => {
            asset.equal(helloWorld.returnEven() % 2, 0);
        });
    });
});