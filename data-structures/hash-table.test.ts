import HashTable from './hash-table';

describe('Hash Table', () => {
  it('should set keys', () => {
    const hashTable = new HashTable(5);
    hashTable.set('key1', 1);
    hashTable.set('key2', 2);
    hashTable.set('key3', 3);
    expect(3).toEqual(hashTable.keys().length);
  });

  it('should set keys with collision', () => {
    const hashTable = new HashTable(5);
    hashTable.set('key1', 1);
    hashTable.set('key2', 2);
    hashTable.set('key3', 3);
    hashTable.set('key4', 4);
    hashTable.set('key5', 5);
    hashTable.set('key6', 6);

    expect(6).toEqual(hashTable.keys().length);
    expect(6).toEqual(hashTable.get('key6'));
  });

  it('should update key', () => {
    const hashTable = new HashTable(5);
    hashTable.set('key1', 1);
    hashTable.set('key2', 2);
    hashTable.set('key3', 3);

    hashTable.set('key3', 0);

    expect(3).toEqual(hashTable.keys().length);
    expect(0).toEqual(hashTable.get('key3'));
  });

  it('should remove key', () => {
    const hashTable = new HashTable(5);
    hashTable.set('key1', 1);
    hashTable.set('key2', 2);
    hashTable.set('key3', 3);

    hashTable.remove('key1');

    expect(2).toEqual(hashTable.keys().length);
    expect(undefined).toEqual(hashTable.get('key1'));
  });
});
