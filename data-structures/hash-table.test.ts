import HashTable from './hash-table';
import { assert, assertArray } from '../testing';

const hashTable = new HashTable(5);
hashTable.set('key1', 1);
hashTable.set('key2', 2);
hashTable.set('key3', 3);
assertArray(['key1', 'key2', 'key3'], hashTable.keys(), 'Check keys', true);
assert(1, hashTable.get('key1'), 'Check key1');
assert(2, hashTable.get('key2'), 'Check key2');
assert(3, hashTable.get('key3'), 'Check key3');
hashTable.set('key4', 4);
hashTable.set('key5', 5);
hashTable.set('key6', 6);
assert(5, hashTable.get('key5'), 'Check key5');
assert(6, hashTable.get('key6'), 'Check key6');
assertArray(['key1', 'key2', 'key3', 'key4', 'key5', 'key6'], hashTable.keys(), 'Check keys after collision', true);

hashTable.remove('key1');
assert(undefined, hashTable.get('key1'), 'Check key1 after remove');
hashTable.remove('key2');
assert(undefined, hashTable.get('key2'), 'Check key2 after remove');

assertArray(['key3', 'key4', 'key5', 'key6'], hashTable.keys(), 'Check keys after remove', true);

hashTable.set('key3', 0);
assert(0, hashTable.get('key3'), 'Check key3 after update');
