import 'mocha';
import { expect } from 'chai';
import * as Lists from './lists';
import * as ListSupport from './list-support';

describe('ListSupport', () => {

  describe('#sum: ', () => {
    it('sum of nil should be 0', () => {
      expect(ListSupport.sum(Lists.nil)).to.equal(0);
    });
    it('sum of [1, 2, 3, 4, 5] should be 15', () => {
      expect(ListSupport.sum(Lists.asList(1, 2, 3, 4, 5))).to.equal(15);
    });
  });

  describe('#product: ', () => {
    it('product of nil should be 1', () => {
      expect(ListSupport.product(Lists.nil)).to.equal(1);
    });
    it('product of [1, 2, 3, 4, 5] should be 120', () => {
      expect(ListSupport.product(Lists.asList(1, 2, 3, 4, 5))).to.equal(120);
    });
    it('product of [-2, -1, 0, 1, 2] should be 0', () => {
      expect(ListSupport.product(Lists.asList(-2, -1, 0, 1, 2))).to.equal(0);
    });
  });

  describe('#setHead: ', () => {
    it('should return [42, 2, 3, 4, 5] if set 42 as head of [1, 2, 3, 4, 5]', () => {
      expect(Lists.equal(
        ListSupport.setHead(Lists.asList(1, 2, 3, 4, 5), 42), 
        Lists.asList(42, 2, 3, 4, 5)
      )).to.true;
    });
    it('should throw error if set head 42 to nil', () => {
      expect(() => ListSupport.setHead(Lists.nil, 42)).to.throw()
    });
  });

  describe('#drop: ', () => {
    it('should return [3, 4, 5] if drop 2 elements of [1, 2, 3, 4, 5]', () => {
      expect(Lists.equal(
        ListSupport.drop(Lists.asList(1, 2, 3, 4, 5), 2),
        Lists.asList(3, 4, 5)
      )).to.true;
    });
    it('should return nil if drop 6 elements of [1, 2, 3, 4, 5]', () => {
      expect(ListSupport.drop(Lists.asList(1, 2, 3, 4, 5), 6).isNil).to.true;
    });
  });

  describe('#dropWhile: ', () => {
    it('should return [3, 4, 5] if drop elements while less than 3 of [1, 2, 3, 4, 5]', () => {
      expect(Lists.equal(
        ListSupport.dropWhile(Lists.asList(1, 2, 3, 4, 5), i => i < 3),
        Lists.asList(3, 4, 5)
      )).to.true;
    });
    it('should return nil if drop elements while less than 6 of [1, 2, 3, 4, 5]', () => {
      expect(ListSupport.dropWhile(Lists.asList(1, 2, 3, 4, 5), i => i < 6).isNil).to.true;
    });
  });

  describe('#append: ', () => {
    it('should return [1, 2, 3, 4, 5] if append [3, 4, 5] to [1, 2]', () => {
      expect(Lists.equal(
        ListSupport.append(Lists.asList(1, 2), Lists.asList(3, 4, 5)),
        Lists.asList(1, 2, 3, 4, 5)
      )).to.true;
    });
    it('should return [1, 2, 3] if append [1, 2, 3] to nil', () => {
      expect(Lists.equal(
        ListSupport.append(Lists.nil, Lists.asList(1, 2, 3)),
        Lists.asList(1, 2, 3)
      )).to.true;
    });
  });

  describe('#init: ', () => {
    it('should return [1, 2, 3, 4] if get init of [1, 2, 3, 4, 5]', () => {
      expect(Lists.equal(
        ListSupport.init(Lists.asList(1, 2, 3, 4, 5)),
        Lists.asList(1, 2, 3, 4)
      )).to.true;
    });
    it('should throw error if get init of nil', () => {
      expect(() => ListSupport.init(Lists.nil)).to.throw()
    });
  });

});

