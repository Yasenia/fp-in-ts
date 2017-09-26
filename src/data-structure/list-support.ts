import { List, Cons, nil } from './lists';

function sum(numbers: List<number>): number {
  return numbers.isNil ? 0 : numbers.head + sum(numbers.tail);
}

function product(numbers: List<number>): number {
  // TODO implement the method
  throw new Error('Method is unimplemented.');
}

function setHead<T>(list: List<T>, head: T): List<T> {
  // TODO implement the method
  throw new Error('Method is unimplemented.');
}

function drop<T>(list: List<T>, n: number): List<T> {
  // TODO implement the method
  throw new Error('Method is unimplemented.');
}

function dropWhile<T>(list: List<T>, condition: ((e: T) => boolean)): List<T> {
  // TODO implement the method
  throw new Error('Method is unimplemented.');
}

function append<T>(list1: List<T>, list2: List<T>): List<T> {
  // TODO implement the method
  throw new Error('Method is unimplemented.');
}

function init<T>(list: List<T>): List<T> {
  // TODO implement the method
  throw new Error('Method is unimplemented.');
}

export {
  sum,
  product,
  setHead,
  drop,
  dropWhile,
  append,
  init,
};

