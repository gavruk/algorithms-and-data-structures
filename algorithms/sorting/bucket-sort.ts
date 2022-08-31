/*
 * Time Complexity: O(N logN)
 * Auxiliary Space: O(N + K)
 */

const K = 5;

export function sort(arr: number[]): number[] {
  const shift = Math.min(...arr);
  const maxValue = Math.max(...arr) - shift;

  const buckets: number[][] = [];
  for (let i = 0; i < K; i++) {
    buckets[i] = new Array();
  }

  let bucketSize = Math.ceil(maxValue / K);
  if (bucketSize < 1) {
    bucketSize = 1;
  }

  for (let elem of arr) {
    const index = Math.round((elem - shift) / bucketSize);
    if (index === K) {
      buckets[K - 1].push(elem);
    } else {
      buckets[index].push(elem);
    }
  }
  
  const data = [];
  for (let i = 0; i < buckets.length; i++) {
    data.push(...buckets[i].sort((a, b) => a - b));
  }

  return data;
}
