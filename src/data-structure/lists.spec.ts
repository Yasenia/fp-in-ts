import 'mocha';
import { expect } from 'chai';
import * as Lists from './lists';

describe('List', () => {

  describe('#isNil: ', () => {
    it('nil should be nil', () => {
      expect(Lists.nil.isNil).to.true;
    });
    it('[1, 2, 3, 4, 5] should not be nil', () => {
      expect(Lists.asList(1, 2, 3, 4, 5).isNil).to.false;
    });
    it('["Hello", "world"] should not be nil', () => {
      expect(Lists.asList('Hello', 'world').isNil).to.false;
    });
  });

  describe('#head', () => {
    it('head of nil should be undefined', () => {
      expect(Lists.nil.head).to.undefined;
    });
    it('head of [1, 2, 3, 4, 5] should be 1', () => {
      expect(Lists.asList(1, 2, 3, 4, 5).head).to.equal(1);
    });
    it('head of ["Hello", "world"] should be "Hello"', () => {
      expect(Lists.asList('Hello', 'world').head).to.equal('Hello');
    });
  });
  
  describe('#tail', () => {
    it('tail of nil should be undefined', () => {
      expect(Lists.nil.tail).to.undefined;
    });
    it('tail of ["onlyItem"] should be nil', () => {
      expect(Lists.asList('onlyItem').tail.isNil).to.true;
    });
    it('tail of ["Hello", "world"] should not be ["world"]', () => {
      expect(Lists.equal(
        Lists.asList('Hello', 'world').tail, 
        Lists.asList('world')
      )).to.true;
    });
  });

});

