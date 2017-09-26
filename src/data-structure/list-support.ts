import { List, Cons, nil } from './lists';

function setHead<T>(list: List<T>, head: T): List<T> {
  if (list.isNil) {
    throw new Error('Cannot set head to nil.')
  }
  return new Cons(head, list.tail);
}

function drop<T>(list: List<T>, n: number): List<T> {
  return (n === 0 || list.isNil) ? list : drop(list.tail, n - 1);
}

function dropWhile<T>(list: List<T>, condition: ((e: T) => boolean)): List<T> {
  return (list.isNil || !condition(list.head)) ? list : dropWhile(list.tail, condition);
}

function append<T>(list1: List<T>, list2: List<T>): List<T> {
  return list1.isNil ? list2 : new Cons(list1.head, append(list1.tail, list2));
}

function init<T>(list: List<T>): List<T> {
  if (list.isNil) {
    throw new Error('Cannot get init of nil.');
  }
  return list.tail.isNil ? nil : new Cons(list.head, init(list.tail));
}

function foldRight<T, S>(list: List<T>, z: S, f: ((e: T, z: S) => S)): S {
  return list.isNil ? z : f(list.head, foldRight(list.tail, z, f));
}

function sum(numbers: List<number>): number {
  // TODO implement the method by foldRight
  throw new Error('Method is unimplemented.');
}

function product(numbers: List<number>): number {
  // TODO implement the method by foldRight
  throw new Error('Method is unimplemented.');
}

function length(numbers: List<number>): number {
  // TODO implement the method by foldRight
  throw new Error('Method is unimplemented.');
}

function foldLeft<T, S>(list: List<T>, z: S, f: ((z: S, e: T) => S)): S {
  // TODO implement the method
  throw new Error('Method is unimplemented.');
}

// TODO reimplement method sum by foldLeft.
// TODO reimplement method product by foldLeft.
// TODO reimplement method length by foldLeft.
// TODO * reimplement method foldRight by foldLeft.
// TODO reimplement method append either by foldLeft or foldRight.

function reverse<T>(list: List<T>): List<T> {
  // TODO implement the method either by foldLeft or foldRight.
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
  length,
  reverse,
};

