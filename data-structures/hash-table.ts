/*
 * get: O(1) -> O(N)
 * set: O(1)
 * remove: O(1) -> O(N)
 * keys: O(N)
 */

type Bucket<T> = [string, T];

export default class HashTable<T> {
  private data: Bucket<T>[][];

  constructor(size: number) {
    this.data = new Array(size);
  }

  private _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key: string, value: T): void {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    const bucket = this.data[address];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }

  get(key: string): T | undefined {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (!bucket) {
      return undefined;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  remove(key: string): void {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (!bucket) {
      return;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        for (let j = i; j < bucket.length - 1; j++) {
          bucket[j] = bucket[j + 1];
        }
        bucket.length -= 1;
        break;
      }
    }
  }

  keys(): string[] {
    let keys: string[] = [];
    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i]) {
        continue;
      }
      for (let j = 0; j < this.data[i].length; j++) {
        keys.push(this.data[i][j][0]);
      }
    }
    return keys;
  }
}
