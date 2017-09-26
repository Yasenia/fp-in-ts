import { List, Cons, nil } from './lists';

function sum(numbers: List<number>): number {
  return numbers.isNil ? 0 : numbers.head + sum(numbers.tail);
}

function product(numbers: List<number>): number {
  return numbers.isNil ? 1 : numbers.head * product(numbers.tail);
}

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

export {
  sum,
  product,
  setHead,
  drop,
  dropWhile,
  append,
  init,
};

